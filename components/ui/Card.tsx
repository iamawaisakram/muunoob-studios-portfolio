'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  gradient?: boolean
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
  gradient = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white border border-light-300',
        'shadow-soft',
        hover && 'transition-all duration-500',
        glow && 'hover:border-primary/30 hover:shadow-green',
        gradient && 'bg-gradient-to-br from-white to-mint/10',
        className
      )}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

interface Card3DProps {
  children: ReactNode
  className?: string
}

export function Card3D({ children, className }: Card3DProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white border border-light-300',
        'shadow-soft',
        'perspective-1000 transform-gpu',
        className
      )}
      whileHover={{
        rotateY: 3,
        rotateX: 3,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(98, 195, 164, 0.15)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white/80 backdrop-blur-lg',
        'border border-light-300',
        'shadow-soft-lg',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
