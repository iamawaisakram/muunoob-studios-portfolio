import {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Search,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Palette,
  Briefcase,
  Users,
  Building2,
  ChevronDown,
} from 'lucide-react'

export const COMPANY_NAME = 'MUUNOOB STUDIOS'
export const COMPANY_TAGLINE = 'Transforming Ideas Into Digital Reality'
export const COMPANY_DESCRIPTION =
  'We craft innovative software solutions that drive business growth and deliver exceptional user experiences.'

// Navigation structure with dropdowns
export const NAV_LINKS = [
  { name: 'About Us', href: '/about', hasDropdown: false },
  { name: 'Development', href: '#development', hasDropdown: true },
  { name: 'Business Analytics', href: '#business-analytics', hasDropdown: true },
  { name: 'Creative', href: '#creative', hasDropdown: true },
  { name: 'Case Studies', href: '/case-studies', hasDropdown: false },
  { name: 'Hire a Resource', href: '/hire-resource', hasDropdown: false },
  { name: 'Who We Help', href: '/who-we-help', hasDropdown: false },
]

// Development Services Dropdown
export const DEVELOPMENT_SERVICES = {
  'Web, App & System Development': [
    'Website Design & Development',
    'Web Application Development',
    'Mobile App Development (iOS & Android)',
    'SaaS Product Development',
    'Custom Software Development',
  ],
  'E-Commerce & Platforms': [
    'Shopify Development & Optimization',
    'WooCommerce Development',
    'Custom E-Commerce Solutions',
    'Payment Gateway Integration',
  ],
  'Backend & Infrastructure': [
    'API Development & Integration',
    'Third-Party System Integrations',
    'Database Architecture & Optimization',
    'Cloud Deployment & Hosting Setup',
  ],
  'Performance & Security': [
    'Website Speed Optimization',
    'Security Hardening & Data Protection',
    'Maintenance & Support',
    'Scalability & Performance Consulting',
  ],
}

// Business Analytics Dropdown
export const BUSINESS_ANALYTICS = {
  'Business Solutions': [
    'Business Process Analysis & Optimization',
    'Operations & Workflow Design',
    'CRM Implementation & Optimization',
    'HR & Resource Management Systems',
    'Property Management Systems',
    'Event & Booking Management Systems',
    'Portfolio & Investment Management Systems',
    'Digital Marketing & Content Production Systems',
  ],
  'Technology & Automation Solutions': [
    'RevOps Strategy & Implementation',
    'AI-Powered Business Automation',
    'Workflow Automation (Zapier, Make, Custom)',
    'Low-Code / No-Code Development',
    'Custom API & System Integration',
    'Project Management Systems Setup (ClickUp, Asana, Monday)',
    'Data Analytics, Reporting & Dashboards',
    'SOP Development & Team Training',
  ],
}

// Creative Portfolio Projects (from Behance)
// Supports YouTube videos and images
export interface CreativeProject {
  id: string
  title: string
  category: 'branding' | 'video' | 'motion' | 'social' | 'ui-ux' | 'packaging'
  thumbnail: string
  media: {
    type: 'youtube' | 'image'
    url: string // YouTube video ID for youtube type, or image URL for image type
  }
  description: string
  behanceUrl?: string
  tags: string[]
}

export const CREATIVE_PORTFOLIO: CreativeProject[] = [
  {
    id: 'video-1',
    title: 'Creative Showcase 1',
    category: 'video',
    thumbnail: '',
    media: {
      type: 'youtube',
      url: 'rk4jTGTOJrk',
    },
    description: 'Professional video production showcasing creative excellence.',
    behanceUrl: 'https://www.behance.net/daniyalabdullrazzaq',
    tags: ['Video Production', 'Creative'],
  },
  {
    id: 'video-2',
    title: 'Creative Showcase 2',
    category: 'video',
    thumbnail: '',
    media: {
      type: 'youtube',
      url: 'RdTJXi0k_c4',
    },
    description: 'Engaging video content crafted with attention to detail.',
    behanceUrl: 'https://www.behance.net/daniyalabdullrazzaq',
    tags: ['Video Editing', 'Content'],
  },
  {
    id: 'video-3',
    title: 'Creative Showcase 3',
    category: 'video',
    thumbnail: '',
    media: {
      type: 'youtube',
      url: 'vyHh2cvIkMo',
    },
    description: 'Dynamic visual storytelling through professional editing.',
    behanceUrl: 'https://www.behance.net/daniyalabdullrazzaq',
    tags: ['Video Production', 'Storytelling'],
  },
  {
    id: 'video-4',
    title: 'Creative Showcase 4',
    category: 'video',
    thumbnail: '',
    media: {
      type: 'youtube',
      url: 'rcZULDeenyk',
    },
    description: 'High-quality video production with creative direction.',
    behanceUrl: 'https://www.behance.net/daniyalabdullrazzaq',
    tags: ['Video', 'Creative Direction'],
  },
]

