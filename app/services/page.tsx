import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar, Footer } from '@/components/layout'
import { ServiceHero, ServiceCTA } from '@/components/services'
import { services } from '@/lib/services'
import { ArrowRight, Code2, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | MUUNOOB STUDIOS',
  description: 'Comprehensive digital solutions including development, business analytics, and creative services. Transform your business with our expert team.',
  openGraph: {
    title: 'Our Services | MUUNOOB STUDIOS',
    description: 'Comprehensive digital solutions to transform your business.',
  },
}

const serviceIcons = {
  development: Code2,
  'business-analytics': BarChart3,
  creative: Palette,
}

const serviceColors = {
  development: 'from-blue-500 to-cyan-500',
  'business-analytics': 'from-purple-500 to-pink-500',
  creative: 'from-orange-500 to-red-500',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />
      
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-light via-light-200 to-mint/20 pt-32 pb-20">
        {/* Decorative elements */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Expertise
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
            <span className="text-gradient">Services That Drive Growth</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            From cutting-edge development to strategic business solutions and creative excellence, 
            we offer comprehensive services to transform your digital presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(services).map(([slug, service]) => {
              const Icon = serviceIcons[slug as keyof typeof serviceIcons]
              const colorClass = serviceColors[slug as keyof typeof serviceColors]
              
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-light-300 bg-light p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner decoration */}
                  <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h2>

                    <p className="text-sm text-primary font-medium mb-4">
                      {service.tagline}
                    </p>

                    <p className="text-text-secondary mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Sub-categories preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.subCategories.slice(0, 3).map((cat) => (
                        <span
                          key={cat.name}
                          className="inline-block px-3 py-1 text-xs bg-white border border-light-300 rounded-full text-text-secondary"
                        >
                          {cat.name}
                        </span>
                      ))}
                      {service.subCategories.length > 3 && (
                        <span className="inline-block px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary">
                          +{service.subCategories.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Explore Services <ArrowRight size={16} />
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-light-200 to-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '25+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={stat.label} className="p-6">
                <div className="font-display text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Not Sure Which Service You Need?"
        subtitle="Let's chat about your project. We'll help you find the perfect solution."
      />

      <Footer />
    </main>
  )
}

