'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { CASE_STUDIES } from '@/lib/constants'

export default function CaseStudies() {
  return (
    <SectionWrapper id="case-studies" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Case Studies"
        subtitle="Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-mint/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-white/80">
                  {project.title.charAt(0)}
                </span>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <motion.a
                  href={project.link}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category Badge */}
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="mb-2 font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-light-200 px-2 py-1 text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  )
}
