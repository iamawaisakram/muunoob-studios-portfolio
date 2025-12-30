'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO_CONTENT } from '@/lib/constants'
import Button from '@/components/ui/Button'

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-light"
    >
      {/* 3D Background */}
      <Scene variant="combined" className="absolute inset-0" />

      {/* Soft gradient overlays for light theme */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-light/30 via-transparent to-light/60" />
      <div className="absolute inset-0 z-10 nature-bg" />

      {/* Decorative organic shapes */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute left-1/3 top-1/4 h-48 w-48 rounded-full bg-secondary/5 blur-2xl" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-5 py-2.5 shadow-soft backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm font-medium text-text-secondary">Building the Future of Digital</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="mb-6 font-display text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-gradient-animated">
            {HERO_CONTENT.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-4 font-display text-xl text-primary md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="mx-auto mb-10 max-w-3xl text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button href="#contact" size="lg">
            {HERO_CONTENT.primaryCTA}
            <ArrowRight size={20} />
          </Button>
          <Button href="#portfolio" variant="secondary" size="lg">
            {HERO_CONTENT.secondaryCTA}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 border-t border-light-300 pt-16 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '10+', label: 'Years' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 font-display text-3xl font-bold text-gradient md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
