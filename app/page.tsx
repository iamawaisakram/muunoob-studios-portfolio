import dynamic from 'next/dynamic'
import { Navbar, Footer } from '@/components/layout'
import { Hero, About } from '@/components/sections'
import {
  SectionSkeleton,
  CardsSkeleton,
  TestimonialsSkeleton,
  ContactSkeleton,
} from '@/components/ui/SectionSkeleton'

// Dynamically import below-fold sections for better initial load performance
const Development = dynamic(() => import('@/components/sections/Development'), {
  loading: () => <SectionSkeleton />,
})

const BusinessAnalytics = dynamic(() => import('@/components/sections/BusinessAnalytics'), {
  loading: () => <SectionSkeleton />,
})

const Creative = dynamic(() => import('@/components/sections/Creative'), {
  loading: () => <SectionSkeleton />,
})

const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'), {
  loading: () => <CardsSkeleton />,
})

const HireResource = dynamic(() => import('@/components/sections/HireResource'), {
  loading: () => <SectionSkeleton height="min-h-[400px]" />,
})

const Industries = dynamic(() => import('@/components/sections/Industries'), {
  loading: () => <SectionSkeleton height="min-h-[500px]" />,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <ContactSkeleton />,
})

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Above the fold - loaded immediately */}
      <Hero />
      <About />

      {/* Below the fold - lazy loaded */}
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