export const CREATIVE_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'video', label: 'Video' },
  { id: 'motion', label: 'Motion' },
  { id: 'social', label: 'Social Media' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'packaging', label: 'Packaging' },
]

// Creative Services Dropdown
export const CREATIVE_SERVICES = {
  'Branding & Graphic Design': [
    'Logo Design & Brand Identity',
    'UI/UX Design for Web & Apps',
    'Social Media Design',
    'Ad Creatives & Campaign Assets',
    'Pitch Decks & Business Presentations',
    'Print & Packaging Design',
  ],
  'Video & Content Production': [
    'Video Editing (Long-Form & Short-Form)',
    'Podcast Editing & Production',
    'Social Media Reels & Shorts',
    'Motion Graphics & Animations',
    'YouTube & Content-Driven Video Editing',
  ],
}

// Case Studies (Portfolio Projects)
export const CASE_STUDIES = [
  {
    id: 1,
    title: 'AI thentic',
    category: 'AI & Automation',
    description: 'An innovative AI-powered platform delivering intelligent automation solutions.',
    image: '/projects/ai-thentic.jpg',
    technologies: ['AI/ML', 'Python', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Fast Read',
    category: 'Education',
    description: 'Speed reading application designed to improve reading efficiency and comprehension.',
    image: '/projects/fast-read.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 3,
    title: 'Sensys',
    category: 'IoT & Systems',
    description: 'Comprehensive sensor management system for industrial applications.',
    image: '/projects/sensys.jpg',
    technologies: ['IoT', 'Python', 'React', 'AWS'],
    link: '#',
  },
  {
    id: 4,
    title: 'Earlier Than This',
    category: 'Education',
    description: 'An interactive historical exploration platform featuring country timelines, historical essays, and community contributions to discover world history.',
    image: '/projects/earlier-than-this.png',
    technologies: ['Next.js', 'TypeScript', 'Mantine UI', 'PostgreSQL'],
    link: 'https://earlierthanthis.vercel.app/',
  },
  {
    id: 5,
    title: 'Urdu Lughat',
    category: 'Language & Education',
    description: 'Comprehensive Urdu dictionary and language learning platform.',
    image: '/projects/urdu-lughat.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'NLP'],
    link: '#',
  },
]

// Industries (Who We Help)
export const INDUSTRIES = [
  {
    name: 'Travel & Hospitality',
    icon: '✈️',
    description: 'Digital solutions for hotels, airlines, and travel agencies.',
  },
  {
    name: 'Public Sector',
    icon: '🏛️',
    description: 'Government and civic technology solutions.',
  },
  {
    name: 'Telecommunication',
    icon: '📡',
    description: 'Solutions for telecom providers and communication platforms.',
  },
  {
    name: 'Retail & CPG',
    icon: '🛒',
    description: 'E-commerce and retail management solutions.',
  },
  {
    name: 'Oil, Gas & Energy',
    icon: '⚡',
    description: 'Digital transformation for energy sector.',
  },
  {
    name: 'Startups',
    icon: '🚀',
    description: 'MVP development and scalable solutions for startups.',
  },
  {
    name: 'E-commerce',
    icon: '🛍️',
    description: 'Complete e-commerce platforms and marketplace solutions.',
  },
  {
    name: 'Banking & Fintech',
    icon: '🏦',
    description: 'Secure financial technology and banking solutions.',
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    icon: '🏥',
    description: 'Healthcare management and pharmaceutical solutions.',
  },
  {
    name: 'Gaming',
    icon: '🎮',
    description: 'Game development and gaming platform solutions.',
  },
]

// Hire a Resource options
export const HIRE_RESOURCE = {
  title: 'Hire a Resource',
  subtitle: 'Flexible Talent Solutions for Your Business',
  description: 'Get access to skilled professionals on-demand. Whether you need a dedicated team or individual experts, we provide the right talent for your projects.',
  options: [
    {
      title: 'Dedicated Developers',
      description: 'Full-time developers working exclusively on your project.',
      features: ['Full-time commitment', 'Direct communication', 'Flexible duration', 'Technical expertise'],
    },
    {
      title: 'Project-Based Teams',
      description: 'Complete teams assembled for specific project needs.',
      features: ['End-to-end delivery', 'Project management included', 'Scalable team size', 'Fixed timelines'],
    },
    {
      title: 'Staff Augmentation',
      description: 'Supplement your existing team with our skilled professionals.',
      features: ['Quick onboarding', 'Seamless integration', 'Skill gap filling', 'Cost-effective'],
    },
  ],
}

export const HERO_CONTENT = {
  title: COMPANY_NAME,
  subtitle: COMPANY_TAGLINE,
  description:
    'We build cutting-edge software solutions, stunning websites, and powerful mobile applications that transform your business and captivate your audience.',
  primaryCTA: 'Get Started',
  secondaryCTA: 'View Our Work',
}

export const ABOUT_CONTENT = {
  title: 'About Us',
  subtitle: 'Pioneering the Future of Digital Innovation',
  description: `At ${COMPANY_NAME}, we are passionate about leveraging technology to solve complex business challenges. Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that exceed expectations.`,
  mission:
    'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.',
  vision:
    'To be the global leader in digital transformation, recognized for our innovation, quality, and commitment to client success.',
  stats: [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '25+', label: 'Team Members' },
  ],
}

