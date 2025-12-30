'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to transform your business and accelerate growth"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white p-8 shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-primary/20" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-sm">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 font-display text-xl font-semibold text-text-primary transition-all duration-300 group-hover:text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-text-secondary">{service.description}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.a
                href="#contact"
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </motion.a>
            </div>

            {/* Corner Decoration */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
