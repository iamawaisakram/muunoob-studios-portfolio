import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { defaultMetadata, jsonLd } from '@/lib/seo'
import { WebVitals } from '@/components/WebVitals'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#f8faf9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/muunoob-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/muunoob-logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* DNS prefetch and preconnect for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/muunoob-logo.png"
          as="image"
          type="image/png"
        />

        {/* Prefetch likely navigation targets */}
        <link rel="prefetch" href="/case-studies" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/about" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <WebVitals />
        {children}
      </body>
    </html>
  )
}
