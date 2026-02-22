"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Overview from "@/components/dashboard/Overview";
import Leaderboard from "@/components/dashboard/Leaderboard";
import EarnSection from "@/components/dashboard/EarnSection";

import ProfilePage from "@/app/dashboard/profile/page";

import { BookOpen, Calendar, BarChart3, ArrowRight, Sparkles, FileText } from "lucide-react";
import { trackLead } from "@/lib/trackLead";

const ALLOWED_TABS = ["overview", "courses", "tests", "schedule", "reports", "leaderboard", "profile", "earn"] as const;

function DashboardContent() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [purchasedCourseIds, setPurchasedCourseIds] = useState<Set<string>>(() => new Set());
    const [hasFreeAccess, setHasFreeAccess] = useState(false);
    const [classGrade] = useState<number | null>(() => {
        try {
            if (typeof window === "undefined") return null;
            const savedUser = localStorage.getItem("xamsathi_user");
            if (!savedUser) return null;

            const parsed = JSON.parse(savedUser) as Record<string, unknown>;
            const cg = parsed.class_grade;

            if (typeof cg === "number" && cg >= 1 && cg <= 12) {
                return cg;
            }

            if (typeof cg === "string") {
                const n = Number(String(cg).replace(/[^0-9]/g, ""));
                if (!Number.isNaN(n) && n >= 1 && n <= 12) return n;
            }

            return null;
        } catch {
            return null;
        }
    });
    const [targetExam] = useState<string | null>(() => {
        try {
            if (typeof window === "undefined") return null;
            const savedUser = localStorage.getItem("xamsathi_user");
            if (!savedUser) return null;
            const parsed = JSON.parse(savedUser) as Record<string, unknown>;
            const te = parsed.target_exam ?? parsed.stream ?? parsed.course;
            if (typeof te !== "string") return null;
            return te;
        } catch {
            return null;
        }
    });
    const [user, setUser] = useState({
        name: "Harsh Budhauliya",
        course: "JEE Advanced 2026",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh",
    });

    const stream = (targetExam || user.course || "").toUpperCase();
    const hideNeet = stream.includes("JEE") && !stream.includes("NEET");
    const hideJee = stream.includes("NEET") && !stream.includes("JEE");

    const router = useRouter();
    const searchParams = useSearchParams();

    const getCookie = (name: string) => {
        try {
            const m = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}=([^;]*)`));
            return m ? decodeURIComponent(m[1]) : null;
        } catch {
            return null;
        }
    };

    // Determine active tab
    const activeTabRaw = searchParams.get("tab");
    const activeTab = (activeTabRaw && (ALLOWED_TABS as readonly string[]).includes(activeTabRaw))
        ? activeTabRaw
        : "overview";

    const handleLogout = () => {
        try {
            const keys = ["xamsathi_token", "xamsathi_user", "xamsathi_auth", "eduman_auth", "authToken", "token"];
            if (typeof window !== "undefined") {
                keys.forEach((k) => localStorage.removeItem(k));
                window.dispatchEvent(new Event("storage"));
            }
            if (typeof document !== "undefined") {
                document.cookie = "xamsathi_auth=; Max-Age=0; path=/";
                document.cookie = "eduman_auth=; Max-Age=0; path=/";
                document.cookie = "token=; Max-Age=0; path=/";
                document.cookie = "xamsathi_token=; Max-Age=0; path=/; Domain=.xamsathi.in";
            }
        } finally {
            router.push("/");
        }
    };

    const syncUser = useCallback(() => {
        const savedUser = localStorage.getItem("xamsathi_user");
        if (savedUser) {
            try {
                const parsed = JSON.parse(savedUser);
                setUser(prev => ({
                    name: parsed.name || prev.name,
                    course: parsed.target_exam ? String(parsed.target_exam).toUpperCase() : (parsed.course || prev.course),
                    avatar: parsed.avatar || prev.avatar,
                }));

                if (parsed.onboarding_completed === false) {
                    router.replace("/admission?next=/dashboard");
                    return;
                }
            } catch { }
        }
    }, [router]);

    useEffect(() => {
        const checkAuth = () => {
            const cookieToken = getCookie("xamsathi_token");
            if (cookieToken) {
                try { localStorage.setItem("xamsathi_token", cookieToken); } catch { }
            }

            const keys = ["xamsathi_token", "xamsathi_auth", "eduman_auth", "authToken", "token"];
            const found = keys.some((k) => !!localStorage.getItem(k)) || !!cookieToken;

            syncUser();

            if (!found) {
                router.replace("/login?next=/dashboard");
            }
            setTimeout(() => setIsLoading(false), 800);
        };

        checkAuth();

        window.addEventListener("storage", syncUser);
        return () => window.removeEventListener("storage", syncUser);
    }, [router, syncUser]);

    useEffect(() => {
        const fetchPurchaseState = async () => {
            try {
                const getBackendBase = () => {
                    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
                    if (envBase) return envBase;
                    if (typeof window !== "undefined") {
                        const host = window.location.hostname;
                        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
                    }
                    return "http://localhost:3001";
                };

                const base = getBackendBase();
                const userStr = localStorage.getItem("xamsathi_user");
                if (!userStr) return;
                const parsed = JSON.parse(userStr) as unknown;
                const maybe = (parsed && typeof parsed === "object") ? (parsed as Record<string, unknown>) : null;
                const userIdRaw = maybe ? (maybe["_id"] ?? maybe["id"] ?? maybe["user_id"]) : null;
                const userId = (typeof userIdRaw === "string" || typeof userIdRaw === "number") ? String(userIdRaw) : null;
                if (!userId) return;

                const resMe = await fetch(`${base}/api/me`, {
                    headers: { "x-user-id": String(userId) },
                });
                if (!resMe.ok) return;
                const meData = await resMe.json();
                const u = meData?.user;
                const purchased = Array.isArray(u?.purchased_courses) ? (u.purchased_courses as string[]) : [];
                setPurchasedCourseIds(new Set(purchased));
                setHasFreeAccess(u?.free_access === true);
            } catch {
                // ignore
            }
        };

        fetchPurchaseState();
    }, []);

    const isPurchased = (courseId: string) => hasFreeAccess || purchasedCourseIds.has(courseId);

    const TEST_SERIES_CARDS = (() => {
        const items: Array<{
            id: string;
            title: string;
            subtitle: string;
            priceTag: string;
            href: string;
            entityId: string;
            hidden: boolean;
            visibleInCoursesTab: boolean;
        }> = [];

        if ((classGrade === 12) && !hideNeet) {
            items.push({
                id: "699f9a1b2c3d4e5f6a7b8c9d",
                title: "NEET Advanced Mock Pro",
                subtitle: "15 Full Mocks + 10 Part Tests • full syllabus coverage • detailed solutions & exam-level practice.",
                priceTag: "₹499",
                href: "/dashboard/test-series/premium-neet-advanced",
                entityId: "699f9a1b2c3d4e5f6a7b8c9d",
                hidden: false,
                visibleInCoursesTab: true,
            });
            items.push({
                id: "79bf9a1b2c3d4e5f6a7b8c9d",
                title: "NEET Rank Booster Pack",
                subtitle: "20 Part Tests • high-yield chapters • time-bound practice to improve speed & accuracy.",
                priceTag: "₹199",
                href: "/dashboard/test-series/premium-neet-rank-booster",
                entityId: "79bf9a1b2c3d4e5f6a7b8c9d",
                hidden: false,
                visibleInCoursesTab: true,
            });
            items.push({
                id: "89cf9a1b2c3d4e5f6a7b8c9d",
                title: "NEET Concept Mastery",
                subtitle: "30 Chapter Tests • topic-wise mastery • strengthen concepts with instant scoring & explanations.",
                priceTag: "₹299",
                href: "/dashboard/test-series/premium-neet-concept-mastery",
                entityId: "89cf9a1b2c3d4e5f6a7b8c9d",
                hidden: false,
                visibleInCoursesTab: true,
            });
            items.push({
                id: "99df9a1b2c3d4e5f6a7b8c9d",
                title: "NEET Intensive Papers Series",
                subtitle: "20 Full Papers • real exam feel • full-length practice with solutions & performance tracking.",
                priceTag: "₹1999",
                href: "/dashboard/test-series/premium-neet-intensive-papers",
                entityId: "99df9a1b2c3d4e5f6a7b8c9d",
                hidden: false,
                visibleInCoursesTab: true,
            });
        }

        if (((classGrade === 11) || (classGrade === 12)) && !hideJee) {
            const cid = classGrade === 11 ? "a1ef9a1b2c3d4e5f6a7b8c9d" : "b1ff9a1b2c3d4e5f6a7b8c9d";
            items.push({
                id: cid,
                title: "JEE Main Copy Mocks",
                subtitle: "25 Full Mocks • JEE Main pattern • timed tests with solutions to build accuracy & stamina.",
                priceTag: "₹1999",
                href: "/dashboard/test-series/premium-jee-main-copy-mocks",
                entityId: cid,
                hidden: false,
                visibleInCoursesTab: true,
            });
        }

        return items;
    })();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 flex">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onLogout={handleLogout}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10">
                <Header
                    onMenuClick={() => setIsSidebarOpen(true)}
                    user={user}
                />

                <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto">
                        {/* Tab Content */}
                        {activeTab === "overview" && <Overview user={user} />}

                        {activeTab === "courses" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Browse Courses</h3>
                                        <p className="text-slate-400 text-sm">Premium & paid series will appear here.</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            trackLead({ action: "dashboard_browse_library", entity_type: "dashboard" });
                                        }}
                                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors"
                                    >
                                        Browse Library
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {(classGrade === 12) && !hideNeet && (
                                        <>
                                            {!isPurchased("699f9a1b2c3d4e5f6a7b8c9d") && (
                                                <Link
                                                href="/dashboard/test-series/premium-neet-advanced"
                                                onClick={() => {
                                                    trackLead({ action: "dashboard_open_paid_series", entity_type: "test_series", entity_id: "699f9a1b2c3d4e5f6a7b8c9d" });
                                                }}
                                                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-yellow-500/50 hover:shadow-2xl transition-all hover:-translate-y-1"
                                            >
                                                <div className="h-40 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/25 via-slate-950 to-slate-950" />
                                                    <div className="absolute -top-12 -right-12 w-60 h-60 bg-yellow-500/20 blur-[60px] rounded-full" />
                                                    <div className="absolute top-5 left-5 flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center text-yellow-300">
                                                            <Sparkles className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-black uppercase tracking-[0.25em] text-yellow-300">Premium</div>
                                                            <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-xs font-black border border-yellow-500/20">
                                                        ₹499
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <h4 className="text-xl font-black text-white group-hover:text-yellow-200 transition-colors">
                                                        NEET Advanced Mock Pro
                                                    </h4>
                                                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                                                        15 Full Mocks + 10 Part Tests • premium experience.
                                                    </p>

                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                            <BookOpen className="w-4 h-4" /> 25 Tests
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm font-black text-yellow-300 group-hover:translate-x-1 transition-transform">
                                                            View <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            )}

                                            {!isPurchased("79bf9a1b2c3d4e5f6a7b8c9d") && (
                                                <Link
                                                href="/dashboard/test-series/premium-neet-rank-booster"
                                                onClick={() => {
                                                    trackLead({ action: "dashboard_open_paid_series", entity_type: "test_series", entity_id: "79bf9a1b2c3d4e5f6a7b8c9d" });
                                                }}
                                                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:shadow-2xl transition-all hover:-translate-y-1"
                                            >
                                                <div className="h-40 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-slate-950 to-slate-950" />
                                                    <div className="absolute -top-12 -right-12 w-60 h-60 bg-emerald-500/20 blur-[60px] rounded-full" />
                                                    <div className="absolute top-5 left-5 flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                                                            <Sparkles className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">Premium</div>
                                                            <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-black border border-emerald-500/20">
                                                        ₹199
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <h4 className="text-xl font-black text-white group-hover:text-emerald-200 transition-colors">
                                                        NEET Rank Booster Pack
                                                    </h4>
                                                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                                                        20 Part Tests • speed & accuracy focused.
                                                    </p>

                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                            <BookOpen className="w-4 h-4" /> Part Tests
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm font-black text-emerald-300 group-hover:translate-x-1 transition-transform">
                                                            View <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            )}

                                            {!isPurchased("89cf9a1b2c3d4e5f6a7b8c9d") && (
                                                <Link
                                                href="/dashboard/test-series/premium-neet-concept-mastery"
                                                onClick={() => {
                                                    trackLead({ action: "dashboard_open_paid_series", entity_type: "test_series", entity_id: "89cf9a1b2c3d4e5f6a7b8c9d" });
                                                }}
                                                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl transition-all hover:-translate-y-1"
                                            >
                                                <div className="h-40 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 via-slate-950 to-slate-950" />
                                                    <div className="absolute -top-12 -right-12 w-60 h-60 bg-indigo-500/20 blur-[60px] rounded-full" />
                                                    <div className="absolute top-5 left-5 flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                                                            <Sparkles className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300">Premium</div>
                                                            <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-black border border-indigo-500/20">
                                                        ₹299
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <h4 className="text-xl font-black text-white group-hover:text-indigo-200 transition-colors">
                                                        NEET Concept Mastery
                                                    </h4>
                                                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                                                        30 Chapter Tests • concept strength.
                                                    </p>

                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                            <BookOpen className="w-4 h-4" /> Chapter Tests
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm font-black text-indigo-300 group-hover:translate-x-1 transition-transform">
                                                            View <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            )}

                                            {!isPurchased("99df9a1b2c3d4e5f6a7b8c9d") && (
                                                <Link
                                                href="/dashboard/test-series/premium-neet-intensive-papers"
                                                onClick={() => {
                                                    trackLead({ action: "dashboard_open_paid_series", entity_type: "test_series", entity_id: "99df9a1b2c3d4e5f6a7b8c9d" });
                                                }}
                                                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-pink-500/50 hover:shadow-2xl transition-all hover:-translate-y-1"
                                            >
                                                <div className="h-40 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-slate-950 to-slate-950" />
                                                    <div className="absolute -top-12 -right-12 w-60 h-60 bg-pink-500/20 blur-[60px] rounded-full" />
                                                    <div className="absolute top-5 left-5 flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/20 flex items-center justify-center text-pink-300">
                                                            <Sparkles className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-black uppercase tracking-[0.25em] text-pink-300">Premium</div>
                                                            <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs font-black border border-pink-500/20">
                                                        ₹1999
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <h4 className="text-xl font-black text-white group-hover:text-pink-200 transition-colors">
                                                        NEET Intensive Papers Series
                                                    </h4>
                                                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                                                        20 Full Papers • exam pattern practice.
                                                    </p>

                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                            <BookOpen className="w-4 h-4" /> Full Papers
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm font-black text-pink-300 group-hover:translate-x-1 transition-transform">
                                                            View <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            )}
                                        </>
                                    )}

                                    {((classGrade === 11) || (classGrade === 12)) && !hideJee && (
                                        !isPurchased(classGrade === 11 ? "a1ef9a1b2c3d4e5f6a7b8c9d" : "b1ff9a1b2c3d4e5f6a7b8c9d") && (
                                        <Link
                                            href="/dashboard/test-series/premium-jee-main-copy-mocks"
                                            onClick={() => {
                                                const entityId = classGrade === 11
                                                    ? "a1ef9a1b2c3d4e5f6a7b8c9d"
                                                    : "b1ff9a1b2c3d4e5f6a7b8c9d";
                                                trackLead({ action: "dashboard_open_paid_series", entity_type: "test_series", entity_id: entityId });
                                            }}
                                            className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:shadow-2xl transition-all hover:-translate-y-1"
                                        >
                                            <div className="h-40 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-slate-950 to-slate-950" />
                                                <div className="absolute -top-12 -right-12 w-60 h-60 bg-emerald-500/20 blur-[60px] rounded-full" />
                                                <div className="absolute top-5 left-5 flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                                                        <Sparkles className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">Premium</div>
                                                        <div className="text-[11px] text-slate-400 font-bold">JEE Main | Class {classGrade}</div>
                                                    </div>
                                                </div>
                                                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-black border border-emerald-500/20">
                                                    ₹1999
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h4 className="text-xl font-black text-white group-hover:text-emerald-200 transition-colors">
                                                    JEE Main Copy Mocks
                                                </h4>
                                                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                                                    25 Full Mocks • 180 mins • 90 Questions.
                                                </p>

                                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                        <BookOpen className="w-4 h-4" /> Full Papers
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm font-black text-emerald-300 group-hover:translate-x-1 transition-transform">
                                                        View <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === "tests" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {TEST_SERIES_CARDS.filter((c) => isPurchased(c.id) && !c.hidden).map((c) => (
                                    <Link
                                        key={c.id}
                                        href={c.href}
                                        onClick={() => {
                                            trackLead({ action: "dashboard_open_purchased_series", entity_type: "test_series", entity_id: c.id });
                                        }}
                                        className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />

                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                <FileText className="w-8 h-8" />
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold border border-emerald-500/20">
                                                PURCHASED
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                            {c.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                            {c.subtitle}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <BookOpen className="w-4 h-4" /> Your Series
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                                Open <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                <Link
                                    href="/dashboard/test-series/free-series"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_open_free_series", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-indigo-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            <Sparkles className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                            FREE
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                        Free Series
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        Open all available series and tests in one place.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> All Series
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                                            Open <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {activeTab === "leaderboard" && <Leaderboard />}
                        {activeTab === "profile" && <ProfilePage />}
                        {activeTab === "earn" && <EarnSection />}

                        {['schedule', 'reports'].includes(activeTab) && (
                            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-900/50 rounded-3xl border border-slate-800">
                                <div className="p-6 bg-slate-900 rounded-full mb-6">
                                    {activeTab === 'schedule' ? <Calendar className="w-12 h-12 text-slate-600" /> : <BarChart3 className="w-12 h-12 text-slate-600" />}
                                </div>
                                <h3 className="text-2xl font-bold text-white capitalize mb-2">{activeTab} Coming Soon</h3>
                                <p className="text-slate-500 max-w-md">We are building this feature to help you track your progress better.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse">Loading Dashboard...</p>
                </div>
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}
