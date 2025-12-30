'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface ServiceHeroProps {
  title: string
  tagline: string
  description: string
  image?: string
  breadcrumbs?: { label: string; href: string }[]
  ctaText?: string
  ctaHref?: string
}

export default function ServiceHero({
  title,
  tagline,
  description,
  image,
  breadcrumbs,
  ctaText = 'Get Started',
  ctaHref = '#contact',
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-light via-light-200 to-mint/20 pt-32 pb-20">
      {/* Decorative elements */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary/5 to-transparent" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 soft-dots opacity-50" />

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
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-text-muted" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
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
              className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tagline}
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient">{title}</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={ctaHref} size="lg">
                {ctaText}
                <ArrowRight size={20} />
              </Button>
              <Button href="#services" variant="secondary" size="lg">
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
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-mint/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
                
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

