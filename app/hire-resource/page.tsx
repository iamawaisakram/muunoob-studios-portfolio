'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, UserPlus, Check, Clock, MessageCircle, Shield } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { HIRE_RESOURCE } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  'Dedicated Developers': <Users className="w-8 h-8 text-primary" />,
  'Project-Based Teams': <Briefcase className="w-8 h-8 text-primary" />,
  'Staff Augmentation': <UserPlus className="w-8 h-8 text-primary" />,
}

const benefits = [
  {
    icon: Clock,
    title: 'Quick Onboarding',
    description: 'Get your team up and running within 48 hours',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Vetted professionals with proven track records',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Work directly with your dedicated team members',
  },
]

export default function HireResourcePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-light via-light-200 to-mint/20">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Flexible Talent Solutions
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient">{HIRE_RESOURCE.title}</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {HIRE_RESOURCE.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-green hover:shadow-green-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#options"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-8 py-3 font-medium text-primary hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Options
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Options */}
      <section id="options" className="py-20 bg-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              <span className="text-gradient">Hiring Models</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the engagement model that best fits your project needs and budget
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {HIRE_RESOURCE.options.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-soft border border-light-300"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[option.title] || <Users className="w-8 h-8 text-primary" />}
                    </div>

                    <h3 className="font-display text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>

                    <p className="text-text-secondary mb-6">
                      {option.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowRight size={16} />
                    </motion.a>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">
              <span className="text-gradient">Why Choose Us</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We provide flexible, reliable, and high-quality talent solutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl mb-4">
              Ready to Build Your Team?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your resource needs and find the perfect talent for your project.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary shadow-soft hover:shadow-soft-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
