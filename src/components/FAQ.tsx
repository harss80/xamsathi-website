"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { q: "Is the study material enough for JEE Advanced?", a: "Yes, our study material is comprehensive and curated by ex-IITians, covering all concepts from basic to advanced level." },
    { q: "Can I access the tests on mobile?", a: "Absolutely! Our platform is fully responsive and we also have a dedicated mobile app for Android and iOS." },
    { q: "Do you provide doubt clearing sessions?", a: "We have daily live doubt clearing sessions where you can interact with faculty directly." },
    { q: "What is the validity of the course?", a: "The course validity depends on the plan you choose, typically ranging from 1 year to 2 years." }
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
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/50">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-900 transition-colors"
                            >
                                <span className="font-semibold text-slate-200">{faq.q}</span>
                                {openIndex === idx ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-500" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-slate-900"
                                    >
                                        <div className="p-4 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
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
