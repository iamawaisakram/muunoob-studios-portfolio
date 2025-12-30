// Types for service pages

export interface SubService {
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  features: string[]
  techStack: {
    category: string
    technologies: string[]
  }[]
  workflow: {
    step: number
    title: string
    description: string
  }[]
  whyChooseUs: {
    title: string
    description: string
    icon: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export interface ServiceCategory {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  subCategories: {
    name: string
    services: SubService[]
  }[]
}

export type ServiceType = 'development' | 'business-analytics' | 'creative'

