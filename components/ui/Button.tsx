'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, ...props }, ref) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group'

    const variants = {
      primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-green-lg',
      secondary:
        'border-2 border-primary/30 bg-transparent text-primary hover:bg-primary/5 hover:border-primary hover:shadow-green-sm',
      ghost: 'bg-transparent text-text-secondary hover:text-primary hover:bg-primary/5',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const content = (
      <>
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
