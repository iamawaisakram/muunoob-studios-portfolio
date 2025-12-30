import type { Metadata } from 'next'
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_DESCRIPTION } from './constants'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourcompany.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'full-stack development',
    'SEO services',
    'digital solutions',
    'custom software',
    'enterprise applications',
    'React development',
    'Next.js development',
    'cloud solutions',
    'API development',
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - ${COMPANY_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@yourcompany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    'https://twitter.com/yourcompany',
    'https://linkedin.com/company/yourcompany',
    'https://github.com/yourcompany',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'hello@yourcompany.com',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Innovation Street',
    addressLocality: 'Tech City',
    postalCode: '12345',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'AggregateOffer',
    offerCount: 6,
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Software Development',
        description: 'Custom enterprise software solutions',
      },
      {
        '@type': 'Service',
        name: 'Web Development',
        description: 'Stunning, responsive websites',
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps',
      },
      {
        '@type': 'Service',
        name: 'Full-Stack Development',
        description: 'End-to-end application development',
      },
      {
        '@type': 'Service',
        name: 'SEO Services',
        description: 'Data-driven SEO strategies',
      },
      {
        '@type': 'Service',
        name: 'Digital Solutions',
        description: 'Comprehensive digital transformation',
      },
    ],
  },
}
