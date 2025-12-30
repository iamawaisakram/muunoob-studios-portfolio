'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Users, Briefcase, UserPlus } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { HIRE_RESOURCE } from '@/lib/constants'

const icons = [Users, Briefcase, UserPlus]

export default function HireResource() {
  return (
    <SectionWrapper id="hire-resource" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title={HIRE_RESOURCE.title}
        subtitle={HIRE_RESOURCE.description}
      />

      <div className="grid gap-8 md:grid-cols-3">
        {HIRE_RESOURCE.options.map((option, index) => {
          const Icon = icons[index]
          return (
            <motion.div
              key={option.title}
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
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-sm">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-semibold text-text-primary transition-all duration-300 group-hover:text-primary">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-text-secondary">
                  {option.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <Check size={12} className="text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                  whileHover={{ x: 5 }}
                >
                  Get Started
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </motion.a>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-6 text-text-secondary">
          Need a custom engagement model? Let's discuss your requirements.
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-green transition-all hover:shadow-green-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  )
}
