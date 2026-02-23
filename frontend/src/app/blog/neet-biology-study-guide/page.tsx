"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BiologyPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-emerald-500 hover:text-emerald-600 mb-8 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800"
                >
                    <header className="mb-10 text-center border-b border-slate-200 dark:border-slate-800 pb-10">
                        <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold tracking-wide mb-4">
                            STUDY GUIDES
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Ultimate Guide to NEET Biology (360/360)
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Master every line of NCERT and eliminate silly mistakes with the best exam test series approach.
                        </p>
                    </header>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl">
                            Biology constitutes 50% of the NEET paper. Here's exactly how to extract 360 marks by treating NCERT as your ultimate scripture and supplementing it with intense NEET practice questions.
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">1. Active NCERT Reading</h2>
                        <p>Highlighting is a passive activity. You must ask questions from every paragraph. <em>"Why is this written here?" "What exception is mentioned?"</em> Our online mock tests in India test you directly on these overlooked exceptions (like the dual nature of RuBisCO).</p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">2. The Assertion-Reason Trap</h2>
                        <p>Many students lose marks in Assertion-Reason questions because they lack conceptual linking. When studying Plant Physiology or Genetics, mentally formulate "Because" statements between paragraphs to build strong causal logic.</p>

                        <div className="mt-12 text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                            <Link href="/dashboard/test-series/neet" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-600/25">
                                Start NEET Biology Practice
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
