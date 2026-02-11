"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
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
    { id: "goals", label: "My Goals", icon: Target, href: "/dashboard?tab=goals" },
];

export default function Sidebar({ isOpen, onClose, onLogout }: SidebarProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentTab = searchParams.get("tab") || "overview";

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <motion.aside
                initial={false}
                animate={{
                    x: isOpen ? 0 : "-100%",
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-72 bg-slate-900 border-r border-slate-800 text-white shadow-2xl lg:translate-x-0 lg:opacity-100 lg:static lg:h-auto lg:shadow-none flex flex-col"
                )}
                // Force open on desktop regardless of isOpen state via CSS classes
                style={{ transform: "none" }}
            >
                {/* Logo Area */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                            <span className="font-bold text-white text-xl">X</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">XamSathi</span>
                    </Link>
                    <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 lg:hidden">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Menu</p>
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
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                )}
                                onClick={() => onClose()} // Close on mobile navigation
                            >
                                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-slate-800 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </button>
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </motion.aside>
        </>
    );
}
