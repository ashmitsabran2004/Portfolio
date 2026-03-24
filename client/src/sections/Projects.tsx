import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { fetchJson } from '../lib/api'
import type React from 'react'

type Project = {
  _id?: string
  title: string
  description: string
  tag: string
  techStack?: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

const fallbackProjects: readonly Project[] = [
  {
    title: 'Inventory Management System',
    description:
      'Smart inventory web app for small businesses with supplier management, voice input, and threshold alerts. Improved operational efficiency by 40%.',
    tag: 'Development',
    techStack: ['TypeScript', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    imageUrl: '/Screenshot 2025-12-24 175936.png',
    githubUrl: 'https://github.com/ashmitsabran2004/Inventory-Manager',
    liveUrl: '#',
  },
  {
    title: 'LangLeo',
    description:
      'Multilingual chatbot platform with persistent sessions, chat history, and intelligent message flows for real-time interaction.',
    tag: 'Development',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/Screenshot 2026-03-18 164942.png',
    githubUrl: 'https://github.com/ashmitsabran2004/LangLeo',
    liveUrl: 'https://langleo.netlify.app/',
  },
  {
    title: 'PrepCircle',
    description:
      'Collaborative exam prep platform with video conferencing, group discussions, and progress analytics.',
    tag: 'Development',
    techStack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Framer', 'Tailwind CSS'],
    imageUrl: '/Screenshot 2026-03-18 165232.png',
    githubUrl: 'https://github.com/ashmitsabran2004/PrepCircle',
    liveUrl: '#',
  },
] as const

function ActionIcon({
  href,
  icon,
  title,
}: {
  href?: string
  icon: React.ReactNode
  title: string
}) {
  const isDisabled = !href || href === '#'
  const label = isDisabled ? 'Under Development' : title

  return (
    <div className="group/icon relative flex items-center justify-center">
      <a
        href={isDisabled ? '#' : href}
        target={isDisabled ? undefined : '_blank'}
        rel={isDisabled ? undefined : 'noreferrer'}
        onClick={(e) => isDisabled && e.preventDefault()}
        className={`flex items-center justify-center text-[hsl(var(--ink))] transition-colors ${
          isDisabled ? 'cursor-not-allowed opacity-40' : 'hover:text-orange-500'
        }`}
        aria-disabled={isDisabled}
      >
        {icon}
      </a>
      
      {/* Fancy Tooltip */}
      <span className="pointer-events-none absolute -top-10 left-1/2 z-10 w-max -translate-x-1/2 translate-y-2 scale-95 rounded-md bg-[hsl(var(--ink))] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-all duration-200 group-hover/icon:translate-y-0 group-hover/icon:scale-100 group-hover/icon:opacity-100">
        {label}
        <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[hsl(var(--ink))]" />
      </span>
    </div>
  )
}

export function Projects() {
  const [projects, setProjects] = useState<readonly Project[]>(fallbackProjects)

  useEffect(() => {
    fetchJson<Project[]>('/api/projects')
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          // Merge fallback content if the database still returns placeholders
          const mergedData = data.map(dbProj => {
            const fallback = fallbackProjects.find(f => f.title === dbProj.title)
            if (fallback) {
              const mergedProj = { ...dbProj }
              if (!dbProj.imageUrl || dbProj.imageUrl === '/project-placeholder.svg') {
                mergedProj.imageUrl = fallback.imageUrl
              }
              if (!dbProj.liveUrl || dbProj.liveUrl === '#') {
                mergedProj.liveUrl = fallback.liveUrl
              }
              if (!dbProj.githubUrl || dbProj.githubUrl === '#') {
                mergedProj.githubUrl = fallback.githubUrl
              }
              return mergedProj
            }
            return dbProj
          })
          setProjects(mergedData)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <Container>
      <Section id="work" eyebrow="Projects" title="My Development Work">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((p) => (
            <motion.article
              key={p._id ?? p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-black/5 aspect-[4/3] ring-1 ring-black/5 shadow-soft">
                <img
                  loading="lazy"
                  src={p.imageUrl || '/project-placeholder.svg'}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 px-2">
                <div className="flex flex-col max-w-[80%]">
                  <h3 className="text-xl md:text-[22px] font-semibold text-[hsl(var(--ink))] tracking-tight">
                    {p.title}
                  </h3>
                  {p.techStack?.length ? (
                    <p className="mt-1 text-[15px] font-medium text-[hsl(var(--muted))] line-clamp-1">
                      {p.techStack.join(', ')}.
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-shrink-0 items-center gap-4">
                  <ActionIcon
                    href={p.githubUrl}
                    title="GitHub Repository"
                    icon={<FiGithub className="h-[22px] w-[22px] md:h-6 md:w-6" />}
                  />
                  <ActionIcon
                    href={p.liveUrl}
                    title="Live Demo"
                    icon={<FiExternalLink className="h-[22px] w-[22px] md:h-6 md:w-6" />}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </Container>
  )
}

