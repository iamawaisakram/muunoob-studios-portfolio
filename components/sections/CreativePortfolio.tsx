'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { CREATIVE_PORTFOLIO, CREATIVE_CATEGORIES, CreativeProject } from '@/lib/constants'

interface LightboxProps {
  project: CreativeProject | null
  onClose: () => void
}

function Lightbox({ project, onClose }: LightboxProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <motion.div
          className="relative w-full max-w-5xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Media */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            {project.media.type === 'youtube' ? (
              <iframe
                src={`https://www.youtube.com/embed/${project.media.url}?autoplay=1&rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <Image
                src={project.media.url}
                alt={project.title}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Info */}
          <div className="mt-4 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-white/70">{project.description}</p>
              </div>
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-creative px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-creative/80"
                >
                  View on Behance
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

interface ProjectCardProps {
  project: CreativeProject
  onClick: () => void
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const thumbnailUrl =
    project.media.type === 'youtube'
      ? `https://img.youtube.com/vi/${project.media.url}/maxresdefault.jpg`
      : project.thumbnail

  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-light-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

        {/* Play Button for Videos */}
        {project.media.type === 'youtube' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-creative text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={28} className="ml-1" fill="currentColor" />
            </motion.div>
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-creative/90 px-3 py-1 text-xs font-medium capitalize text-white">
          {project.category.replace('-', '/')}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-text-primary transition-colors group-hover:text-creative">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-creative/10 px-2 py-0.5 text-xs text-creative"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

interface CreativePortfolioProps {
  showHeader?: boolean
}

export default function CreativePortfolio({ showHeader = true }: CreativePortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? CREATIVE_PORTFOLIO
      : CREATIVE_PORTFOLIO.filter((p) => p.category === activeCategory)

  const handleProjectClick = useCallback((project: CreativeProject) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }, [])

  const handleCloseLightbox = useCallback(() => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }, [])

  if (CREATIVE_PORTFOLIO.length === 0) {
    return null
  }

  return (
    <>
      <div className={showHeader ? 'mt-16' : ''}>
        {/* Section Title */}
        {showHeader && (
          <div className="mb-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-text-primary">
              Our Creative Work
            </h3>
            <p className="mt-2 text-text-secondary">
              Explore our portfolio of design and video projects
            </p>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CREATIVE_CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-creative text-white shadow-creative-sm'
                  : 'bg-light-200 text-text-secondary hover:bg-creative/10 hover:text-creative'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-text-secondary">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <Lightbox project={selectedProject} onClose={handleCloseLightbox} />
      )}
    </>
  )
}
