import { createCanvas, loadImage } from '@napi-rs/canvas'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateOGImage() {
  const width = 1200
  const height = 630

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Background gradient (matching brand colors from logo)
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#5eb89d') // Teal/mint from logo top
  gradient.addColorStop(0.5, '#4a9a82')
  gradient.addColorStop(1, '#5a7c5a') // Green from logo bottom
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  // Add subtle pattern overlay
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)'
  for (let i = 0; i < width; i += 40) {
    for (let j = 0; j < height; j += 40) {
      ctx.beginPath()
      ctx.arc(i, j, 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Load and draw logo
  try {
    const logoPath = join(__dirname, '../public/muunoob-logo.png')
    const logo = await loadImage(logoPath)

    // Draw logo on the left side
    const logoSize = 280
    const logoX = 80
    const logoY = (height - logoSize) / 2
    ctx.drawImage(logo, logoX, logoY, logoSize, logoSize)
  } catch (err) {
    console.log('Could not load logo, continuing without it:', err.message)
  }

  // Company name
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 72px Inter, system-ui, sans-serif'
  ctx.textBaseline = 'middle'
  ctx.fillText('MUUNOOB STUDIOS', 420, height / 2 - 60)

  // Tagline
  ctx.font = '36px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  ctx.fillText('Transforming Ideas Into Digital Reality', 420, height / 2 + 20)

  // Underline accent
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(420, height / 2 + 60)
  ctx.lineTo(900, height / 2 + 60)
  ctx.stroke()

  // Website URL
  ctx.font = '24px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
  ctx.fillText('www.muunoobstudios.com', 420, height / 2 + 100)

  // Save the image
  const buffer = canvas.toBuffer('image/png')
  const outputPath = join(__dirname, '../public/og-image.png')
  writeFileSync(outputPath, buffer)
  console.log('OG image generated successfully at:', outputPath)
}

generateOGImage().catch(console.error)
