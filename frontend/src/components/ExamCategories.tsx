"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Building2, GraduationCap, Shield, Sparkles } from "lucide-react";
import ExamSearch from "@/components/ExamSearch";

const categories = [
    {
        title: "Government Exams",
        href: "/government-exams",
        icon: Building2,
        exams: [
            { name: "SSC CGL", link: "/government-exams/ssc" },
            { name: "SSC CHSL", link: "/government-exams/ssc" },
            { name: "Railway NTPC", link: "/government-exams/railway" },
            { name: "UPSC Prelims", link: "/government-exams/upsc" },
            { name: "State PSC", link: "/government-exams" },
        ]
    },
    {
        title: "Banking Exams",
        href: "/banking-exams",
        icon: BookOpen,
        exams: [
            { name: "SBI PO", link: "/banking-exams/sbi-po" },
            { name: "IBPS PO", link: "/banking-exams/ibps" },
            { name: "IBPS Clerk", link: "/banking-exams/ibps" },
            { name: "RBI Grade B", link: "/banking-exams" },
        ]
    },
    {
        title: "Engineering Exams",
        href: "/engineering-exams",
        icon: GraduationCap,
        exams: [
            { name: "JEE Main", link: "/engineering-exams/jee-main" },
            { name: "JEE Advanced", link: "/engineering-exams/jee-advanced" },
            { name: "BITSAT", link: "/engineering-exams" },
        ]
    },
    {
        title: "Medical Exams",
        href: "/medical-exams",
        icon: GraduationCap,
        exams: [
            { name: "NEET UG", link: "/medical-exams/neet" },
        ]
    },
    {
        title: "Defence Exams",
        href: "/defence-exams",
        icon: Shield,
        exams: [
            { name: "NDA", link: "/defence-exams/nda" },
            { name: "CDS", link: "/defence-exams" },
            { name: "AFCAT", link: "/defence-exams" },
        ]
    },
    {
        title: "Private/Entrance Exams",
        href: "/entrance-exams",
        icon: Sparkles,
        exams: [
            { name: "CUET", link: "/entrance-exams/cuet" },
            { name: "State Entrance", link: "/entrance-exams" },
        ]
    },
];

export default function ExamCategories() {
    return (
        <section className="py-20 bg-slate-950 border-b border-slate-800" id="exams">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="text-blue-600 font-bold tracking-wider text-sm uppercase">Explore By Category</div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mt-3">Which Exam Are You Preparing For?</h2>
                    <p className="text-slate-400 text-lg mt-4 font-medium">Find comprehensive test series, exact exam patterns, and proven strategies designed by experts.</p>
                </div>

                <div className="max-w-3xl mx-auto mb-16 shadow-lg rounded-2xl">
                    <ExamSearch />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {categories.map((c) => (
                        <div key={c.title} className="relative group p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] overflow-hidden">
                            {/* Hover background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Accent line on hover */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-full blur-[1px]"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 rounded-[1.25rem] bg-slate-950 shadow-inner border border-slate-800 text-blue-500 flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 relative">
                                            <c.icon className="w-7 h-7 relative z-10" />
                                            {/* Glow behind icon */}
                                            <div className="absolute inset-0 bg-blue-500 rounded-[1.25rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{c.title}</h3>
                                    </div>
                                    <Link href={c.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 px-4 py-2 rounded-xl transition-all shrink-0 border border-transparent hover:border-blue-500/20 active:scale-95">
                                        Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {c.exams.map((exam) => (
                                        <Link key={exam.name} href={exam.link} className="px-5 py-2.5 bg-slate-950/60 backdrop-blur-md border border-slate-800 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-800 hover:text-white hover:border-blue-500/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ring-1 ring-white/5 hover:ring-blue-500/30">
                                            {exam.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
