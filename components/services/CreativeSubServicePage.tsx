'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Palette,
  Camera,
  Video,
  PenTool,
  Eye,
  Award,
  Star,
  Heart,
  ChevronRight,
  Play,
  Wand2,
  MousePointer2,
} from 'lucide-react'
import Link from 'next/link'
import { SubService, ServiceCategory } from '@/lib/services'
import { cn } from '@/lib/utils'

interface CreativeSubServicePageProps {
  service: SubService
  parentService: ServiceCategory
}

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
    </div>
  )
}

// Portfolio preview card
function PortfolioPreview() {
  const items = [
    { color: 'from-creative to-creative-600', label: 'Project 1' },
    { color: 'from-purple-500 to-pink-500', label: 'Project 2' },
    { color: 'from-orange-500 to-red-500', label: 'Project 3' },
    { color: 'from-blue-500 to-cyan-500', label: 'Project 4' },
  ]

  return (
    <div className="relative">
      {/* Background cards for depth */}
      <motion.div
        className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 opacity-20"
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl bg-gradient-to-br from-creative to-orange-400 opacity-20"
        animate={{ rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Main card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-creative/10">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className={cn(
                "aspect-square rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold",
                item.color
              )}
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Eye className="w-8 h-8 opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -right-4 top-6 bg-white rounded-2xl shadow-xl p-3 border border-creative/10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-creative" />
          <span className="font-bold text-creative text-sm">Award Winning</span>
        </div>
      </motion.div>
    </div>
  )
}

export default function CreativeSubServicePage({ service, parentService }: CreativeSubServicePageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section - Creative Asymmetric */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-light via-creativeMint/30 to-light-200 overflow-hidden">
        <FloatingShapes />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
          {/* Breadcrumbs */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-text-muted hover:text-creative transition-colors">Home</Link></li>
              <ChevronRight size={14} className="text-text-muted" />
              <li><Link href="/services/creative" className="text-text-muted hover:text-creative transition-colors">{parentService.name}</Link></li>
              <ChevronRight size={14} className="text-text-muted" />
              <li className="text-creative font-medium">{service.name}</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
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
                {parentService.name}
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-text-primary">{service.name.split(' ')[0]}</span>
                {service.name.split(' ').length > 1 && (
                  <>
                    <br />
                    <span className="text-gradient-creative">
                      {service.name.split(' ').slice(1).join(' ')}
                    </span>
                  </>
                )}
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-creative px-8 py-4 font-medium text-white shadow-lg shadow-creative/30 hover:shadow-xl hover:shadow-creative/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Creating
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-creative/30 px-8 py-4 font-medium text-creative hover:bg-creative/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={18} />
                  View Work
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Portfolio preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <PortfolioPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-6 bg-creative/5 border-y border-creative/10 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 text-xl font-display font-bold text-creative/30 mx-8">
              <Sparkles className="w-5 h-5" /> {service.name}
              <Sparkles className="w-5 h-5" /> Creative Excellence
              <Sparkles className="w-5 h-5" /> Visual Innovation
              <Sparkles className="w-5 h-5" /> Brand Impact
            </span>
          ))}
        </motion.div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-creative">Everything You Need</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "group relative",
                  index === 0 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <motion.div
                  className="h-full bg-gradient-to-br from-light to-creativeMint/20 rounded-3xl p-6 border border-creative/10 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-creative/10 via-transparent to-creativeSecondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-creative to-creativeSecondary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text-primary group-hover:text-creative transition-colors">
                        {feature}
                      </h3>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-creative/5 blur-2xl group-hover:bg-creative/10 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Creative Pills */}
      <section className="py-20 bg-gradient-to-br from-light via-creativeMint/20 to-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              Our Tools
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient-creative">Creative Arsenal</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {service.techStack.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="text-center"
              >
                <h3 className="text-sm font-semibold text-creative uppercase tracking-wider mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-5 py-2.5 rounded-full bg-white border border-creative/20 text-text-primary text-sm shadow-sm hover:border-creative hover:shadow-lg hover:shadow-creative/10 transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow - Creative Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-creative">Creative Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Wavy connection line for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-creative via-creativeSecondary to-creative opacity-20 hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.workflow.map((step, index) => {
                const icons = [MousePointer2, Wand2, PenTool, Sparkles]
                const Icon = icons[index % icons.length]

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="bg-light rounded-3xl p-8 border border-creative/10 text-center relative overflow-hidden group hover:border-creative/30 transition-colors">
                      {/* Step number badge */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-creative to-creativeSecondary flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-creative/30">
                        {step.step}
                      </div>

                      <div className="mt-4 mb-4 flex justify-center text-creative">
                        <Icon className="w-8 h-8" />
                      </div>

                      <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-creative transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {step.description}
                      </p>

                      {/* Decorative gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-creative/5 via-transparent to-creativeSecondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Artistic Cards */}
      <section className="py-20 bg-gradient-to-br from-creative via-creativeSecondary to-purple-600 relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              The Creative Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {reason.icon === 'palette' && <Palette className="w-6 h-6 text-white" />}
                    {reason.icon === 'sparkles' && <Sparkles className="w-6 h-6 text-white" />}
                    {reason.icon === 'star' && <Star className="w-6 h-6 text-white" />}
                    {reason.icon === 'heart' && <Heart className="w-6 h-6 text-white" />}
                    {reason.icon === 'award' && <Award className="w-6 h-6 text-white" />}
                    {!['palette', 'sparkles', 'star', 'heart', 'award'].includes(reason.icon) && (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Modern Accordion */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient-creative">Questions & Answers</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className={cn(
                    "bg-light rounded-2xl p-6 border transition-all",
                    expandedFaq === index ? "border-creative/30 shadow-lg shadow-creative/10" : "border-creative/10"
                  )}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-text-primary pr-4">
                        {faq.question}
                      </h3>
                      <ChevronRight className={cn(
                        "w-5 h-5 text-creative transition-transform",
                        expandedFaq === index && "rotate-90"
                      )} />
                    </div>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-text-secondary mt-4 pt-4 border-t border-creative/10">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-light via-creativeMint/30 to-light-200 relative overflow-hidden">
        <FloatingShapes />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-creative/10 text-creative text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles size={16} />
              Let's Create Together
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-creative">Ready to Bring Your Vision to Life?</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate to create stunning {service.name.toLowerCase()} that captivates your audience and elevates your brand.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-creative px-8 py-4 font-medium text-white shadow-xl shadow-creative/30 hover:shadow-2xl hover:shadow-creative/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href={`/services/${parentService.slug}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-creative/30 px-8 py-4 font-medium text-creative hover:bg-creative/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
