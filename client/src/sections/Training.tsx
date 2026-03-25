import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiCode } from 'react-icons/fi'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { Card } from '../shared/Card'

export function Training() {
  return (
    <Container>
      <Section id="training" eyebrow="Experience" title="Training & Internships">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="p-8 relative overflow-hidden group hover:ring-1 hover:ring-orange-500/30 transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl">
                <FiBriefcase className="text-2xl" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">CSE Pathshala</h3>
                    <div className="mt-1 text-base font-semibold text-orange-600">C Programming Trainee</div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 ring-1 ring-gray-900/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <FiCalendar className="text-gray-500" />
                    Jun' 25 – Jul' 25
                  </div>
                </div>
                
                <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                  Developed a fully functional Library Management System by applying core C programming principles like file handling and modular design. By strategically prioritizing simplicity over complex data structures, I successfully achieved a streamlined and highly reliable system that was 30% faster to implement.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-500/10 ring-1 ring-orange-500/20 px-2.5 py-1 rounded-md">
                    <FiCode />
                    C Programming
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 ring-1 ring-gray-200 px-2.5 py-1 rounded-md">
                    System Design
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 ring-1 ring-gray-200 px-2.5 py-1 rounded-md">
                    File Handling
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
    </Container>
  )
}
