import { FiDownload } from 'react-icons/fi'
import { Button } from '../shared/Button'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

export function Resume() {
  return (
    <Container>
      <Section id="resume" eyebrow="Resume" title="Download my resume">
        <Card className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-semibold text-[hsl(var(--ink))]">My General CV</div>
            <div className="mt-2 text-sm text-black/60">
              Download my complete CV featuring my professional experience and skills.
            </div>
          </div>
          <a href="/AshmitNewCV.docx" download="Ashmit_CV.docx" className="shrink-0">
            <Button className="gap-2">
              <FiDownload />
              Download CV
            </Button>
          </a>
        </Card>
      </Section>
    </Container>
  )
}

