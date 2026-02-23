"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

const plans = [
    {
        name: "NEET Rank Booster Pack",
        price: "₹199",
        includes: ["20 Part Tests", "High-yield chapters", "Timed practice for speed + accuracy"],
        href: "/dashboard/test-series/premium-neet-rank-booster",
        tone: "emerald" as const,
    },
    {
        name: "NEET Concept Mastery",
        price: "₹299",
        includes: ["30 Chapter Tests", "Topic-wise mastery", "Instant scoring + explanations"],
        href: "/dashboard/test-series/premium-neet-concept-mastery",
        tone: "indigo" as const,
    },
    {
        name: "NEET Advanced Mock Pro",
        price: "₹499",
        includes: ["15 Full Mocks", "10 Part Tests", "Full syllabus coverage + solutions"],
        href: "/dashboard/test-series/premium-neet-advanced",
        tone: "yellow" as const,
    },
    {
        name: "NEET Intensive Papers Series",
        price: "₹1999",
        includes: ["20 Full Papers", "Real exam feel", "Full-length practice + analysis"],
        href: "/dashboard/test-series/premium-neet-intensive-papers",
        tone: "pink" as const,
    },
    {
        name: "JEE Main Copy Mocks",
        price: "₹1999",
        includes: ["25 Full Mocks", "JEE Main pattern", "Timed tests with solutions"],
        href: "/dashboard/test-series/premium-jee-main-copy-mocks",
        tone: "blue" as const,
    },
];

const comparison = [
    { feature: "Real exam simulation", xamsathi: true, others: "Partial" },
    { feature: "Strict timer + pattern-based tests", xamsathi: true, others: "Sometimes" },
    { feature: "Detailed solutions", xamsathi: true, others: "Limited" },
    { feature: "Works well on mobile", xamsathi: true, others: "Varies" },
    { feature: "Transparent pricing", xamsathi: true, others: "Hidden" },
];

const toneToBorder = {
    emerald: "hover:border-emerald-500/50",
    indigo: "hover:border-indigo-500/50",
    yellow: "hover:border-yellow-500/50",
    pink: "hover:border-pink-500/50",
    blue: "hover:border-blue-500/50",
} as const;

export default function PricingComparison() {
    return (
        <section className="py-20 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="text-blue-400 font-black tracking-wider text-sm">PRICING</div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Clear Plans. Faster Decisions.</h2>
                    <p className="text-slate-400 text-lg mt-4">
                        Choose a plan that matches your exam and start with a free mock test before you upgrade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((p) => (
                        <Link
                            key={p.name}
                            href={p.href}
                            className={`group p-6 rounded-3xl bg-slate-900 border border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-1 ${toneToBorder[p.tone]}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-sm font-black text-slate-300">{p.name}</div>
                                    <div className="mt-2 text-3xl font-black text-white">{p.price}</div>
                                </div>
                                <div className="w-10 h-10 rounded-2xl bg-slate-950/50 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="mt-5 space-y-2">
                                {p.includes.map((t) => (
                                    <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                                        <BadgeCheck className="w-4 h-4 text-emerald-400" /> {t}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800 text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
                                View details
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-sm font-black text-white">Why XamSathi</div>
                        <div className="text-slate-400 mt-2">
                            Built for result-focused preparation: timed mocks, clear solutions, and a clean test-taking experience.
                        </div>

                        <div className="mt-6 space-y-3">
                            {comparison.map((row) => (
                                <div key={row.feature} className="flex items-start justify-between gap-4">
                                    <div className="text-sm text-slate-300">{row.feature}</div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-sm font-black text-emerald-300 inline-flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4" /> XamSathi
                                        </div>
                                        <div className="text-sm font-bold text-slate-500 min-w-[84px] text-right">{row.others}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <div className="text-sm font-black text-white">Risk-free start</div>
                                <div className="text-slate-400 mt-2">
                                    Start with the free mock tests. Upgrade only when you’re confident.
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/dashboard/test-series/free-series"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-colors"
                            >
                                Start Free Mock Test Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
