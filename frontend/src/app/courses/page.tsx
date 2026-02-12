"use client";

import { useState, useMemo } from "react";
import { Search, Filter, ArrowRight, BookOpen, Clock, Star, Download, TrendingUp, ShieldCheck } from "lucide-react";
import { coursesData, Course } from "@/lib/coursesData";
import AppCTA from "@/components/AppCTA";
import FAQ from "@/components/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import { trackLead } from "@/lib/trackLead";

// --- Components ---

const CourseCard = ({ course }: { course: Course }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
        >
            {/* Image / Gradient Header */}
            <div
                className="h-48 relative overflow-hidden"
                style={{ background: course.image }}
            >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-lg">
                    {course.subCategory}
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                        onClick={() => {
                            trackLead({
                                action: "course_view_details",
                                entity_type: "course",
                                entity_id: course.id,
                                meta: { title: course.title, category: course.category, subCategory: course.subCategory },
                            });
                        }}
                        className="w-full bg-white/90 backdrop-blur-md text-slate-900 font-bold py-2 rounded-lg text-sm shadow-lg hover:bg-white"
                    >
                        View Details
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {course.title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded text-xs font-bold text-yellow-700 dark:text-yellow-400 shrink-0 ml-2">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> {course.rating}
                    </div>
                </div>

                {/* Features / Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md">
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <span className="text-slate-400 text-sm line-through mr-2">{course.originalPrice}</span>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{course.price}</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {course.students} enrolled
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "School", "Competitive", "Govt Exams", "Test Series", "Study Material"];

    const itemListSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: coursesData.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.xamsathi.in/courses#${c.id}`,
            name: c.title,
        })),
    }), []);

    const filteredCourses = useMemo(() => {
        return coursesData.filter((course) => {
            const matchesCategory = activeCategory === "All" || course.category === activeCategory;
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            {/* --- HERO SECTION --- */}
            <section className="bg-slate-900 relative overflow-hidden py-24 px-4">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Find Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Success</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                    >
                        Comprehensive courses for School, JEE, NEET, Government Exams, and more.
                        Start learning with India's best educators today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for JEE, NEET, UPSC, Class 10..."
                            className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-2xl"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                    </motion.div>
                </div>
            </section>

            {/* --- FILTERS & GRID --- */}
            <section className="py-12 container mx-auto px-4 md:px-6">

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25"
                                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                            <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">No courses found</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your search or category filter.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                            className="mt-6 text-blue-600 font-semibold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

            </section>

            {/* --- SUGGESTIONS / ADD-ONS --- */}
            <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Not finding what you're looking for?</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                                We are constantly adding new courses, test series, and study materials based on student roadmap. Suggest a course and we'll prioritize it!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Upcoming Batches</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">GATE 2026, CAT 2026, and CUET crash courses coming next month.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                        <Download className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Free Study Material</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Access thousands of free PDFs, NCERT solutions, and formula sheets in our resource center.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Request a Course</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Exam / Class Name</label>
                                    <input type="text" placeholder="e.g. CSIR NET Life Sciences" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <button className="w-full bg-slate-900 dark:bg-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <AppCTA />
            <FAQ />
        </main>
    );
}
