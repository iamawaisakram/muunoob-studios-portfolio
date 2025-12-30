# [Your Company Name] - Portfolio Website

A highly advanced, futuristic company portfolio website built with Next.js 15, Three.js, and Tailwind CSS. Features stunning 3D particle effects, smooth animations, and a fully responsive design optimized for Vercel deployment.

## Features

- **3D Visual Effects**: Interactive particle systems and floating geometric shapes using Three.js/React Three Fiber
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Futuristic Design**: Cyberpunk-inspired color scheme (Cyan/Purple/Pink)
- **Fully Responsive**: Mobile-first design with optimized touch interactions
- **High Performance**: Optimized for Core Web Vitals and fast loading
- **SEO Ready**: Meta tags, Open Graph, structured data, sitemap, and robots.txt
- **Security Hardened**: CSP headers, XSS protection, and other security headers
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Space Grotesk
- **Code Quality**: ESLint + Prettier

## Sections

1. **Hero** - Full-screen 3D animated background with CTAs
2. **About** - Company mission, vision, and animated statistics
3. **Services** - 6 service cards with 3D hover effects
4. **Portfolio** - Filterable project gallery
5. **Team** - 4 team member cards with social links
6. **Technologies** - Animated tech stack showcase
7. **Testimonials** - Client reviews carousel
8. **Contact** - Form with validation

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## Customization

### Company Name

Search and replace `[Your Company Name]` throughout the codebase with your actual company name. Key files:

- `lib/constants.ts` - Main content data
- `lib/seo.ts` - SEO metadata
- `public/manifest.json` - PWA manifest

### Content

All website content is centralized in `lib/constants.ts`:

- Navigation links
- Hero content
- About section
- Services
- Portfolio projects
- Team members
- Technologies
- Testimonials
- Contact information
- Footer links

### Colors

Customize the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#00d4ff',    // Cyan
  secondary: '#8b5cf6',  // Purple
  accent: '#ec4899',     // Pink
  dark: '#0a0a0f',       // Background
}
```

### Environment Variables

Copy `.env.example` to `.env.local` and update:

```env
NEXT_PUBLIC_SITE_URL=https://yourcompany.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set environment variables
4. Deploy

The site is automatically optimized for Vercel deployment.

### Other Platforms

```bash
pnpm build
pnpm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Main page
  globals.css         # Global styles
  robots.ts           # Robots.txt generator
  sitemap.ts          # Sitemap generator
/components
  /layout             # Navbar, Footer
  /sections           # Page sections
  /three              # 3D components
  /ui                 # Reusable UI components
/lib
  constants.ts        # Site content
  seo.ts              # SEO configuration
  utils.ts            # Utility functions
/public               # Static assets
```

## Performance

- Static page generation
- Image optimization
- Code splitting
- Lazy loading for 3D components
- Reduced motion for accessibility

## Security

Security headers configured in `next.config.ts`:

- Content Security Policy
- Strict Transport Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## License

MIT
