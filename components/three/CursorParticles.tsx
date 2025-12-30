'use client'

import { useEffect, useRef, memo } from 'react'

interface CursorParticlesProps {
  className?: string
  color1?: string
  color2?: string
  particleCount?: number
}

function CursorParticles({
  className,
  color1 = '#62c3a4',
  color2 = '#3b7562',
  particleCount = 30,
}: CursorParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
    alpha: number
  }>>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    // Skip on mobile
    if (window.innerWidth < 768) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize particles
    const colors = [color1, color2]
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.3 + Math.random() * 0.4,
    }))

    // Mouse handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Attract to mouse when close
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.02
          p.vx += dx * force * 0.01
          p.vy += dy * force * 0.01
        }

        // Apply velocity with damping
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Keep in bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha * (dist < 200 ? 0.6 + (200 - dist) / 200 * 0.4 : 0.6)
        ctx.fill()
      })

      ctx.globalAlpha = 1
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameIdRef.current)
    }
  }, [color1, color2, particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-[1] ${className || ''}`}
    />
  )
}

export default memo(CursorParticles)
