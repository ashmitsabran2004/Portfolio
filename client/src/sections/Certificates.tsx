import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { fetchJson } from '../lib/api'
import microsoftLogo from './icons8-microsoft-96.png'
import infosysLogo from './idxq8SaZnR_1774288600894.svg'
import courseraLogo from './idzX4nGXpr_1774288684869.svg'
import type React from 'react'

type Certificate = {
    _id?: string
    title: string
    issuer: string
    date: string
    description?: string
    imageUrl?: string
    certificateUrl?: string
}

const fallbackCertificates: readonly Certificate[] = [
    {
        title: 'Build a computer vision app with Azure Cognitive Services',
        issuer: 'Microsoft',
        date: '2025',
        description: 'This project focuses on leveraging Azure Cognitive Services, particularly the Computer Vision API, to extract meaningful insights from visual data. It covers image analysis, object detection, and text recognition, demonstrating practical applications of AI in understanding and interpreting images.',
        imageUrl: microsoftLogo,
        certificateUrl: 'https://drive.google.com/file/d/1beMFDTcV4BPnpE9yHpOygiFTeBuJl6qK/view',
    },
    {
        title: 'Build a website using WordPress ',
        issuer: 'Coursera',
        date: '2025',
        description: 'Completed a certification in *Building a Website using WordPress* from Coursera. Gained hands-on experience in creating and designing websites using WordPress, including themes, plugins, customization, and basic web development concepts.',
        imageUrl: courseraLogo,
        certificateUrl: 'https://drive.google.com/file/d/1sE6ydF9j2ntx8aaZq9o63O8DdhZzi82I/view',
    },
    {
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM ',
        issuer: 'Infosys Springboard',
        date: '2025',
        description: 'Completed a certification in *ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM* from Infosys Springboard. Gained hands-on experience in prompt engineering for ChatGPT-4, generative AI, and large language models, covering prompt design, optimization, and best practices for effective AI interactions.',
        imageUrl: infosysLogo,
        certificateUrl: 'https://drive.google.com/file/d/19lBCiMGig-lr3FprHYK9oNm9W6Fd_tMj/view',
    },
    {
        title: 'Build Generative AI Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: '2025',
        description: 'Completed a certification in *Build Generative AI Apps and Solutions with No-Code Tools* from Infosys Springboard. Gained hands-on experience in building generative AI applications and solutions using no-code tools, covering prompt engineering, AI model integration, and application development without traditional coding.',
        imageUrl: infosysLogo,
        certificateUrl: 'https://drive.google.com/file/d/1P6oz4RAKn7kEKXlmblRQm5YaLYJQXJrF/view',
    }
] as const

function ViewCertificateButton({
    href,
    children,
}: {
    href?: string
    children: React.ReactNode
}) {
    const isDisabled = !href || href === '#'
    const base =
        'inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]'
    const style = 'bg-orange-500 text-white hover:bg-orange-600'
    const disabled = isDisabled ? 'pointer-events-none opacity-60' : ''

    return (
        <a
            href={href || '#'}
            target={isDisabled ? undefined : '_blank'}
            rel={isDisabled ? undefined : 'noreferrer'}
            className={`${base} ${style} ${disabled}`}
            aria-disabled={isDisabled}
        >
            {children}
        </a>
    )
}

export function Certificates() {
    const [certificates, setCertificates] = useState<readonly Certificate[]>(fallbackCertificates)

    useEffect(() => {
        fetchJson<Certificate[]>('/api/certificates')
            .then((data) => {
                if (Array.isArray(data) && data.length) setCertificates(data)
            })
            .catch(() => { })
    }, [])

    return (
        <Container>
            <Section id="certificates" eyebrow="Certificates" title="My Achievements">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert) => (
                        <motion.article
                            key={cert._id ?? cert.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-soft backdrop-blur transition duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.01]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    loading="lazy"
                                    src={cert.imageUrl || '/certificate-placeholder.svg'}
                                    alt={`${cert.title} certificate`}
                                    className={`h-44 w-full transition duration-500 group-hover:scale-[1.06] ${
                                        [microsoftLogo, infosysLogo, courseraLogo].includes(cert.imageUrl as string) ? 'object-contain p-8' : 'object-cover'
                                    }`}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.10))] opacity-0 transition duration-300 group-hover:opacity-100" />
                                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-500/10">
                                    {cert.date}
                                </div>
                                <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                                    View Certificate <FiExternalLink className="text-orange-600" />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="text-base font-semibold tracking-tight text-[hsl(var(--ink))]">
                                    {cert.title}
                                </div>
                                <div className="mt-1 text-sm font-medium text-orange-600">
                                    {cert.issuer}
                                </div>
                                {cert.description && (
                                    <div className="mt-2 text-sm text-black/60 line-clamp-3">{cert.description}</div>
                                )}

                                <div className="mt-auto pt-5">
                                    <ViewCertificateButton href={cert.certificateUrl}>
                                        <FiExternalLink />
                                        View Certificate
                                    </ViewCertificateButton>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>
        </Container>
    )
}
