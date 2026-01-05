'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Calendar } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { COMPANY_NAME, CONTACT_INFO } from '@/lib/constants'

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        text: 'When you use our contact form, we collect your name, email address, subject, and message content. This information is necessary to respond to your inquiries and provide our services.',
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'We may automatically collect certain information when you visit our website, including your IP address (for rate limiting and security purposes), browser type, and pages visited. This helps us improve our website and protect against abuse.',
      },
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Communication',
        text: 'We use the information you provide through our contact form solely to respond to your inquiries, discuss potential projects, and provide customer support.',
      },
      {
        subtitle: 'Website Improvement',
        text: 'We may use aggregated, anonymized data to analyze website usage patterns and improve our services.',
      },
      {
        subtitle: 'Security',
        text: 'We use IP addresses and request data to protect our website from abuse, spam, and malicious activities through rate limiting and other security measures.',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Data Protection',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement appropriate technical and organizational measures to protect your personal information, including encryption, secure data transmission (HTTPS), input validation, and protection against common web vulnerabilities.',
      },
      {
        subtitle: 'Data Retention',
        text: 'We retain your contact form submissions only as long as necessary to fulfill the purpose for which they were collected or as required by law. Email correspondence is retained for business record purposes.',
      },
      {
        subtitle: 'Third-Party Services',
        text: 'We use Resend for email delivery. Your contact form data is transmitted securely to this service solely for the purpose of delivering your message to us. We do not sell or share your personal information with third parties for marketing purposes.',
      },
    ],
  },
  {
    icon: Lock,
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access and Correction',
        text: 'You have the right to request access to the personal information we hold about you and to request corrections if any information is inaccurate.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request the deletion of your personal information from our systems, subject to any legal obligations we may have to retain certain data.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'If you have previously contacted us and wish to opt out of future communications, please contact us and we will honor your request.',
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 5, 2026'

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-light via-light-200 to-primary/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
              Your privacy is important to us. This policy explains how {COMPANY_NAME} collects, uses, and protects your information.
            </p>
            <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-light rounded-2xl p-8 border border-light-300">
              <p className="text-text-secondary leading-relaxed">
                {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website at muunoobstudios.com and use our services. By using our website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6 pl-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                Cookies
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-text-secondary leading-relaxed">
                Our website may use cookies and similar technologies for essential functionality. These are necessary for the website to function properly and cannot be switched off. We do not use cookies for advertising or tracking purposes.
              </p>
            </div>
          </motion.div>

          {/* Changes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                Changes to This Policy
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Contact Us
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
