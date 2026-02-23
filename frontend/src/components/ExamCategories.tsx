"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Building2, GraduationCap, Shield, Sparkles } from "lucide-react";
import ExamSearch from "@/components/ExamSearch";

const categories = [
    {
        title: "Government Exams",
        desc: "SSC, Railways, UPSC & state exams.",
        href: "/government-exams",
        icon: Building2,
        accent: "border-emerald-500/30 hover:border-emerald-500/60",
        glow: "bg-emerald-600",
    },
    {
        title: "Engineering Exams",
        desc: "JEE Main, JEE Advanced & more.",
        href: "/engineering-exams",
        icon: GraduationCap,
        accent: "border-blue-500/30 hover:border-blue-500/60",
        glow: "bg-blue-600",
    },
    {
        title: "Medical Exams",
        desc: "NEET UG and allied medical exams.",
        href: "/medical-exams",
        icon: GraduationCap,
        accent: "border-pink-500/30 hover:border-pink-500/60",
        glow: "bg-pink-600",
    },
    {
        title: "Banking Exams",
        desc: "SBI, IBPS, RBI and more.",
        href: "/banking-exams",
        icon: BookOpen,
        accent: "border-yellow-500/30 hover:border-yellow-500/60",
        glow: "bg-yellow-600",
    },
    {
        title: "Defence Exams",
        desc: "NDA, CDS, AFCAT and more.",
        href: "/defence-exams",
        icon: Shield,
        accent: "border-indigo-500/30 hover:border-indigo-500/60",
        glow: "bg-indigo-600",
    },
    {
        title: "Private/Entrance Exams",
        desc: "CUET and other entrance tests.",
        href: "/entrance-exams",
        icon: Sparkles,
        accent: "border-slate-500/30 hover:border-slate-400/60",
        glow: "bg-slate-500",
    },
];

export default function ExamCategories() {
    return (
        <section className="py-20 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="text-blue-400 font-black tracking-wider text-sm">EXPLORE</div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Choose Your Exam Category</h2>
                    <p className="text-slate-400 text-lg mt-4">Pick your category to see exam-wise test series, syllabus and resources.</p>
                </div>

                <div className="max-w-2xl mx-auto mb-10">
                    <ExamSearch />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((c) => (
                        <Link
                            key={c.title}
                            href={c.href}
                            className={`group relative p-6 rounded-3xl bg-slate-900 border ${c.accent} transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity ${c.glow} blur-[60px] rounded-full`} />
                            <div className="flex items-start justify-between">
                                <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800 text-slate-200 group-hover:text-white transition-colors">
                                    <c.icon className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2 text-sm font-black text-blue-300 group-hover:translate-x-1 transition-transform">
                                    View <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="text-xl font-black text-white">{c.title}</div>
                                <div className="text-sm text-slate-400 mt-2">{c.desc}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
