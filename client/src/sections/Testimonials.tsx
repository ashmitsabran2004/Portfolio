import { useEffect, useState } from 'react'
import { FiStar } from 'react-icons/fi'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { fetchJson } from '../lib/api'

type Testimonial = {
  _id?: string
  name: string
  role: string
  rating: number
  quote: string
}

const fallbackTestimonials: readonly Testimonial[] = [
  {
    name: 'Ayesha K.',
    role: 'Product Manager',
    rating: 5,
    quote:
      'Super clean implementation, great communication, and the final UI looked even better than the mockups.',
  },
  {
    name: 'Daniel R.',
    role: 'Startup Founder',
    rating: 5,
    quote:
      'Built our MVP end-to-end quickly—frontend, backend, and deployment. Performance and UX were spot on.',
  },
  {
    name: 'Priya S.',
    role: 'Design Lead',
    rating: 5,
    quote:
      'Thoughtful details everywhere. Smooth animations, responsive layouts, and a codebase we can maintain long-term.',
  },
] as const

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<readonly Testimonial[]>(fallbackTestimonials)

  useEffect(() => {
    fetchJson<Testimonial[]>('/api/testimonials')
      .then((data) => {
        if (Array.isArray(data) && data.length) setTestimonials(data)
      })
      .catch(() => {})
  }, [])

  return (
    <Container>
      <Section id="testimonials" eyebrow="Testimonials" title="What clients say">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t._id ?? t.name} className="p-6">
              <div className="flex items-center gap-1 text-orange-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>
              <div className="mt-4 text-sm leading-relaxed text-black/65">“{t.quote}”</div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-[hsl(var(--ink))]">{t.name}</div>
                <div className="text-xs text-black/55">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}

