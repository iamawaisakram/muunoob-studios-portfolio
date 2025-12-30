'use client'

import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { INDUSTRIES } from '@/lib/constants'

export default function Industries() {
  return (
    <SectionWrapper id="industries" className="bg-white">
      {/* Decorative elements */}
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-32 bottom-1/3 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Who We Help"
        subtitle="We partner with businesses across diverse industries to deliver tailored digital solutions that drive success"
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {INDUSTRIES.map((industry, index) => (
          <motion.div
            key={industry.name}
            className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                {industry.icon}
              </div>

              {/* Name */}
              <h3 className="mb-2 font-display text-sm font-semibold text-text-primary transition-colors group-hover:text-primary">
                {industry.name}
              </h3>

              {/* Description - shown on hover */}
              <p className="text-xs leading-relaxed text-text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {industry.description}
              </p>
            </div>

            {/* Corner Decoration */}
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
          </motion.div>
        ))}
      </div>

      {/* Stats or Additional Info */}
      <motion.div
        className="mt-16 grid gap-8 rounded-2xl bg-gradient-to-r from-primary/10 via-mint/10 to-primary/10 p-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h4 className="font-display text-3xl font-bold text-primary">10+</h4>
          <p className="text-text-secondary">Industries Served</p>
        </div>
        <div className="text-center">
          <h4 className="font-display text-3xl font-bold text-primary">50+</h4>
          <p className="text-text-secondary">Enterprise Clients</p>
        </div>
        <div className="text-center">
          <h4 className="font-display text-3xl font-bold text-primary">Global</h4>
          <p className="text-text-secondary">Reach & Impact</p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
