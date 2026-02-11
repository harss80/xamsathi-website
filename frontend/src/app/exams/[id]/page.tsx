"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
    BookOpen,
    CheckCircle,
    Clock,
    Award,
    Users,
    ArrowRight,
    Target,
    BarChart,
    Calendar
} from "lucide-react";

// Exam Data Definitions
const EXAM_DATA: Record<string, {
    title: string;
    description: string;
    features: string[];
    stats: { label: string; value: string }[];
    syllabus: string[];
    gradient: string;
}> = {
    "jee-main-advanced": {
        title: "JEE Main & Advanced",
        description: "Comprehensive preparation for India's most competitive engineering entrance exams. Master Physics, Chemistry, and Mathematics with our expert-curated test series and study materials.",
        features: [
            "Full-length Mock Tests matching NTA pattern",
            "Chapter-wise practice questions",
            "Previous year question papers with analysis",
            "Advanced performance analytics",
            "Real-time All India Rank prediction"
        ],
        stats: [
            { label: "Active Aspirants", value: "50k+" },
            { label: "Questions", value: "10k+" },
            { label: "Success Rate", value: "12%" },
        ],
        syllabus: ["Physics", "Chemistry", "Mathematics"],
        gradient: "from-blue-600 to-cyan-500",
    },
    "neet-ug": {
        title: "NEET UG",
        description: "Your gateway to top medical colleges. Our NEET UG program focuses on accuracy and speed, ensuring you are ready to tackle the medical entrance exam with confidence.",
        features: [
            "NCERT-based line-by-line questions",
            "Subject-wise tests for Bio, Chem, Physics",
            "High-yield topic focus",
            "Mistake analysis & improvement tracking",
            "Video solutions for complex problems"
        ],
        stats: [
            { label: "Medical Aspirants", value: "80k+" },
            { label: "Bio Questions", value: "15k+" },
            { label: "Selections", value: "8.5%" },
        ],
        syllabus: ["Biology (Botany & Zoology)", "Physics", "Chemistry"],
        gradient: "from-emerald-600 to-green-500",
    },
    "upsc-cse": {
        title: "UPSC CSE",
        description: "Crack the Civil Services Examination with our structured approach. Covering Prelims and Mains with depth, ensuring a holistic understanding of General Studies and Current Affairs.",
        features: [
            "Daily Current Affairs updates",
            "Prelims focused mock tests",
            "Mains answer writing practice",
            "Detailed editorial analysis",
            "Subject-wise CSAT preparation"
        ],
        stats: [
            { label: "Civil Servants", value: "10k+" },
            { label: "Mock Tests", value: "500+" },
            { label: "Coverage", value: "100%" },
        ],
        syllabus: ["General Studies", "CSAT", "Essay", "Optional Subjects"],
        gradient: "from-amber-600 to-orange-500",
    },
    "ssc-cgl": {
        title: "SSC CGL",
        description: "Secure a prestigious government job with our SSC CGL specialized course. Speed math, reasoning shortcuts, and extensive vocabulary building for the ultimate edge.",
        features: [
            "Tier I & Tier II focused tests",
            "Speed enhancement drills",
            "General Awareness power capsules",
            "Quantitative Aptitude shortcuts",
            "English comprehension mastery"
        ],
        stats: [
            { label: "Users", value: "100k+" },
            { label: "Tests Taken", value: "1M+" },
            { label: "Selection", value: "High" },
        ],
        syllabus: ["Reasoning", "General Awareness", "Quantitative Aptitude", "English"],
        gradient: "from-indigo-600 to-purple-500",
    },
    "banking-exams": {
        title: "Banking Exams",
        description: "Prepare for IBPS, SBI, and RBI exams. Focus on speed, accuracy, and banking awareness to ace the competitive banking sector recruitment tests.",
        features: [
            "Pattern for IBPS PO, Clerk, SBI PO",
            "Banking Awareness special modules",
            "Data Interpretation intensive practice",
            "Puzzle and Seating Arrangement mastery",
            "Full-length prelims and mains mocks"
        ],
        stats: [
            { label: "Aspirants", value: "60k+" },
            { label: "Mock Drills", value: "2k+" },
            { label: "Success Stories", value: "5k+" },
        ],
        syllabus: ["Reasoning", "Quant", "English", "General/Banking Awareness"],
        gradient: "from-rose-600 to-pink-500",
    },
    "cbse-class-10-12": {
        title: "CBSE Class 10 & 12",
        description: "Build a strong foundation for board exams. Chapter-wise revision, sample papers, and important question banks to ensure 95%+ scores in your board results.",
        features: [
            "Chapter-wise revision notes",
            "Previous 10 years solved papers",
            "Most likely questions for boards",
            "Sample paper practice",
            "Subjective answer writing tips"
        ],
        stats: [
            { label: "Students", value: "25k+" },
            { label: "Resources", value: "5k+" },
            { label: "Avg Score", value: "88%" },
        ],
        syllabus: ["Science", "Maths", "Social Science", "English", "Hindi"],
        gradient: "from-teal-600 to-cyan-500",
    },
};

export default function ExamPage() {
    const params = useParams();
    const id = params?.id as string;
    const exam = EXAM_DATA[id];

    if (!exam) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${exam.gradient} opacity-10 blur-[100px] pointer-events-none`} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Premium Preparation Module</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Crack <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exam.gradient}`}>{exam.title}</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            {exam.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/signup"
                                className={`px-8 py-4 rounded-xl bg-gradient-to-r ${exam.gradient} text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2`}
                            >
                                Start Preparing Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/tests"
                                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold hover:bg-slate-800 transition-all"
                            >
                                Explore Test Series
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-slate-900 bg-slate-950/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {exam.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exam.gradient} mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our {exam.title} Program?</h2>
                            <div className="space-y-6">
                                {exam.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`mt-1 p-2 rounded-lg bg-gradient-to-r ${exam.gradient} bg-opacity-10 text-white`}>
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">Feature {index + 1}</h3>
                                            <p className="text-slate-400">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Card/Visual */}
                        <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${exam.gradient} from-opacity-10 to-opacity-5 border border-white/10`}>
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                            <h3 className="text-2xl font-bold text-white mb-6">Syllabus Coverage</h3>
                            <div className="space-y-4">
                                {exam.syllabus.map((subject, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="w-5 h-5 text-blue-400" />
                                            <span className="text-slate-200 font-medium">{subject}</span>
                                        </div>
                                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">Covered</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center justify-between text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Regular Updates</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Target className="w-4 h-4" />
                                        <span>Targeted Practice</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden">
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-r ${exam.gradient} opacity-5 blur-3xl pointer-events-none`} />

                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
                            Ready to Ace {exam.title}?
                        </h2>
                        <p className="text-slate-300/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join thousands of successful aspirants who trusted XamSathi for their exam preparation journey.
                        </p>
                        <Link
                            href="/signup"
                            className={`relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${exam.gradient} text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all`}
                        >
                            Get Started for Free
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
