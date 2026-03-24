import { motion } from 'framer-motion'

export function BackgroundShapes() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_10%,rgba(249,115,22,0.14),transparent_60%),radial-gradient(50rem_50rem_at_90%_0%,rgba(249,115,22,0.10),transparent_55%),radial-gradient(60rem_60rem_at_70%_90%,rgba(15,23,42,0.06),transparent_55%)]" />

      <motion.div
        className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-orange-300/25 blur-3xl"
        animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-140px] top-[220px] h-[360px] w-[360px] rounded-full bg-orange-400/15 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-160px] left-[30%] h-[420px] w-[420px] rounded-full bg-slate-900/10 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

