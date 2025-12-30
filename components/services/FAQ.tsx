'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { cn } from '@/lib/utils'

interface FAQProps {
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper className="bg-gradient-to-b from-light to-light-200">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers. Here are some common ones."
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl border border-light-300 bg-white shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 p-6 text-left transition-colors',
                  openIndex === index ? 'bg-primary/5' : 'hover:bg-light'
                )}
              >
                <h3 className="font-display text-lg font-semibold text-text-primary pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={24}
                    className={cn(
                      'transition-colors',
                      openIndex === index ? 'text-primary' : 'text-text-muted'
                    )}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

