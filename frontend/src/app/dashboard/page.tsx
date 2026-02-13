"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Overview from "@/components/dashboard/Overview";
import Leaderboard from "@/components/dashboard/Leaderboard";
import ProfilePage from "@/app/dashboard/profile/page";
// Ah, the user created a page.tsx at `src/app/dashboard/profile/page.tsx`. This is a route.
// However, the dashboard logic is based on tabs in `src/app/dashboard/page.tsx`.
// So, I should import the default export from that file. Since it's a page component, it can act as a standard component too. 
// Let's import it from the correct path.
// Actually, since it's a page file in next.js app router, it is usually a server component by default unless "use client" is at the top.
// The file I created has "use client" at the top.
// I will import it. Ideally, standard components should be in `components/`, but importing from `app/` is possible though not conventional for reusability. 
// However, since the structure is already monolithic in `dashboard/page.tsx` using tabs, I will stick to that pattern.

import { BookOpen, FileText, Calendar, BarChart3, Zap, Sprout, LineChart, Target, Trophy } from "lucide-react";
import { trackLead } from "@/lib/trackLead";

// --- Mock Data (Centralized or passed down) ---
const STUDENT_DATA = {
    name: "Harsh Budhauliya",
    course: "JEE Advanced 2026",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh",
};

const ALLOWED_TABS = ["overview", "courses", "tests", "schedule", "reports", "leaderboard", "profile"] as const;

function DashboardContent() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    useEffect(() => {
        const checkAuth = () => {
            const cookieToken = getCookie("xamsathi_token");
            if (cookieToken) {
                try { localStorage.setItem("xamsathi_token", cookieToken); } catch { }
            }

            const keys = ["xamsathi_token", "xamsathi_auth", "eduman_auth", "authToken", "token"];
            const found = keys.some((k) => !!localStorage.getItem(k)) || !!cookieToken;

            // We can also try to load user name from local storage if available
            const savedUser = localStorage.getItem("xamsathi_user");
            if (savedUser) {
                try {
                    const parsed = JSON.parse(savedUser);
                    if (parsed.name) STUDENT_DATA.name = parsed.name;
                    // We can add more fields updates here
                } catch { }
            }

            if (!found) {
                router.replace("/login?next=/dashboard");
            }
            setTimeout(() => setIsLoading(false), 800);
        };
        checkAuth();
    }, [router]);

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
                    user={STUDENT_DATA}
                />

                <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto">
                        {/* Tab Content */}
                        {activeTab === "overview" && <Overview user={STUDENT_DATA} />}

                        {activeTab === "courses" && (
                            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-900/50 rounded-3xl border border-slate-800">
                                <div className="p-6 bg-slate-900 rounded-full mb-6">
                                    <BookOpen className="w-12 h-12 text-slate-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">My Courses</h3>
                                <p className="text-slate-400 mb-6 max-w-md">Access your enrolled courses and continue learning from where you left off.</p>
                                <button
                                    onClick={() => {
                                        trackLead({ action: "dashboard_browse_library", entity_type: "dashboard" });
                                    }}
                                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors"
                                >
                                    Browse Library
                                </button>
                            </div>
                        )}

                        {activeTab === "tests" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Link
                                    href="/dashboard/test-series/neet"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_start_neet_test", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-indigo-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                            LIVE NOW
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                        NEET UG Full Mock
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        Complete 180 Questions (Physics, Chemistry, Biology) with negative marking and detailed analysis.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> 3 Hrs 20 Mins
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                                            Start Test <FileText className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/dashboard/test-series/ultra-hard"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_start_ultra_hard_test", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-pink-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                            <Zap className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20 flex items-center gap-1">
                                            <Zap className="w-3 h-3" /> VERY HARD
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                        ULTRA HARD SPECIAL SET
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        40 High-Level Questions (Genetics + Ecology). Curated for Toppers.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> 60 Mins
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-pink-400 group-hover:translate-x-1 transition-transform">
                                            Start Challenge <Zap className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/dashboard/test-series/ecology-case-study"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_start_ecology_case_study", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                            <Sprout className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                                            NEW PATTERN
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                        ECOLOGY CASE STUDIES
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        5 Comprehensive Case Studies (25 MCQs). Critical thinking focus.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> 45 Mins
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                            Start Cases <Sprout className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/dashboard/test-series/ecology-graphs"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_start_ecology_graphs", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-blue-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            <LineChart className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1">
                                            DATA ANALYSIS
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                        ECOLOGY GRAPH ANALYSIS
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        5 Graph-Based Cases (25 MCQs). Interpret population curves & data.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> 40 Mins
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                                            Start Analysis <LineChart className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/dashboard/test-series/intensive-ecology"
                                    onClick={() => {
                                        trackLead({ action: "dashboard_start_intensive_ecology", entity_type: "test_series" });
                                    }}
                                    className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-orange-600 blur-[60px] rounded-full" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <Target className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20 flex items-center gap-1">
                                            680+ LEVEL
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                                        INTENSIVE ECOLOGY SERIES
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        Part 1: 30 Ultra-Concept MCQs. High Density. Trap Based.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" /> 45 Mins
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                                            Start Intensive <Target className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Placeholder for other tests */}
                                <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 border-dashed flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity">
                                    <div className="p-4 rounded-full bg-slate-800 mb-4">
                                        <BookOpen className="w-8 h-8 text-slate-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-300">More Tests Coming Soon</h3>
                                    <p className="text-slate-500 text-sm">JEE Main, AIIMS, and more.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === "leaderboard" && <Leaderboard />}
                        {activeTab === "profile" && <ProfilePage />}

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
