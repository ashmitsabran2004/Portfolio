import { FiCode } from 'react-icons/fi'
import type React from 'react'
import { motion } from 'framer-motion'
import {
  SiBootstrap,
  SiCoffeescript,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

type IconBadge = {
  label: string
  Icon: React.ComponentType<{ className?: string }>
  colorClass: string
}

function Badge({ label, Icon, colorClass }: IconBadge) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <div
        className={`flex flex-col items-center justify-center gap-2 rounded-xl p-3 backdrop-blur transition duration-300 will-change-transform hover:scale-110 ${colorClass}`}
        title={label}
      >
        <span className={`grid h-12 w-12 place-items-center rounded-lg transition duration-300`}>
          <Icon className="text-[28px]" />
        </span>
        <div className="text-xs font-semibold text-center text-black/70">{label}</div>
      </div>

      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100 ${colorClass}`}
      />
    </motion.div>
  )
}

const languages: readonly IconBadge[] = [
  { label: 'Java', Icon: SiCoffeescript, colorClass: 'bg-rose-500/15 text-rose-700' },
  { label: 'Python', Icon: SiPython, colorClass: 'bg-sky-500/15 text-sky-700' },
  { label: 'JavaScript', Icon: SiJavascript, colorClass: 'bg-amber-400/25 text-amber-800' },
  { label: 'TypeScript', Icon: SiTypescript, colorClass: 'bg-blue-500/15 text-blue-700' },
]

const frameworks: readonly IconBadge[] = [
  { label: 'HTML', Icon: SiHtml5, colorClass: 'bg-orange-500/15 text-orange-700' },
  { label: 'CSS', Icon: SiCss, colorClass: 'bg-sky-500/15 text-sky-700' },
  { label: 'React', Icon: SiReact, colorClass: 'bg-cyan-500/15 text-cyan-700' },
  { label: 'Bootstrap', Icon: SiBootstrap, colorClass: 'bg-violet-500/15 text-violet-700' },
  { label: 'Tailwind CSS', Icon: SiTailwindcss, colorClass: 'bg-cyan-500/15 text-cyan-700' },
]

const mernStack: readonly IconBadge[] = [
  { label: 'MongoDB', Icon: SiMongodb, colorClass: 'bg-emerald-500/15 text-emerald-700' },
  { label: 'Express', Icon: SiExpress, colorClass: 'bg-slate-900/15 text-slate-800' },
  { label: 'React', Icon: SiReact, colorClass: 'bg-cyan-500/15 text-cyan-700' },
  { label: 'Node.js', Icon: SiNodedotjs, colorClass: 'bg-lime-500/15 text-lime-700' },
]

const tools: readonly IconBadge[] = [
  { label: 'MySQL', Icon: SiMysql, colorClass: 'bg-amber-500/15 text-amber-800' },
  { label: 'MongoDB', Icon: SiMongodb, colorClass: 'bg-emerald-500/15 text-emerald-700' },
  { label: 'PostgreSQL', Icon: SiPostgresql, colorClass: 'bg-indigo-500/15 text-indigo-700' },
  { label: 'Git', Icon: SiGit, colorClass: 'bg-orange-500/15 text-orange-700' },
  { label: 'GitHub', Icon: SiGithub, colorClass: 'bg-slate-900/15 text-slate-800' },
  { label: 'Figma', Icon: SiFigma, colorClass: 'bg-pink-500/15 text-pink-700' },
  { label: 'Postman', Icon: SiPostman, colorClass: 'bg-orange-500/15 text-orange-700' },
  { label: 'Vercel', Icon: SiVercel, colorClass: 'bg-slate-900/15 text-slate-800' },
  { label: 'Netlify', Icon: SiNetlify, colorClass: 'bg-emerald-500/15 text-emerald-700' },
]

const fundamentals = ['DBMS', 'Operating Systems', 'Computer Networks', 'SQL', 'OOPs'] as const

export function SkillsExpertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <Container>
      <Section id="skills" eyebrow="Skills & Expertise" title="">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Card className="relative overflow-hidden border border-orange-500/20 bg-gradient-to-br from-white via-white to-orange-50/30 p-8 sm:p-10 lg:p-12 shadow-lg">
            {/* Decorative gradient background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10 -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl -z-10 -ml-36 -mb-36" />

            {/* Header */}
            <div className="flex items-start gap-4 mb-10">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 text-orange-600 ring-1 ring-orange-500/30"
              >
                <FiCode className="text-2xl" />
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Skills and Expertise
                </h3>
                <p className="mt-2 text-base text-slate-600">
                  Proficient in Programming Languages, Frameworks, and Tools
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-10"
            >
              {/* Languages Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Languages</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {languages.map((b, idx) => (
                    <motion.div
                      key={b.label}
                      variants={itemVariants}
                      custom={idx}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge {...b} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />

              {/* Frameworks & Libraries Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Frameworks & Libraries</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {frameworks.map((b, idx) => (
                    <motion.div
                      key={b.label}
                      variants={itemVariants}
                      custom={idx}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge {...b} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* MERN Stack Highlight */}
              <motion.div
                variants={itemVariants}
                className="relative mt-6 rounded-xl border-2 border-orange-500/20 bg-gradient-to-br from-orange-50/50 to-orange-50/20 p-6 backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl -z-10 -mr-20 -mt-20" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <h5 className="text-sm font-bold uppercase tracking-wider text-orange-600">
                    MERN Stack
                  </h5>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {mernStack.map((b, idx) => (
                    <motion.div
                      key={b.label}
                      variants={itemVariants}
                      custom={idx}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge {...b} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />

              {/* Tools & Platforms Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Tools & Platforms</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tools.map((b, idx) => (
                    <motion.div
                      key={b.label}
                      variants={itemVariants}
                      custom={idx}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge {...b} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />

              {/* Core CS Fundamentals Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Core CS Fundamentals</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {fundamentals.map((f, idx) => (
                    <motion.div
                      key={f}
                      variants={itemVariants}
                      custom={idx}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <motion.span
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-50 to-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300"
                        title={f}
                      >
                        {f}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </Section>
    </Container>
  )
}

