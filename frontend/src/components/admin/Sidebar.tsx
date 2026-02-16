"use client";

import {
    LayoutDashboard,
    BookOpen,
    FileText,
    HelpCircle,
    History,
    Users,
    Briefcase,
    Target,
    LogOut,
    Menu,
    X,
    Trophy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isOpen: boolean;
    onClose: () => void;
    onLogout: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, isOpen, onClose, onLogout }: SidebarProps) {
    const menuItems = [
        { id: "analytics", label: "Overview", icon: LayoutDashboard },
        { id: "courses", label: "Courses", icon: BookOpen },
        { id: "tests", label: "Tests", icon: FileText },
        { id: "questions", label: "Question Bank", icon: HelpCircle },
        { id: "attempts", label: "Results", icon: History },
        { id: "users", label: "User Base", icon: Users },
        { id: "free-access", label: "Free Access", icon: Users },
        { id: "leads", label: "Leads", icon: Target },
        { id: "jobs", label: "Job Listings", icon: Briefcase },
        { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    ];

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

            <motion.aside
                initial={false}
                animate={{
                    x: isOpen ? 0 : "-100%",
                }}
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-72 bg-slate-950/90 backdrop-blur-xl border-r border-white/5 shadow-2xl lg:translate-x-0 lg:static lg:h-auto lg:shadow-none flex flex-col transition-transform duration-300 ease-in-out lg:!transform-none"
                )}
                // Force reset transform on desktop to ensure it's visible
                style={{}}
            >
                {/* Logo Section */}
                <div className="p-6 pb-6 relative overflow-hidden flex items-center justify-between">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                            <span className="text-xl font-black text-white">X</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-white leading-none">XamSathi</h1>
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">Admin Panel</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar py-4">
                    <div className="text-xs font-bold text-slate-600 px-4 mb-3 uppercase tracking-wider">Main Menu</div>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    onClose(); // Close sidebar on mobile when clicked
                                }}
                                className={cn(
                                    "w-full relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group font-medium text-sm",
                                    isActive
                                        ? "text-white bg-blue-600 shadow-lg shadow-blue-600/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-white" : "text-slate-500 group-hover:text-white transition-colors"} />
                                <span className="relative z-10">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white shadow-lg shadow-white/50"
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div className="p-4 mt-auto border-t border-white/5">
                    <div className="bg-slate-900/50 rounded-2xl p-3 border border-white/5 shadow-xl relative overflow-hidden group hover:border-white/10 transition-all cursor-pointer">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff" alt="Admin" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-white truncate">Administrator</p>
                                <p className="text-xs text-slate-400 truncate">admin@xamsathi.in</p>
                            </div>
                            <button
                                onClick={onLogout}
                                className="text-slate-500 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                                aria-label="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}

