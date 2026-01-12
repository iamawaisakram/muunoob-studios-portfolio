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

  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />

      {/* Hero Section */}
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

      {/* Overview Section */}
      {caseStudy.overview && (
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
      )}

      {/* Gallery - Moved below Overview */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
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

      {/* Challenge & Solution */}
      {(caseStudy.challenge || caseStudy.solution) && (
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

      {/* Features */}
      {caseStudy.features && caseStudy.features.length > 0 && (
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

      {/* Results */}
      {caseStudy.results && caseStudy.results.length > 0 && (
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

      {/* Testimonial */}
      {caseStudy.testimonial && (
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

      {/* Navigation */}
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

      {/* CTA Section */}
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

      <Footer />
    </main>
  )
}
