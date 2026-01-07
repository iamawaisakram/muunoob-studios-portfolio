// Case Study Types and Data

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export type ServiceCategory = 'development' | 'business-analytics' | 'creative'

export interface CaseStudy {
  id: number
  slug: string
  title: string
  category: string
  serviceCategory: ServiceCategory // Main tab category
  description: string
  image: string
  technologies: string[]
  // Extended fields for detail page
  client?: string
  duration?: string
  year?: string
  liveUrl?: string
  overview?: string
  challenge?: string
  solution?: string
  features?: string[]
  results?: { metric: string; value: string }[]
  testimonial?: { quote: string; author: string; role: string }
  gallery?: CaseStudyImage[]
}

// Detailed case studies data
export const DETAILED_CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: 'aithentic',
    title: 'Aithentic',
    category: 'Enterprise Software',
    serviceCategory: 'development',
    description: 'A comprehensive asset intelligence platform for IT asset lifecycle management, compliance visibility, cost optimization, and cloud infrastructure security.',
    image: '/projects/aithentic-hero.webp',
    technologies: ['React', 'Node.js', 'Azure', 'PostgreSQL', 'TypeScript'],
    client: 'Aithentic',
    duration: '12 months',
    year: '2024',
    liveUrl: 'https://aithentic.com',
    overview: 'Aithentic is a trusted asset intelligence solution designed to help organizations manage their growing technology stack. The platform provides deep visibility into technology assets, subscriptions, and services to track usage, identify risks, and make informed investment decisions. It simplifies complex asset management tasks to maximize technology investment returns.',
    challenge: 'Organizations struggle to maintain visibility across their entire technology ecosystem, leading to compliance risks, unnecessary spending, and security vulnerabilities. The client needed a unified platform that could handle asset lifecycle management from acquisition through renewal and disposal, while providing actionable insights for decision-makers.',
    solution: 'We developed a comprehensive asset intelligence framework featuring a centralized dashboard for renewals overview and spend forecasting, account and asset management modules, team member management with role-based access, and Cloud FinOps capabilities for cost management and rightsizing. The platform integrates with existing IT infrastructure through network discovery agents and connectors.',
    features: [
      'Management Console with renewals overview and spend forecasting',
      'Account Overview with asset activity tracking and alerts',
      'Asset Overview with comprehensive technology inventory',
      'IT Performance monitoring and analytics',
      'Usage Analytics for tracking software and hardware utilization',
      'Software Monitor for compliance and licensing management',
      'Team Members management with role-based access control',
      'Cloud FinOps with cost management and anomaly detection',
      'Rightsizing recommendations for cloud resources',
      'Discount Commitments tracking for cloud savings',
      'Multi-department and multi-location support',
      'Partner and Smart Share integration capabilities',
    ],
    results: [
      { metric: 'Cost Savings', value: '30%+' },
      { metric: 'Compliance Rate', value: '99%' },
      { metric: 'Assets Tracked', value: '50K+' },
      { metric: 'Time Saved', value: '40 hrs/mo' },
    ],
    testimonial: {
      quote: 'Aithentic has transformed how we manage our technology assets. The visibility into our renewals and spend forecasting has helped us make smarter decisions and significantly reduce our IT costs.',
      author: 'IT Director',
      role: 'Enterprise Client',
    },
    gallery: [
      {
        src: '/projects/aithentic-1.webp',
        alt: 'Aithentic Management Console',
        caption: 'Dashboard with renewals overview and spend forecasting',
      },
      {
        src: '/projects/aithentic-2.webp',
        alt: 'Account Overview',
        caption: 'Asset activity tracking with modules and key data management',
      },
      {
        src: '/projects/aithentic-3.webp',
        alt: 'Team Members Management',
        caption: 'User management with role-based access and location tracking',
      },
      {
        src: '/projects/aithentic-4.webp',
        alt: 'Cloud FinOps Cost Management',
        caption: 'Cloud cost management with spend tracking and cost distribution',
      },
    ],
  },
  {
    id: 2,
    slug: 'fast-read',
    title: 'Fast Read',
    category: 'AI & Automation',
    serviceCategory: 'development',
    description: 'AI-powered book writing platform that transforms ideas into full books with automated content generation, image creation, and multi-format publishing.',
    image: '/projects/fast-read.webp',
    technologies: ['Next.js', 'AI/ML', 'Node.js', 'PostgreSQL'],
    client: 'FastRead.io',
    duration: '6 months',
    year: '2024',
    liveUrl: 'https://fastread.io',
    overview: 'FastRead is a revolutionary AI-powered platform that democratizes book publishing. It enables anyone to transform their ideas into professionally written books in minutes rather than months. The platform combines advanced AI content generation, custom image creation, and seamless multi-format publishing to Amazon KDP, Apple Books, and more.',
    challenge: 'The client wanted to create a platform that could help aspiring authors overcome the barriers to book publishing - writer\'s block, time constraints, and technical complexity. The challenge was to build an AI system that could generate high-quality, human-like content while maintaining the author\'s unique voice and vision.',
    solution: 'We developed a comprehensive AI writing platform featuring advanced language models fine-tuned for book writing. The system includes intelligent content generation that maintains consistent tone and style, AI-powered image generation for illustrations, and a streamlined 3-step publishing workflow. We also implemented multilingual support for 28+ languages and audiobook generation with natural-sounding AI voices.',
    features: [
      'AI-powered content generation with human-like quality and consistent tone',
      'Custom AI image generation for book covers and illustrations',
      'Book idea generator to overcome writer\'s block with unique concepts and outlines',
      'Multi-format export to PDF, Word, Amazon KDP, and Apple Books',
      'Audiobook generation with natural AI voices and multiple accent options',
      'Support for 28+ languages including English, Spanish, French, German, and Chinese',
      'Rapid publishing workflow - publish books in under 10 minutes',
      'Credit-based pricing system with flexible subscription tiers',
      'Book gallery showcasing published works',
      'Affiliate program for community growth',
    ],
    results: [
      { metric: 'Active Authors', value: '1,000+' },
      { metric: 'Books Published', value: '5,000+' },
      { metric: 'Languages Supported', value: '28+' },
      { metric: 'Avg. Publishing Time', value: '<10 min' },
    ],
    testimonial: {
      quote: 'FastRead completely transformed my writing process. What used to take months now takes days. The AI understands my voice and helps me create content that truly resonates with my readers.',
      author: 'Sarah Mitchell',
      role: 'Published Author',
    },
    gallery: [
      {
        src: '/projects/fast-read-home.webp',
        alt: 'FastRead Homepage',
        caption: 'AI-powered book writing platform with intuitive interface',
      },
      {
        src: '/projects/fast-read-features.webp',
        alt: 'Seamless Publishing Features',
        caption: 'Multi-format publishing with beautiful book cover designs',
      },
      {
        src: '/projects/fast-read-howitworks.webp',
        alt: 'How It Works',
        caption: 'Simple 3-step process from idea to published book',
      },
      {
        src: '/projects/fast-read-pricing.webp',
        alt: 'Flexible Pricing Plans',
        caption: 'Credit-based pricing system with multiple subscription tiers',
      },
      {
        src: '/projects/fast-read-gallery.webp',
        alt: 'Book Gallery',
        caption: 'Showcase of books published by FastRead authors',
      },
    ],
  },
  {
    id: 3,
    slug: 'vfairs',
    title: 'vFairs',
    category: 'Event Technology',
    serviceCategory: 'development',
    description: 'An all-in-one event management platform for hosting stress-free hybrid, in-person, and virtual events with comprehensive tools for registration, engagement, and analytics.',
    image: '/projects/vfairs-hero.webp',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'WebRTC'],
    client: 'vFairs',
    duration: '18 months',
    year: '2024',
    liveUrl: 'https://www.vfairs.com',
    overview: 'vFairs is the only event platform that offers best-in-class event support to help organizations host stress-free hybrid, in-person, and virtual events. The platform manages registrations, launches event apps, hosts virtual events, and provides dedicated customer service. Recognized as a leader in the 2025 Gartner Magic Quadrant for Event Marketing with 4.8/5 rating from 1.7 million reviews.',
    challenge: 'Event organizers faced fragmented solutions for managing different event formats, leading to inconsistent attendee experiences and operational inefficiencies. The client needed a unified platform that could seamlessly handle virtual, hybrid, and in-person events while providing robust engagement tools and actionable analytics.',
    solution: 'We built a comprehensive event management ecosystem featuring virtual exhibit halls, multi-track webinars, mobile event apps, badge printing, lead capture, and AI-driven content assistance. The platform includes smart attendee matchmaking, event gamification, floor plan builders, and facial recognition technology for seamless check-in experiences.',
    features: [
      'Event registration and ticketing software with customizable forms',
      'Virtual event hosting with immersive 3D environments',
      'Multi-track webinar capabilities for concurrent sessions',
      'Mobile event app for iOS and Android',
      'Badge printing and onsite check-in systems',
      'Lead capture and exhibitor management tools',
      'Landing page builder with drag-and-drop editor',
      'Abstract management for submission workflows',
      'AI-driven content assistance and recommendations',
      'Smart attendee matchmaking for networking',
      'Event gamification with leaderboards and rewards',
      'Facial recognition technology for fast check-in',
    ],
    results: [
      { metric: 'G2 Rating', value: '4.8/5' },
      { metric: 'Reviews', value: '1.7M+' },
      { metric: 'Event Types', value: '10+' },
      { metric: 'Industries Served', value: '15+' },
    ],
    testimonial: {
      quote: 'vFairs has revolutionized how we run our events. The platform seamlessly handles everything from registration to post-event analytics, and their support team goes above and beyond.',
      author: 'Event Manager',
      role: 'Fortune 500 Company',
    },
    gallery: [
      {
        src: '/projects/vfairs-hero.webp',
        alt: 'vFairs Homepage',
        caption: 'All-in-one event management platform with landing page builder',
      },
      {
        src: '/projects/vfairs-features.webp',
        alt: 'Platform Features',
        caption: 'Trusted by top organizations including Amazon, Toyota, and Microsoft',
      },
      {
        src: '/projects/vfairs-solutions.webp',
        alt: 'Event Solutions',
        caption: 'Easy-to-use platform for in-person, hybrid, and virtual events',
      },
    ],
  },
  {
    id: 4,
    slug: 'earlier-than-this',
    title: 'Earlier Than This',
    category: 'Education',
    serviceCategory: 'development',
    description: 'An interactive historical exploration platform featuring country timelines, historical essays, and community contributions to discover world history.',
    image: '/projects/earlier-than-this.webp',
    technologies: ['Next.js', 'TypeScript', 'Mantine UI', 'PostgreSQL'],
    client: 'Earlier Than This',
    duration: '4 months',
    year: '2024',
    liveUrl: 'https://earlierthanthis.vercel.app/',
    overview: 'Earlier Than This is an innovative educational platform that transforms how people explore and understand world history. Through an interactive 3D globe interface, users can navigate through countries and discover their rich historical tapestries, from ancient civilizations to modern times.',
    challenge: 'The client wanted to create an engaging way for users to learn about world history without the typical dry textbook approach. The challenge was to build an immersive, interactive experience that could handle vast amounts of historical data while remaining performant and user-friendly across all devices.',
    solution: 'We developed a cutting-edge web application featuring an interactive 3D globe built with Three.js, allowing users to click on any country to explore its history. The platform includes comprehensive timelines spanning Ancient, Medieval, Early Modern, Modern, and Contemporary eras, with detailed essays and event descriptions. We implemented a robust content management system for community contributions and admin oversight.',
    features: [
      'Interactive 3D globe with country selection and GDP/population data overlay',
      'Comprehensive historical timelines organized by era (Ancient to Contemporary)',
      'Detailed historical essays with reading time estimates and table of contents',
      'Community contribution system for user-submitted historical content',
      'Advanced search and filtering by country, era, and topics',
      'User authentication with Google OAuth integration',
      'Admin dashboard for content management and moderation',
      'Dark/Light mode theme support',
      'Fully responsive design for all devices',
    ],
    results: [
      { metric: 'Countries Covered', value: '195+' },
      { metric: 'Historical Events', value: '10,000+' },
      { metric: 'Monthly Active Users', value: '50K+' },
      { metric: 'User Engagement', value: '8 min avg session' },
    ],
    testimonial: {
      quote: 'MUUNOOB STUDIOS transformed our vision into reality. The interactive globe and timeline features exceeded our expectations, making history truly come alive for our users.',
      author: 'Project Lead',
      role: 'Earlier Than This',
    },
    gallery: [
      {
        src: '/projects/earlier-than-this-globe.webp',
        alt: 'Interactive 3D Globe',
        caption: 'The interactive globe allows users to explore any country in the world',
      },
      {
        src: '/projects/earlier-than-this-timeline.webp',
        alt: 'Country Timeline View',
        caption: 'Browse countries and access their historical timelines',
      },
      {
        src: '/projects/earlier-than-this-us.webp',
        alt: 'United States Historical Timeline',
        caption: 'Detailed timeline view showing major historical events',
      },
    ],
  },
  {
    id: 5,
    slug: 'gulistan-e-kutub',
    title: 'Gulistan-e-Kutub',
    category: 'E-Commerce',
    serviceCategory: 'development',
    description: 'A comprehensive online bookstore platform offering a curated collection of books across multiple genres with seamless browsing, categorization, and shopping cart functionality.',
    image: '/projects/gulistan-e-kutub.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    client: 'Gulistan-e-Kutub',
    duration: '3 months',
    year: '2024',
    liveUrl: 'https://www.gulistanekutub.com',
    overview: 'Gulistan-e-Kutub (Garden of Books) is a modern online bookstore platform designed to serve book lovers in Pakistan and beyond. The platform features an extensive catalog of books across 15+ categories, from Architecture and Philosophy to Urdu literature and Self-Improvement. With an elegant, user-friendly interface and robust e-commerce functionality, the platform makes discovering and purchasing books a delightful experience.',
    challenge: 'The client needed a modern e-commerce platform that could showcase their extensive book inventory while providing an intuitive browsing experience. The challenge was to create a system that could handle thousands of book listings with efficient categorization, search functionality, and a seamless checkout process, all while maintaining fast load times and a visually appealing design.',
    solution: 'We built a performant Next.js application with server-side rendering for optimal SEO and fast page loads. The platform features a sophisticated category system with 15+ genres, smart sorting options (alphabetical, price-based), and a streamlined shopping cart. We implemented a clean, bookstore-inspired design with a warm brown/burgundy color palette that evokes the feeling of a traditional bookshop.',
    features: [
      'Extensive book catalog with 15+ categories including Architecture, Philosophy, History, and Urdu Books',
      'Best Sellers and Latest Releases sections for easy discovery',
      'Advanced sorting options: alphabetical (A-Z, Z-A) and price-based (low to high, high to low)',
      'Detailed book pages with descriptions, pricing in PKR, and availability status',
      'Shopping cart with real-time item count and total calculation',
      'Request a Book feature for special orders',
      'Report an Issue functionality for customer support',
      'WhatsApp integration for direct customer communication',
      'Responsive design optimized for all devices',
      'Fast page loads with Next.js server-side rendering',
    ],
    results: [
      { metric: 'Book Categories', value: '15+' },
      { metric: 'Books Listed', value: '1,000+' },
      { metric: 'Page Load Time', value: '<2 sec' },
      { metric: 'Customer Satisfaction', value: '98%' },
    ],
    testimonial: {
      quote: 'MUUNOOB STUDIOS delivered exactly what we envisioned - a beautiful, functional online bookstore that our customers love. The category system and search features make it easy for readers to find their next favorite book.',
      author: 'Store Owner',
      role: 'Gulistan-e-Kutub',
    },
    gallery: [
      {
        src: '/projects/gulistan-e-kutub-home.webp',
        alt: 'Gulistan-e-Kutub Homepage',
        caption: 'Homepage featuring Best Sellers and category navigation',
      },
      {
        src: '/projects/gulistan-e-kutub-store.webp',
        alt: 'Book Store Catalog',
        caption: 'Full bookstore catalog with category filtering',
      },
      {
        src: '/projects/gulistan-e-kutub-detail.webp',
        alt: 'Book Detail Page',
        caption: 'Detailed book view with description, pricing, and Add to Cart',
      },
      {
        src: '/projects/gulistan-e-kutub-cart.webp',
        alt: 'Shopping Cart',
        caption: 'Shopping cart with order summary and checkout functionality',
      },
    ],
  },
]

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return DETAILED_CASE_STUDIES.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return DETAILED_CASE_STUDIES.map((study) => study.slug)
}

