"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MistakesPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800"
                >
                    <header className="mb-10 text-center border-b border-slate-200 dark:border-slate-800 pb-10">
                        <div className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-bold tracking-wide mb-4">
                            EXAM TIPS
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Top 5 Mistakes Students Make in Mock Tests
                        </h1>
                    </header>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl">
                            Using an <strong>online mock test in India</strong> is only half the battle. Analyzing it correctly determines if you'll actually improve. Here are 5 mistakes costing you negative marks.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Mistake 1: Ignoring the Analytics Dashboard</h2>
                        <p>Our best exam test series gives you detailed breakdown of time spent per question. If a question takes more than 3 minutes, you are doing it wrong—even if you get the right answer.</p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Mistake 2: Only Looking at Marks</h2>
                        <p>Marks fluctuate based on test difficulty. Percentile is the true metric. At <em>Xamsathi</em>, our <strong>NEET practice questions</strong> generate a simulated AIR to show exactly where you stand nationally.</p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Mistake 3: Blind Guessing</h2>
                        <p>With +4/-1 marking schema, wild guessing destroys your score. Our algorithm highlights your accuracy on guessed vs confident answers. Only guess if you can eliminate two options.</p>

                        <div className="mt-12 text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                            <Link href="/dashboard" className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-yellow-500/25">
                                Check Your Analytics Now
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
