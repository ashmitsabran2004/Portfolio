import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar, type ActiveSection } from './sections/Navbar'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { SkillsPage } from './pages/SkillsPage'
import { CertificatesPage } from './pages/CertificatesPage'
import { EducationPage } from './pages/EducationPage'
import { ContactPage } from './pages/ContactPage'
import { Footer } from './sections/Footer'
import { BackgroundShapes } from './shared/BackgroundShapes'

export default function App() {
  const [active, setActive] = useState<ActiveSection>('home')

  const Page = useMemo(() => {
    switch (active) {
      case 'home':
        return HomePage
      case 'work':
        return WorkPage
      case 'skills':
        return SkillsPage
      case 'certificates':
        return CertificatesPage
      case 'education':
        return EducationPage
      case 'contact':
        return ContactPage
      default:
        return HomePage
    }
  }, [active])

  return (
    <div className="min-h-dvh">
      <BackgroundShapes />
      <Navbar active={active} onNavigate={setActive} />

      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Page />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

