'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [goToNext])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <SectionWrapper id="testimonials" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute right-1/4 bottom-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <SectionHeader
        title="Client Testimonials"
        subtitle="Hear what our satisfied clients have to say about working with us"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Quote Icon */}
        <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-white shadow-soft">
          <Quote className="h-5 w-5 text-primary" />
        </div>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden rounded-3xl border border-light-300 bg-white p-8 shadow-soft-lg md:p-12">
          {/* Background Decoration */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-mint/10 blur-3xl" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8 text-center text-xl leading-relaxed text-text-primary md:text-2xl">
                &ldquo;{TESTIMONIALS[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white shadow-green">
                  {TESTIMONIALS[currentIndex].name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-sm text-primary">{TESTIMONIALS[currentIndex].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-light-300 bg-white text-text-muted shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-light-300 bg-white text-text-muted shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-primary' : 'bg-light-400 hover:bg-primary/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
