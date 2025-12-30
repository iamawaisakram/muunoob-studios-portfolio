import { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ServiceHero, SubServiceGrid, ServiceCTA } from '@/components/services'
import { businessAnalyticsService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Business Analytics Services | MUUNOOB STUDIOS',
  description: 'Optimize your operations with intelligent automation, strategic consulting, and data-driven insights that fuel business growth.',
  openGraph: {
    title: 'Business Analytics Services | MUUNOOB STUDIOS',
    description: 'Optimize your operations with intelligent automation and data-driven insights.',
  },
}

export default function BusinessAnalyticsServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />
      
      <ServiceHero
        title={businessAnalyticsService.name}
        tagline={businessAnalyticsService.tagline}
        description={businessAnalyticsService.description}
        image="https://illustrations.popsy.co/amber/product-launch.svg"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Business Analytics', href: '/services/business-analytics' },
        ]}
        ctaText="Transform Your Business"
        ctaHref="#contact"
      />

      <SubServiceGrid
        title="Business Solutions"
        subtitle="Strategic solutions to optimize operations and drive growth"
        serviceSlug="business-analytics"
        subCategories={businessAnalyticsService.subCategories}
      />

      <ServiceCTA
        title="Ready to Optimize Your Operations?"
        subtitle="Let's discuss how we can help streamline your business processes and drive growth."
        serviceName="Business Analytics Services"
      />

      <Footer />
    </main>
  )
}

