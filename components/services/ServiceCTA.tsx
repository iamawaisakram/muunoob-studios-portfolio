'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ServiceCTAProps {
  title?: string
  subtitle?: string
  serviceName?: string
}

export default function ServiceCTA({
  title = "Ready to Get Started?",
  subtitle = "Let's discuss your project and see how we can help you achieve your goals.",
  serviceName,
}: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="font-display text-4xl font-bold text-white md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* CTA Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Schedule Call */}
          <motion.a
            href="#contact"
            className="group flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              Schedule a Call
            </h3>
            <p className="text-sm text-white/70 text-center mb-4">
              Book a free 30-minute consultation
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
              Book Now <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Send Message */}
          <motion.a
            href="#contact"
            className="group flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-white/70 text-center mb-4">
              Tell us about your project
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
              Get in Touch <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Email Us */}
          <motion.a
            href="mailto:hello@yourcompany.com"
            className="group flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              Email Us
            </h3>
            <p className="text-sm text-white/70 text-center mb-4">
              We respond within 24 hours
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
              Send Email <ArrowRight size={16} />
            </span>
          </motion.a>
        </motion.div>

        {/* Additional info */}
        {serviceName && (
          <motion.p
            className="text-center text-white/60 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Interested in {serviceName}? Let us know in your message and we'll connect you with the right specialist.
          </motion.p>
        )}
      </div>
    </section>
  )
}

