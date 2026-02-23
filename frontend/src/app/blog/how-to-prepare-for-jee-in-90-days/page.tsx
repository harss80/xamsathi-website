"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800"
                >
                    <header className="mb-10 text-center border-b border-slate-200 dark:border-slate-800 pb-10">
                        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold tracking-wide mb-4">
                            EXAM STRATEGIES
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            How to Prepare for JEE Main in 90 Days
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Master the high-weightage topics and guarantee a 99+ percentile with India's best exam test series strategy.
                        </p>
                    </header>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl">
                            Cracking the Joint Entrance Examination (JEE) Main in just three months is a daunting task, but absolutely achievable with a laser-focused strategy and the right resources, like a premium <strong>JEE practice test online</strong>. Let's break down the perfect 90-day roadmap.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Phase 1: The Core Foundation (Days 1 to 45)</h2>
                        <p>
                            In the first 45 days, do not attempt to read every single page of your textbooks. Instead, focus strictly on high-weightage chapters that consistently appear in the JEE Main syllabus.
                        </p>
                        <ul className="space-y-2 my-6">
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-2 shrink-0" /> <strong>Physics:</strong> Modern Physics, Current Electricity, Thermodynamics, and Mechanics (basics).</li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-2 shrink-0" /> <strong>Chemistry:</strong> Coordination Compounds, Chemical Bonding, GOC, and Thermodynamics.</li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-2 shrink-0" /> <strong>Mathematics:</strong> Calculus (Integration/Differentiation), Vectors & 3D Geometry, Matrices & Determinants.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Phase 2: Revision & Testing (Days 46 to 75)</h2>
                        <p>
                            This phase is where the magic happens. Start revising your short notes and actively engage with previous year questions (PYQs). At this stage, attempting an <strong>online mock test in India</strong> is crucial. Standard offline coaching often lacks exact CBT simulators. By using XamSathi's platform, you train your brain to sit in front of a screen for 3 hours, managing your stamina and reducing silly mistakes.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Phase 3: The Mock Test Marathon (Days 76 to 90)</h2>
                        <p>
                            During the final two weeks, you should exclusively rely on the <strong>best exam test series</strong> available. Take one full-syllabus mock test every alternate day.
                        </p>
                        <p>
                            After every test, spend equal time on test analysis. Look at the <em>XamSathi Analytics Dashboard</em> to identify which topics drained your time or caused negative marks. Review the video solutions for the questions you got wrong.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Pro Tip from Toppers</h3>
                            <p className="m-0">
                                "Never skip analysis. Giving 10 mock tests and completely analyzing them is far better than giving 30 mock tests and learning nothing from your mistakes."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Conclusion</h2>
                        <p>
                            Ninety days is enough to shift your percentile drastically if you cut out the noise. Stick to the syllabus, rely heavily on PYQs, and test yourself continuously. Ready to test your current standing?
                        </p>
                    </div>

                    <div className="mt-12 text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                        <Link href="/tests" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/25">
                            Start Free JEE Mock Test Now
                        </Link>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
