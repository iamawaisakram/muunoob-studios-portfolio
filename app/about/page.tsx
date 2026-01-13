'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Rocket,
  CheckCircle2,
  Globe,
  Code2,
  Palette,
  BarChart3,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Footer } from '@/components/layout'
import { ABOUT_CONTENT, COMPANY_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Animated counter component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <motion.span
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  )
}

// Core values data
const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and that passion shows in every project we undertake.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both internally and with our clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, never settling for mediocrity.',
  },
]

// Service areas for visual display
const serviceAreas = [
  { icon: Code2, label: 'Development', color: 'from-primary to-secondary' },
  { icon: BarChart3, label: 'Analytics', color: 'from-analytics to-analytics-secondary' },
  { icon: Palette, label: 'Creative', color: 'from-creative to-creative-secondary' },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-light via-light-200 to-mint/20">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 overflow-visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center overflow-visible">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {ABOUT_CONTENT.title}
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">{ABOUT_CONTENT.subtitle}</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {ABOUT_CONTENT.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-green hover:shadow-green-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Work With Us
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-8 py-4 font-medium text-primary hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Visual element */}
            <motion.div
              className="relative px-8 overflow-visible"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main card with logo */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 pb-10 border border-light-300 overflow-visible">
                <div className="flex flex-col items-center text-center w-full">
                  <motion.div
                    className="w-32 h-32 mb-6 relative"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Image
                      src="/muunoob-logo.png"
                      alt={COMPANY_NAME}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <h2 className="font-display text-2xl font-bold text-gradient mb-2">
                    {COMPANY_NAME}
                  </h2>
                  <p className="text-text-secondary text-sm mb-6">
                    Transforming Ideas Into Digital Reality
                  </p>

                  {/* Service pills */}
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 relative z-10 w-full">
                    {serviceAreas.map((area, index) => (
                      <motion.div
                        key={area.label}
                        className={cn(
                          "flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r text-white text-sm font-medium whitespace-nowrap",
                          area.color
                        )}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <area.icon size={16} />
                        {area.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges - positioned outside the card */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 border border-light-300 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-16 bg-white rounded-xl shadow-lg p-3 border border-light-300 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-light-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT_CONTENT.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter
                    end={parseInt(stat.value.replace(/\D/g, ''))}
                    suffix={stat.value.includes('+') ? '+' : ''}
                  />
                </div>
                <p className="text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="story" className="py-20 bg-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Our Purpose
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-soft border border-light-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {ABOUT_CONTENT.mission}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-soft border border-light-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-secondary/5 blur-2xl group-hover:bg-secondary/10 transition-colors" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white mb-6">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {ABOUT_CONTENT.vision}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Our Core Values</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="h-full bg-light rounded-2xl p-6 border border-light-300 text-center relative overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">What Sets Us Apart</span>
              </h2>
              <p className="text-text-secondary mb-8">
                We combine technical expertise with creative thinking to deliver solutions that not only meet your needs but exceed your expectations.
              </p>

              <ul className="space-y-4">
                {[
                  'Expert team with diverse skill sets',
                  'Agile methodology for flexible development',
                  'Transparent communication throughout',
                  'On-time delivery with quality assurance',
                  'Long-term partnership approach',
                  '24/7 support and maintenance',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '100%', label: 'Project Success Rate' },
                  { value: '5★', label: 'Average Rating' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={cn(
                      "bg-light rounded-2xl p-6 border border-light-300 text-center",
                      index % 2 === 1 && "mt-8"
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="font-display text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-text-secondary text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </motion.div>
          </div>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. Get in touch with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <ArrowRight size={18} />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-medium text-white hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
