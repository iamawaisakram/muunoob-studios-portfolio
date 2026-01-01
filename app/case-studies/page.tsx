'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import CreativePortfolio from '@/components/sections/CreativePortfolio'
import {
  getCaseStudiesForListing,
  SERVICE_CATEGORY_TABS,
  ServiceCategory,
} from '@/lib/case-studies'
import { cn } from '@/lib/utils'

const ITEMS_PER_PAGE = 10
const allCaseStudies = getCaseStudiesForListing()

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredStudies = useMemo(() => {
    if (activeTab === 'creative') return [] // Creative uses CreativePortfolio
    if (activeTab === 'all') return allCaseStudies
    return allCaseStudies.filter((study) => study.serviceCategory === activeTab)
  }, [activeTab])

  const totalPages = Math.ceil(filteredStudies.length / ITEMS_PER_PAGE)
  const paginatedStudies = filteredStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleTabChange = (tab: ServiceCategory | 'all') => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

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

      {/* Service Category Tabs */}
      <section className="py-6 sticky top-16 z-30 bg-gradient-to-r from-light via-white to-light border-b border-light-300 shadow-soft-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.button
              onClick={() => handleTabChange('all')}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border',
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-green border-transparent'
                  : 'bg-white text-text-secondary border-light-300 hover:border-primary hover:text-primary hover:shadow-soft-sm'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            {SERVICE_CATEGORY_TABS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border',
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-green border-transparent'
                    : 'bg-white text-text-secondary border-light-300 hover:border-primary hover:text-primary hover:shadow-soft-sm'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-light-200">
        <div className="mx-auto max-w-7xl px-4">
          {/* Show CreativePortfolio for Creative tab */}
          {activeTab === 'creative' ? (
            <CreativePortfolio showHeader={false} />
          ) : (
            <>
              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {paginatedStudies.map((study, index) => (
                    <motion.div
                      key={study.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CaseStudyCard {...study} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {paginatedStudies.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-text-secondary">
                    No case studies found in this category yet.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Pagination - hide for Creative tab */}
          {activeTab !== 'creative' && totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <motion.button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={cn(
                  'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all',
                  currentPage === 1
                    ? 'bg-light-300 text-text-secondary/50 cursor-not-allowed'
                    : 'bg-white text-text-secondary hover:bg-primary hover:text-white shadow-soft-sm'
                )}
                whileHover={currentPage === 1 ? {} : { scale: 1.05 }}
                whileTap={currentPage === 1 ? {} : { scale: 0.95 }}
              >
                <ChevronLeft size={16} />
                Previous
              </motion.button>

              <div className="flex items-center gap-1 px-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <motion.button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={cn(
                        'h-10 w-10 rounded-full text-sm font-medium transition-all',
                        currentPage === page
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-green'
                          : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary'
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {page}
                    </motion.button>
                  )
                )}
              </div>

              <motion.button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={cn(
                  'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all',
                  currentPage === totalPages
                    ? 'bg-light-300 text-text-secondary/50 cursor-not-allowed'
                    : 'bg-white text-text-secondary hover:bg-primary hover:text-white shadow-soft-sm'
                )}
                whileHover={currentPage === totalPages ? {} : { scale: 1.05 }}
                whileTap={currentPage === totalPages ? {} : { scale: 0.95 }}
              >
                Next
                <ChevronRight size={16} />
              </motion.button>
            </div>
          )}

          {/* Results count - hide for Creative tab */}
          {activeTab !== 'creative' && (
            <div className="mt-6 text-center text-sm text-text-secondary">
              Showing {paginatedStudies.length} of {filteredStudies.length} projects
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
