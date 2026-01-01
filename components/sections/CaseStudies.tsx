'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import CreativePortfolio from './CreativePortfolio'
import {
  getCaseStudiesForListing,
  SERVICE_CATEGORY_TABS,
  ServiceCategory,
} from '@/lib/case-studies'

const allCaseStudies = getCaseStudiesForListing()

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>('all')

  // For non-creative tabs, filter case studies
  const filteredStudies =
    activeTab === 'all'
      ? allCaseStudies.slice(0, 6)
      : activeTab === 'creative'
        ? [] // Creative tab uses CreativePortfolio component
        : allCaseStudies.filter((s) => s.serviceCategory === activeTab).slice(0, 6)

  return (
    <SectionWrapper id="case-studies" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />

      <SectionHeader
        title="Case Studies"
        subtitle="Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence"
      />

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <motion.button
          onClick={() => setActiveTab('all')}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-green'
              : 'bg-light-200 text-text-secondary hover:bg-primary/10 hover:text-primary'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        {SERVICE_CATEGORY_TABS.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? tab.id === 'creative'
                  ? 'bg-gradient-to-r from-creative to-creative-secondary text-white shadow-creative-sm'
                  : tab.id === 'business-analytics'
                    ? 'bg-gradient-to-r from-analytics to-analytics-secondary text-white shadow-analytics-sm'
                    : 'bg-gradient-to-r from-primary to-secondary text-white shadow-green'
                : 'bg-light-200 text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Creative Portfolio (YouTube videos) */}
      {activeTab === 'creative' ? (
        <CreativePortfolio showHeader={false} />
      ) : (
        <>
          {/* Projects Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaseStudyCard {...project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="py-12 text-center text-text-secondary">
              No case studies in this category yet.
            </div>
          )}
        </>
      )}

      {/* View All CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href="/case-studies">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Case Studies
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </motion.div>
    </SectionWrapper>
  )
}
