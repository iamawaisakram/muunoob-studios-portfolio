'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface GlowingRingProps {
  className?: string
  color?: string
  opacity?: number
  size?: number
  position?: 'left' | 'right' | 'center'
}

function GlowingRing({
  className,
  color = '#62c3a4',
  opacity = 0.4,
  size = 3,
  position = 'right',
}: GlowingRingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameIdRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera - adjusted for mobile
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = isMobile ? 12 : 8

    // Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Create torus (ring) - reduced segments on mobile
    const segments = isMobile ? 50 : 100
    const geometry = new THREE.TorusGeometry(size, 0.1, 16, segments)
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: opacity,
    })

    const ring = new THREE.Mesh(geometry, material)

    // Position based on prop - adjusted for mobile
    const xOffset = isMobile ? 2 : 4
    switch (position) {
      case 'left':
        ring.position.x = -xOffset
        break
      case 'right':
        ring.position.x = xOffset
        break
      default:
        ring.position.x = 0
    }

    scene.add(ring)

    // Add inner glow ring
    const innerGeometry = new THREE.TorusGeometry(size * 0.7, 0.05, 16, segments)
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: opacity * 0.5,
    })
    const innerRing = new THREE.Mesh(innerGeometry, innerMaterial)
    innerRing.position.copy(ring.position)
    scene.add(innerRing)

    // Animation with reduced frame rate on mobile
    const clock = new THREE.Clock()
    let lastTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      const currentTime = clock.getElapsedTime() * 1000
      if (currentTime - lastTime < frameInterval) return
      lastTime = currentTime

      const elapsedTime = clock.getElapsedTime()

      ring.rotation.x = elapsedTime * 0.3
      ring.rotation.y = elapsedTime * 0.2

      innerRing.rotation.x = -elapsedTime * 0.2
      innerRing.rotation.y = -elapsedTime * 0.3

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!containerRef.current) return
        const newWidth = containerRef.current.clientWidth
        const newHeight = containerRef.current.clientHeight

        camera.aspect = newWidth / newHeight
        camera.updateProjectionMatrix()
        renderer.setSize(newWidth, newHeight)
      }, 100)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(frameIdRef.current)
      geometry.dispose()
      material.dispose()
      innerGeometry.dispose()
      innerMaterial.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [color, opacity, size, position, isMobile])

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} />
}

export default memo(GlowingRing)
