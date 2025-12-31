'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Database,
  Cpu,
  Zap,
  Shield,
  Clock,
  Users,
  Target,
  Layers,
  GitBranch,
  CheckCircle2,
  Play,
} from 'lucide-react'
import Link from 'next/link'
import { Navbar, Footer } from '@/components/layout'
import { businessAnalyticsService } from '@/lib/services'
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

// Dashboard preview component
function DashboardPreview() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main dashboard card */}
      <motion.div
        className="bg-white rounded-2xl shadow-2xl border border-analytics/20 p-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-text-muted">Analytics Dashboard</span>
        </div>

        {/* Mini charts grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Revenue card */}
          <div className="bg-analytics/5 rounded-xl p-4">
            <div className="text-xs text-text-muted mb-1">Revenue</div>
            <div className="text-xl font-bold text-analytics">$84.2K</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs text-green-500">+12.5%</span>
            </div>
          </div>
          {/* Users card */}
          <div className="bg-analytics/5 rounded-xl p-4">
            <div className="text-xs text-text-muted mb-1">Users</div>
            <div className="text-xl font-bold text-analytics">2,847</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs text-green-500">+8.2%</span>
            </div>
          </div>
          {/* Conversion card */}
          <div className="bg-analytics/5 rounded-xl p-4">
            <div className="text-xs text-text-muted mb-1">Conversion</div>
            <div className="text-xl font-bold text-analytics">24.8%</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs text-green-500">+3.1%</span>
            </div>
          </div>
        </div>

        {/* Chart area */}
        <div className="bg-gradient-to-br from-analytics/5 to-analytics-mint/10 rounded-xl p-4 h-32 flex items-end justify-between gap-2">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-analytics to-analytics-400 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-analytics/10 p-3 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp size={16} className="text-green-600" />
          </div>
          <div>
            <div className="text-xs text-text-muted">Growth</div>
            <div className="text-sm font-bold text-green-600">+127%</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-analytics/10 p-3 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-analytics/10 flex items-center justify-center">
            <PieChart size={16} className="text-analytics" />
          </div>
          <div>
            <div className="text-xs text-text-muted">ROI</div>
            <div className="text-sm font-bold text-analytics">3.2x</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const metrics = [
  { value: 80, suffix: '%', label: 'Automation Rate', icon: Zap },
  { value: 3, suffix: 'x', label: 'Average ROI', icon: TrendingUp },
  { value: 48, suffix: 'h', label: 'Faster Insights', icon: Clock },
  { value: 150, suffix: '+', label: 'Integrations', icon: GitBranch },
]

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor your business metrics in real-time with live dashboards and instant alerts.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to uncover patterns and predict future trends automatically.',
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Connect all your data sources seamlessly for a unified view of your business.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with GDPR, SOC 2, and industry standards.',
  },
  {
    icon: Layers,
    title: 'Custom Workflows',
    description: 'Build automated workflows that adapt to your unique business processes.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set, track, and achieve your KPIs with intelligent goal management.',
  },
]

const processSteps = [
  { step: 1, title: 'Discover', description: 'We analyze your current processes and identify opportunities' },
  { step: 2, title: 'Design', description: 'We architect solutions tailored to your specific needs' },
  { step: 3, title: 'Implement', description: 'We deploy and integrate systems with minimal disruption' },
  { step: 4, title: 'Optimize', description: 'We continuously refine and improve your operations' },
]

export default function BusinessAnalyticsServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section - Dashboard Style */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-analytics-mint/30 via-light to-light" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-analytics/5 to-transparent" />

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        {/* Floating data points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-analytics/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-analytics/10 border border-analytics/20 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <BarChart3 size={16} className="text-analytics" />
                <span className="text-sm font-medium text-analytics">Business Analytics</span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Data Into
                <span className="block text-gradient-analytics">Actionable Insights</span>
              </h1>

              <p className="text-lg text-text-secondary mb-8 max-w-lg">
                {businessAnalyticsService.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-analytics text-white font-semibold shadow-analytics hover:shadow-analytics-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free Consultation
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-analytics/30 text-analytics font-semibold hover:bg-analytics/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={18} />
                  Watch Demo
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 bg-analytics text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <metric.icon size={24} className="text-white/80" />
                  <span className="text-4xl font-bold">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </span>
                </div>
                <span className="text-sm text-white/80">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-analytics">Powerful Capabilities</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need to transform your business operations with intelligent analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-analytics-mint/10 to-white border border-analytics/10 hover:border-analytics/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-analytics/10 flex items-center justify-center mb-6 group-hover:bg-analytics/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-analytics" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-analytics-mint/20 to-light">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-analytics">Our Process</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-analytics/20 via-analytics to-analytics/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-analytics text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-analytics">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-analytics">Our Solutions</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive analytics and automation services tailored to your needs
            </p>
          </motion.div>

          <div className="space-y-12">
            {businessAnalyticsService.subCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="font-display text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-12 h-1 bg-gradient-to-r from-analytics to-analytics-secondary rounded-full" />
                  {category.name}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/business-analytics/${service.slug}`}
                    >
                      <motion.div
                        className="group p-6 rounded-xl bg-analytics-mint/10 border border-analytics/10 hover:border-analytics/30 hover:bg-analytics-mint/20 transition-all cursor-pointer"
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-analytics flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-text-primary group-hover:text-analytics transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                              {service.shortDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-analytics via-analytics-600 to-analytics-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how data-driven insights can revolutionize your operations and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-analytics font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#calculator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate Your ROI
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
