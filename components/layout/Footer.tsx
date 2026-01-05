'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { COMPANY_NAME, CONTACT_INFO, FOOTER_LINKS } from '@/lib/constants'

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-light-300 bg-white">
      {/* Soft dot pattern background */}
      <div className="soft-dots absolute inset-0 opacity-50" />

      {/* Decorative gradient blobs */}
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/muunoob-logo.png"
                alt={COMPANY_NAME}
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-gradient font-display text-2xl font-bold">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="mb-6 text-text-secondary">
              Transforming ideas into digital reality. We build cutting-edge software solutions that
              drive business growth.
            </p>
            <div className="flex gap-4">
              {Object.entries(CONTACT_INFO.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-300 bg-light-200 text-text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                    whileHover={{ y: -3 }}
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-text-primary">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-text-primary">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-text-primary">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-primary"
                >
                  <Mail size={18} />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-primary"
                >
                  <Phone size={18} />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-light-400 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-text-muted md:text-left">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="/privacy-policy" className="transition-colors duration-300 hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="transition-colors duration-300 hover:text-primary">
              Terms of Service
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
