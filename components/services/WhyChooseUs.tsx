'use client'

import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface WhyChooseUsProps {
  reasons: {
    title: string
    description: string
    icon: string
  }[]
}

export default function WhyChooseUs({ reasons }: WhyChooseUsProps) {
  return (
    <SectionWrapper className="bg-white">
      <SectionHeader
        title="Why Choose Us"
        subtitle="What sets us apart and makes us the right partner for your project"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            className="group relative overflow-hidden rounded-2xl border border-light-300 bg-gradient-to-br from-light to-white p-6 shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Decorative gradient */}
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="mb-4 text-4xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>

              <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

