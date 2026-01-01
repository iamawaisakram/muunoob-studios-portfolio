'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Palette,
  Camera,
  Video,
  PenTool,
  Sparkles,
  Play,
  Award,
  Star,
  Heart,
  MousePointer2,
  Layers,
  Wand2,
} from 'lucide-react'
import Link from 'next/link'
import { Navbar, Footer } from '@/components/layout'
import { creativeService } from '@/lib/services'
import { cn } from '@/lib/utils'
import CreativePortfolio from '@/components/sections/CreativePortfolio'

// Portfolio item type
interface PortfolioItem {
  id: number
  title: string
  category: string
  color: string
  icon: React.ReactNode
}

// Sample portfolio items
const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Brand Identity', category: 'Branding', color: 'from-creative to-creative-600', icon: <Palette className="w-8 h-8" /> },
  { id: 2, title: 'Product Photography', category: 'Photography', color: 'from-purple-500 to-pink-500', icon: <Camera className="w-8 h-8" /> },
  { id: 3, title: 'Motion Graphics', category: 'Video', color: 'from-orange-500 to-red-500', icon: <Video className="w-8 h-8" /> },
  { id: 4, title: 'UI/UX Design', category: 'Design', color: 'from-blue-500 to-cyan-500', icon: <PenTool className="w-8 h-8" /> },
  { id: 5, title: 'Social Media', category: 'Content', color: 'from-green-500 to-teal-500', icon: <Sparkles className="w-8 h-8" /> },
  { id: 6, title: 'Animation', category: 'Video', color: 'from-yellow-500 to-orange-500', icon: <Play className="w-8 h-8" /> },
]

// Floating shapes for artistic background
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-creative/30 to-creativeSecondary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-creative/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-orange-400/20 to-pink-500/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

// Kinetic typography component
function KineticText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("inline-flex", className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.5 }}
          whileHover={{
            y: -5,
            color: '#ec4899',
            transition: { duration: 0.2 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Marquee component for continuous scrolling
function MarqueeText({ children, direction = 'left' }: { children: React.ReactNode; direction?: 'left' | 'right' }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// Creative stats component
function CreativeStats() {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <Layers className="w-6 h-6" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Heart className="w-6 h-6" /> },
    { value: '15+', label: 'Awards Won', icon: <Award className="w-6 h-6" /> },
    { value: '50+', label: 'Happy Clients', icon: <Star className="w-6 h-6" /> },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-creative/10 text-center relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-creative via-creativeSecondary to-creative" />

            <div className="flex justify-center mb-3 text-creative">
              {stat.icon}
            </div>
            <div className="font-display text-3xl font-bold text-creative mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function CreativeServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const serviceCategories = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Identity',
      description: 'Create memorable brand experiences that resonate with your audience',
      services: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography',
      description: 'Stunning visuals that tell your story and captivate viewers',
      services: ['Product Photography', 'Lifestyle Shoots', 'Event Coverage', 'Photo Editing'],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Production',
      description: 'Engaging video content that brings your vision to life',
      services: ['Commercial Videos', 'Motion Graphics', 'Animation', 'Video Editing'],
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Eye-catching designs that communicate your message effectively',
      services: ['Marketing Materials', 'Social Media Graphics', 'Packaging Design', 'Print Design'],
    },
  ]

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center pt-20">
        <FloatingShapes />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={16} />
                Creative Studio
              </motion.span>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-text-primary">We Create</span>
                <br />
                <span className="text-gradient-creative">
                  <KineticText text="Beautiful" />
                </span>
                <br />
                <span className="text-text-primary">Experiences</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                {creativeService.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full bg-creative px-8 py-4 font-medium text-white shadow-lg shadow-creative/30 hover:shadow-xl hover:shadow-creative/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-creative/30 px-8 py-4 font-medium text-creative hover:bg-creative/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Visual showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main showcase card */}
              <div className="relative">
                {/* Background cards */}
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 opacity-20"
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-creative to-orange-400 opacity-20"
                  animate={{ rotate: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-creative/10">
                  <div className="grid grid-cols-2 gap-4">
                    {portfolioItems.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={item.id}
                        className={cn(
                          "aspect-square rounded-2xl bg-gradient-to-br flex items-center justify-center text-white",
                          item.color
                        )}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -right-6 top-8 bg-white rounded-2xl shadow-xl p-4 border border-creative/10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-creative" />
                      <span className="font-bold text-creative">Award Winning</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-8 bg-creative/5 border-y border-creative/10">
        <MarqueeText>
          <span className="flex items-center gap-8 text-2xl font-display font-bold text-creative/30 mx-8">
            <Sparkles className="w-6 h-6" /> Branding
            <Sparkles className="w-6 h-6" /> Design
            <Sparkles className="w-6 h-6" /> Photography
            <Sparkles className="w-6 h-6" /> Video
            <Sparkles className="w-6 h-6" /> Animation
            <Sparkles className="w-6 h-6" /> Content
          </span>
        </MarqueeText>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <CreativeStats />
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-20 bg-light-200 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ec4899 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              Our Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-creative">Featured Work</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore our creative portfolio showcasing projects that push boundaries and deliver results
            </p>
          </motion.div>

          <CreativePortfolio showHeader={false} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-creative font-medium hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-creative">Creative Services</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Full-service creative solutions to bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-full bg-light rounded-3xl p-8 border border-creative/10 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-creative/5 via-transparent to-creativeSecondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-creative to-creativeSecondary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-creative transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-text-secondary mb-6">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 rounded-full bg-creative/10 text-creative text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-creative/5 blur-2xl group-hover:bg-creative/10 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Creative Timeline */}
      <section className="py-20 bg-gradient-to-br from-light via-creativeMint/30 to-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-creative">Creative Process</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven methodology that transforms ideas into impactful creative work
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-creative via-creativeSecondary to-creative opacity-20 hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discover', description: 'Understanding your brand, goals, and audience', icon: <MousePointer2 className="w-6 h-6" /> },
                { step: '02', title: 'Ideate', description: 'Brainstorming creative concepts and strategies', icon: <Wand2 className="w-6 h-6" /> },
                { step: '03', title: 'Create', description: 'Bringing ideas to life with meticulous craft', icon: <PenTool className="w-6 h-6" /> },
                { step: '04', title: 'Deliver', description: 'Polishing and delivering exceptional results', icon: <Sparkles className="w-6 h-6" /> },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-soft border border-creative/10 text-center relative">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-creative to-creativeSecondary flex items-center justify-center text-white font-bold text-sm z-10">
                      {phase.step}
                    </div>

                    <div className="mt-4 mb-4 flex justify-center text-creative">
                      {phase.icon}
                    </div>

                    <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-creative via-creativeSecondary to-purple-600 relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles size={16} />
              Let's Create Together
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Make Your
              <br />
              Brand Unforgettable?
            </h2>

            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate to create stunning visuals and compelling content that captivates your audience and drives real results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-creative shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-medium text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
