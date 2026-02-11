"use client";

import { useState, useEffect, type ComponentProps, Suspense } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    Clock,
    Calendar,
    BarChart3,
    Settings,
    LogOut,
    Bell,
    Search,
    ChevronRight,
    PlayCircle,
    FileText,
    Trophy,
    Target,
    Zap,
    CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";

// --- Mock Data ---

const STUDENT_DATA = {
    name: "Harsh Budhauliya",
    course: "JEE Advanced 2026",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh",
    stats: [
        { label: "Tests Taken", value: "24", change: "+4 this week", icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
        { label: "Avg. Score", value: "88%", change: "+2.4%", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { label: "Attendance", value: "92%", change: "Consistent", icon: checkCircle2Icon, color: "text-purple-500", bg: "bg-purple-500/10" },
        { label: "Global Rank", value: "#142", change: "Top 5%", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
    ],
    upcomingClasses: [
        { id: 1, subject: "Physics", topic: "Rotational Motion - Lec 4", time: "10:00 AM", instructor: "Dr. H.C. Verma", status: "Live Now" },
        { id: 2, subject: "Mathematics", topic: "Complex Numbers", time: "02:00 PM", instructor: "Prof. R.K. Gupta", status: "Upcoming" },
        { id: 3, subject: "Chemistry", topic: "Organic Reaction Mechanisms", time: "04:30 PM", instructor: "Mrs. S. Sharma", status: "Upcoming" },
    ],
    recentActivity: [
        { id: 1, type: "test", title: "Wait... Weekly Mock Test 4", result: "180/300", time: "Yesterday" },
        { id: 2, type: "class", title: "Watched 'Fluid Mechanics - Lec 2'", result: "Completed", time: "2 days ago" },
        { id: 3, type: "assignment", title: "Submitted DPP - Thermodynamics", result: "Pending Review", time: "3 days ago" },
    ],
    performance: [
        { subject: "Physics", score: 85 },
        { subject: "Chemistry", score: 72 },
        { subject: "Maths", score: 94 },
    ]
};

// Start CheckCircle2 wrap to avoid reference error before initialization if declared as var details
function checkCircle2Icon(props: ComponentProps<typeof CheckCircle2>) { return <CheckCircle2 {...props} /> }


const ALLOWED_TABS = ["overview", "courses", "tests", "schedule", "reports"] as const;

function DashboardContent() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const activeTabRaw = searchParams.get("tab");
    const activeTab = (activeTabRaw && (ALLOWED_TABS as readonly string[]).includes(activeTabRaw))
        ? activeTabRaw
        : "overview";

    const handleTabChange = (tabId: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (tabId === "overview") {
            params.delete("tab");
        } else {
            params.set("tab", tabId);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

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
            }
        } finally {
            router.push("/");
        }
    };

    useEffect(() => {
        const checkAuth = () => {
            const keys = ["xamsathi_token", "xamsathi_auth", "eduman_auth", "authToken", "token"];
            const found = keys.some((k) => !!localStorage.getItem(k));
            setIsAuthenticated(found);
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
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 flex h-screen overflow-hidden">

                {/* Sidebar */}
                <aside className="hidden lg:flex flex-col w-72 h-full bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-10 px-2 justify-center">
                        <div className="">
                            <Image src="/Brand.png" alt="XamSathi Logo" width={240} height={240} className="w-36 h-auto" />
                        </div>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {[
                            { id: "overview", label: "Overview", icon: LayoutDashboard },
                            { id: "courses", label: "My Courses", icon: BookOpen },
                            { id: "tests", label: "Test Series", icon: FileText },
                            { id: "schedule", label: "Schedule", icon: Calendar },
                            { id: "reports", label: "Performance", icon: BarChart3 },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleTabChange(item.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                    activeTab === item.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-slate-800/50 space-y-2">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                            <Settings className="w-5 h-5" />
                            Settings
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto min-w-0">

                    {/* Top Header */}
                    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 px-8 py-5 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white capitalize">{activeTab.replace('-', ' ')}</h2>
                            <p className="text-slate-400 text-sm hidden sm:block">{isAuthenticated ? `Welcome back, ${STUDENT_DATA.name}!` : "Welcome to XamSathi"}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative group hidden sm:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-slate-900 border border-slate-800 text-sm text-slate-200 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                                />
                            </div>

                            <button className="relative p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all" aria-label="Notifications">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-slate-900"></span>
                            </button>

                            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-bold text-white leading-none">{STUDENT_DATA.name}</p>
                                    <p className="text-xs text-blue-400 mt-1">{STUDENT_DATA.course}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5">
                                    <Image
                                        src={STUDENT_DATA.avatar}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="w-full h-full rounded-full bg-slate-950 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Dashboard Content Switched by Tab */}
                    <div className="p-8 max-w-7xl mx-auto space-y-8">

                        {/* OVERVIEW TAB */}
                        {activeTab === "overview" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-8"
                            >
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {STUDENT_DATA.stats.map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group relative bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative flex justify-between items-start mb-4">
                                                <div className={cn("p-2 rounded-lg", stat.bg, stat.color)}>
                                                    <stat.icon size={20} />
                                                </div>
                                                <span className={cn(
                                                    "text-xs font-bold px-2 py-1 rounded-full bg-slate-950 border border-slate-800"
                                                )}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                            <div className="relative">
                                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-8">
                                        {/* Quick Actions */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-blue-900/20"
                                        >
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to crush your goals today?</h3>
                                                    <p className="text-blue-100 max-w-md">You have a Physics test scheduled for tomorrow. Take a quick mock test to prepare.</p>
                                                </div>
                                                <button onClick={() => handleTabChange('tests')} className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-blue-50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap">
                                                    <PlayCircle className="w-5 h-5" />
                                                    Start Practice
                                                </button>
                                            </div>
                                        </motion.div>

                                        {/* Upcoming Classes */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
                                        >
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Calendar className="w-5 h-5 text-blue-500" />
                                                    Today&apos;s Schedule
                                                </h3>
                                                <button onClick={() => handleTabChange('schedule')} className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                                                    View Full <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                {STUDENT_DATA.upcomingClasses.map((cls) => (
                                                    <div key={cls.id} className="group flex flex-col md:flex-row md:items-center p-4 rounded-xl bg-slate-950 border border-slate-800/50 hover:border-slate-700 hover:bg-slate-800/30 transition-all gap-4">
                                                        <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                                                            <span className="text-xs text-slate-500 font-bold uppercase">{cls.time.split(" ")[1]}</span>
                                                            <span className="text-lg font-bold text-white">{cls.time.split(" ")[0]}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                                    {cls.subject}
                                                                </span>
                                                                {cls.status === "Live Now" && (
                                                                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 animate-pulse">
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                                        LIVE
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">{cls.topic}</h4>
                                                            <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                                                                <Zap className="w-3 h-3" /> {cls.instructor}
                                                            </p>
                                                        </div>
                                                        <button onClick={() => router.push('/live-classes')} className={cn(
                                                            "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                                                            cls.status === "Live Now"
                                                                ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-900/20"
                                                                : "bg-slate-900 text-slate-300 hover:bg-white hover:text-slate-950 border border-slate-800"
                                                        )}>
                                                            {cls.status === "Live Now" ? "Join Class" : "Remind Me"}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Right Sidebar Area */}
                                    <div className="space-y-8">
                                        {/* Performance Snapshot */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
                                        >
                                            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                                                <Target className="w-5 h-5 text-emerald-500" />
                                                Subject Mastery
                                            </h3>
                                            <div className="space-y-5">
                                                {STUDENT_DATA.performance.map(sub => (
                                                    <div key={sub.subject}>
                                                        <div className="flex justify-between text-sm font-medium mb-2">
                                                            <span className="text-slate-300">{sub.subject}</span>
                                                            <span className="text-white">{sub.score}%</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                                                            <div
                                                                className="h-full rounded-full bg-linear-to-r from-blue-500 to-emerald-400"
                                                                style={{ width: `${sub.score}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button onClick={() => handleTabChange('reports')} className="w-full mt-6 py-2.5 text-sm font-bold text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 rounded-xl transition-all">
                                                View Full Report
                                            </button>
                                        </motion.div>

                                        {/* Recent Activity */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
                                        >
                                            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                                                <Clock className="w-5 h-5 text-purple-500" />
                                                Recent Activity
                                            </h3>
                                            <div className="relative border-l border-slate-800 ml-3 space-y-6">
                                                {STUDENT_DATA.recentActivity.map((activity) => (
                                                    <div key={activity.id} className="relative pl-6">
                                                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-950 ring-2 ring-slate-900 md:ring-slate-900/50" />
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{activity.time}</span>
                                                            <p className="text-sm font-medium text-slate-200 hover:text-blue-400 cursor-pointer transition-colors">
                                                                {activity.title}
                                                            </p>
                                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 w-fit text-slate-400 border border-slate-700/50">
                                                                {activity.result}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* COURSES TAB */}
                        {activeTab === "courses" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group">
                                        <div className="h-40 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
                                            <div className="absolute inset-0 bg-black/20" />
                                            <div className="absolute bottom-4 left-6">
                                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Enrolled</span>
                                                <h3 className="text-xl font-bold text-white">JEE Advanced 2026</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="text-sm text-slate-400">Progress: <span className="text-white font-bold">12%</span></div>
                                                <div className="w-32 h-2 bg-slate-800 rounded-full">
                                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '12%' }} />
                                                </div>
                                            </div>
                                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">Continue Learning</button>
                                        </div>
                                    </div>
                                    {/* Placeholder for more courses */}
                                    <div className="bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-10 text-slate-500 hover:bg-slate-900/50 hover:border-slate-700 hover:text-slate-300 transition-all cursor-pointer">
                                        <BookOpen className="w-10 h-10 mb-4 opacity-50" />
                                        <p className="font-medium">Browse More Courses</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* TESTS TAB */}
                        {activeTab === "tests" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-linear-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-6 border border-indigo-500/20">
                                    <h3 className="text-lg font-bold text-white mb-2">Weekly Mock Test Series</h3>
                                    <p className="text-slate-400 text-sm mb-4">Test your preparation with full-length mock tests.</p>
                                    <Link href="/tests" className="inline-block px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors">
                                        View All Tests
                                    </Link>
                                </div>
                            </motion.div>
                        )}

                        {/* OTHER TABS Placeholder */}
                        {['schedule', 'reports'].includes(activeTab) && (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                                    <Settings className="w-10 h-10 text-slate-600 animate-spin-slow" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                                <p className="text-slate-500 max-w-sm">We are working hard to bring you detailed analytics and scheduling features. Stay tuned!</p>
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
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse">Loading Dashboard...</p>
                </div>
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}
