'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PenTool, Video, Palette } from 'lucide-react'
import Link from 'next/link'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { CREATIVE_SERVICES } from '@/lib/constants'

const categoryIcons: Record<string, typeof PenTool> = {
  'Branding & Graphic Design': PenTool,
  'Video & Content Production': Video,
}

export default function Creative() {
  const categories = Object.entries(CREATIVE_SERVICES)

  return (
    <SectionWrapper id="creative" className="bg-gradient-to-b from-creative-mint/5 to-white">
      {/* Decorative elements - Creative Pink theme */}
      <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-creative/10 blur-3xl" />
      <div className="absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-creative-mint/30 blur-3xl" />

      <SectionHeader
        title="Creative"
        subtitle="Captivating designs and compelling content that tell your brand story and engage your audience"
        theme="creative"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map(([category, services], index) => {
          const Icon = categoryIcons[category] || Palette
          return (
            <motion.div
              key={category}
              className="group relative overflow-hidden rounded-2xl border border-light-300 bg-light p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient on Hover - Creative theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-creative/5 via-transparent to-creative-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-creative/10 to-creative-mint/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-creative-sm">
                    <Icon className="h-7 w-7 text-creative" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-creative">
                    {category}
                  </h3>
                </div>

                {/* Services List */}
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-creative" />
                      <span className="text-text-secondary">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <Link href="/services/creative">
                  <motion.span
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-creative"
                    whileHover={{ x: 5 }}
                  >
                    Explore Services
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </motion.span>
                </Link>
              </div>

              {/* Corner Decoration - Creative theme */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-creative/5 blur-3xl transition-all duration-500 group-hover:bg-creative/10" />
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
        <Link href="/services/creative">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-creative px-8 py-3 font-medium text-white shadow-creative transition-all hover:shadow-creative-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Creating
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </motion.div>
    </SectionWrapper>
  )
}
