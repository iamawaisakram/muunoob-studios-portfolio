'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ThemeType, getTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

interface ServiceHeroProps {
  title: string
  tagline: string
  description: string
  image?: string
  breadcrumbs?: { label: string; href: string }[]
  ctaText?: string
  ctaHref?: string
  theme?: ThemeType
}

export default function ServiceHero({
  title,
  tagline,
  description,
  image,
  breadcrumbs,
  ctaText = 'Get Started',
  ctaHref = '#contact',
  theme = 'development',
}: ServiceHeroProps) {
  const themeConfig = getTheme(theme)

  // Theme-specific classes
  const bgGradientClass = {
    development: 'bg-gradient-to-br from-light via-light-200 to-mint/20',
    analytics: 'bg-gradient-to-br from-light via-light-200 to-analytics-mint/20',
    creative: 'bg-gradient-to-br from-light via-light-200 to-creative-mint/20',
  }[theme]

  const blobPrimaryClass = {
    development: 'bg-primary/10',
    analytics: 'bg-analytics/10',
    creative: 'bg-creative/10',
  }[theme]

  const blobAccentClass = {
    development: 'bg-mint/30',
    analytics: 'bg-analytics-mint/30',
    creative: 'bg-creative-mint/30',
  }[theme]

  const radialGradientClass = {
    development: 'bg-gradient-radial from-primary/5 to-transparent',
    analytics: 'bg-gradient-radial from-analytics/5 to-transparent',
    creative: 'bg-gradient-radial from-creative/5 to-transparent',
  }[theme]

  const dotPatternClass = {
    development: 'soft-dots',
    analytics: 'soft-dots-analytics',
    creative: 'soft-dots-creative',
  }[theme]

  const primaryColorClass = {
    development: 'text-primary',
    analytics: 'text-analytics',
    creative: 'text-creative',
  }[theme]

  const badgeBgClass = {
    development: 'bg-primary/10 text-primary',
    analytics: 'bg-analytics/10 text-analytics',
    creative: 'bg-creative/10 text-creative',
  }[theme]

  const hoverColorClass = {
    development: 'hover:text-primary',
    analytics: 'hover:text-analytics',
    creative: 'hover:text-creative',
  }[theme]

  const borderColorClass = {
    development: 'border-primary/20',
    analytics: 'border-analytics/20',
    creative: 'border-creative/20',
  }[theme]

  const borderAccentClass = {
    development: 'border-mint/30',
    analytics: 'border-analytics-mint/30',
    creative: 'border-creative-mint/30',
  }[theme]

  const textGradientClass = {
    development: 'text-gradient',
    analytics: 'text-gradient-analytics',
    creative: 'text-gradient-creative',
  }[theme]

  return (
    <section className={cn("relative min-h-[70vh] overflow-hidden pt-32 pb-20", bgGradientClass)}>
      {/* Decorative elements */}
      <div className={cn("absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl", blobPrimaryClass)} />
      <div className={cn("absolute -left-40 bottom-20 h-80 w-80 rounded-full blur-3xl", blobAccentClass)} />
      <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full", radialGradientClass)} />

      {/* Dot pattern */}
      <div className={cn("absolute inset-0 opacity-50", dotPatternClass)} />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className="flex items-center gap-2 text-sm text-text-secondary">
              <li>
                <Link href="/" className={cn("transition-colors", hoverColorClass)}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-text-muted" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className={cn("font-medium", primaryColorClass)}>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className={cn("transition-colors", hoverColorClass)}>
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className={cn("inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium", badgeBgClass)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tagline}
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
              <span className={textGradientClass}>{title}</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={ctaHref} size="lg" theme={theme}>
                {ctaText}
                <ArrowRight size={20} />
              </Button>
              <Button href="#services" variant="secondary" size="lg" theme={theme}>
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          {image && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative ring */}
                <div className={cn("absolute inset-4 rounded-full border-2 border-dashed animate-spin-slow", borderColorClass)} />
                <div className={cn("absolute inset-8 rounded-full border-2 border-dashed animate-spin-slow", borderAccentClass)} style={{ animationDirection: 'reverse', animationDuration: '20s' }} />

                {/* Image container */}
                <div className="absolute inset-12 flex items-center justify-center">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
