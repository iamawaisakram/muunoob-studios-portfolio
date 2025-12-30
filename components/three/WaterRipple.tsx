'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface WaterRippleProps {
  className?: string
  color?: string
  opacity?: number
}

function WaterRipple({ className, color = '#62c3a4', opacity = 0.2 }: WaterRippleProps) {
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

    // Camera - looking down at water surface
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 8, 10)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Create water surface
    const gridSize = 30
    const gridDivisions = isMobile ? 40 : 80
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions)
    geometry.rotateX(-Math.PI / 2)

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: opacity,
      roughness: 0.1,
      metalness: 0.3,
      side: THREE.DoubleSide,
      flatShading: true,
    })

    const water = new THREE.Mesh(geometry, material)
    water.position.y = -3
    scene.add(water)

    // Add soft lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
    directionalLight.position.set(5, 10, 5)
    scene.add(directionalLight)

    // Store original positions
    const positionAttribute = geometry.getAttribute('position')
    const originalPositions = new Float32Array(positionAttribute.array)

    // Ripple centers (random positions that create ripple effects)
    const rippleCenters = Array.from({ length: isMobile ? 2 : 4 }, () => ({
      x: (Math.random() - 0.5) * gridSize * 0.6,
      z: (Math.random() - 0.5) * gridSize * 0.6,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      amplitude: 0.2 + Math.random() * 0.3,
    }))

    // Animation
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

      // Create ripple effect
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = originalPositions[i * 3]
        const z = originalPositions[i * 3 + 2]

        let wave = 0

        // Sum waves from all ripple centers
        rippleCenters.forEach((center) => {
          const distance = Math.sqrt(Math.pow(x - center.x, 2) + Math.pow(z - center.z, 2))
          wave += Math.sin(distance * 0.8 - elapsedTime * center.speed * 2 + center.phase) * center.amplitude * Math.exp(-distance * 0.05)
        })

        // Add gentle overall wave
        wave += Math.sin(x * 0.2 + elapsedTime * 0.5) * 0.1
        wave += Math.sin(z * 0.15 + elapsedTime * 0.3) * 0.1

        positionAttribute.setY(i, originalPositions[i * 3 + 1] + wave)
      }

      positionAttribute.needsUpdate = true
      geometry.computeVertexNormals()

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
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

export default memo(WaterRipple)
