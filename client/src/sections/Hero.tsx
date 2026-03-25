import { motion } from 'framer-motion'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'
import { FiArrowDown } from 'react-icons/fi'
import { ParticleBackground } from '../shared/ParticleBackground'

export function Hero() {
  const marqueeItems = [
    { text: "Full Stack Developer" },
    { text: "Web Development" },
    { text: "Backend Development" }
  ]

  // We repeat the array sufficiently to ensure it covers even ultrawide screens natively,
  // preventing any blank spaces during the animation cycle.
  const marqueeBlock = [...Array(4)].map((_, outerIdx) => (
    <div key={outerIdx} className="flex items-center">
      {marqueeItems.map((item, innerIdx) => (
        <div key={innerIdx} className="flex items-center">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800">
            {item.text}
          </span>
          <span className="mx-8 sm:mx-12 text-[#F97316] text-3xl sm:text-4xl translate-y-1 drop-shadow-sm">
            ✶
          </span>
        </div>
      ))}
    </div>
  ))

  return (
    <section id="home" className="relative overflow-hidden pt-12 sm:pt-20 bg-white">
      <ParticleBackground />

      <Container>
        <div className="relative z-10 mx-auto max-w-[1000px] text-center">

          {/* Circular Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative h-[88px] w-[88px] sm:h-[104px] sm:w-[104px] rounded-full p-[3px] bg-gradient-to-tr from-orange-400 to-orange-200 shadow-md">
              {/* Fallback avatar matching the visual theme, to be replaced by the user's actual image later. */}
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ashmit&backgroundColor=ffdfbf&top=shortHairShortFlat&hairColor=2c1b18&facialHairProbability=0&style=circle"
                alt="Profile Avatar"
                className="h-full w-full rounded-full object-cover border-2 border-white"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center justify-center gap-2 text-slate-600 font-bold"
          >
            <span className="text-lg sm:text-xl">👋</span>
            <span className="text-base sm:text-lg tracking-wide">Hi, I'm Ashmit Sabran</span>
          </motion.div>

          {/* Font imports for mimicking the exact typographic styles */}
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500;1,600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
              .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
              .font-cursive { font-family: 'Playfair Display', serif; }
            `}
          </style>

          {/* Main Hero Headline - Restyled to match the reference graphic */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 flex max-w-[900px] flex-col items-center justify-center text-center relative z-20"
          >
            {/* 1. "PASSIONATE" */}
            <div className="relative inline-block border border-[#6090FF] bg-[#8EB1FF] px-4 py-1 sm:px-5 sm:py-1.5 shadow-sm">
              <div className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-[#487FFF]" />
              <div className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-[#487FFF]" />
              <span className="text-white font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-sm sm:text-lg drop-shadow-sm">
                Passionate
              </span>
            </div>

            {/* 2. "Full Stack developer" & Emoji */}
            <div className="relative mt-6 sm:mt-10 flex flex-col items-center justify-center px-4 w-full">
              <h1 className="font-display text-[44px] sm:text-[68px] md:text-[84px] lg:text-[100px] font-bold tracking-[-0.05em] text-[#1A1A1A] leading-[1.1] text-center w-full">
                Full Stack developer
                {/* 
                  Green Box appended as an inline element tightly to the text.
                  This ensures it is ALWAYS physically glued directly to the 'r' in developer!
                */}
                <span className="inline-flex items-center justify-center bg-[#70FF00] px-2 py-1 sm:px-4 sm:py-1.5 transform rotate-2 shadow-sm border border-black/5 ml-3 align-baseline translate-y-1 sm:translate-y-0.5">
                  <span className="text-2xl sm:text-4xl">👨‍💻</span>
                </span>
              </h1>
            </div>

            {/* 3. "Creating Innovative Web Solutions" */}
            <div className="mt-12 sm:mt-16 px-4">
              <p className="font-cursive italic text-[36px] sm:text-[54px] md:text-[68px] tracking-tight text-[#1A1A1A] leading-[1.1] text-center">
                Creating Innovative Web Solutions
              </p>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 sm:mt-10 max-w-[650px] text-center text-[15px] sm:text-[17px] text-slate-500 font-medium leading-[1.7] md:leading-[1.8] px-4"
          >
            I am a passionate 3rd-year student and aspiring Full Stack Developer, eager to transform complex problems into elegant, user-friendly web solutions through clean code and creative design.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row pb-4"
          >
            <a href="#work">
              <Button className="pl-6 pr-5 py-6 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-[24px] font-bold text-base shadow-[0_8px_20px_-6px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2 group hover:-translate-y-0.5">
                Explore Portfolio
                <FiArrowDown className="text-xl transition-transform group-hover:translate-y-[2px]" />
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Marquee Loop Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full mt-16 sm:mt-24 border-y border-dashed border-slate-200 bg-[#FAFAFA] py-8 sm:py-10 overflow-hidden relative shadow-[inset_0_2px_15px_-5px_rgba(0,0,0,0.02)]"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* Block 1 (50%) */}
          <div className="flex items-center">
            {marqueeBlock}
          </div>
          {/* Block 2 (50%) Exact Match For Seamless Looping */}
          <div className="flex items-center">
            {marqueeBlock}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

