'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Phone,
  CheckCircle,
  Loader2,
  AlertCircle,
  MessageSquare,
  Clock,
  Globe,
} from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import Button from '@/components/ui/Button'
import { CONTACT_INFO, COMPANY_NAME } from '@/lib/constants'

// Input validation constants (match server-side)
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000
const MIN_MESSAGE_LENGTH = 10

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  general?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [csrfToken, setCsrfToken] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState('')

  // Fetch CSRF token on component mount
  const fetchCsrfToken = useCallback(async () => {
    try {
      const response = await fetch('/api/contact')
      if (response.ok) {
        const data = await response.json()
        setCsrfToken(data.csrfToken)
      }
    } catch {
      // Silently fail - form will show error when submitted without token
    }
  }, [])

  useEffect(() => {
    fetchCsrfToken()
  }, [fetchCsrfToken])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName) {
      newErrors.name = 'Name is required'
    } else if (trimmedName.length > MAX_NAME_LENGTH) {
      newErrors.name = `Name must be less than ${MAX_NAME_LENGTH} characters`
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email is required'
    } else if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email must be less than ${MAX_EMAIL_LENGTH} characters`
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!trimmedSubject) {
      newErrors.subject = 'Subject is required'
    } else if (trimmedSubject.length > MAX_SUBJECT_LENGTH) {
      newErrors.subject = `Subject must be less than ${MAX_SUBJECT_LENGTH} characters`
    }

    if (!trimmedMessage) {
      newErrors.message = 'Message is required'
    } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be less than ${MAX_MESSAGE_LENGTH} characters`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Check if CSRF token is available
    if (!csrfToken) {
      setErrors({ general: 'Form security token not loaded. Please refresh the page.' })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          csrfToken,
          website: honeypot, // Honeypot field
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle rate limiting
        if (response.status === 429) {
          setErrors({ general: 'Too many requests. Please wait a moment and try again.' })
          return
        }
        // Handle CSRF error
        if (response.status === 403) {
          setErrors({ general: data.error || 'Session expired. Please refresh the page.' })
          fetchCsrfToken() // Refresh token
          return
        }
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setHoneypot('')
      fetchCsrfToken() // Get fresh token for next submission

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
      setErrors({ general: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email Us',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      description: 'Mon-Fri from 9am to 6pm',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-light via-light-200 to-mint/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 soft-dots opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.span
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MessageSquare size={16} />
            Get In Touch
          </motion.span>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient">Let&apos;s Start a Conversation</span>
          </motion.h1>

          <motion.p
            className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light-200 relative">
        {/* Decorative blobs */}
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-light-300 bg-white p-8 shadow-soft-lg">
                <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-text-primary">Message Sent!</h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* General error message */}
                    {errors.general && (
                      <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">{errors.general}</p>
                      </div>
                    )}

                    {/* Honeypot field - hidden from users, catches bots */}
                    <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={MAX_NAME_LENGTH}
                          className={`input-light ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}`}
                          placeholder="Enter your name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={MAX_EMAIL_LENGTH}
                          className={`input-light ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={MAX_SUBJECT_LENGTH}
                        className={`input-light ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={MAX_MESSAGE_LENGTH}
                        className={`input-light resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                  Contact Information
                </h2>
                <p className="leading-relaxed text-text-secondary">
                  Whether you have a question, want to start a project, or simply want to connect, feel
                  free to reach out. We&apos;re here to help you bring your ideas to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <motion.a
                    key={detail.label}
                    href={detail.href}
                    className="group flex items-start gap-4 rounded-xl border border-light-300 bg-white p-5 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-green"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-mint/20 transition-all duration-300 group-hover:from-primary/20 group-hover:to-mint/30">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">{detail.label}</div>
                      <div className="text-primary transition-colors group-hover:text-primary-600">
                        {detail.value}
                      </div>
                      <div className="text-sm text-text-muted mt-1">{detail.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-mint/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold text-text-primary">Working Hours</h4>
                </div>
                <div className="space-y-2 text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>

              {/* Global Reach */}
              <motion.div
                className="rounded-xl border border-light-300 bg-white p-6 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold text-text-primary">Global Reach</h4>
                </div>
                <p className="text-text-secondary">
                  We work with clients worldwide. No matter where you are, we&apos;re ready to help bring your vision to life.
                </p>
              </motion.div>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something amazing together. Your success is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
