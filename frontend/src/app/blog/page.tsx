"use client";

import Resources from "@/components/Resources";
import AppCTA from "@/components/AppCTA";
import { motion } from "framer-motion";

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-widest">
                        XamSathi Blog
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Exam Strategies, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Guides & Tips</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Discover the best exam test series strategies, read high-yield NEET practice questions guides, and get the latest syllabus updates.
                    </p>
                </motion.div>
            </div>
            {/* Reuse the interactive grid from Resources component */}
            <Resources />
            <AppCTA />
        </main>
    );
}
