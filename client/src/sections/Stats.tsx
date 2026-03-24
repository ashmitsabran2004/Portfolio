import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

const stats = [
  { value: 'Time', label: 'Management' },
  { value: 'Leadership', label: 'Skills' },
  { value: 'Problem', label: 'Solving' },
  { value: 'Adaptability', label: 'Focus' },
] as const

export function Stats() {
  return (
    <Container>
      <Section id="stats" eyebrow="Soft Skills" title="A strong start, ready to grow">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <Card key={s.label} className="p-6">
                <div className="text-3xl font-semibold tracking-tight text-[hsl(var(--ink))]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-black/60">{s.label}</div>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden p-6">
            <div className="text-sm font-semibold text-black/75">Learning by building</div>
            <div className="mt-2 text-sm text-black/60">
              Every project sharpens my skills in UI, APIs, and clean code practices.
            </div>
            <div className="mt-6 h-40 w-full rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.35),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(15,23,42,0.20),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.65),rgba(255,255,255,0.2))] ring-1 ring-black/5" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />
          </Card>
        </div>
      </Section>
    </Container>
  )
}

