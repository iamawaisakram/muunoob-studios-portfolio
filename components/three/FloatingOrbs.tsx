'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface FloatingOrbsProps {
  className?: string
  color1?: string
  color2?: string
  count?: number
  opacity?: number
}

function FloatingOrbs({
  className,
  color1 = '#62c3a4',
  color2 = '#3b7562',
  count = 5,
  opacity = 0.3,
}: FloatingOrbsProps) {
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
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 10

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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Create orbs - reduced count and segments on mobile
    const orbs: THREE.Mesh[] = []
    const colors = [new THREE.Color(color1), new THREE.Color(color2)]
    const actualCount = isMobile ? Math.min(count, 3) : count
    const segments = isMobile ? 16 : 32

    for (let i = 0; i < actualCount; i++) {
      const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 1, segments, segments)
      const material = new THREE.MeshStandardMaterial({
        color: colors[i % 2],
        transparent: true,
        opacity: opacity,
        roughness: 0.1,
        metalness: 0.9,
      })
      const orb = new THREE.Mesh(geometry, material)

      orb.position.x = (Math.random() - 0.5) * 15
      orb.position.y = (Math.random() - 0.5) * 8
      orb.position.z = (Math.random() - 0.5) * 5 - 3

      orb.userData = {
        originalY: orb.position.y,
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      }

      orbs.push(orb)
      scene.add(orb)
    }

    // Animation with frame limiting
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

      orbs.forEach((orb) => {
        orb.position.y =
          orb.userData.originalY + Math.sin(elapsedTime * orb.userData.speed + orb.userData.offset) * 0.5
        orb.rotation.x = elapsedTime * 0.1
        orb.rotation.y = elapsedTime * 0.15
      })

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

      orbs.forEach((orb) => {
        orb.geometry.dispose()
        if (orb.material instanceof THREE.Material) {
          orb.material.dispose()
        }
      })

      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [color1, color2, count, opacity, isMobile])

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} />
}

export default memo(FloatingOrbs)
