'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import {
  NAV_LINKS,
} from '@/lib/constants'
import { services, ServiceCategory } from '@/lib/services'
import { cn } from '@/lib/utils'

interface MegaMenuProps {
  serviceData: ServiceCategory
  isOpen: boolean
  onClose: () => void
}

function MegaMenu({ serviceData, isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 top-full z-50 border-b border-light-300 bg-white shadow-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={onClose}
        >
          <div className="mx-auto max-w-7xl px-4 py-8">
            {/* Header with link to main service page */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-light-200">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {serviceData.name}
                </h3>
                <p className="text-sm text-text-secondary">{serviceData.tagline}</p>
              </div>
              <Link
                href={`/services/${serviceData.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className={cn(
              "grid gap-8",
              serviceData.subCategories.length === 2 ? "grid-cols-2" : "grid-cols-4"
            )}>
              {serviceData.subCategories.map((category) => (
                <div key={category.name}>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {category.name}
                  </h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${serviceData.slug}/${service.slug}`}
                          className="block text-sm text-text-secondary transition-colors hover:text-primary"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface MobileSubMenuProps {
  serviceData: ServiceCategory
  isOpen: boolean
  onClose: () => void
}

function MobileSubMenu({ serviceData, isOpen, onClose }: MobileSubMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="overflow-hidden pl-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4 py-4">
            {/* Link to main service page */}
            <Link
              href={`/services/${serviceData.slug}`}
              className="flex items-center gap-2 py-2 text-sm font-medium text-primary"
              onClick={onClose}
            >
              View All {serviceData.name} Services <ArrowRight size={14} />
            </Link>

            {serviceData.subCategories.map((category) => (
              <div key={category.name}>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {category.name}
                </h4>
                <ul className="space-y-1">
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${serviceData.slug}/${service.slug}`}
                        className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary"
                        onClick={onClose}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getServiceData = (linkName: string): ServiceCategory | null => {
    switch (linkName) {
      case 'Development':
        return services.development
      case 'Business Analytics':
        return services['business-analytics']
      case 'Creative':
        return services.creative
      default:
        return null
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (linkName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(linkName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (linkName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === linkName ? null : linkName)
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-light-300 bg-white/90 py-3 shadow-soft backdrop-blur-lg'
            : 'bg-transparent py-5'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/muunoob-logo.png"
                alt="MUUNOOB STUDIOS"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="text-gradient font-display text-xl font-bold">
                MUUNOOB STUDIOS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => {
              const serviceData = getServiceData(link.name)
              const hasDropdown = link.hasDropdown && serviceData

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hasDropdown ? (
                    <Link
                      href={`/services/${serviceData.slug}`}
                      className="group relative flex items-center gap-1 text-sm text-text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      <motion.span whileHover={{ y: -2 }}>
                        {link.name}
                      </motion.span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="group relative flex items-center gap-1 text-sm text-text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      <motion.span whileHover={{ y: -2 }}>
                        {link.name}
                      </motion.span>
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="group relative flex items-center gap-1 text-sm text-text-secondary transition-colors duration-300 hover:text-primary"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                    </motion.a>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 text-text-primary lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Desktop Mega Menus */}
        {NAV_LINKS.map((link) => {
          const serviceData = getServiceData(link.name)
          if (!link.hasDropdown || !serviceData) return null

          return (
            <div
              key={`mega-${link.name}`}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <MegaMenu
                serviceData={serviceData}
                isOpen={activeDropdown === link.name}
                onClose={() => setActiveDropdown(null)}
              />
            </div>
          )
        })}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              className="absolute inset-x-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, index) => {
                  const serviceData = getServiceData(link.name)
                  const hasDropdown = link.hasDropdown && serviceData

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {hasDropdown ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between py-3 font-display text-xl text-text-primary transition-colors hover:text-primary"
                            onClick={() => toggleMobileDropdown(link.name)}
                          >
                            {link.name}
                            <ChevronDown
                              size={20}
                              className={cn(
                                "transition-transform duration-200",
                                activeMobileDropdown === link.name && "rotate-180"
                              )}
                            />
                          </button>
                          <MobileSubMenu
                            serviceData={serviceData}
                            isOpen={activeMobileDropdown === link.name}
                            onClose={() => setIsMobileMenuOpen(false)}
                          />
                        </>
                      ) : link.href.startsWith('/') ? (
                        <Link
                          href={link.href}
                          className="block py-3 font-display text-xl text-text-primary transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="block py-3 font-display text-xl text-text-primary transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
