"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SyllabusPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-purple-500 hover:text-purple-600 mb-8 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800"
                >
                    <header className="mb-10 text-center border-b border-slate-200 dark:border-slate-800 pb-10">
                        <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-bold tracking-wide mb-4">
                            SYLLABUS NOTES
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Updated JEE & NEET Syllabus Explained
                        </h1>
                    </header>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl">
                            The National Testing Agency (NTA) has removed several chapters. Here's how you should restructure your JEE practice test online strategy.
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Removed Chapters to Avoid</h2>
                        <ul className="space-y-4">
                            <li><strong>Chemistry:</strong> Solid State, Surface Chemistry, States of Matter, S-Block elements, Hydrogen, Environment Chemistry. (Stop practicing these).</li>
                            <li><strong>Physics:</strong> Communication Systems, some topics from Radioactivity and Transistors.</li>
                        </ul>
                        <p>At <strong>Xamsathi</strong>, we update our best exam test series the minute NTA updates the syllabus. Our AI filters ensure you don't even see questions from deleted topics.</p>
                        <div className="mt-12 text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                            <Link href="/courses" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-600/25">
                                View Updated Courses
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
