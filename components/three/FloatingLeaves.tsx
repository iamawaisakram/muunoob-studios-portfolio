'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface FloatingLeavesProps {
  className?: string
  color1?: string
  color2?: string
  count?: number
  opacity?: number
}

function FloatingLeaves({
  className,
  color1 = '#62c3a4',
  color2 = '#3b7562',
  count = 20,
  opacity = 0.6,
}: FloatingLeavesProps) {
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
    camera.position.z = 15

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

    // Soft lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
    directionalLight.position.set(5, 10, 5)
    scene.add(directionalLight)

    // Create leaf shape
    const createLeafGeometry = () => {
      const shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.bezierCurveTo(0.3, 0.3, 0.3, 0.7, 0, 1)
      shape.bezierCurveTo(-0.3, 0.7, -0.3, 0.3, 0, 0)

      const extrudeSettings = {
        steps: 1,
        depth: 0.02,
        bevelEnabled: false,
      }

      return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    }

    // Create leaves
    const leaves: THREE.Mesh[] = []
    const colors = [new THREE.Color(color1), new THREE.Color(color2)]
    const actualCount = isMobile ? Math.min(count, 12) : count

    for (let i = 0; i < actualCount; i++) {
      const geometry = createLeafGeometry()
      const scale = 0.3 + Math.random() * 0.5
      geometry.scale(scale, scale, scale)

      const material = new THREE.MeshStandardMaterial({
        color: colors[i % 2],
        transparent: true,
        opacity: opacity * (0.5 + Math.random() * 0.5),
        roughness: 0.8,
        metalness: 0.1,
        side: THREE.DoubleSide,
      })

      const leaf = new THREE.Mesh(geometry, material)

      // Spread leaves across the view
      leaf.position.x = (Math.random() - 0.5) * 20
      leaf.position.y = (Math.random() - 0.5) * 15
      leaf.position.z = (Math.random() - 0.5) * 10 - 5

      // Random initial rotation
      leaf.rotation.x = Math.random() * Math.PI
      leaf.rotation.y = Math.random() * Math.PI
      leaf.rotation.z = Math.random() * Math.PI

      leaf.userData = {
        originalX: leaf.position.x,
        originalY: leaf.position.y,
        speedX: 0.1 + Math.random() * 0.2,
        speedY: 0.2 + Math.random() * 0.3,
        rotationSpeed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        swayAmount: 0.5 + Math.random() * 1,
      }

      leaves.push(leaf)
      scene.add(leaf)
    }

    // Animation
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

      leaves.forEach((leaf) => {
        const { speedX, speedY, rotationSpeed, offset, swayAmount, originalX, originalY } = leaf.userData

        // Gentle floating motion
        leaf.position.x = originalX + Math.sin(elapsedTime * speedX + offset) * swayAmount
        leaf.position.y = originalY + Math.sin(elapsedTime * speedY + offset) * swayAmount * 0.5

        // Gentle rotation
        leaf.rotation.x += rotationSpeed * 0.01
        leaf.rotation.y += rotationSpeed * 0.015
        leaf.rotation.z = Math.sin(elapsedTime * 0.5 + offset) * 0.3
      })

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

      leaves.forEach((leaf) => {
        leaf.geometry.dispose()
        if (leaf.material instanceof THREE.Material) {
          leaf.material.dispose()
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

export default memo(FloatingLeaves)
