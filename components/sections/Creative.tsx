'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, PenTool, Video, Megaphone } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { CREATIVE_SERVICES } from '@/lib/constants'

const categoryIcons: Record<string, typeof Palette> = {
  'Branding & Visual Identity': Palette,
  'Graphic Design': PenTool,
  'Video & Content Production': Video,
  'Content & Creative Strategy': Megaphone,
}

export default function Creative() {
  const categories = Object.entries(CREATIVE_SERVICES)

  return (
    <SectionWrapper id="creative" className="bg-white">
      {/* Decorative elements */}
      <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Creative"
        subtitle="Captivating designs and compelling content that tell your brand story and engage your audience"
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
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-sm">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {category}
                  </h3>
                </div>

                {/* Services List */}
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-text-secondary">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <motion.a
                  href="#contact"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  whileHover={{ x: 5 }}
                >
                  Explore Services
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

      {/* Portfolio Showcase */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-mint/30"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white/60">
                  Creative #{item}
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-green transition-all hover:shadow-green-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Creating
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  )
}
