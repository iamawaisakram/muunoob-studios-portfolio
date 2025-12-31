'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { INDUSTRIES } from '@/lib/constants'

export default function WhoWeHelpPage() {
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
              Industries We Serve
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient">Who We Help</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed">
              We partner with businesses across diverse industries to deliver tailored solutions that drive growth and innovation. Our expertise spans from startups to enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-light-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-soft border border-light-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-4">
                      {industry.icon}
                    </div>

                    <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-text-secondary text-sm">
                      {industry.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">
              <span className="text-gradient">Our Impact</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We've helped businesses across industries achieve remarkable results
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '10+', label: 'Industries Served' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '95%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-light border border-light-300"
              >
                <h3 className="font-display text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl mb-6">
                <span className="text-gradient">Tailored Solutions for Every Industry</span>
              </h2>
              <p className="text-text-secondary mb-6">
                We understand that every industry has unique challenges and requirements. Our team takes the time to understand your specific needs and delivers customized solutions that address your pain points.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Deep understanding of industry-specific challenges',
                  'Customized solutions tailored to your needs',
                  'Proven track record across multiple sectors',
                  'Dedicated teams with relevant experience',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-green hover:shadow-green-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {INDUSTRIES.slice(0, 4).map((industry, index) => (
                  <div
                    key={industry.name}
                    className={`p-6 rounded-xl bg-white shadow-soft border border-light-300 ${
                      index % 2 === 1 ? 'mt-8' : ''
                    }`}
                  >
                    <div className="text-3xl mb-3">{industry.icon}</div>
                    <h4 className="font-display font-semibold text-text-primary">
                      {industry.name}
                    </h4>
                  </div>
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
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              No matter your industry, we have the expertise to help you succeed. Let's discuss your project.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary shadow-soft hover:shadow-soft-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
