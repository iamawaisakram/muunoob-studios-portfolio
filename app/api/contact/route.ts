import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'business@muunoobstudios.com'

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Input validation constants
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000
const MIN_MESSAGE_LENGTH = 10

// Strict email regex (RFC 5322 compliant subset)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  }
  return text.replace(/[&<>"'`=/]/g, (char) => htmlEscapes[char] || char)
}

// Sanitize input: trim whitespace and remove control characters
function sanitizeInput(input: string): string {
  // Remove control characters except newlines and tabs in message
  return input.trim().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
}

// Get client IP for rate limiting
function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }
  return 'unknown'
}

// Check rate limit
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  // Clean up expired entries periodically
  if (Math.random() < 0.1) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true }
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000)
    return { allowed: false, retryAfter }
  }

  record.count++
  return { allowed: true }
}

// Generate CSRF token (simple implementation using timestamp + random)
function generateCsrfToken(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 15)
  return `${timestamp}.${random}`
}

// Validate CSRF token (checks it's recent - within 1 hour)
function validateCsrfToken(token: string | null): boolean {
  if (!token) return false

  const parts = token.split('.')
  if (parts.length !== 2) return false

  const timestamp = parseInt(parts[0], 36)
  const now = Date.now()
  const oneHour = 60 * 60 * 1000

  // Token must be within the last hour
  return !isNaN(timestamp) && now - timestamp < oneHour && timestamp <= now
}

export async function GET() {
  // Endpoint to get a CSRF token
  const token = generateCsrfToken()
  return NextResponse.json({ csrfToken: token })
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 60),
          }
        }
      )
    }

    // Check content type
    const contentType = request.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      )
    }

    // Parse body with size limit check
    let body: Record<string, unknown>
    try {
      const text = await request.text()
      // Limit request body size to 10KB
      if (text.length > 10 * 1024) {
        return NextResponse.json(
          { error: 'Request body too large' },
          { status: 413 }
        )
      }
      body = JSON.parse(text)
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      )
    }

    // Validate CSRF token
    const csrfToken = typeof body.csrfToken === 'string' ? body.csrfToken : null
    if (!validateCsrfToken(csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid or expired form token. Please refresh the page and try again.' },
        { status: 403 }
      )
    }

    // Check honeypot field (should be empty)
    if (body.website && typeof body.website === 'string' && body.website.trim() !== '') {
      // Silently reject bot submissions (don't reveal detection)
      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      )
    }

    // Extract and validate field types
    const rawName = body.name
    const rawEmail = body.email
    const rawSubject = body.subject
    const rawMessage = body.message

    if (
      typeof rawName !== 'string' ||
      typeof rawEmail !== 'string' ||
      typeof rawSubject !== 'string' ||
      typeof rawMessage !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Invalid field types' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const name = sanitizeInput(rawName)
    const email = sanitizeInput(rawEmail).toLowerCase()
    const subject = sanitizeInput(rawSubject)
    const message = sanitizeInput(rawMessage)

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be less than ${MAX_NAME_LENGTH} characters` },
        { status: 400 }
      )
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email must be less than ${MAX_EMAIL_LENGTH} characters` },
        { status: 400 }
      )
    }

    if (subject.length > MAX_SUBJECT_LENGTH) {
      return NextResponse.json(
        { error: `Subject must be less than ${MAX_SUBJECT_LENGTH} characters` },
        { status: 400 }
      )
    }

    if (message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be at least ${MIN_MESSAGE_LENGTH} characters` },
        { status: 400 }
      )
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` },
        { status: 400 }
      )
    }

    // Validate email format with strict regex
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Email service configuration error')
      return NextResponse.json(
        { error: 'Email service temporarily unavailable' },
        { status: 503 }
      )
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Escape all user inputs for HTML email
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message)

    // Send email via Resend with sanitized content
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@muunoobstudios.com>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            This email was sent from the contact form on muunoobstudios.com
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Email service error')
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error')
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