export const SERVICES = [
  {
    id: 'software',
    icon: Code2,
    title: 'Software Solutions',
    description:
      'Custom enterprise software designed to streamline your operations and boost productivity.',
    features: [
      'Enterprise Applications',
      'Cloud Solutions',
      'API Development',
      'System Integration',
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    description:
      'Stunning, responsive websites that captivate visitors and convert them into customers.',
    features: [
      'Custom Web Design',
      'E-commerce Solutions',
      'CMS Development',
      'Progressive Web Apps',
    ],
  },
  {
    id: 'fullstack',
    icon: Layers,
    title: 'Full-Stack Applications',
    description:
      'End-to-end development of robust, scalable applications using cutting-edge technologies.',
    features: ['React & Next.js', 'Node.js & Python', 'Database Design', 'DevOps & CI/CD'],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Services',
    description:
      'Data-driven SEO strategies that improve your visibility and drive organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics & Reporting'],
  },
  {
    id: 'digital',
    icon: Sparkles,
    title: 'Digital Solutions',
    description: 'Comprehensive digital transformation services to modernize your business.',
    features: ['UI/UX Design', 'Digital Strategy', 'Brand Identity', 'Marketing Automation'],
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description:
      'A full-featured e-commerce platform with real-time inventory and AI-powered recommendations.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'software',
    description: 'Comprehensive healthcare management solution for hospitals and clinics.',
    image: '/projects/healthcare.jpg',
    technologies: ['React', 'Python', 'MongoDB', 'AWS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Cross-platform fitness app with workout tracking and social features.',
    image: '/projects/fitness.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    link: '#',
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    category: 'fullstack',
    description: 'Real-time financial analytics dashboard with advanced visualizations.',
    image: '/projects/finance.jpg',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'D3.js'],
    link: '#',
  },
  {
    id: 5,
    title: 'Travel Booking Platform',
    category: 'web',
    description: 'Modern travel booking platform with AI-powered trip planning.',
    image: '/projects/travel.jpg',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    link: '#',
  },
  {
    id: 6,
    title: 'Smart Home IoT App',
    category: 'mobile',
    description: 'IoT control application for smart home device management.',
    image: '/projects/smarthome.jpg',
    technologies: ['Flutter', 'MQTT', 'Node.js', 'MongoDB'],
    link: '#',
  },
]

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in technology and business strategy.',
    image: '/team/ceo.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Tech innovator specializing in scalable architectures and emerging technologies.',
    image: '/team/cto.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Michael Roberts',
    role: 'Lead Developer',
    bio: 'Full-stack expert passionate about clean code and exceptional user experiences.',
    image: '/team/lead-dev.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Creative Director',
    bio: 'Award-winning designer creating stunning visual experiences that inspire.',
    image: '/team/designer.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
]

export const TECHNOLOGIES = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Figma', category: 'Design' },
  { name: 'Tailwind CSS', category: 'Frontend' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'David Wilson',
    role: 'CEO, TechStart Inc.',
    content: `Working with ${COMPANY_NAME} was a game-changer for our business. They delivered a stunning e-commerce platform that exceeded all our expectations. The team's expertise and dedication are unmatched.`,
    rating: 5,
    image: '/testimonials/client1.jpg',
  },
  {
    id: 2,
    name: 'Jennifer Martinez',
    role: 'Founder, HealthPlus',
    content:
      'The mobile app they developed for us has transformed how we serve our customers. Their attention to detail and commitment to quality is exceptional. Highly recommended!',
    rating: 5,
    image: '/testimonials/client2.jpg',
  },
  {
    id: 3,
    name: 'Robert Thompson',
    role: 'CTO, FinanceFlow',
    content:
      'Outstanding technical expertise and seamless project management. They delivered our complex financial dashboard on time and within budget. A truly professional team.',
    rating: 5,
    image: '/testimonials/client3.jpg',
  },
]

export const CONTACT_INFO = {
  email: 'business@muunoobstudios.com',
  phone: '+923328390963',
  // address: '123 Innovation Street, Tech City, TC 12345',
  social: {
    twitter: '#',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
}

export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Development', href: '/services/development' },
    { name: 'Business Analytics', href: '/services/business-analytics' },
    { name: 'Creative Services', href: '/services/creative' },
    { name: 'Hire a Resource', href: '/hire-resource' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
}

export const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
  location: MapPin,
}
