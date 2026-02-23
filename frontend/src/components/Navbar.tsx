"use client";

import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, LayoutDashboard, Sparkles, BookOpen, GraduationCap, Shield, LogIn, UserPlus, LogOut, Building2, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    const isAuthenticated = useSyncExternalStore(
        (onStoreChange) => {
            if (typeof window === "undefined") return () => { };
            const handler = () => onStoreChange();
            window.addEventListener("storage", handler);
            window.addEventListener("xamsathi-auth", handler as EventListener);
            return () => {
                window.removeEventListener("storage", handler);
                window.removeEventListener("xamsathi-auth", handler as EventListener);
            };
        },
        () => {
            try {
                const keys = ["xamsathi_token", "xamsathi_auth", "eduman_auth", "authToken", "token"];
                let found = keys.some((k) => !!localStorage.getItem(k));
                if (!found) {
                    const cookies = document.cookie || "";
                    found =
                        /(?:^|; )xamsathi_token=/.test(cookies) ||
                        /(?:^|; )xamsathi_auth=/.test(cookies) ||
                        /(?:^|; )eduman_auth=/.test(cookies) ||
                        /(?:^|; )token=/.test(cookies);
                }
                return !!found;
            } catch {
                return false;
            }
        },
        () => false
    );

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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        try {
            window.dispatchEvent(new Event("xamsathi-auth"));
        } catch { }
    }, []);

    // Close mobile menu on route change and lock body scroll when open
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        try {
            if (isMobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        } catch { }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        if (isMobileMenuOpen) window.addEventListener("keydown", onKeyDown);
        return () => {
            try { document.body.style.overflow = ""; } catch { }
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isMobileMenuOpen]);

    // auth is derived from storage/cookies; it updates on route changes naturally because Navbar re-renders

    const navStructure = [
        {
            id: "government",
            label: "Government Exams",
            type: "dropdown",
            items: [
                { title: "All Government Exams", href: "/government-exams", icon: Building2, desc: "SSC, Railways, UPSC & more" },
                { title: "SSC", href: "/government-exams/ssc", icon: GraduationCap, desc: "CGL, CHSL, MTS and more" },
                { title: "Railways", href: "/government-exams/railway", icon: GraduationCap, desc: "NTPC, Group D and more" },
                { title: "UPSC", href: "/government-exams/upsc", icon: GraduationCap, desc: "Prelims & Mains practice" },
            ]
        },
        {
            id: "engineering",
            label: "Engineering Exams",
            type: "dropdown",
            items: [
                { title: "All Engineering Exams", href: "/engineering-exams", icon: GraduationCap, desc: "JEE Main, JEE Advanced & more" },
                { title: "JEE Main", href: "/engineering-exams/jee-main", icon: GraduationCap, desc: "Mocks, PYQs, practice" },
                { title: "JEE Advanced", href: "/engineering-exams/jee-advanced", icon: GraduationCap, desc: "Conceptual test series" },
            ]
        },
        {
            id: "medical",
            label: "Medical Exams",
            type: "dropdown",
            items: [
                { title: "All Medical Exams", href: "/medical-exams", icon: GraduationCap, desc: "NEET UG and more" },
                { title: "NEET UG", href: "/medical-exams/neet", icon: GraduationCap, desc: "NCERT-based mocks" },
            ]
        },
        {
            id: "banking",
            label: "Banking Exams",
            type: "dropdown",
            items: [
                { title: "All Banking Exams", href: "/banking-exams", icon: BookOpen, desc: "SBI, IBPS and more" },
                { title: "IBPS", href: "/banking-exams/ibps", icon: BookOpen, desc: "PO, Clerk practice" },
                { title: "SBI PO", href: "/banking-exams/sbi-po", icon: BookOpen, desc: "Full mock drills" },
            ]
        },
        {
            id: "defence",
            label: "Defence Exams",
            type: "dropdown",
            items: [
                { title: "All Defence Exams", href: "/defence-exams", icon: Shield, desc: "NDA, CDS, AFCAT" },
                { title: "NDA", href: "/defence-exams/nda", icon: Shield, desc: "Mock tests & practice" },
            ]
        },
        {
            id: "entrance",
            label: "Private/Entrance Exams",
            type: "dropdown",
            items: [
                { title: "All Entrance Exams", href: "/entrance-exams", icon: Sparkles, desc: "CUET and more" },
                { title: "CUET", href: "/entrance-exams/cuet", icon: Sparkles, desc: "Practice sets" },
            ]
        }
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-2 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-sm" : "py-4 bg-transparent border-b border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className="group-hover:scale-105 transition-transform duration-300 py-1">
                            <Image src="/Brand.png" alt="XamSathi Brand Logo" width={200} height={200} className="w-36 h-auto p-2" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className={cn("text-sm font-semibold py-1", pathname === "/" ? "text-white" : "text-slate-300 hover:text-white transition-colors")}
                        >
                            Home
                        </Link>

                        <div
                            className="relative group"
                            onMouseEnter={() => setHoveredNav("exams")}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            <button className={cn(
                                "flex items-center gap-1 text-sm font-semibold py-1 outline-none",
                                ["/government-exams", "/engineering-exams", "/medical-exams", "/banking-exams", "/defence-exams", "/entrance-exams"].some((path) => pathname?.startsWith(path))
                                    ? "text-white"
                                    : "text-slate-300 group-hover:text-white transition-colors"
                            )}>
                                Exams
                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", hoveredNav === "exams" ? "rotate-180" : "")} />
                            </button>

                            <AnimatePresence>
                                {hoveredNav === "exams" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                                    >
                                        <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 rounded border-t-2 border-t-blue-500 p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden ring-1 ring-white/5">
                                            <div className="absolute -top-5 left-0 right-0 h-5 bg-transparent" />
                                            <div className="grid grid-cols-2 gap-2 relative z-10">
                                                {navStructure.map((nav) => (
                                                    <div key={nav.id}>
                                                        <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{nav.label}</div>
                                                        <div className="flex flex-col gap-1">
                                                            {nav.items.map((item) => (
                                                                <Link
                                                                    key={item.title}
                                                                    href={item.href}
                                                                    className="flex items-start gap-3 p-2.5 rounded-md hover:bg-slate-800/60 transition-all duration-300 group/item border border-transparent hover:border-slate-700/50"
                                                                >
                                                                    <div className="mt-0.5 p-2 rounded-md bg-slate-900 shadow-inner text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300 border border-slate-800 group-hover/item:border-blue-500">
                                                                        <item.icon className="w-4 h-4" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-[13px] font-bold text-slate-200 group-hover/item:text-white flex items-center justify-between">
                                                                            {item.title}
                                                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-400" />
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/tests"
                            className={cn("text-sm font-semibold py-1", pathname?.startsWith("/tests") ? "text-white" : "text-slate-300 hover:text-white transition-colors")}
                        >
                            Test Series
                        </Link>
                        <Link
                            href="/about"
                            className={cn("text-sm font-semibold py-1", pathname?.startsWith("/about") ? "text-white" : "text-slate-300 hover:text-white transition-colors")}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={cn("text-sm font-semibold py-1", pathname?.startsWith("/contact") ? "text-white" : "text-slate-300 hover:text-white transition-colors")}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg transition-all hover:bg-blue-700 shadow-md active:scale-95"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span>Dashboard</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 px-3 rounded-lg"
                                    aria-label="Logout"
                                >
                                    <span className="inline-flex items-center gap-2"><LogOut className="w-4 h-4" />Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2"
                                >
                                    <span className="inline-flex items-center gap-2"><LogIn className="w-4 h-4" />Login</span>
                                </Link>
                                <Link
                                    href="/signup"
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg transition-all hover:bg-blue-700 shadow-md active:scale-95"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        aria-label="Open menu"
                        aria-expanded={isMobileMenuOpen ? "true" : "false"}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-950 border-l border-slate-800 z-[70] shadow-2xl p-6 lg:hidden overflow-y-auto"
                            id="mobile-menu"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-bold text-white flex items-center gap-2">
                                    <div className="">
                                        <Image src="/Brand.png" alt="XamSathi Logo" width={160} height={160} className="w-28 h-auto" />
                                    </div>
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg font-bold text-white border-b border-slate-900 pb-4"
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/tests"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between text-base font-bold text-slate-200 px-2"
                                >
                                    <span className="inline-flex items-center gap-3"><FileText className="w-4 h-4 text-blue-400" />Test Series</span>
                                    <ChevronDown className="w-4 h-4 opacity-0" />
                                </Link>

                                {navStructure.map((nav) => (
                                    <div key={nav.id}>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">{nav.label}</div>
                                        <div className="space-y-2">
                                            {nav.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-800"
                                                >
                                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-semibold text-slate-200">{item.title}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-2 space-y-3">
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-base font-bold text-slate-200 px-2"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-base font-bold text-slate-200 px-2"
                                    >
                                        Contact
                                    </Link>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-800">
                                    {isAuthenticated ? (
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold rounded-xl active:scale-95 transition-transform"
                                            >
                                                <LayoutDashboard className="w-5 h-5" />
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
                                                className="w-full flex items-center justify-center gap-2 py-4 bg-slate-800 text-white font-semibold rounded-xl"
                                                aria-label="Logout"
                                            >
                                                <LogOut className="w-5 h-5" />
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href="/login"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 text-white font-semibold rounded-xl"
                                            >
                                                <LogIn className="w-5 h-5" />
                                                Login
                                            </Link>
                                            <Link
                                                href="/signup"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-bold rounded-xl"
                                            >
                                                <UserPlus className="w-4 h-4" />
                                                Sign up
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
