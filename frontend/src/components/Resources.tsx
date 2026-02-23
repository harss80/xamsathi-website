"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const resources = [
    {
        title: "How to Prepare for JEE Main in 90 Days",
        category: "Exam Strategies",
        icon: TrendingUp,
        description: "A comprehensive day-by-day study guide to master high-weightage topics and guarantee a 99+ percentile.",
        link: "/blog/how-to-prepare-for-jee-in-90-days",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "Ultimate Guide to NEET Biology 360/360",
        category: "Study Guides",
        icon: BookOpen,
        description: "How to read NCERT properly to answer every tricky assertion-reason question perfectly.",
        link: "/blog/neet-biology-study-guide",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Updated JEE & NEET Syllabus Explained",
        category: "Syllabus Notes",
        icon: FileText,
        description: "NTA has updated the syllabus. See the detailed breakdown of what is removed and what is newly added.",
        link: "/blog/updated-exam-syllabus-2025",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Top 5 Mistakes Students Make in Mock Tests",
        category: "Exam Tips",
        icon: Lightbulb,
        description: "Learn why taking an online mock test in India is essential and how to analyze your test performance to stop making negative marks.",
        link: "/blog/top-mock-test-mistakes",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "group-hover:border-yellow-500/50"
    }
];

const Resources = () => {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Rich & Helpful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Resources</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Rank higher with our best exam test series strategies, syllabus guides, and deep-dive blog posts curated by previous AIR toppers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, i) => (
                        <Link href={res.link} key={i} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`h-full p-6 rounded-2xl bg-slate-900 border border-slate-800 transition-all ${res.border} hover:shadow-2xl hover:shadow-blue-900/20`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${res.bg} ${res.color}`}>
                                    <res.icon className="w-6 h-6" />
                                </div>
                                <div className="mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${res.color}`}>{res.category}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {res.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {res.description}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
