'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'
import { ThemeType } from '@/lib/theme'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  showGrid?: boolean
}

function SectionWrapper({
  children,
  className,
  id,
  showGrid = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden px-4 py-20 md:py-32',
        showGrid && 'soft-dots',
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export default memo(SectionWrapper)

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  theme?: ThemeType
}

export const SectionHeader = memo(function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  theme = 'development',
}: SectionHeaderProps) {
  const textGradientClass = {
    development: 'text-gradient',
    analytics: 'text-gradient-analytics',
    creative: 'text-gradient-creative',
  }[theme]

  return (
    <motion.div
      className={cn('mb-16', centered && 'text-center', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
        <span className={textGradientClass}>{title}</span>
      </h2>
      {subtitle && <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">{subtitle}</p>}
    </motion.div>
  )
})
