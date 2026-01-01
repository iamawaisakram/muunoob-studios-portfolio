'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  link: string
  index?: number
}

export default function CaseStudyCard({
  title,
  category,
  description,
  image,
  technologies,
  link,
  index = 0,
}: Readonly<CaseStudyCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={link} className="block group">
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft border border-light-300 bg-gradient-to-br from-primary/20 to-mint/30"
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Full Image Background */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Subtle gradient overlay for text visibility (always visible) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category badge - always visible at top */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary shadow-soft-sm">
              {category}
            </span>
          </div>

          {/* Title always visible at bottom (fades out on hover) */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0 z-10">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              {title}
            </h3>
          </div>

          {/* Hover overlay with darker green tint for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-secondary/90 to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* Content on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              {/* Title */}
              <h3
                className="font-display text-xl md:text-2xl font-bold text-white mb-2 transform translate-y-4 opacity-0 transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-white text-sm leading-relaxed mb-3 line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                {description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4 transform translate-y-4 opacity-0 transition-all duration-300 delay-150 group-hover:translate-y-0 group-hover:opacity-100">
                {technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/25 backdrop-blur-sm text-white text-xs font-semibold border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="px-2.5 py-1 rounded-md bg-white/25 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                    +{technologies.length - 4}
                  </span>
                )}
              </div>

              {/* View Case Study CTA */}
              <div
                className="flex items-center gap-2 text-white font-semibold transform translate-y-4 opacity-0 transition-all duration-300 delay-200 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                <span>View Case Study</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
