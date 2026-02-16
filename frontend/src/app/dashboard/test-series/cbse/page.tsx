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

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function CbseTestSeriesPage() {
    const [items, setItems] = useState<CourseItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [classGrade, setClassGrade] = useState<number | null>(null);

    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("xamsathi_user");
            if (!savedUser) return;
            const parsed = JSON.parse(savedUser) as Record<string, unknown>;
            const cg = parsed.class_grade;
            if (typeof cg === "number" && cg >= 1 && cg <= 12) {
                setClassGrade(cg);
                return;
            }
            if (typeof cg === "string") {
                const n = Number(String(cg).replace(/[^0-9]/g, ""));
                if (!Number.isNaN(n) && n >= 1 && n <= 12) setClassGrade(n);
            }
        } catch {
            // ignore
        }
    }, []);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                if (!API_BASE) {
                    throw new Error("NEXT_PUBLIC_API_URL is not set");
                }
                if (!classGrade) {
                    setItems([]);
                    return;
                }
                setError(null);

                const res = await fetch(`${API_BASE}/api/tests/courses`, {
                    headers: { "x-class-grade": String(classGrade) },
                    cache: "no-store",
                });

                if (!res.ok) {
                    setItems([]);
                    return;
                }

                const data = (await res.json()) as { items?: CourseItem[] };
                const list = Array.isArray(data.items) ? data.items : [];
                setItems(list.filter((c) => c && typeof c === "object" && c.class_grade === classGrade));
            } catch (e) {
                console.error(e);
                if (!API_BASE) {
                    setError("Backend URL missing. Set NEXT_PUBLIC_API_URL (Vercel env) to your backend base URL (example: https://YOUR-RENDER-SERVICE.onrender.com).");
                } else {
                    setError("Could not load CBSE courses. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, [classGrade]);

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
                            {classGrade ? `CBSE Test Series (Class ${classGrade})` : "CBSE Test Series"}
                        </h1>
                        <p className="text-slate-400">Open your class test-series courses (no payment required to view).</p>
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

                {!loading && !error && classGrade && items.length > 0 && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Class {classGrade}</h2>
                            <div className="text-xs text-slate-500">{items.length} course(s)</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {items.map((course) => (
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
                )}

                {!loading && !error && !classGrade && (
                    <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200">
                        Please complete your profile (Class/Grade) to see your class content.
                    </div>
                )}
            </div>
        </div>
    );
}
