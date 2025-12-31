'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { ThemeType } from '@/lib/theme'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  theme?: ThemeType
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, theme = 'development', ...props }, ref) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group'

    // Theme-specific variant styles
    const getVariantStyles = () => {
      const themeStyles = {
        development: {
          primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-green-lg',
          secondary: 'border-2 border-primary/30 bg-transparent text-primary hover:bg-primary/5 hover:border-primary hover:shadow-green-sm',
          ghost: 'bg-transparent text-text-secondary hover:text-primary hover:bg-primary/5',
          hoverGradient: 'from-primary-500 to-secondary-600',
        },
        analytics: {
          primary: 'bg-gradient-to-r from-analytics to-analytics-secondary text-white hover:shadow-analytics-lg',
          secondary: 'border-2 border-analytics/30 bg-transparent text-analytics hover:bg-analytics/5 hover:border-analytics hover:shadow-analytics-sm',
          ghost: 'bg-transparent text-text-secondary hover:text-analytics hover:bg-analytics/5',
          hoverGradient: 'from-analytics-600 to-analytics-secondary-600',
        },
        creative: {
          primary: 'bg-gradient-to-r from-creative to-creative-secondary text-white hover:shadow-creative-lg',
          secondary: 'border-2 border-creative/30 bg-transparent text-creative hover:bg-creative/5 hover:border-creative hover:shadow-creative-sm',
          ghost: 'bg-transparent text-text-secondary hover:text-creative hover:bg-creative/5',
          hoverGradient: 'from-creative-600 to-creative-secondary-600',
        },
      }
      return themeStyles[theme]
    }

    const themeStyles = getVariantStyles()
    const variants = {
      primary: themeStyles.primary,
      secondary: themeStyles.secondary,
      ghost: themeStyles.ghost,
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const content = (
      <>
        {variant === 'primary' && (
          <span className={cn("absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100", themeStyles.hoverGradient)} />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    )

    if (href) {
      return (
        <motion.a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
