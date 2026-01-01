import { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ServiceHero, SubServiceGrid, ServiceCTA } from '@/components/services'
import PortfolioSection from '@/components/sections/PortfolioSection'
import { developmentService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Development Services | MUUNOOB STUDIOS',
  description: 'End-to-end development solutions from concept to deployment. Web development, mobile apps, SaaS products, and custom software built with cutting-edge technologies.',
  openGraph: {
    title: 'Development Services | MUUNOOB STUDIOS',
    description: 'End-to-end development solutions from concept to deployment.',
  },
}

export default function DevelopmentServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      <ServiceHero
        title={developmentService.name}
        tagline={developmentService.tagline}
        description={developmentService.description}
        image="https://illustrations.popsy.co/amber/developer-activity.svg"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Development', href: '/services/development' },
        ]}
        ctaText="Start Your Project"
        ctaHref="#contact"
      />

      <SubServiceGrid
        title="Development Solutions"
        subtitle="Comprehensive development services to bring your digital vision to life"
        serviceSlug="development"
        subCategories={developmentService.subCategories}
      />

      <PortfolioSection
        serviceCategory="development"
        title="Development Portfolio"
        subtitle="Explore our successful development projects showcasing web apps, mobile apps, and custom software solutions"
        theme="primary"
        limit={6}
      />

      <ServiceCTA
        title="Ready to Build Something Amazing?"
        subtitle="Let's discuss your project and find the perfect development solution for your needs."
        serviceName="Development Services"
      />

      <Footer />
    </main>
  )
}

