import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa6'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'

export type ActiveSection = 'home' | 'work' | 'skills' | 'certificates' | 'education' | 'contact'

const links: ReadonlyArray<{ id: ActiveSection; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'My Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({
  active,
  onNavigate,
}: {
  active: ActiveSection
  onNavigate: (id: ActiveSection) => void
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[hsl(var(--bg))]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-black/50">
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition hover:text-black" aria-label="X (Twitter)">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ashmit-sabran/" target="_blank" rel="noopener noreferrer" className="transition hover:text-black" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition hover:text-black" aria-label="Facebook">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://github.com/ashmitsabran2004" target="_blank" rel="noopener noreferrer" className="transition hover:text-black" aria-label="GitHub">
              <FaGithub className="text-xl" />
            </a>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => onNavigate(l.id)}
                className={`text-sm transition ${active === l.id
                    ? 'text-orange-600'
                    : 'text-black/70 hover:text-black'
                  }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button onClick={() => onNavigate('contact')}>Hire Me</Button>
            </div>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5 backdrop-blur transition hover:bg-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-black/5 md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-2 py-3">
                {links.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    className={`rounded-xl px-3 py-2 text-left text-sm transition ${active === l.id ? 'bg-white/80 text-orange-600' : 'text-black/80 hover:bg-white/70'
                      }`}
                    onClick={() => {
                      onNavigate(l.id)
                      setOpen(false)
                    }}
                  >
                    {l.label}
                  </button>
                ))}
                <div className="pt-1">
                  <Button
                    className="w-full"
                    onClick={() => {
                      onNavigate('contact')
                      setOpen(false)
                    }}
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
