'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'
import { TEAM_MEMBERS } from '@/lib/constants'

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

export default function Team() {
  return (
    <SectionWrapper id="team" className="bg-light">
      {/* Decorative elements */}
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute -left-32 bottom-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <SectionHeader
        title="Meet Our Team"
        subtitle="Passionate experts dedicated to turning your vision into reality"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={member.id}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-light-300 bg-white shadow-soft transition-all duration-300 hover:shadow-green">
              {/* Avatar Placeholder */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 via-mint/20 to-secondary/10">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-white/90 font-display text-3xl font-bold text-primary shadow-soft backdrop-blur-sm">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>

                {/* Hover Overlay with Social Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons]
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name} on ${platform}`}
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="mb-1 text-lg font-semibold text-text-primary">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm text-text-secondary">{member.bio}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/30" />
            </div>

            {/* Hover Effect */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-primary/20"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
