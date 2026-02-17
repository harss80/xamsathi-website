

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Calendar,
    BarChart3,
    Settings,
    LogOut,
    X,
    Target,
    Trophy,
    User,
} from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onLogout: () => void;
}

const MENU_ITEMS = [
    { id: "overview", label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { id: "courses", label: "My Courses", icon: BookOpen, href: "/dashboard?tab=courses" },
    { id: "tests", label: "Test Series", icon: FileText, href: "/dashboard?tab=tests" },
    { id: "schedule", label: "Schedule", icon: Calendar, href: "/dashboard?tab=schedule" },
    { id: "reports", label: "Performance", icon: BarChart3, href: "/dashboard?tab=reports" },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy, href: "/dashboard?tab=leaderboard" },
    { id: "profile", label: "My Profile", icon: User, href: "/dashboard?tab=profile" },
    { id: "earn", label: "Earn Rewards", icon: Target, href: "/dashboard?tab=earn" }, // Using Target for now or Gift if available
];

export default function Sidebar({ isOpen, onClose, onLogout }: SidebarProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentTab = searchParams.get("tab") || "overview";

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <motion.aside
                initial={false}
                animate={{
                    x: isOpen ? 0 : "-100%",
                }}
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-72 bg-slate-950/90 backdrop-blur-xl border-r border-slate-800 text-white shadow-2xl lg:translate-x-0 lg:static lg:h-auto lg:shadow-none flex flex-col transition-transform duration-300 ease-in-out lg:!transform-none"
                )}
                // Force open on desktop regardless of isOpen state
                style={{}}
            >
                {/* Logo Area */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <span className="font-bold text-white text-xl">X</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">XamSathi</span>
                    </Link>
                    <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 lg:hidden text-slate-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
                    <p className="px-4 text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 mt-2">Menu</p>
                    {MENU_ITEMS.map((item) => {
                        // Extract tab from href or default to overview
                        const itemTabMatch = item.href.match(/tab=([^&]*)/);
                        const itemTab = itemTabMatch ? itemTabMatch[1] : "overview";
                        const isActive = currentTab === itemTab;

                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                                onClick={() => onClose()} // Close on mobile navigation
                            >
                                <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                                <span className={cn("relative z-10", isActive ? "font-semibold" : "")}>{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/5 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
                        <Settings className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                        Settings
                    </button>
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors group"
                    >
                        <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Sign Out
                    </button>
                </div>
            </motion.aside>
        </>
    );
}
