'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Zap,
  Target,
  Shield,
  Clock,
  Users,
  ChevronRight,
  Play,
  LineChart,
  PieChart,
} from 'lucide-react'
import Link from 'next/link'
import { SubService, ServiceCategory } from '@/lib/services'
import { cn } from '@/lib/utils'

interface AnalyticsSubServicePageProps {
  service: SubService
  parentService: ServiceCategory
}

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

// Mini chart visualization
function MiniChart({ type }: { type: 'bar' | 'line' | 'pie' }) {
  if (type === 'bar') {
    return (
      <div className="flex items-end gap-1 h-12">
        {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-to-t from-analytics to-analytics-400 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    )
  }
  if (type === 'line') {
    return (
      <svg viewBox="0 0 100 40" className="w-full h-12">
        <motion.path
          d="M0,35 Q25,20 50,25 T100,10"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  return (
    <div className="w-12 h-12 rounded-full border-4 border-analytics relative">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-transparent border-t-analyticsSecondary"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default function AnalyticsSubServicePage({ service, parentService }: AnalyticsSubServicePageProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* Hero Section - Dashboard Style */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-analytics-900 overflow-hidden">
        {/* Subtle gradient orbs for depth */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-analytics/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-analyticsSecondary/20 blur-3xl" />

        {/* Floating data points */}
        <motion.div
          className="absolute top-20 right-20 w-3 h-3 rounded-full bg-analytics"
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-2 h-2 rounded-full bg-cyan-400"
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Breadcrumbs */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <ChevronRight size={14} className="text-slate-500" />
              <li><Link href="/services/business-analytics" className="text-slate-400 hover:text-white transition-colors">{parentService.name}</Link></li>
              <ChevronRight size={14} className="text-slate-500" />
              <li className="text-analytics">{service.name}</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-analytics/20 text-analytics text-sm font-medium border border-analytics/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <BarChart3 size={16} />
                {parentService.name}
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.name}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-analytics px-8 py-4 font-medium text-white shadow-lg shadow-analytics/30 hover:shadow-xl hover:shadow-analytics/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-4 font-medium text-white hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-500">{service.name} Dashboard</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-1">Accuracy</div>
                    <div className="text-2xl font-bold text-white">98.5%</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400">+2.3%</span>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-1">Insights</div>
                    <div className="text-2xl font-bold text-white">1,247</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400">+15%</span>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-1">ROI</div>
                    <div className="text-2xl font-bold text-white">340%</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400">+28%</span>
                    </div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-300">Performance Overview</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-analytics/20 text-analytics text-xs">Weekly</span>
                    </div>
                  </div>
                  <MiniChart type="bar" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-analytics rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2 text-white">
                  <Zap size={20} />
                  <span className="font-bold">Real-time</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-analytics/10 text-analytics text-sm font-medium">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-analytics">Comprehensive Features</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need to unlock the power of your data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="h-full bg-light rounded-2xl p-6 border border-analytics/10 relative overflow-hidden"
                  whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-analytics to-analyticsSecondary opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-analytics/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-analytics" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text-primary group-hover:text-analytics transition-colors">
                        {feature}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Modern Pills */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-analytics/10 text-analytics text-sm font-medium">
              Technology Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient-analytics">Powered By Industry Leaders</span>
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
              >
                <h3 className="text-sm font-semibold text-analytics uppercase tracking-wider mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white border border-analytics/20 text-text-primary text-sm shadow-sm hover:border-analytics hover:shadow-md transition-all cursor-default"
                      whileHover={{ scale: 1.05 }}
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

      {/* Workflow - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-analytics/10 text-analytics text-sm font-medium">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-analytics">How We Work</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-analytics via-analyticsSecondary to-analytics hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.workflow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-analytics to-analyticsSecondary flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10 mx-auto lg:mx-0">
                    {step.step}
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 text-center lg:text-left">
                    <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats Style */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-analytics-900">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-analytics/20 text-analytics text-sm font-medium border border-analytics/30">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              The MUUNOOB Advantage
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
                <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-analytics/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-analytics/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {reason.icon === 'zap' && <Zap className="w-6 h-6 text-analytics" />}
                    {reason.icon === 'target' && <Target className="w-6 h-6 text-analytics" />}
                    {reason.icon === 'shield' && <Shield className="w-6 h-6 text-analytics" />}
                    {reason.icon === 'clock' && <Clock className="w-6 h-6 text-analytics" />}
                    {reason.icon === 'users' && <Users className="w-6 h-6 text-analytics" />}
                    {!['zap', 'target', 'shield', 'clock', 'users'].includes(reason.icon) && (
                      <CheckCircle2 className="w-6 h-6 text-analytics" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion Style */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-analytics/10 text-analytics text-sm font-medium">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient-analytics">Common Questions</span>
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
                <details className="group bg-slate-50 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-display font-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-analytics group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-analytics via-analytics-600 to-analyticsSecondary">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how our {service.name.toLowerCase()} services can help you make data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium text-analytics shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href={`/services/${parentService.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-medium text-white hover:bg-white/10 transition-all"
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
