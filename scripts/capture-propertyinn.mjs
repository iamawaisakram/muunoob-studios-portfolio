// One-off helper: capture screenshots of https://www.propertyinn.com.pk
// and convert them to optimized WebP files in public/projects/.
// Uses Playwright (already a dependency) + @napi-rs/canvas (used by generate-og-image.mjs).
// Run: node scripts/capture-propertyinn.mjs

import { chromium } from 'playwright'
import { createCanvas, loadImage } from '@napi-rs/canvas'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '../public/projects')

const BASE = 'https://www.propertyinn.com.pk'

// page path -> output filename (without extension). We capture clean
// above-the-fold viewport frames (the hero of each page). We do NOT scroll
// before capturing because the site uses scroll-triggered animations that
// fade the hero content out, leaving blank frames.
//
// `viewport` sets the browser viewport for that page; `out` forces the final
// WebP to exact pixels (cover-cropped). The card/thumbnail is produced at
// 1200x900 to match the existing *-card.webp thumbnails (e.g. clinic-bill-pro).
const VIEWPORT = { width: 1440, height: 900 }
// `scrollY` scrolls the page down (CSS px) before capturing — used to frame
// real content (advisor cards, the buying-process section) instead of the top
// headline. We then wait for the scroll-triggered in-view animation to settle.
// Section captures use a TALLER viewport so the whole section fits in one frame
// ("zoomed out"), scrolled so the section top sits just below the fixed nav
// (~96px). Layout depends on viewport WIDTH (1440) only, so taller heights don't
// reflow — section Y positions stay valid. Bounds measured from the live site.
const TARGETS = [
  { path: '/', file: 'propertyinn-card', viewport: { width: 1200, height: 900 }, out: { width: 1200, height: 900 }, ticker: true },
  // Home "Portfolio" — "Six addresses, one standard." (pinned scroll-jacking
  // carousel). Tall viewport + scroll to the project-list frame, then clip from
  // the "PORTFOLIO" title down through the project list + featured image so there
  // is no empty/nav space above the title.
  {
    path: '/', file: 'propertyinn-portfolio',
    viewport: { width: 1440, height: 900 }, scrollY: 6650, hideChrome: true,
    clip: { startRe: '^Portfolio$', imgRange: [6900, 7800], texts: ['Park View City', 'Etihad Town Phase III', 'Kuwait Mall', 'Icon Mall & Tower', 'Ravi Ratan'] },
  },
  { path: '/projects/kuwait-mall', file: 'propertyinn-projects' },
  // /team leadership cards — "Names you can call." Clip from the heading down
  // through the advisor cards; the bottom is anchored on the cards' phone numbers
  // so they aren't cut. This tight frame drops the nav bar + footer band (which
  // made the image "too tall"), giving a ~16:9 frame like the other galleries.
  // `aspect` extends the clip into the section's cream padding if the content is
  // slightly short of the target ratio — it never crops content.
  {
    path: '/team', file: 'propertyinn-team', aspect: 1.78,
    viewport: { width: 1440, height: 1340 }, scrollY: 455, hideChrome: true,
    clip: { startRe: 'Names you can', imgRange: [0, 0], texts: ['+92 322 7777566', '+92 323 0044117', '+92 344 7419992', '+92 306 7714424'] },
  },
  // Home "Partnerships · Presence · People" — "Trusted at every table." Clip from
  // the eyebrow title down through the FULL photo grid (both marquee rows, which
  // end ~1265px; cream section starts right below). Capturing the whole grid makes
  // the frame naturally ~16:9 instead of the short/wide single-row crop.
  {
    path: '/', file: 'propertyinn-partnerships', aspect: 1.78,
    viewport: { width: 1440, height: 1300 }, scrollY: 1082, hideChrome: true,
    clip: { startRe: 'Partnerships . Presence . People', imgRange: [1150, 2360], texts: [] },
  },
]

