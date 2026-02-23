"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileCheck } from "lucide-react";
import { trackLead } from "@/lib/trackLead";

const tests = [
    {
        id: 1,
        title: "SSC CGL Tier I & II",
        tag: "Trending",
        description: "Speed enhancement and accuracy building series.",
        tests: "50 Full Tests",
        price: "₹499",
        oldPrice: "₹999",
        href: "/dashboard/test-series/free-series" // placeholder
    },
    {
        id: 2,
        title: "SBI PO Prelims & Mains",
        tag: "Popular",
        description: "Complete mock drill for Banking aspirants.",
        tests: "40 Sets",
        price: "₹499",
        oldPrice: "₹1,299",
        href: "/dashboard/test-series/free-series"
    },
    {
        id: 3,
        title: "JEE Main & Advanced 2026",
        tag: "Bestseller",
        description: "Aligns with new pattern. Deep conceptual questions.",
        tests: "30 Full Tests",
        price: "₹999",
        oldPrice: "₹1,999",
        href: "/dashboard/test-series/free-series"
    },
    {
        id: 4,
        title: "NEET UG 2026 Elite",
        tag: "Premium",
        description: "NCERT-based rigorous practice for medical aspirants.",
        tests: "30 Full Tests",
        price: "₹999",
        oldPrice: "₹1,999",
        href: "/dashboard/test-series/free-series"
    },
];

const TestSeries = () => {
    return (
        <section id="test-series" className="py-20 bg-slate-950 border-y border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Practice Perfection</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">
                        Test Series for Every Goal
                    </h2>
                    <p className="text-slate-400 font-medium text-lg">
                        Simulate real exam environment with our AI-powered test platform. Get instant analysis and All India Rank.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tests.map((test, index) => (
                        <div
                            key={test.id}
                            className="group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-lg text-xs font-bold group-hover:bg-slate-800 group-hover:text-blue-400 group-hover:border-slate-700 transition-all">
                                        {test.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-600 transition-colors">
                                    {test.title}
                                </h3>
                                <p className="text-sm text-slate-400 mb-6 font-medium line-clamp-2">
                                    {test.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm font-bold text-slate-300 gap-3 bg-slate-900 p-3 rounded-lg border border-slate-800">
                                        <FileCheck className="w-5 h-5 text-blue-500" />
                                        <span>{test.tests} included</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 font-bold line-through">{test.oldPrice}</span>
                                    <span className="text-2xl font-black text-white">{test.price}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        trackLead({
                                            action: "testseries_card_click",
                                            entity_type: "test_series",
                                            entity_id: String(test.id),
                                            meta: { title: test.title, price: test.price },
                                        });
                                    }}
                                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-sm flex items-center gap-2"
                                    aria-label="View test series"
                                >
                                    View <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => {
                            trackLead({ action: "testseries_explore_all", entity_type: "test_series" });
                        }}
                        className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all shadow-md active:scale-95 border border-slate-700"
                    >
                        Explore All Test Series
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestSeries;
