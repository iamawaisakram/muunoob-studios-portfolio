'use client'

import { motion } from 'framer-motion'
import { Scale, FileText, AlertTriangle, Users, Globe, Ban, RefreshCw, Mail, Calendar } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { COMPANY_NAME, CONTACT_INFO } from '@/lib/constants'

const sections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    content: `By accessing and using the ${COMPANY_NAME} website (muunoobstudios.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    icon: Globe,
    title: 'Use of Website',
    content: `You may use our website for lawful purposes only. You agree not to:`,
    list: [
      'Use the website in any way that violates applicable laws or regulations',
      'Attempt to gain unauthorized access to any part of the website or its systems',
      'Use automated systems (bots, scrapers) to access the website without permission',
      'Transmit any malicious code, viruses, or harmful content',
      'Interfere with or disrupt the website or servers',
      'Impersonate any person or entity or misrepresent your affiliation',
      'Collect or harvest any information from the website without consent',
      'Use the contact form for spam, advertising, or malicious purposes',
    ],
  },
  {
    icon: Users,
    title: 'Services',
    content: `${COMPANY_NAME} provides software development, business analytics, and creative services. Any services provided are subject to separate agreements and contracts between ${COMPANY_NAME} and the client. The information on this website is for general informational purposes and does not constitute a binding offer or contract.`,
  },
  {
    icon: Scale,
    title: 'Intellectual Property',
    content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ${COMPANY_NAME} or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.`,
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer of Warranties',
    content: `This website is provided "as is" and "as available" without any warranties of any kind, either express or implied. ${COMPANY_NAME} does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, reliability, or completeness of any information on this website.`,
  },
  {
    icon: Ban,
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, ${COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.`,
  },
  {
    icon: RefreshCw,
    title: 'Indemnification',
    content: `You agree to indemnify, defend, and hold harmless ${COMPANY_NAME}, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the website or your violation of these Terms of Service.`,
  },
]

export default function TermsOfServicePage() {
  const lastUpdated = 'January 5, 2026'

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-light via-light-200 to-secondary/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white mb-6">
              <Scale className="w-10 h-10" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
              Please read these terms carefully before using our website and services.
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
                Welcome to {COMPANY_NAME}. These Terms of Service (&quot;Terms&quot;) govern your use of our website located at muunoobstudios.com and any related services provided by {COMPANY_NAME}. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website.
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
                transition={{ delay: sectionIndex * 0.05 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-16">
                  <p className="text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third-Party Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                Third-Party Links
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-text-secondary leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by {COMPANY_NAME}. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that {COMPANY_NAME} shall not be liable for any damage or loss caused by or in connection with the use of any such content or services.
              </p>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                Governing Law
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which {COMPANY_NAME} operates, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through good faith negotiations, and if necessary, through the appropriate legal channels.
              </p>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary pt-2">
                Changes to Terms
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
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
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Questions?
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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
