'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { SubService } from '@/lib/services'

interface SubServiceGridProps {
  title?: string
  subtitle?: string
  serviceSlug: string
  subCategories: {
    name: string
    services: SubService[]
  }[]
}

export default function SubServiceGrid({
  title = "Our Services",
  subtitle = "Explore our comprehensive range of solutions",
  serviceSlug,
  subCategories,
}: SubServiceGridProps) {
  return (
    <SectionWrapper className="bg-light-200" id="services">
      <SectionHeader title={title} subtitle={subtitle} />

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
              <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
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
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Corner decoration */}
                      <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

                      <div className="relative z-10">
                        {/* Icon placeholder */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="w-6 h-6 rounded-full bg-primary/20" />
                        </div>

                        <h4 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>

                        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                          Learn More <ArrowRight size={16} />
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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

