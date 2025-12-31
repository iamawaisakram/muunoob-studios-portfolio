'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { SubService } from '@/lib/services'
import { ThemeType } from '@/lib/theme'
import { cn } from '@/lib/utils'

interface SubServiceGridProps {
  title?: string
  subtitle?: string
  serviceSlug: string
  subCategories: {
    name: string
    services: SubService[]
  }[]
  theme?: ThemeType
}

export default function SubServiceGrid({
  title = "Our Services",
  subtitle = "Explore our comprehensive range of solutions",
  serviceSlug,
  subCategories,
  theme = 'development',
}: SubServiceGridProps) {
  // Theme-specific classes
  const headerGradientClass = {
    development: 'bg-gradient-to-r from-primary to-secondary',
    analytics: 'bg-gradient-to-r from-analytics to-analytics-secondary',
    creative: 'bg-gradient-to-r from-creative to-creative-secondary',
  }[theme]

  const cardHoverGradientClass = {
    development: 'bg-gradient-to-br from-primary/5 via-transparent to-mint/10',
    analytics: 'bg-gradient-to-br from-analytics/5 via-transparent to-analytics-mint/10',
    creative: 'bg-gradient-to-br from-creative/5 via-transparent to-creative-mint/10',
  }[theme]

  const cornerDecorationClass = {
    development: 'bg-primary/5 group-hover:bg-primary/10',
    analytics: 'bg-analytics/5 group-hover:bg-analytics/10',
    creative: 'bg-creative/5 group-hover:bg-creative/10',
  }[theme]

  const iconBgClass = {
    development: 'bg-gradient-to-br from-primary/10 to-mint/20',
    analytics: 'bg-gradient-to-br from-analytics/10 to-analytics-mint/20',
    creative: 'bg-gradient-to-br from-creative/10 to-creative-mint/20',
  }[theme]

  const iconInnerClass = {
    development: 'bg-primary/20',
    analytics: 'bg-analytics/20',
    creative: 'bg-creative/20',
  }[theme]

  const titleHoverClass = {
    development: 'group-hover:text-primary',
    analytics: 'group-hover:text-analytics',
    creative: 'group-hover:text-creative',
  }[theme]

  const linkColorClass = {
    development: 'text-primary',
    analytics: 'text-analytics',
    creative: 'text-creative',
  }[theme]

  const bottomAccentClass = {
    development: 'bg-gradient-to-r from-primary to-secondary',
    analytics: 'bg-gradient-to-r from-analytics to-analytics-secondary',
    creative: 'bg-gradient-to-r from-creative to-creative-secondary',
  }[theme]

  const bgSectionClass = {
    development: 'bg-light-200',
    analytics: 'bg-gradient-to-b from-analytics-mint/5 to-light-200',
    creative: 'bg-gradient-to-b from-creative-mint/5 to-light-200',
  }[theme]

  return (
    <SectionWrapper className={bgSectionClass} id="services">
      <SectionHeader title={title} subtitle={subtitle} theme={theme} />

      <div className="space-y-16">
        {subCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            {/* Category Header */}
            <h3 className="font-display text-2xl font-semibold text-text-primary mb-8 flex items-center gap-3">
              <span className={cn("w-12 h-1 rounded-full", headerGradientClass)} />
              {category.name}
            </h3>

            {/* Services Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/services/${serviceSlug}/${service.slug}`}>
                    <motion.div
                      className="group h-full relative overflow-hidden rounded-2xl border border-light-300 bg-white p-6 shadow-soft"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Background gradient on hover */}
                      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", cardHoverGradientClass)} />

                      {/* Corner decoration */}
                      <div className={cn("absolute -right-10 -top-10 w-24 h-24 rounded-full transition-colors duration-500", cornerDecorationClass)} />

                      <div className="relative z-10">
                        {/* Icon placeholder */}
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", iconBgClass)}>
                          <div className={cn("w-6 h-6 rounded-full", iconInnerClass)} />
                        </div>

                        <h4 className={cn("font-display text-lg font-semibold text-text-primary mb-2 transition-colors", titleHoverClass)}>
                          {service.name}
                        </h4>

                        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        <span className={cn("inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all", linkColorClass)}>
                          Learn More <ArrowRight size={16} />
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <div className={cn("absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left", bottomAccentClass)} />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
