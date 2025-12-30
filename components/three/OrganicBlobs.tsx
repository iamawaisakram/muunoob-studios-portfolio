'use client'

import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

interface OrganicBlobsProps {
  className?: string
  color1?: string
  color2?: string
  count?: number
  opacity?: number
}

function OrganicBlobs({
  className,
  color1 = '#62c3a4',
  color2 = '#c8e6d8',
  count = 5,
  opacity = 0.4,
}: OrganicBlobsProps) {
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
    camera.position.z = 12

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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const backLight = new THREE.DirectionalLight(0xffffff, 0.2)
    backLight.position.set(-5, -5, -5)
    scene.add(backLight)

    // Create organic blob shapes using icosahedron with noise deformation
    interface BlobData {
      mesh: THREE.Mesh
      originalPositions: Float32Array
      noiseOffsets: Float32Array
      userData: {
        posX: number
        posY: number
        posZ: number
        floatSpeed: number
        floatOffset: number
        morphSpeed: number
        morphAmount: number
        rotationSpeed: number
      }
    }

    const blobs: BlobData[] = []
    const colors = [new THREE.Color(color1), new THREE.Color(color2)]
    const actualCount = isMobile ? Math.min(count, 3) : count
    const detail = isMobile ? 2 : 3

    for (let i = 0; i < actualCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(1 + Math.random() * 0.5, detail)

      // Store original positions for morphing
      const positionAttribute = geometry.getAttribute('position')
      const originalPositions = new Float32Array(positionAttribute.array)
      const noiseOffsets = new Float32Array(positionAttribute.count)

      for (let j = 0; j < positionAttribute.count; j++) {
        noiseOffsets[j] = Math.random() * Math.PI * 2
      }

      const material = new THREE.MeshStandardMaterial({
        color: colors[i % 2],
        transparent: true,
        opacity: opacity * (0.6 + Math.random() * 0.4),
        roughness: 0.9,
        metalness: 0.1,
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Position blobs
      mesh.position.x = (Math.random() - 0.5) * 12
      mesh.position.y = (Math.random() - 0.5) * 8
      mesh.position.z = (Math.random() - 0.5) * 6 - 3

      const userData = {
        posX: mesh.position.x,
        posY: mesh.position.y,
        posZ: mesh.position.z,
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatOffset: Math.random() * Math.PI * 2,
        morphSpeed: 0.5 + Math.random() * 0.5,
        morphAmount: 0.15 + Math.random() * 0.1,
        rotationSpeed: 0.1 + Math.random() * 0.2,
      }

      blobs.push({ mesh, originalPositions, noiseOffsets, userData })
      scene.add(mesh)
    }

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

      blobs.forEach((blob) => {
        const { mesh, originalPositions, noiseOffsets, userData } = blob
        const geometry = mesh.geometry
        const positionAttribute = geometry.getAttribute('position')

        // Morphing effect - make blob organic looking
        for (let i = 0; i < positionAttribute.count; i++) {
          const ox = originalPositions[i * 3]
          const oy = originalPositions[i * 3 + 1]
          const oz = originalPositions[i * 3 + 2]

          // Calculate distance from center
          const length = Math.sqrt(ox * ox + oy * oy + oz * oz)

          // Apply organic morphing
          const morphOffset = Math.sin(elapsedTime * userData.morphSpeed + noiseOffsets[i]) * userData.morphAmount

          const scale = 1 + morphOffset
          positionAttribute.setXYZ(i, ox * scale, oy * scale, oz * scale)
        }

        positionAttribute.needsUpdate = true
        geometry.computeVertexNormals()

        // Floating motion
        mesh.position.x = userData.posX + Math.sin(elapsedTime * userData.floatSpeed + userData.floatOffset) * 0.5
        mesh.position.y = userData.posY + Math.sin(elapsedTime * userData.floatSpeed * 0.7 + userData.floatOffset) * 0.3

        // Slow rotation
        mesh.rotation.x += userData.rotationSpeed * 0.01
        mesh.rotation.y += userData.rotationSpeed * 0.008
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

      blobs.forEach((blob) => {
        blob.mesh.geometry.dispose()
        if (blob.mesh.material instanceof THREE.Material) {
          blob.mesh.material.dispose()
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

export default memo(OrganicBlobs)
