'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Target, Eye, Zap, Shield } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import ParallaxWrapper from '@/components/ui/ParallaxWrapper'
import { ABOUT_CONTENT } from '@/lib/constants'

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/\D/g, ''))
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = numericValue / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current).toString() + suffix)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value, suffix])

  return <span ref={ref}>{displayValue}</span>
}

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: ABOUT_CONTENT.mission,
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: ABOUT_CONTENT.vision,
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'We stay ahead of technological trends to deliver cutting-edge solutions that give our clients a competitive edge.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description:
        'Every project undergoes rigorous testing and quality assurance to ensure exceptional performance and reliability.',
    },
  ]

  return (
    <SectionWrapper id="about" className="bg-light-200">
      {/* Decorative blobs */}
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
      <div className="absolute -left-40 bottom-40 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <SectionHeader title="About Us" subtitle={ABOUT_CONTENT.subtitle} />

      {/* Main Content */}
      <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
        {/* Left - Description */}
        <ParallaxWrapper speed={0.2} direction="up">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-text-primary">{ABOUT_CONTENT.description}</p>
            <p className="leading-relaxed text-text-secondary">
              With a proven track record of delivering exceptional results, we partner with businesses
              of all sizes to create custom software solutions, stunning websites, and powerful mobile
              applications that drive growth and success.
            </p>
          </motion.div>
        </ParallaxWrapper>

        {/* Right - Stats */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {ABOUT_CONTENT.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-light-300 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-green hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="text-gradient mb-2 font-display text-4xl font-bold md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.value.includes('+') ? '+' : ''}
                  />
                </div>
                <div className="text-sm uppercase tracking-wider text-text-muted">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group relative rounded-2xl border border-light-300 bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-green hover:border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 transition-all duration-300 group-hover:from-primary/20 group-hover:to-mint/30">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-text-primary">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>

            {/* Hover Effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-mint/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
