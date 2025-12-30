'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  opacity?: boolean
  scale?: boolean
}

export default function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  opacity = false,
  scale = false,
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const range = 100 * speed

  const yUp = useTransform(scrollYProgress, [0, 1], [range, -range])
  const yDown = useTransform(scrollYProgress, [0, 1], [-range, range])
  const xLeft = useTransform(scrollYProgress, [0, 1], [range, -range])
  const xRight = useTransform(scrollYProgress, [0, 1], [-range, range])
  const opacityValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return { y: yUp }
      case 'down':
        return { y: yDown }
      case 'left':
        return { x: xLeft }
      case 'right':
        return { x: xRight }
      default:
        return { y: yUp }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...getTransform(),
        ...(opacity ? { opacity: opacityValue } : {}),
        ...(scale ? { scale: scaleValue } : {}),
      }}
    >
      {children}
    </motion.div>
  )
}
