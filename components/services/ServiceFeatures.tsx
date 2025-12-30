'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface ServiceFeaturesProps {
  title?: string
  subtitle?: string
  features: string[]
  description?: string
  image?: string
}

export default function ServiceFeatures({
  title = "What's Included",
  subtitle = "Comprehensive features designed to deliver results",
  features,
  description,
  image,
}: ServiceFeaturesProps) {
  return (
    <SectionWrapper className="bg-white" id="services">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          
          {subtitle && (
            <p className="text-lg text-text-secondary mb-8">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-text-secondary leading-relaxed mb-8">
              {description}
            </p>
          )}

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-light hover:bg-primary/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-text-primary font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        {image && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-mint/20" />
              <div className="absolute -right-4 -bottom-4 w-48 h-48 rounded-full bg-mint/20 blur-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-light-300 shadow-soft-lg bg-white p-8">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}

