'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className, delay = 0 }: AnimatedTextProps) {
  return (
    <motion.span
      className={cn('inline-block', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function GradientText({ text, className }: AnimatedTextProps) {
  return (
    <span
      className={cn(
        'animate-gradient-x bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent',
        className
      )}
    >
      {text}
    </span>
  )
}

export function GlowText({ text, className }: AnimatedTextProps) {
  return <span className={cn('glow-text', className)}>{text}</span>
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  className,
  duration = 2,
}: AnimatedCounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  )
}

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
}

export function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + index * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
