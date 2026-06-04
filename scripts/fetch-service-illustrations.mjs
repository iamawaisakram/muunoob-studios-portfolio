// One-off helper: download popsy illustrations for every service sub-page and
// convert them to local WebP files in public/services/illustrations/.
//
// Why: the service data used to hot-link https://illustrations.popsy.co/amber/*.svg,
// but (a) the site CSP blocks that host so the images never rendered in-browser,
// and (b) most of those illustration names are now dead 404s upstream. Serving
// local WebP from 'self' fixes both permanently.
//
// Uses Playwright (renders the SVG) + @napi-rs/canvas (encodes WebP) — the same
// stack as scripts/capture-propertyinn.mjs. No new dependencies.
//
// Each entry has an ordered list of candidate popsy names; the FIRST one that
// returns HTTP 200 is used. The last candidate in every list is a confirmed-
// valid name, so every service always gets a real illustration.
//
// Run: node scripts/fetch-service-illustrations.mjs

import { chromium } from 'playwright'
import { createCanvas, loadImage } from '@napi-rs/canvas'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '../public/services/illustrations')
const STYLE = 'amber'
const SIZE = 1024 // final square WebP size (px)
const url = (name) => `https://illustrations.popsy.co/${STYLE}/${name}.svg`

// slug -> ordered candidate illustration names. First HTTP-200 wins; the final
// entry is always a name confirmed valid against popsy so nothing falls through.
const SERVICES = [
  // ---- Development ----
  { slug: 'website-design-development', names: ['web-design'] },
  { slug: 'web-application-development', names: ['app-launch'] },
  { slug: 'mobile-app-development', names: ['mobile-app', 'smartphone', 'app-launch'] },
  { slug: 'saas-product-development', names: ['remote-work'] },
  { slug: 'custom-software-development', names: ['software-development', 'coding', 'work-party'] },
  { slug: 'shopify-development', names: ['online-shopping'] },
  { slug: 'woocommerce-development', names: ['product-launch'] },
  { slug: 'custom-ecommerce-solutions', names: ['ecommerce', 'shopping-cart'] },
  { slug: 'payment-gateway-integration', names: ['online-payment', 'credit-card', 'payment', 'shopping-cart'] },
  { slug: 'api-development-integration', names: ['api', 'data-sync', 'server', 'engineer'] },
  { slug: 'third-party-integrations', names: ['integration', 'puzzle', 'shaking-hands'] },
  { slug: 'database-architecture', names: ['database', 'data-analytics', 'server-room', 'engineer'] },
  { slug: 'cloud-deployment-hosting', names: ['cloud-computing', 'server', 'engineer'] },
  { slug: 'website-speed-optimization', names: ['speed', 'performance', 'race-car', 'achievement'] },
  { slug: 'security-hardening', names: ['security', 'padlock', 'shield', 'engineer'] },
  { slug: 'maintenance-support', names: ['technical-support', 'maintenance', 'customer-support'] },
  { slug: 'scalability-consulting', names: ['growth-chart', 'scaling', 'consulting', 'success'] },

  // ---- Creative ----
  { slug: 'logo-brand-identity', names: ['logo-design', 'branding', 'creative-work'] },
  { slug: 'ui-ux-design', names: ['ui-design', 'ux-design', 'app-design', 'designer'] },
  { slug: 'social-media-design', names: ['social-media', 'social-network', 'graphic-design'] },
  { slug: 'ad-creatives-campaign-assets', names: ['advertising', 'marketing', 'creative-work'] },
  { slug: 'pitch-decks-presentations', names: ['presentation'] },
  { slug: 'print-packaging-design', names: ['packaging', 'print-design', 'package-delivery'] },
  { slug: 'video-editing-long-short', names: ['video-editing', 'video-production', 'freelancer'] },
  { slug: 'podcast-editing-production', names: ['podcast', 'microphone'] },
  { slug: 'social-media-reels-shorts', names: ['reels', 'short-video', 'creative-work'] },
  { slug: 'motion-graphics-animations', names: ['animation', 'motion-design', 'painting'] },
  { slug: 'youtube-content-video-editing', names: ['youtube', 'video-call'] },

  // ---- Business Analytics ----
  { slug: 'business-process-analysis', names: ['data-analysis', 'business-analysis', 'studying'] },
  { slug: 'operations-workflow-design', names: ['workflow', 'operations', 'to-do-list'] },
  { slug: 'crm-implementation', names: ['customer-support'] },
  { slug: 'hr-resource-management', names: ['teamwork', 'recruitment', 'work-party'] },
  { slug: 'property-management-systems', names: ['real-estate', 'house', 'home-office'] },
  { slug: 'event-booking-systems', names: ['booking', 'event-planning', 'calendar', 'to-do-list'] },
  { slug: 'portfolio-investment-systems', names: ['investment', 'stock-market', 'finance', 'achievement'] },
  { slug: 'digital-marketing-systems', names: ['digital-marketing', 'content-creator', 'microphone'] },
  { slug: 'revops-strategy', names: ['success'] },
  { slug: 'ai-business-automation', names: ['artificial-intelligence', 'robot', 'machine-learning', 'engineer'] },
  { slug: 'workflow-automation', names: ['automation', 'workflow', 'to-do-list'] },
  { slug: 'lowcode-nocode-development', names: ['startup', 'rocket', 'product-launch'] },
  { slug: 'custom-api-integration', names: ['api', 'network', 'integration', 'engineer'] },
  { slug: 'project-management-setup', names: ['project-management', 'task-management', 'to-do-list'] },
  { slug: 'data-analytics-dashboards', names: ['data-analytics', 'dashboard', 'statistics', 'achievement'] },
  { slug: 'sop-development-training', names: ['online-education', 'training', 'studying'] },
]

