import { motion } from 'framer-motion'
import { FiBook, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { Card } from '../shared/Card'

type EducationItem = {
    institution: string
    location: string
    degree: string
    performance: string
    period: string
    type: 'university' | 'school'
}

const educationData: readonly EducationItem[] = [
    {
        institution: 'Lovely Professional University',
        location: 'Punjab, India',
        degree: 'Bachelor of Technology - Computer Science and Engineering',
        performance: 'CGPA: 6.5',
        period: 'Aug\' 23 - Present',
        type: 'university'
    },
    {
        institution: 'Guru Gobind Singh Public School',
        location: 'Bokaro, Jharkhand',
        degree: 'Intermediate',
        performance: 'Percentage: 69%',
        period: 'Jun\' 22 – Apr\' 23',
        type: 'school'
    },
    {
        institution: 'Guru Gobind Singh Public School',
        location: 'Bokaro, Jharkhand',
        degree: 'Matriculation',
        performance: 'Percentage: 67%',
        period: 'Jun\' 20 - Apr\' 21',
        type: 'school'
    }
] as const

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
    const isUniversity = item.type === 'university'

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            <Card className="relative overflow-hidden p-8">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${isUniversity
                        ? 'from-orange-400/5 via-transparent to-amber-400/5'
                        : 'from-blue-400/5 via-transparent to-indigo-400/5'
                    }`} />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isUniversity
                                        ? 'bg-orange-500/10 text-orange-600'
                                        : 'bg-blue-500/10 text-blue-600'
                                    }`}>
                                    {isUniversity ? <FiAward className="text-xl" /> : <FiBook className="text-xl" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.institution}</h3>
                                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                                        <FiMapPin className="text-base" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${isUniversity
                                ? 'bg-orange-500/10 text-orange-700 ring-1 ring-orange-500/20'
                                : 'bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/20'
                            }`}>
                            {isUniversity ? 'University' : 'School'}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">{item.degree}</h4>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <FiAward className="text-base text-gray-500" />
                                <span className="font-medium text-gray-700">{item.performance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-base text-gray-500" />
                                <span className="text-gray-600">{item.period}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export function Education() {
    return (
        <Container>
            <Section id="education" eyebrow="Education" title="My Academic Journey">
                <div className="space-y-6">
                    {educationData.map((item, index) => (
                        <EducationCard key={`${item.institution}-${item.degree}`} item={item} index={index} />
                    ))}
                </div>
            </Section>
        </Container>
    )
}
