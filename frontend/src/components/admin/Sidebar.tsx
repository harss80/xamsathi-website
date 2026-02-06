"use client";

import {
    LayoutDashboard,
    BookOpen,
    FileText,
    HelpCircle,
    History,
    Users,
    Briefcase,
    LogOut,
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    const menuItems = [
        { id: "analytics", label: "Overview", icon: LayoutDashboard },
        { id: "courses", label: "Courses", icon: BookOpen },
        { id: "tests", label: "Tests", icon: FileText },
        { id: "questions", label: "Question Bank", icon: HelpCircle },
        { id: "attempts", label: "Results", icon: History },
        { id: "users", label: "User Base", icon: Users },
        { id: "jobs", label: "Job Listings", icon: Briefcase },
    ];

    return (
        <aside className="w-72 h-screen flex flex-col fixed left-0 top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-r border-white/5 shadow-2xl">
            {/* Logo Section */}
            <div className="p-8 pb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
                <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <span className="text-lg font-bold">X</span>
                    </div>
                    <span>XamSathi</span>
                </h1>
                <p className="text-xs font-medium text-slate-500 mt-2 ml-10 tracking-wide uppercase">Admin Console</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar">
                <div className="text-xs font-semibold text-slate-500 px-4 mb-2 uppercase tracking-wider">Main Menu</div>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div className={`relative p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'bg-slate-800/50 group-hover:bg-slate-800'}`}>
                                <Icon size={18} strokeWidth={2} />
                            </div>

                            <span className="relative font-medium text-sm tracking-wide">{item.label}</span>

                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="ml-auto"
                                >
                                    <ChevronRight size={14} className="text-blue-400" />
                                </motion.div>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 mt-auto">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 border border-white/5 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border-2 border-slate-600 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Owner+Admin&background=0D8ABC&color=fff" alt="Admin" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">Owner Admin</p>
                            <p className="text-xs text-slate-400 truncate">admin@xamsathi.com</p>
                        </div>
                        <button className="text-slate-400 hover:text-white transition-colors">
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
