export * from './types'
export { developmentService } from './development'
export { businessAnalyticsService } from './business-analytics'
export { creativeService } from './creative'

import { developmentService } from './development'
import { businessAnalyticsService } from './business-analytics'
import { creativeService } from './creative'
import { ServiceCategory, ServiceType, SubService } from './types'

// All services map
export const services: Record<ServiceType, ServiceCategory> = {
  'development': developmentService,
  'business-analytics': businessAnalyticsService,
  'creative': creativeService,
}

// Helper function to get all sub-services as a flat array
export function getAllSubServices(): SubService[] {
  const allServices: SubService[] = []
  Object.values(services).forEach((service) => {
    service.subCategories.forEach((category) => {
      allServices.push(...category.services)
    })
  })
  return allServices
}

// Helper function to get a sub-service by slug
export function getSubServiceBySlug(slug: string): { service: SubService; parentService: ServiceCategory } | null {
  for (const service of Object.values(services)) {
    for (const category of service.subCategories) {
      const found = category.services.find((s) => s.slug === slug)
      if (found) {
        return { service: found, parentService: service }
      }
    }
  }
  return null
}

// Helper function to get service category by slug
export function getServiceBySlug(slug: ServiceType): ServiceCategory | null {
  return services[slug] || null
}

// Helper to generate static params for sub-services
export function generateSubServiceParams(): { service: string; slug: string }[] {
  const params: { service: string; slug: string }[] = []
  Object.entries(services).forEach(([serviceSlug, service]) => {
    service.subCategories.forEach((category) => {
      category.services.forEach((subService) => {
        params.push({
          service: serviceSlug,
          slug: subService.slug,
        })
      })
    })
  })
  return params
}

