import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5,
  SiTailwindcss, SiBootstrap, SiMongodb,
  SiPostgresql, SiMysql, SiGit, SiGithub, SiFigma, SiPostman, SiVercel, SiNetlify
} from 'react-icons/si'
import { FaJava, FaDatabase, FaServer, FaCode, FaNetworkWired, FaLayerGroup } from 'react-icons/fa'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

const skillLayers = [
  {
    title: "Languages",
    skills: [
      { name: "Java", Icon: FaJava },
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "MERN Stack", Icon: FaLayerGroup },
      { name: "HTML and CSS", Icon: SiHtml5 },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "TailwindCSS", Icon: SiTailwindcss }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostGre", Icon: SiPostgresql },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
      { name: "Postman", Icon: SiPostman },
      { name: "Vercel", Icon: SiVercel },
      { name: "Netlify", Icon: SiNetlify }
    ]
  },
  {
    title: "Core CS Fundamentals",
    skills: [
      { name: "DBMS", Icon: FaDatabase },
      { name: "OS", Icon: FaServer },
      { name: "CN", Icon: FaNetworkWired },
      { name: "SQL", Icon: FaDatabase },
      { name: "OOPs", Icon: FaCode }
    ]
  }
]

export function SkillsRow() {
  return (
    <Container>
      <Section id="skills" title="">
        <div className="max-w-6xl mx-auto pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8F9FA] rounded-[32px] py-12 sm:py-16 shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Header Content */}
            <div className="mb-14 px-8 sm:px-12 md:px-16">
              <div className="flex items-center mb-6">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-800"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <polyline points="10 8 6 12 10 16" />
                  <polyline points="14 8 18 12 14 16" />
                </svg>
              </div>

              <div className="text-orange-500 text-sm sm:text-base font-semibold tracking-wide mb-3 uppercase">
                Creative Solutions
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Skills and Expertise
              </h2>
              <p className="text-gray-500 text-base sm:text-xl max-w-2xl font-medium">
                Proficient in Various Programming Languages, Frameworks, and Tools
              </p>
            </div>

            {/* Scrolling Marquee Layers Grid */}
            <div className="flex flex-col gap-6 sm:gap-8 mt-10 w-full relative">
              {/* Soft edge masks to create fade out on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

              {skillLayers.map((layer, index) => {
                // Alternating directions for a dynamic layered feel
                const isEven = index % 2 === 0
                const direction = isEven ? ['0%', '-50%'] : ['-50%', '0%']
                // Slower scroll for longer arrays to keep visually balanced speed
                const duration = 25 + layer.skills.length * 3 

                return (
                  <div key={layer.title} className="flex whitespace-nowrap border-y border-slate-200/50 py-4 sm:py-5 overflow-hidden bg-white/40">
                    <motion.div
                      animate={{ x: direction }}
                      transition={{ duration, ease: 'linear', repeat: Infinity }}
                      className="flex items-center w-max"
                    >
                      {/* Repeat 4 times to guarantee a seamless loop on any screen width */}
                      {[...Array(4)].map((_, blockIdx) => (
                        <div key={blockIdx} className="flex items-center pr-12">
                          <span className="text-lg sm:text-xl font-extrabold text-orange-500 uppercase tracking-widest mr-8">
                            {layer.title}:
                          </span>
                          
                          {layer.skills.map((skill, skillIdx) => {
                            const Icon = skill.Icon
                            return (
                              <div key={skillIdx} className="flex items-center">
                                {/* Use uniform dark sepia color #4a3623 for matching image style */}
                                <div className="flex items-center gap-3 text-[#4a3623]">
                                  <Icon className="text-3xl sm:text-4xl" />
                                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="mx-6 sm:mx-8 text-[#F97316] text-2xl sm:text-3xl opacity-60 translate-y-[2px]">
                                  ✶
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Section>
    </Container>
  )
}


