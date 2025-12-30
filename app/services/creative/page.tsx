import { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ServiceHero, SubServiceGrid, ServiceCTA } from '@/components/services'
import { creativeService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Creative Services | MUUNOOB STUDIOS',
  description: 'Elevate your brand with stunning visuals, compelling content, and creative strategies that resonate with your audience and drive engagement.',
  openGraph: {
    title: 'Creative Services | MUUNOOB STUDIOS',
    description: 'Elevate your brand with stunning visuals and creative strategies.',
  },
}

export default function CreativeServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />
      
      <ServiceHero
        title={creativeService.name}
        tagline={creativeService.tagline}
        description={creativeService.description}
        image="https://illustrations.popsy.co/amber/designer.svg"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Creative', href: '/services/creative' },
        ]}
        ctaText="Elevate Your Brand"
        ctaHref="#contact"
      />

      <SubServiceGrid
        title="Creative Solutions"
        subtitle="From branding to video production, we bring your vision to life"
        serviceSlug="creative"
        subCategories={creativeService.subCategories}
      />

      <ServiceCTA
        title="Ready to Stand Out?"
        subtitle="Let's create something amazing together that captures attention and drives results."
        serviceName="Creative Services"
      />

      <Footer />
    </main>
  )
}

