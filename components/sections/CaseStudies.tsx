'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { getCaseStudiesForListing } from '@/lib/case-studies'

const caseStudies = getCaseStudiesForListing()

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
        {caseStudies.map((project, index) => (
          <CaseStudyCard
            key={project.id}
            {...project}
            index={index}
          />
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