// Convert a PNG buffer to WebP. When `out` is given, the image is resized to
// exactly out.width x out.height using a centered cover crop (no distortion).
async function pngToWebp(pngBuffer, outPath, out) {
  const img = await loadImage(pngBuffer)
  const w = out ? out.width : img.width
  const h = out ? out.height : img.height
  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')
  if (out) {
    const scale = Math.max(w / img.width, h / img.height) // cover
    const dw = img.width * scale
    const dh = img.height * scale
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
  } else {
    ctx.drawImage(img, 0, 0)
  }
  const webp = await canvas.encode('webp', 82)
  writeFileSync(outPath, webp)
  return webp.length
}

async function dismissPopups(page) {
  // The site shows a "Reserve your private consultation" modal on entry,
  // but it only mounts ~2s after load — so wait for the close button to
  // actually appear, click it, then confirm the overlay is gone.
  const closeBtn = page.locator('button[aria-label="Close consultation popup"]')
  try {
    await closeBtn.waitFor({ state: 'visible', timeout: 8000 })
    await closeBtn.click({ timeout: 3000 })
    await closeBtn.waitFor({ state: 'hidden', timeout: 5000 })
  } catch {
    // No popup appeared (e.g. non-home pages) — nothing to dismiss.
  }
  // Fallback for any other modal/backdrop.
  await page.keyboard.press('Escape').catch(() => {})
  await page.waitForTimeout(400)
}

// The hero has a rotating "Live · …" ticker pill that crossfades between
// messages — it sits at full opacity ~3s, then fades to 0 over ~0.5s before the
// next message fades in. Wait until it is fully opaque so it isn't captured
// mid-fade (blank).
async function waitForTicker(page) {
  try {
    await page.waitForFunction(
      () => {
        const span = Array.from(document.querySelectorAll('span')).find((s) =>
          /Live\s*·/.test(s.textContent || '')
        )
        if (!span || !span.textContent.trim()) return false
        let el = span
        let op = 1
        while (el && el !== document.body) {
          op = Math.min(op, parseFloat(getComputedStyle(el).opacity || '1'))
          el = el.parentElement
        }
        return op > 0.95
      },
      { timeout: 10000, polling: 100 }
    )
  } catch {
    // Ticker never settled fully opaque — capture anyway.
  }
}

// Waiting for an opaque instant is racy (the screenshot can land during the next
// crossfade). After it settles, PIN it: force opacity:1 on the ticker span and
// all its ancestors via an !important rule that beats framer-motion's inline
// styles, so it can never fade out before the screenshot is taken.
async function freezeTicker(page) {
  await waitForTicker(page)
  await page.evaluate(() => {
    const span = Array.from(document.querySelectorAll('span')).find((s) =>
      /Live\s*·/.test(s.textContent || '')
    )
    if (!span) return
    const style = document.createElement('style')
    style.textContent =
      '.__ticker_pin{opacity:1 !important;transition:none !important;animation:none !important;}'
    document.head.appendChild(style)
    let el = span
    while (el && el !== document.body) {
      el.classList.add('__ticker_pin')
      el = el.parentElement
    }
  })
  await page.waitForTimeout(120)
}

// Hide the fixed top nav and the floating chat widget so a section can be
// clipped starting exactly at its title (no nav bar / empty band above).
async function hideChrome(page) {
  await page.evaluate(() => {
    const hide = (el) => el && (el.style.visibility = 'hidden')
    hide(document.querySelector('header'))
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el)
      const txt = el.textContent || ''
      // floating chat / advisor widget (fixed, bottom corner)
      if (cs.position === 'fixed' && /senior advisor/i.test(txt) && el.children.length < 8) hide(el)
    }
  })
}

