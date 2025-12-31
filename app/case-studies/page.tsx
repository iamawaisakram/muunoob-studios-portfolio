'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Filter } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { CASE_STUDIES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const categories = ['All', ...Array.from(new Set(CASE_STUDIES.map(study => study.category)))]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeCategory)

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-light via-light-200 to-mint/20">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Portfolio
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient">Case Studies</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of successful projects. Each case study showcases our expertise in delivering innovative solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-light-300 bg-white sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-2 text-text-secondary">
              <Filter size={18} />
              Filter by:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-primary text-white shadow-green"
                      : "bg-light-200 text-text-secondary hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-white shadow-soft border border-light-300 h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-white/60">
                        {study.title}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {study.category}
                    </span>

                    <h3 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {study.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-light-200 text-text-muted text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-light-200 text-text-muted text-xs">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <a
                      href={study.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
                    >
                      View Case Study <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-600 to-secondary">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl mb-4">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary shadow-soft hover:shadow-soft-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
