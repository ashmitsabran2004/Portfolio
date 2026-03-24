import { motion } from 'framer-motion'
import { FiCode, FiTrendingUp, FiAward } from 'react-icons/fi'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'

export function Achievements() {
    return (
        <Container>
            <Section id="achievements" eyebrow="Achievements" title="My Milestones">
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                        }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-12 shadow-lg ring-1 ring-orange-100/50 backdrop-blur-sm transition-all duration-500"
                    >
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-amber-400/5" />
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
                        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

                        <div className="relative z-10 text-center">
                            {/* Icon and tag */}
                            <div className="flex justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                    className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-700 ring-1 ring-orange-500/20"
                                >
                                    <FiAward className="text-orange-600" />
                                    Problem Solving
                                </motion.div>
                            </div>

                            {/* Main content */}
                            <div className="mt-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                                    className="flex items-center justify-center gap-4"
                                >
                                    <FiCode className="text-4xl text-orange-500" />
                                    <div className="text-6xl font-bold text-orange-600 sm:text-7xl">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                        >
                                            100+
                                        </motion.span>
                                    </div>
                                    <FiTrendingUp className="text-4xl text-orange-500" />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl"
                                >
                                    DSA Problems Solved
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="mt-4 text-lg text-gray-600 leading-relaxed"
                                >
                                    Solved over 100 Data Structures and Algorithms problems across platforms like{' '}
                                    <span className="font-semibold text-orange-600">LeetCode</span> and{' '}
                                    <span className="font-semibold text-orange-600">GeeksforGeeks</span>,
                                    strengthening problem-solving and coding skills.
                                </motion.p>
                            </div>

                            {/* Platform badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mt-8 flex justify-center gap-4"
                            >
                                <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200/50 backdrop-blur-sm">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    LeetCode
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200/50 backdrop-blur-sm">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    GeeksforGeeks
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </Container>
    )
}
