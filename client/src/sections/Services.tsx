import { FiLayout, FiCode, FiServer } from 'react-icons/fi'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

const services = [
  {
    icon: FiLayout,
    title: 'Responsive Web Design',
    description: 'Clean, modern layouts that look great on mobile, tablet, and desktop.',
  },
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Fast, accessible frontends with premium polish and smooth interactions.',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'REST APIs with Express + MongoDB focused on clean data models.',
  },
] as const

export function Services() {
  return (
    <Container>
      <Section id="services" eyebrow="Services" title="What I can build for you">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.title} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/10 text-orange-600">
                    <Icon />
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(249,115,22,0.20),rgba(255,255,255,0.0))]" />
                </div>

                <div className="mt-4 text-base font-semibold tracking-tight text-[hsl(var(--ink))]">
                  {s.title}
                </div>
                <div className="mt-2 text-sm text-black/60">{s.description}</div>
              </Card>
            )
          })}
        </div>
      </Section>
    </Container>
  )
}