// Pick the first candidate name that exists on popsy, returning its SVG text.
async function resolveSvg(names) {
  for (const name of names) {
    const res = await fetch(url(name))
    if (res.ok) {
      const ct = res.headers.get('content-type') || ''
      if (ct.includes('svg')) return { name, svg: await res.text() }
    }
  }
  return null
}

// Render an SVG (centered, contained, transparent bg) to a square WebP buffer.
async function svgToWebp(page, svg) {
  const b64 = Buffer.from(svg).toString('base64')
  await page.setContent(
    `<!doctype html><html><head><style>
       html,body{margin:0;width:${SIZE}px;height:${SIZE}px;background:transparent}
       .wrap{width:${SIZE}px;height:${SIZE}px;display:flex;align-items:center;justify-content:center}
       .wrap img{max-width:88%;max-height:88%}
     </style></head><body>
       <div class="wrap"><img src="data:image/svg+xml;base64,${b64}"></div>
     </body></html>`,
    { waitUntil: 'networkidle' }
  )
  const png = await page.screenshot({ type: 'png', omitBackground: true })
  const img = await loadImage(png)
  const canvas = createCanvas(SIZE, SIZE)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, SIZE, SIZE)
  return canvas.encode('webp', 82)
}

async function run() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 2 })

  const missing = []
  for (const { slug, names } of SERVICES) {
    process.stdout.write(`${slug} ... `)
    const resolved = await resolveSvg(names)
    if (!resolved) {
      console.log('NO VALID CANDIDATE')
      missing.push(slug)
      continue
    }
    const webp = await svgToWebp(page, resolved.svg)
    writeFileSync(join(OUT_DIR, `${slug}.webp`), webp)
    console.log(`${resolved.name} -> ${(webp.length / 1024).toFixed(1)} KB`)
  }

  await browser.close()
  console.log(`\nDone. ${SERVICES.length - missing.length}/${SERVICES.length} written to public/services/illustrations/`)
  if (missing.length) {
    console.log(`WARNING: no valid popsy candidate for: ${missing.join(', ')}`)
    process.exit(1)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
