'use client'

import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { TECHNOLOGIES } from '@/lib/constants'

const categoryColors: Record<string, string> = {
  Frontend: 'from-primary to-primary-500',
  Backend: 'from-secondary to-secondary-400',
  Database: 'from-green-500 to-emerald-500',
  Cloud: 'from-orange-400 to-amber-500',
  DevOps: 'from-blue-500 to-indigo-500',
  Mobile: 'from-primary-600 to-primary-400',
  Design: 'from-rose-400 to-pink-500',
  Language: 'from-yellow-500 to-orange-500',
  API: 'from-primary to-teal-500',
}

export default function Technologies() {
  const categories = [...new Set(TECHNOLOGIES.map((t) => t.category))]

  return (
    <SectionWrapper id="technologies" className="bg-light-200">
      {/* Decorative blobs */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Technologies We Use"
        subtitle="Cutting-edge tools and frameworks powering our innovative solutions"
      />

      {/* Tech Grid */}
      <div className="relative">
        {/* Tech Categories */}
        <div className="relative z-10 space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-text-secondary">
                <span
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${categoryColors[category] || 'from-primary to-secondary'}`}
                />
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {TECHNOLOGIES.filter((t) => t.category === category).map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group relative cursor-default rounded-xl border border-light-300 bg-white px-5 py-3 shadow-soft"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryColors[category] || 'from-primary to-secondary'} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />

                    {/* Border Highlight */}
                    <div
                      className={`absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20`}
                    />

                    <span className="relative z-10 font-medium text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="mt-16 flex justify-center">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-light-400" />
          <div className="h-2 w-2 rounded-full bg-primary/30" />
          <div className="h-px w-40 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
          <div className="h-2 w-2 rounded-full bg-secondary/30" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-light-400" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
