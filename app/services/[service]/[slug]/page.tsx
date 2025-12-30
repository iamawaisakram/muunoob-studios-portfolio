import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar, Footer } from '@/components/layout'
import {
  ServiceHero,
  ServiceFeatures,
  TechStack,
  Workflow,
  WhyChooseUs,
  FAQ,
  ServiceCTA,
} from '@/components/services'
import { getSubServiceBySlug, generateSubServiceParams, ServiceType, services } from '@/lib/services'

interface PageProps {
  params: Promise<{
    service: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return generateSubServiceParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const result = getSubServiceBySlug(slug)
  
  if (!result) {
    return {
      title: 'Service Not Found | MUUNOOB STUDIOS',
    }
  }

  return {
    title: `${result.service.name} | MUUNOOB STUDIOS`,
    description: result.service.description,
    openGraph: {
      title: `${result.service.name} | MUUNOOB STUDIOS`,
      description: result.service.shortDescription,
    },
  }
}

export default async function SubServicePage({ params }: PageProps) {
  const { service: serviceSlug, slug } = await params
  const result = getSubServiceBySlug(slug)

  if (!result) {
    notFound()
  }

  const { service, parentService } = result

  // Get parent service name for breadcrumbs
  const parentServiceName = parentService.name

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />
      
      <ServiceHero
        title={service.name}
        tagline={service.shortDescription}
        description={service.description}
        image={service.image}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: parentServiceName, href: `/services/${parentService.slug}` },
          { label: service.name, href: `/services/${parentService.slug}/${service.slug}` },
        ]}
        ctaText="Get Started"
        ctaHref="#contact"
      />

      <ServiceFeatures
        title="What's Included"
        subtitle="Everything you need for success"
        features={service.features}
        description={service.description}
        image={service.image}
      />

      <TechStack techStack={service.techStack} />

      <Workflow workflow={service.workflow} />

      <WhyChooseUs reasons={service.whyChooseUs} />

      <FAQ faqs={service.faqs} />

      <ServiceCTA
        title="Ready to Get Started?"
        subtitle={`Let's discuss how our ${service.name.toLowerCase()} services can help you achieve your goals.`}
        serviceName={service.name}
      />

      <Footer />
    </main>
  )
}

