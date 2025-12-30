'use client'

import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface WorkflowProps {
  workflow: {
    step: number
    title: string
    description: string
  }[]
}

export default function Workflow({ workflow }: WorkflowProps) {
  return (
    <SectionWrapper className="bg-gradient-to-b from-light-200 to-light" showGrid>
      <SectionHeader
        title="Our Workflow"
        subtitle="A proven process that delivers results, every time"
      />

      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-mint hidden lg:block" />

        <div className="space-y-8 lg:space-y-12">
          {workflow.map((step, index) => (
            <motion.div
              key={step.step}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">
                        {step.step}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center node */}
              <div className="relative z-10 flex items-center justify-center w-2/12">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-green text-white font-bold text-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {step.step}
                </motion.div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden lg:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

