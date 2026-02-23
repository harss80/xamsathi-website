"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is the best way to prepare for JEE Main in 90 days?",
        a: "To prepare for JEE Main in 90 days, focus on high-weightage topics first. Our best exam test series helps you identify these areas through detailed analytics. Dedicate 60 days to syllabus completion and core problem-solving, and the last 30 days exclusively to taking our JEE practice test online on the XamSathi platform."
    },
    {
        q: "Are online mock tests in India actually helpful for NEET?",
        a: "Yes! Practicing with high-quality NEET practice questions in a timed, CBT (Computer Based Test) environment exactly mimics the real exam. Our online mock tests in India provide instant AIR (All India Rank), time-management feedback, and video solutions that textbooks cannot offer."
    },
    {
        q: "How does the XamSathi Test Series compare to offline coaching?",
        a: "XamSathi's platform tracks your exact weak chapters and suggests personalized improvement tests. While offline coaching is generic, our JEE and NEET test series adapt to your personal learning curve, making it the best exam test series available."
    },
    {
        q: "Is the study material enough for JEE Advanced and NEET?",
        a: "Yes, our study material is comprehensive and curated by ex-IITians. It covers all concepts from fundamental NCERT lines to advanced multi-concept problems, fully aligning with the updated NTA syllabus."
    },
    {
        q: "What is the updated syllabus for NEET and JEE (2025/2026)?",
        a: "NTA has recently rationalized the syllabus by removing some chapters in Chemistry and Physics. XamSathi’s courses and mock tests are strictly updated to reflect only the latest NEET and JEE syllabi to ensure you don't waste time on irrelevant topics."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    } as const;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-800">{faq.q}</span>
                                {openIndex === idx ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-600" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-slate-50"
                                    >
                                        <div className="p-4 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
