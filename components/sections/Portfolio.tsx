'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'software', label: 'Software' },
  { id: 'fullstack', label: 'Full-Stack' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory)

  return (
    <SectionWrapper id="portfolio" className="bg-light-200">
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-20 h-64 w-64 rounded-full bg-mint/15 blur-3xl" />

      <SectionHeader
        title="Our Portfolio"
        subtitle="Explore our latest projects showcasing innovation, creativity, and technical excellence"
      />

      {/* Category Filter */}
      <motion.div
        className="mb-12 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-green'
                : 'border border-light-300 bg-white text-text-secondary hover:border-primary/30 hover:text-primary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white shadow-soft"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-mint/20 to-secondary/10">
                {/* Soft dot pattern */}
                <div className="soft-dots absolute inset-0 opacity-50" />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.a
                    href={project.link}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View code"
                  >
                    <Code2 size={20} />
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute left-4 top-4 rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                  {categories.find((c) => c.id === project.category)?.label}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{project.description}</p>

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

              {/* Hover Border Effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-primary/20" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
