'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { getCaseStudiesByServiceCategory, ServiceCategory } from '@/lib/case-studies'

interface PortfolioSectionProps {
  serviceCategory: ServiceCategory
  title?: string
  subtitle?: string
  limit?: number
  theme?: 'primary' | 'analytics' | 'creative'
}

const themeStyles = {
  primary: {
    badge: 'bg-primary/10 text-primary',
    title: 'text-gradient',
    button: 'bg-primary text-white hover:bg-primary-600',
    buttonOutline: 'border-primary text-primary hover:bg-primary hover:text-white',
    decorLeft: 'bg-primary/10',
    decorRight: 'bg-mint/20',
  },
  analytics: {
    badge: 'bg-analytics/10 text-analytics',
    title: 'text-gradient-analytics',
    button: 'bg-analytics text-white hover:bg-analytics-600',
    buttonOutline: 'border-analytics text-analytics hover:bg-analytics hover:text-white',
    decorLeft: 'bg-analytics/10',
    decorRight: 'bg-analytics-mint/20',
  },
  creative: {
    badge: 'bg-creative/10 text-creative',
    title: 'text-gradient-creative',
    button: 'bg-creative text-white hover:bg-creative-600',
    buttonOutline: 'border-creative text-creative hover:bg-creative hover:text-white',
    decorLeft: 'bg-creative/10',
    decorRight: 'bg-creative-mint/20',
  },
}

export default function PortfolioSection({
  serviceCategory,
  title = 'Our Portfolio',
  subtitle = 'Explore our successful projects',
  limit = 6,
  theme = 'primary',
}: PortfolioSectionProps) {
  const projects = getCaseStudiesByServiceCategory(serviceCategory).slice(0, limit)
  const styles = themeStyles[theme]

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-light-200 relative">
      {/* Decorative elements */}
      <div className={`absolute -left-32 top-1/4 h-64 w-64 rounded-full ${styles.decorLeft} blur-3xl`} />
      <div className={`absolute -right-32 bottom-1/4 h-80 w-80 rounded-full ${styles.decorRight} blur-3xl`} />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium ${styles.badge}`}>
            Featured Projects
          </span>
          <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">
            <span className={styles.title}>{title}</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.id} {...project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href={`/case-studies?tab=${serviceCategory}`}>
            <motion.span
              className={`inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 font-medium transition-colors ${styles.buttonOutline}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
