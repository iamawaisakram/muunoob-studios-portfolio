'use client'

import { useEffect, useRef, memo } from 'react'

interface ScrollParallaxProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
}

function ScrollParallax({
  className,
  color1 = '#62c3a4',
  color2 = '#3b7562',
  color3 = '#c8e6d8',
}: ScrollParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement[]>([])
  const scrollRef = useRef(0)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating shapes
    const shapes = [
      { size: 300, x: -5, y: 10, depth: 0.1, color: color1, opacity: 0.08 },
      { size: 250, x: 85, y: 20, depth: 0.15, color: color2, opacity: 0.06 },
      { size: 200, x: 10, y: 40, depth: 0.2, color: color3, opacity: 0.1 },
      { size: 180, x: 75, y: 55, depth: 0.12, color: color1, opacity: 0.07 },
      { size: 150, x: 50, y: 75, depth: 0.25, color: color2, opacity: 0.08 },
      { size: 220, x: 20, y: 85, depth: 0.18, color: color3, opacity: 0.06 },
    ]

    const container = containerRef.current
    shapesRef.current = []

    shapes.forEach((shape) => {
      const el = document.createElement('div')
      el.style.cssText = `
        position: absolute;
        width: ${shape.size}px;
        height: ${shape.size}px;
        left: ${shape.x}%;
        top: ${shape.y}%;
        background: radial-gradient(circle, ${shape.color} 0%, transparent 70%);
        opacity: ${shape.opacity};
        border-radius: 50%;
        pointer-events: none;
        will-change: transform;
      `
      el.dataset.depth = shape.depth.toString()
      el.dataset.baseY = shape.y.toString()
      container.appendChild(el)
      shapesRef.current.push(el)
    })

    // Scroll handler
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      const scrollProgress = scrollRef.current / (document.documentElement.scrollHeight - window.innerHeight)

      shapesRef.current.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '0.1')
        const translateY = scrollProgress * depth * -500
        const floatY = Math.sin(Date.now() * 0.001 + depth * 10) * 10
        el.style.transform = `translateY(${translateY + floatY}px)`
      })
    }

    animate()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(frameIdRef.current)
      shapesRef.current.forEach((el) => el.remove())
    }
  }, [color1, color2, color3])

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className || ''}`}
    />
  )
}

export default memo(ScrollParallax)