// Measure, in current viewport coordinates, the top of the section title and the
// bottom of its content (images in a document-Y range + optional text rows).
async function measureClip(page, { startRe, imgRange, texts }) {
  return await page.evaluate(
    ({ startRe, imgRange, texts }) => {
      const re = new RegExp(startRe, 'i')
      const ownText = (el) =>
        Array.from(el.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim()
      const startEl = Array.from(document.querySelectorAll('*')).find((el) => {
        const o = ownText(el)
        return re.test(o) && o.length < 60
      })
      if (!startEl) return null
      const startTop = startEl.getBoundingClientRect().top
      let endBottom = startTop + 200
      for (const img of document.querySelectorAll('img')) {
        const r = img.getBoundingClientRect()
        const docY = r.top + window.scrollY
        if (r.width > 120 && r.height > 70 && docY >= imgRange[0] && docY <= imgRange[1]) {
          endBottom = Math.max(endBottom, r.bottom)
        }
      }
      for (const t of texts || []) {
        const el = Array.from(document.querySelectorAll('*')).find((e) => ownText(e) === t)
        if (el) endBottom = Math.max(endBottom, el.getBoundingClientRect().bottom)
      }
      return { startTop, endBottom }
    },
    { startRe, imgRange, texts }
  )
}

// Navigate with a couple of retries — the site occasionally drops a request
// mid-navigation (chrome-error), which would otherwise abort the whole run.
async function gotoResilient(page, url) {
  let lastErr
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
      return
    } catch {
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
        return
      } catch (err) {
        lastErr = err
        await page.waitForTimeout(1500)
      }
    }
  }
  throw lastErr
}

async function run() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()

  for (const { path, file, viewport, out, ticker, scrollY, hideChrome: chrome, clip, aspect } of TARGETS) {
    const url = BASE + path
    process.stdout.write(`Capturing ${url} -> ${file}.webp ... `)
    await page.setViewportSize(viewport || VIEWPORT)
    try {
      await gotoResilient(page, url)
    } catch (err) {
      console.log(`SKIPPED (navigation failed: ${err.message.split('\n')[0]})`)
      continue // keep any previously-captured file for this target
    }
    await dismissPopups(page) // waits for the entry popup to mount, then closes it
    await page.waitForTimeout(1500) // let hero animation settle
    if (ticker) await freezeTicker(page)
    if (scrollY) {
      // Scroll down in steps so IntersectionObserver-driven animations fire,
      // then settle on the exact target position.
      await page.evaluate(async (y) => {
        const step = 300
        for (let cur = 0; cur < y; cur += step) {
          window.scrollTo(0, cur)
          await new Promise((r) => setTimeout(r, 90))
        }
        window.scrollTo(0, y)
      }, scrollY)
      await page.waitForTimeout(2200) // let scroll-triggered in-view animations settle
    }
    if (chrome) await hideChrome(page)

    // Determine the screenshot region. For section captures, clip from the
    // title's live on-screen position down through the content (no space above).
    let clipRect
    if (clip) {
      const m = await measureClip(page, clip)
      if (m) {
        // Small top pad so the section title hugs the top edge (no empty band
        // above it); a little more at the bottom for breathing room.
        const padTop = 4
        const padBottom = 22
        const vh = page.viewportSize().height
        const top = Math.max(0, Math.round(m.startTop - padTop))
        let height = Math.ceil(m.endBottom - m.startTop + padTop + padBottom)
        // If a target aspect is given and the content is shorter than that ratio,
        // extend the clip DOWNWARD into the section's on-page padding (cream) so
        // all gallery frames share a height. This only ever adds blank section
        // space below the content — it never crops.
        if (aspect) height = Math.max(height, Math.round(1440 / aspect))
        height = Math.min(height, vh - top)
        // Only clip if the computed region is valid and on-screen.
        if (top < vh && height > 100) clipRect = { x: 0, y: top, width: 1440, height }
        else console.warn(`(clip skipped: startTop=${Math.round(m.startTop)} vh=${vh}) `)
      }
    }

    const png = await page.screenshot({ type: 'png', clip: clipRect })
    const bytes = await pngToWebp(png, join(OUT_DIR, `${file}.webp`), out)
    const dim = out ? `${out.width}x${out.height}` : clipRect ? `clip ${clipRect.width}x${clipRect.height}` : 'native'
    console.log(`${(bytes / 1024).toFixed(1)} KB (${dim})`)
  }

  await browser.close()
  console.log('\nDone. Files written to public/projects/')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
