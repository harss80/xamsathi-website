"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Zap } from "lucide-react";

const plans = [
    {
        name: "Entry Level Category Tests",
        subtitle: "Perfect for single exam focus",
        price: "₹299",
        priceLabel: "Starting at",
        includes: ["10-20 Full Mocks", "Chapter-wise tests", "Instant analytics"],
        href: "/tests",
        highlight: false,
    },
    {
        name: "Full Course Test Series",
        subtitle: "Comprehensive preparation",
        price: "₹999",
        priceLabel: "Most Popular",
        includes: ["50+ Mocks & Part Tests", "Detailed video solutions", "Topper comparison analysis"],
        href: "/tests",
        highlight: true,
    },
    {
        name: "Premium Combo Packs",
        subtitle: "Target multiple exams",
        price: "₹1999",
        priceLabel: "Best Value",
        includes: ["Access to ALL related exams", "SSC + Railway or Banking Full", "Unlimited practice sets"],
        href: "/tests",
        highlight: false,
    },
];

const comparison = [
    { feature: "Simulated exam interface", xamsathi: true, others: "Partial" },
    { feature: "National-level ranking", xamsathi: true, others: "Sometimes" },
    { feature: "Step-by-step solutions", xamsathi: true, others: "Limited" },
    { feature: "Works smoothly on 3G/4G", xamsathi: true, others: "Varies" },
    { feature: "Affordable transparent pricing", xamsathi: true, others: "Hidden fees" },
];

export default function PricingComparison() {
    return (
        <section className="py-20 bg-slate-900 border-y border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-blue-600 font-bold tracking-wider text-sm uppercase">Affordable Pricing</div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mt-2">More Exams. More Value.</h2>
                    <p className="text-slate-400 text-lg mt-4 font-medium">
                        Flexible plans designed for every pocket. Start with a single exam pack or unlock combo access.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            className={`relative group p-8 rounded-3xl transition-all duration-300 ${p.highlight
                                ? "bg-slate-800 text-white shadow-xl scale-100 lg:scale-105 z-10 border border-slate-700"
                                : "bg-slate-900 text-white border border-slate-800 hover:border-slate-600 hover:shadow-lg"
                                }`}
                        >
                            {p.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                                    <Zap className="w-3 h-3" /> BESTSELLER
                                </div>
                            )}

                            <div className="text-center border-b border-opacity-20 pb-8 mb-8 border-slate-500">
                                <span className={`text-sm font-bold ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                                    {p.priceLabel}
                                </span>
                                <div className="mt-2 text-5xl font-black">{p.price}</div>
                                <h3 className={`mt-4 text-xl font-bold ${p.highlight ? "text-white" : "text-white"}`}>{p.name}</h3>
                                <p className={`mt-2 text-sm font-medium ${p.highlight ? "text-slate-400" : "text-slate-400"}`}>{p.subtitle}</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {p.includes.map((t) => (
                                    <div key={t} className="flex items-center gap-3">
                                        <BadgeCheck className={`w-5 h-5 shrink-0 ${p.highlight ? "text-blue-400" : "text-blue-600"}`} />
                                        <span className={`text-sm font-bold tracking-wide ${p.highlight ? "text-slate-200" : "text-slate-300"}`}>{t}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={p.href}
                                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-sm active:scale-95 ${p.highlight
                                    ? "bg-blue-600 text-white hover:bg-blue-500"
                                    : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                                    }`}
                            >
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-sm">
                        <div className="text-xl font-black text-white">Why Choose XamSathi</div>
                        <div className="text-slate-400 mt-2 font-medium">
                            Built for result-focused preparation: reliable platform, clear interface, and accurate content.
                        </div>

                        <div className="mt-8 space-y-4">
                            {comparison.map((row) => (
                                <div key={row.feature} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800 last:border-0 last:pb-0">
                                    <div className="text-sm font-bold text-slate-300">{row.feature}</div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-sm font-black text-blue-400 inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                                            <BadgeCheck className="w-4 h-4" /> Yes
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 rounded-3xl bg-blue-600 text-white border border-blue-700 shadow-xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-2xl font-black">Not sure yet?</div>
                            <div className="text-blue-100 mt-4 text-lg font-medium leading-relaxed">
                                Don't pay until you try. Take a free All India Mock Test and check your performance.
                            </div>
                        </div>

                        <div className="mt-8 relative z-10">
                            <Link
                                href="/dashboard/test-series/free-series"
                                className="inline-flex flex-wrap items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white hover:text-blue-400 font-black shadow-lg hover:bg-slate-800 transition-colors active:scale-95"
                            >
                                Start Free Mock Test <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
