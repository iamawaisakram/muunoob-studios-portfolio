'use client'

import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface TechStackProps {
  techStack: {
    category: string
    technologies: string[]
  }[]
}

export default function TechStack({ techStack }: TechStackProps) {
  return (
    <SectionWrapper className="bg-white">
      <SectionHeader
        title="Technology Stack"
        subtitle="We use cutting-edge technologies to deliver robust, scalable solutions"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {techStack.map((category, index) => (
          <motion.div
            key={category.category}
            className="group relative overflow-hidden rounded-2xl border border-light-300 bg-light p-6 shadow-soft hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1.5 text-sm bg-white border border-light-300 rounded-lg text-text-secondary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

