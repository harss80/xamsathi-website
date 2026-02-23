"use client";

import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";

type Ranker = {
    name: string;
    exam: string;
    result: string;
    photoSrc: string;
};

type ScoreImprovement = {
    label: string;
    before: string;
    after: string;
    timeframe: string;
};

type Testimonial = {
    quote: string;
    name: string;
    title: string;
};

const rankers: Ranker[] = [];
const improvements: ScoreImprovement[] = [];
const testimonials: Testimonial[] = [];

export default function SocialProof() {
    const hasAny = rankers.length > 0 || improvements.length > 0 || testimonials.length > 0;
    if (!hasAny) return null;

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="text-blue-400 font-black tracking-wider text-sm">SOCIAL PROOF</div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Results that build trust</h2>
                    <p className="text-slate-600 text-lg mt-4">Real rankers, real score improvements, and student stories.</p>
                </div>

                {rankers.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {rankers.map((r) => (
                            <div key={`${r.name}-${r.result}`} className="p-6 rounded-3xl bg-white border border-slate-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative">
                                        <Image src={r.photoSrc} alt={r.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">{r.name}</div>
                                        <div className="text-xs text-slate-600 font-bold">{r.exam}</div>
                                    </div>
                                </div>
                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-emerald-300">
                                    <BadgeCheck className="w-4 h-4" /> {r.result}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {improvements.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {improvements.map((s) => (
                            <div key={s.label} className="p-6 rounded-3xl bg-white border border-slate-200">
                                <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-600">{s.label}</div>
                                <div className="mt-4 text-slate-900 font-black text-xl">{s.before} → {s.after}</div>
                                <div className="mt-2 text-sm text-slate-600">{s.timeframe}</div>
                            </div>
                        ))}
                    </div>
                )}

                {testimonials.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={`${t.name}-${idx}`} className="p-8 rounded-3xl bg-white border border-slate-200 relative">
                                <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6" fill="currentColor" />
                                <p className="text-slate-700 leading-relaxed italic">{t.quote}</p>
                                <div className="mt-6">
                                    <div className="text-sm font-black text-slate-900">{t.name}</div>
                                    <div className="text-xs text-slate-600 font-bold">{t.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
