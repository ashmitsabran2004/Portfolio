import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: PropsWithChildren<{
  id: string
  eyebrow?: string
  title?: string
}>) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title) && (
          <div className="mb-8">
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[hsl(var(--ink))] sm:text-3xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}

