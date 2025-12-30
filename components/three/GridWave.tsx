'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface GridWaveProps {
  className?: string
  color?: string
  opacity?: number
}

function GridWave({ className, color = '#62c3a4', opacity = 0.15 }: GridWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameIdRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
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

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 5, 8)
    camera.lookAt(0, 0, 0)

    // Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Create grid plane - reduced divisions on mobile
    const gridSize = 20
    const gridDivisions = isMobile ? 15 : 30
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions)
    geometry.rotateX(-Math.PI / 2)

    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: opacity,
    })

    const plane = new THREE.Mesh(geometry, material)
    plane.position.y = -2
    scene.add(plane)

    // Store original positions
    const positionAttribute = geometry.getAttribute('position')
    const originalPositions = new Float32Array(positionAttribute.array)

    // Animation with frame limiting
    const clock = new THREE.Clock()
    let lastTime = 0
    const targetFPS = isMobile ? 24 : 60
    const frameInterval = 1000 / targetFPS

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      const currentTime = clock.getElapsedTime() * 1000
      if (currentTime - lastTime < frameInterval) return
      lastTime = currentTime

      const elapsedTime = clock.getElapsedTime()

      // Wave effect - simplified on mobile
      const waveIntensity = isMobile ? 0.2 : 0.3
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = originalPositions[i * 3]
        const z = originalPositions[i * 3 + 2]

        const wave =
          Math.sin(x * 0.5 + elapsedTime) * waveIntensity +
          Math.sin(z * 0.5 + elapsedTime * 0.8) * waveIntensity

        positionAttribute.setY(i, originalPositions[i * 3 + 1] + wave)
      }

      positionAttribute.needsUpdate = true

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
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [color, opacity, isMobile])

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} />
}

export default memo(GridWave)
