"use client";

import { Search, Filter, ArrowRight, BookOpen, Clock, Star } from "lucide-react";
import Courses from "@/components/Courses";
import AppCTA from "@/components/AppCTA";
import FAQ from "@/components/FAQ";

// Section 1: Hero with Search
const CoursesHero = () => (
    <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Find the Perfect <span className="text-blue-500">Course</span></h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                Explore our wide range of comprehensive courses designed by expert faculty to help you crack your dream exam.
            </p>

            <div className="max-w-2xl mx-auto relative">
                <input
                    type="text"
                    placeholder="Search for JEE, NEET, Class 10..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Search
                </button>
            </div>
        </div>
    </section>
);

// Section 2: Course Categories (Reuse)

// Section 3: All Courses Grid
const AllCourses = () => {
    const courseList = [
        { title: "Arjuna JEE 2026", class: "Class 11", price: "₹4,500", rating: "4.9", subjects: "PCM" },
        { title: "Lakshya NEET 2026", class: "Class 12", price: "₹4,200", rating: "4.8", subjects: "PCB" },
        { title: "Udaan Class 10", class: "Class 10", price: "₹2,500", rating: "4.9", subjects: "Math, Sci, Eng, SST" },
        { title: "Neev Class 9", class: "Class 9", price: "₹2,000", rating: "4.7", subjects: "Math, Sci, Eng" },
        { title: "Yakeen Dropper NEET", class: "Dropper", price: "₹3,999", rating: "4.9", subjects: "PCB" },
        { title: "Prayas Dropper JEE", class: "Dropper", price: "₹4,100", rating: "4.8", subjects: "PCM" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Featured Batches</h2>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseList.map((course, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="h-48 bg-slate-200 relative group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                                    {course.class}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{course.title}</h3>
                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-bold text-yellow-700">
                                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> {course.rating}
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm mb-4">{course.subjects}</p>

                                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                    <div className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Live Classes</div>
                                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> 1 Year</div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="font-bold text-2xl text-slate-900">{course.price}</div>
                                    <button className="px-6 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Section 4: Methodology
const Methodology = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">How We Teach</h2>
                <p className="text-slate-600 mt-4">A proven 4-step learning process for guaranteed success</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                {[
                    { step: "01", title: "Learn", desc: "Interactive live classes with visualization." },
                    { step: "02", title: "Practice", desc: "Daily practice problems (DPPs) after every class." },
                    { step: "03", title: "Test", desc: "Regular mock tests to analyze performance." },
                    { step: "04", title: "Revise", desc: "Short notes and rapid revision sessions." }
                ].map((m, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-dashed border-blue-200 relative overflow-hidden">
                        <div className="text-6xl font-bold text-slate-100 absolute -right-2 -top-2">{m.step}</div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h4>
                            <p className="text-slate-600">{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function CoursesPage() {
    return (
        <main>
            <CoursesHero />
            <Courses />
            <AllCourses />
            <Methodology />
            <AppCTA />
            <FAQ />
        </main>
    );
}
