'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

// Animated section with whileInView - for scroll-triggered animations
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated div with full motion props - for initial/animate animations
interface AnimatedDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

export function AnimatedDiv({ children, ...props }: AnimatedDivProps) {
  return <motion.div {...props}>{children}</motion.div>
}

// Animated button/link with hover effects
interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  className?: string
  target?: string
  rel?: string
}

export function AnimatedButton({ children, href, className, target, rel }: AnimatedButtonProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
