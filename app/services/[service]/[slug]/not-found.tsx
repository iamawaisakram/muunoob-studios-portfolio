import Link from 'next/link'
import { Navbar, Footer } from '@/components/layout'
import Button from '@/components/ui/Button'

export default function ServiceNotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-light">
      <Navbar />
      
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 soft-dots opacity-50" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 text-8xl font-bold text-gradient font-display">404</div>
          <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/services">
              View All Services
            </Button>
            <Button href="/" variant="secondary">
              Go Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

