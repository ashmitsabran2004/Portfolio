import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Button } from '../shared/Button'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const apiUrl = useMemo(() => import.meta.env.VITE_API_URL ?? 'http://localhost:5000', [])
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const githubUrl = 'https://github.com/ashmitsabran2004'
  const linkedinUrl = 'https://www.linkedin.com/in/ashmit-sabran/'

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container>
      <Section id="contact" eyebrow="Contact" title="Let’s connect">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="p-6">
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span className="font-medium text-black/70">Name</span>
                  <input
                    className="h-11 rounded-xl bg-white px-4 text-sm ring-1 ring-black/10 outline-none transition focus:ring-orange-400/40"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="font-medium text-black/70">Email</span>
                  <input
                    type="email"
                    className="h-11 rounded-xl bg-white px-4 text-sm ring-1 ring-black/10 outline-none transition focus:ring-orange-400/40"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                  />
                </label>
              </div>

              <label className="grid gap-1 text-sm">
                <span className="font-medium text-black/70">Message</span>
                <textarea
                  className="min-h-[132px] resize-y rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/10 outline-none transition focus:ring-orange-400/40"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
              </label>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button disabled={status === 'sending'} className="sm:w-fit">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </Button>
                <div className="text-xs text-black/55">
                  {status === 'sent' && 'Message sent. I’ll reply soon.'}
                  {status === 'error' && 'Could not send. Please try again.'}
                  {status === 'idle' && 'Typically responds within 24 hours.'}
                </div>
              </div>
            </form>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-[hsl(var(--ink))]">Social links</div>
            <div className="mt-2 text-sm text-black/60">
              You can also reach out here:
            </div>
            <div className="mt-5 grid gap-3 text-sm">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600">
                    <FiGithub />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                      GitHub
                    </div>
                    <div className="mt-1 font-medium text-black/75">ashmitsabran2004</div>
                  </div>
                </div>
                <span className="text-xs text-black/45">Open</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600">
                    <FiLinkedin />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                      LinkedIn
                    </div>
                    <div className="mt-1 font-medium text-black/75">Ashmit Sabran</div>
                  </div>
                </div>
                <span className="text-xs text-black/45">Open</span>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </Container>
  )
}