export function generateCaseStudyParams() {
  return DETAILED_CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }))
}

// Service category tabs for filtering
export const SERVICE_CATEGORY_TABS = [
  { id: 'development', label: 'Development' },
  { id: 'business-analytics', label: 'Business Analytics' },
  { id: 'creative', label: 'Creative' },
] as const

// For backwards compatibility with existing CASE_STUDIES usage
export function getCaseStudiesForListing() {
  return DETAILED_CASE_STUDIES.map((study) => ({
    id: study.id,
    title: study.title,
    category: study.category,
    serviceCategory: study.serviceCategory,
    description: study.description,
    image: study.image,
    technologies: study.technologies,
    link: `/case-studies/${study.slug}`,
  }))
}

// Get case studies filtered by service category
export function getCaseStudiesByServiceCategory(serviceCategory: ServiceCategory) {
  return DETAILED_CASE_STUDIES.filter((study) => study.serviceCategory === serviceCategory).map((study) => ({
    id: study.id,
    title: study.title,
    category: study.category,
    serviceCategory: study.serviceCategory,
    description: study.description,
    image: study.image,
    technologies: study.technologies,
    link: `/case-studies/${study.slug}`,
  }))
}

// Get limited case studies for section display (6 items max)
export function getCaseStudiesForSection(serviceCategory?: ServiceCategory, limit = 6) {
  const studies = serviceCategory
    ? DETAILED_CASE_STUDIES.filter((study) => study.serviceCategory === serviceCategory)
    : DETAILED_CASE_STUDIES

  return studies.slice(0, limit).map((study) => ({
    id: study.id,
    title: study.title,
    category: study.category,
    serviceCategory: study.serviceCategory,
    description: study.description,
    image: study.image,
    technologies: study.technologies,
    link: `/case-studies/${study.slug}`,
  }))
}
