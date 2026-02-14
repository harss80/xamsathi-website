"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap, Loader2 } from "lucide-react";

type CourseItem = {
    _id: string;
    title: string;
    description?: string | null;
    class_grade: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function CbseTestSeriesPage() {
    const [items, setItems] = useState<CourseItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                setError(null);

                const grades = [9, 10, 11, 12];
                const results = await Promise.all(
                    grades.map(async (g) => {
                        const res = await fetch(`${API_BASE}/api/tests/courses`, {
                            headers: { "x-class-grade": String(g) },
                            cache: "no-store",
                        });

                        if (!res.ok) return [] as CourseItem[];
                        const data = (await res.json()) as { items?: CourseItem[] };
                        return (data.items || []).filter((c) => c.class_grade === g);
                    })
                );

                setItems(results.flat());
            } catch (e) {
                console.error(e);
                setError("Could not load CBSE courses. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    const grouped = useMemo(() => {
        const map = new Map<number, CourseItem[]>();
        for (const c of items) {
            const list = map.get(c.class_grade) || [];
            list.push(c);
            map.set(c.class_grade, list);
        }
        return map;
    }, [items]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/dashboard?tab=tests"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
                            <GraduationCap className="w-8 h-8 text-cyan-400" />
                            CBSE Test Series (Class 9–12)
                        </h1>
                        <p className="text-slate-400">Preview and open your Class 9–12 test-series courses (no payment required to view).</p>
                    </div>
                </div>

                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex items-center gap-3 text-slate-400">
                            <Loader2 className="w-5 h-5 animate-spin" /> Loading courses...
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300">
                        {error}
                    </div>
                )}

                {!loading && !error && items.length === 0 && (
                    <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                        <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No Courses Found</h3>
                        <p className="text-slate-400">Seed courses in backend or ensure the API is running.</p>
                    </div>
                )}

                {!loading && !error && items.length > 0 && (
                    <div className="space-y-10">
                        {[9, 10, 11, 12].map((grade) => {
                            const list = grouped.get(grade) || [];
                            if (list.length === 0) return null;

                            return (
                                <div key={grade} className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-white">Class {grade}</h2>
                                        <div className="text-xs text-slate-500">{list.length} course(s)</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {list.map((course) => (
                                            <div
                                                key={course._id}
                                                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all hover:shadow-xl"
                                            >
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                                    {course.title}
                                                </h3>
                                                {course.description ? (
                                                    <p className="text-sm text-slate-400 mb-6 line-clamp-3">{course.description}</p>
                                                ) : (
                                                    <p className="text-sm text-slate-500 mb-6">No description</p>
                                                )}

                                                <Link
                                                    href={`/dashboard/test-series/${course._id}`}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold hover:bg-cyan-500/15 transition-colors"
                                                >
                                                    See Tests
                                                    <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
