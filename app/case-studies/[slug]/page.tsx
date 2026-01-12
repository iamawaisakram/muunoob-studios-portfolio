import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  Building2,
  CheckCircle2,
  Quote,
} from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { getCaseStudyBySlug, DETAILED_CASE_STUDIES, generateCaseStudyParams } from '@/lib/case-studies'
import { AnimatedSection, AnimatedDiv, AnimatedButton } from '@/components/ui/AnimatedElements'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return generateCaseStudyParams()
}

// Generate metadata for each case study
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | MUUNOOB STUDIOS',
    }
  }

  return {
    title: `${caseStudy.title} | Case Study | MUUNOOB STUDIOS`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | MUUNOOB STUDIOS`,
      description: caseStudy.description,
      images: [caseStudy.image],
    },
  }
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  // Find next and previous case studies for navigation
  const currentIndex = DETAILED_CASE_STUDIES.findIndex((s) => s.slug === slug)
  const prevStudy = currentIndex > 0 ? DETAILED_CASE_STUDIES[currentIndex - 1] : null
  const nextStudy =
    currentIndex < DETAILED_CASE_STUDIES.length - 1 ? DETAILED_CASE_STUDIES[currentIndex + 1] : null

  // Check if this is the Aithentic case study for custom hero
  const isAithentic = slug === 'aithentic'

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section - Custom for Aithentic */}
      {isAithentic ? (
        <section className="relative pt-24">
          <div className="mx-auto max-w-7xl px-4 mb-4">
            {/* Breadcrumbs */}
            <AnimatedDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Case Studies
              </Link>
            </AnimatedDiv>
          </div>

          {/* Aithentic Hero Image - Full Width */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/projects/aithentic-hero-group.webp"
              alt="Aithentic - Asset Intelligence Platform"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
              sizes="100vw"
            />
          </AnimatedDiv>
        </section>
      ) : (
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-light via-light-200 to-mint/20">
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
          <div className="absolute inset-0 soft-dots opacity-50" />

          <div className="relative z-10 mx-auto max-w-7xl px-4">
            {/* Breadcrumbs */}
            <AnimatedDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Case Studies
              </Link>
            </AnimatedDiv>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {caseStudy.category}
                </span>

                <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
                  <span className="text-gradient">{caseStudy.title}</span>
                </h1>

                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {caseStudy.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {caseStudy.client && (
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Building2 size={18} className="text-primary" />
                      <span>{caseStudy.client}</span>
                    </div>
                  )}
                  {caseStudy.year && (
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar size={18} className="text-primary" />
                      <span>{caseStudy.year}</span>
                    </div>
                  )}
                  {caseStudy.duration && (
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Clock size={18} className="text-primary" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white text-text-secondary text-sm border border-light-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {caseStudy.liveUrl && (
                  <AnimatedButton
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-green hover:shadow-green-lg transition-all"
                  >
                    View Live Project
                    <ExternalLink size={18} />
                  </AnimatedButton>
                )}
              </AnimatedDiv>

              {/* Hero Image */}
              <AnimatedDiv
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-light-300">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </section>
      )}

      {/* Overview Section - Custom for Aithentic */}
      {isAithentic ? (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            {/* Overview Text */}
            <AnimatedSection className="mb-16">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                {caseStudy.overview}
              </p>
            </AnimatedSection>

            {/* Three Staggered Cards Image */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/projects/aithentic-cards.webp"
                alt="Industry: Enterprise Software, Project Duration: 12 Months, Tech Stack: React, Node.js, Azure, PostgreSQL, TypeScript"
                width={1840}
                height={646}
                className="w-full max-w-5xl h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            </AnimatedDiv>
          </div>
        </section>
      ) : (
        caseStudy.overview && (
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-4xl px-4">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">{caseStudy.overview}</p>
              </AnimatedSection>
            </div>
          </section>
        )
      )}

      {/* Services Provided Section - Custom for Aithentic */}
      {isAithentic && (
        <section className="py-16 bg-white overflow-visible">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative">
              {/* Header with Sphere */}
              <div className="flex justify-between items-start mb-12">
                <AnimatedDiv
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-4xl md:text-5xl">
                    <span className="text-text-primary font-normal">Services</span>
                    <br />
                    <span className="text-text-primary font-bold">Provided</span>
                  </h2>
                </AnimatedDiv>

                {/* Black Sphere - Positioned absolutely to top right */}
                <AnimatedDiv
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute -top-8 right-0 hidden md:block"
                >
                  <Image
                    src="/projects/aithentic-sphere.webp"
                    alt="Decorative sphere"
                    width={422}
                    height={422}
                    className="w-28 lg:w-36 xl:w-44 h-auto"
                    loading="lazy"
                  />
                </AnimatedDiv>
              </div>

              {/* Services Boxes */}
              <AnimatedDiv
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/projects/aithentic-services-boxes.webp"
                  alt="Services: Web and mobile applications using React, React Native, and TypeScript; Stress Dashboard integration and performance optimization; Design system using Material UI and Tailwind CSS"
                  width={1771}
                  height={477}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                />
              </AnimatedDiv>
            </div>
          </div>
        </section>
      )}

      {/* The Challenge Section - Custom for Aithentic */}
      {isAithentic && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            {/* Header Row */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
              {/* Title */}
              <AnimatedDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-4xl md:text-5xl">
                  <span className="text-text-primary font-normal">The</span>
                  <br />
                  <span className="text-text-primary font-bold">Challenge</span>
                </h2>
              </AnimatedDiv>

              {/* Description with blue left border */}
              <AnimatedDiv
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6"
              >
                {/* Blue vertical bar - using flexbox */}
                <div
                  className="w-1 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#4361EE' }}
                />
                <div>
                  <p className="text-text-primary leading-relaxed">
                    <span className="font-semibold">Organizations struggle to maintain visibility across their entire technology ecosystem</span>, leading to compliance risks, unnecessary spending, and security vulnerabilities.
                  </p>
                  <p className="text-text-primary leading-relaxed mt-4">
                    <span className="font-semibold">The client needed a unified platform</span> that could handle asset lifecycle management from acquisition through renewal and disposal, while providing actionable insights for decision-makers.
                  </p>
                </div>
              </AnimatedDiv>
            </div>

            {/* Challenge Boxes */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/projects/aithentic-challenge-boxes.webp"
                alt="Challenges: 01 - Teams can't see what technology is actually being used; 02 - Renewals and future spend are hard to forecast; 03 - Expanding cloud environments increase hidden risks; 04 - Digital assets are spread across tools and platforms"
                width={1870}
                height={674}
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
              />
            </AnimatedDiv>
          </div>
        </section>
      )}

      {/* Our Solution Section - Custom for Aithentic */}
      {isAithentic && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            {/* Header Row */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
              {/* Title */}
              <AnimatedDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-4xl md:text-5xl">
                  <span className="text-text-primary font-normal">Our</span>
                  <br />
                  <span className="text-text-primary font-bold">Solution</span>
                </h2>
              </AnimatedDiv>

              {/* Description with blue left border */}
              <AnimatedDiv
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6"
              >
                {/* Blue vertical bar */}
                <div
                  className="w-1 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#4361EE' }}
                />
                <p className="text-text-primary leading-relaxed">
                  <span className="font-semibold">Our team contributed in building an asset intelligence platform</span> with a centralized dashboard for renewals and spend forecasting, asset and account management, role-based team access, and Cloud FinOps for cost optimization, integrated seamlessly with existing IT systems.
                </p>
              </AnimatedDiv>
            </div>

            {/* Key Features and Laptop Mockup */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Key Features List */}
              <AnimatedDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  <span className="text-text-primary font-bold">Key</span>
                  <span className="text-text-primary font-normal"> Features</span>
                </h3>

                <ul className="space-y-1.5 text-text-primary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Management Console</span> with renewals overview and spend forecasting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Account Overview</span> with asset activity tracking and alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Asset Overview</span> with comprehensive technology inventory.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">IT Performance</span> monitoring and analytics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Usage Analytics</span> for tracking software and hardware utilization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Software Monitor</span> for compliance and licensing management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Team Members</span> management with role-based access control.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Cloud FinOps</span> with cost management and anomaly detection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Rightsizing recommendations</span> for cloud resources.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Discount Commitments</span> tracking for cloud savings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Multi-department</span> and multi-location support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-primary mt-0.5">•</span>
                    <span><span className="font-semibold">Partner and Smart Share</span> integration capabilities.</span>
                  </li>
                </ul>
              </AnimatedDiv>

              {/* Laptop Mockup */}
              <AnimatedDiv
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start justify-center"
              >
                <Image
                  src="/projects/aithentic-solution-mockup.webp"
                  alt="Aithentic Dashboard - Management Console with Renewals Overview and Budget Forecast"
                  width={947}
                  height={627}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>
            </div>
          </div>
        </section>
      )}

      {/* Full Width Image Sections - Custom for Aithentic */}
      {isAithentic && (
        <>
          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-5.webp"
                alt="Dashboard with renewals overview and spend forecasting"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-6.webp"
                alt="Asset activity tracking with modules and key data management"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-5-1.webp"
                alt="User management with role-based access and location tracking"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-9.webp"
                alt="Cloud cost management with spend tracking and cost distribution"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-10.webp"
                alt="Results and Impact - 30%+ Cost Savings, 99% Compliance Rate, 50K+ Assets Tracked, 40 hrs/mo Time Saved"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-12.webp"
                alt="Aithentic Platform"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>

          <section className="bg-white">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/projects/aithentic-slide-8.webp"
                alt="Aithentic Platform"
                width={1920}
                height={1080}
                className="w-full h-auto"
                loading="lazy"
                sizes="100vw"
              />
            </AnimatedDiv>
          </section>
        </>
      )}

      {/* Gallery - Moved below Overview (not for Aithentic) */}
      {!isAithentic && caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <section className="py-20 bg-light-200">
          <div className="mx-auto max-w-7xl px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                Project Gallery
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Screenshots and visuals from the project
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.gallery.map((image, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-soft border border-light-300 bg-white">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  {image.caption && (
                    <p className="mt-3 text-sm text-text-secondary text-center">{image.caption}</p>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution (not for Aithentic) */}
      {!isAithentic && (caseStudy.challenge || caseStudy.solution) && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {caseStudy.challenge && (
                <AnimatedDiv
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-soft border border-light-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    The Challenge
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{caseStudy.challenge}</p>
                </AnimatedDiv>
              )}

              {caseStudy.solution && (
                <AnimatedDiv
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-soft border border-light-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    Our Solution
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{caseStudy.solution}</p>
                </AnimatedDiv>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features (not for Aithentic) */}
      {!isAithentic && caseStudy.features && caseStudy.features.length > 0 && (
        <section className="py-20 bg-light-200">
          <div className="mx-auto max-w-7xl px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                Key Features
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                The comprehensive set of features we implemented to deliver exceptional value
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="flex items-start gap-3 p-4 rounded-xl bg-light-200 border border-light-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{feature}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results (not for Aithentic) */}
      {!isAithentic && caseStudy.results && caseStudy.results.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary via-primary-600 to-secondary">
          <div className="mx-auto max-w-7xl px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">Results & Impact</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                The measurable outcomes we achieved together
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.results.map((result, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    {result.value}
                  </div>
                  <div className="text-white/80 text-sm">{result.metric}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial (not for Aithentic) */}
      {!isAithentic && caseStudy.testimonial && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <AnimatedSection className="relative bg-light-200 rounded-2xl p-8 md:p-12 border border-light-300">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6 italic">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-text-primary">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-text-secondary">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Navigation (not for Aithentic) */}
      {!isAithentic && (
        <section className="py-12 bg-light-200 border-t border-light-300">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center">
              {prevStudy ? (
                <Link
                  href={`/case-studies/${prevStudy.slug}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"
                >
                  <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <div>
                    <div className="text-sm text-text-muted">Previous</div>
                    <div className="font-medium">{prevStudy.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link
                  href={`/case-studies/${nextStudy.slug}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group text-right"
                >
                  <div>
                    <div className="text-sm text-text-muted">Next</div>
                    <div className="font-medium">{nextStudy.title}</div>
                  </div>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section (not for Aithentic) */}
      {!isAithentic && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and see how we can help bring your vision to life.
              </p>
              <AnimatedButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-green hover:shadow-green-lg transition-all"
              >
                Start Your Project
                <ArrowRight size={18} />
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
