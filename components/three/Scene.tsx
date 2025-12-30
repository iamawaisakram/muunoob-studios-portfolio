'use client'

import { useEffect, useRef, memo } from 'react'

interface SceneProps {
  variant?: 'particles' | 'blobs' | 'combined'
  className?: string
}

function Scene({ variant = 'combined', className }: SceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 25 : 50

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
    }

    const colors = ['#62c3a4', '#3b7562', '#c8e6d8']
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.2 + Math.random() * 0.3,
    }))

    // Floating blobs (CSS-like gradient circles)
    interface Blob {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      alpha: number
    }

    const blobs: Blob[] = (variant === 'blobs' || variant === 'combined') ? [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 150, color: '#62c3a4', vx: 0.2, vy: 0.15, alpha: 0.08 },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, size: 200, color: '#c8e6d8', vx: -0.15, vy: 0.2, alpha: 0.1 },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, size: 120, color: '#3b7562', vx: 0.1, vy: -0.1, alpha: 0.06 },
    ] : []

    let time = 0

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)
      time += 0.016

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw blobs first (background)
      blobs.forEach((blob) => {
        // Gentle floating motion
        blob.x += Math.sin(time * blob.vx) * 0.5
        blob.y += Math.cos(time * blob.vy) * 0.5

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size)
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalAlpha = blob.alpha
        ctx.fill()
      })

      // Draw particles
      if (variant === 'particles' || variant === 'combined') {
        particles.forEach((p) => {
          // Update position
          p.x += p.vx
          p.y += p.vy

          // Gentle wave motion
          p.y += Math.sin(time + p.x * 0.01) * 0.2

          // Wrap around edges
          if (p.x < 0) p.x = canvas.width
          if (p.x > canvas.width) p.x = 0
          if (p.y < 0) p.y = canvas.height
          if (p.y > canvas.height) p.y = 0

          // Draw
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.alpha
          ctx.fill()
        })
      }

      ctx.globalAlpha = 1
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameIdRef.current)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className={`${className || ''} absolute inset-0 z-0`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default memo(Scene)
