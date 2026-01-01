'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // Send to analytics in production
    // You can replace this with your analytics provider
    // Example: Google Analytics, Vercel Analytics, etc.
    if (process.env.NODE_ENV === 'production') {
      const body = {
        id: metric.id,
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        navigationType: metric.navigationType,
      }

      // Send to your analytics endpoint
      // Example using sendBeacon for reliability
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
        navigator.sendBeacon('/api/vitals', blob)
      }
    }
  })

  return null
}
