// Theme configuration for different service areas

export type ThemeType = 'development' | 'analytics' | 'creative'

export interface ThemeConfig {
  name: string
  primary: string
  secondary: string
  accent: string
  // Tailwind class names
  textGradient: string
  bgGradient: string
  bgSection: string
  dotPattern: string
  natureBg: string
  // Color classes
  primaryColor: string
  secondaryColor: string
  accentColor: string
  // Shadow classes
  shadow: string
  shadowLg: string
  shadowSm: string
  // Button classes
  btnPrimary: string
  btnSecondary: string
  // Decorative blob classes
  blobPrimary: string
  blobSecondary: string
  blobAccent: string
}

export const themes: Record<ThemeType, ThemeConfig> = {
  development: {
    name: 'Development',
    primary: '#62c3a4',
    secondary: '#3b7562',
    accent: '#c8e6d8',
    textGradient: 'text-gradient',
    bgGradient: 'bg-gradient-to-br from-light via-light-200 to-mint/20',
    bgSection: 'bg-light',
    dotPattern: 'soft-dots',
    natureBg: 'nature-bg',
    primaryColor: 'text-primary',
    secondaryColor: 'text-secondary',
    accentColor: 'text-mint',
    shadow: 'shadow-green',
    shadowLg: 'shadow-green-lg',
    shadowSm: 'shadow-green-sm',
    btnPrimary: 'btn-primary',
    btnSecondary: 'btn-secondary',
    blobPrimary: 'bg-primary/10',
    blobSecondary: 'bg-secondary/10',
    blobAccent: 'bg-mint/30',
  },
  analytics: {
    name: 'Business Analytics',
    primary: '#3b82f6',
    secondary: '#1e40af',
    accent: '#dbeafe',
    textGradient: 'text-gradient-analytics',
    bgGradient: 'bg-gradient-analytics',
    bgSection: 'bg-gradient-analytics-section',
    dotPattern: 'soft-dots-analytics',
    natureBg: 'nature-bg-analytics',
    primaryColor: 'text-analytics',
    secondaryColor: 'text-analytics-secondary',
    accentColor: 'text-analytics-mint',
    shadow: 'shadow-analytics',
    shadowLg: 'shadow-analytics-lg',
    shadowSm: 'shadow-analytics-sm',
    btnPrimary: 'btn-analytics',
    btnSecondary: 'btn-analytics-secondary',
    blobPrimary: 'bg-analytics/10',
    blobSecondary: 'bg-analytics-secondary/10',
    blobAccent: 'bg-analytics-mint/30',
  },
  creative: {
    name: 'Creative',
    primary: '#ec4899',
    secondary: '#be185d',
    accent: '#fce7f3',
    textGradient: 'text-gradient-creative',
    bgGradient: 'bg-gradient-creative',
    bgSection: 'bg-gradient-creative-section',
    dotPattern: 'soft-dots-creative',
    natureBg: 'nature-bg-creative',
    primaryColor: 'text-creative',
    secondaryColor: 'text-creative-secondary',
    accentColor: 'text-creative-mint',
    shadow: 'shadow-creative',
    shadowLg: 'shadow-creative-lg',
    shadowSm: 'shadow-creative-sm',
    btnPrimary: 'btn-creative',
    btnSecondary: 'btn-creative-secondary',
    blobPrimary: 'bg-creative/10',
    blobSecondary: 'bg-creative-secondary/10',
    blobAccent: 'bg-creative-mint/30',
  },
}

export function getTheme(type: ThemeType): ThemeConfig {
  return themes[type]
}

export function getThemeFromSlug(slug: string): ThemeType {
  switch (slug) {
    case 'business-analytics':
      return 'analytics'
    case 'creative':
      return 'creative'
    case 'development':
    default:
      return 'development'
  }
}
