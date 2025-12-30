'use client'

import { Navbar, Footer } from '@/components/layout'
import {
  Hero,
  About,
  Development,
  BusinessAnalytics,
  Creative,
  CaseStudies,
  HireResource,
  Industries,
  Testimonials,
  Contact,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      <Hero />
      <About />
      <Development />
      <BusinessAnalytics />
      <Creative />
      <CaseStudies />
      <HireResource />
      <Industries />
      <Testimonials />
      <Contact />

      <Footer />
    </main>
  )
}
