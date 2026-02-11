"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, LayoutDashboard, Sparkles, BookOpen, Users, Phone, GraduationCap, PlayCircle, FileText, LogIn, UserPlus, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isAuthenticated = typeof window !== "undefined" && (() => {
        try {
            const keys = ["xamsathi_token", "xamsathi_auth", "eduman_auth", "authToken", "token"];
            let found = keys.some((k) => !!localStorage.getItem(k));
            if (!found) {
                const cookies = document.cookie || "";
                found = /(?:^|; )xamsathi_auth=/.test(cookies) || /(?:^|; )eduman_auth=/.test(cookies) || /(?:^|; )token=/.test(cookies);
            }
            return !!found;
        } catch {
            return false;
        }
    })();

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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setHasMounted(true);
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
            id: "courses",
            label: "Courses",
            type: "dropdown",
            items: [
                { title: "All Courses", href: "/courses", icon: BookOpen, desc: "Comprehensive study material" },
                { title: "Live Classes", href: "/live-classes", icon: PlayCircle, desc: "Interactive real-time sessions" },
                { title: "Test Series", href: "/tests", icon: FileText, desc: "Exam-level mock tests" },
            ]
        },
        {
            id: "company",
            label: "Company",
            type: "dropdown",
            items: [
                { title: "About Us", href: "/about", icon: Users, desc: "Our mission & story" },
                { title: "Careers", href: "/careers", icon: Sparkles, desc: "Join our team" },
                { title: "Contact", href: "/contact", icon: Phone, desc: "Get in touch" },
            ]
        }
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 md:px-6 transition-all duration-300",
                isScrolled ? "max-w-6xl" : "max-w-7xl"
            )}>
                <div className={cn(
                    "flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 border",
                    isScrolled
                        ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-xl shadow-black/20"
                        : "bg-transparent border-transparent"
                )}>
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

                        {navStructure.map((nav) => (
                            <div
                                key={nav.id}
                                className="relative group"
                                onMouseEnter={() => setHoveredNav(nav.id)}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                <button className={cn(
                                    "flex items-center gap-1 text-sm font-semibold py-1 outline-none",
                                    nav.items.some((item) => pathname?.startsWith(item.href))
                                        ? "text-white"
                                        : "text-slate-300 group-hover:text-white transition-colors"
                                )} aria-haspopup="menu" aria-expanded={hoveredNav === nav.id}>
                                    {nav.label}
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", hoveredNav === nav.id ? "rotate-180" : "")} />
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {hoveredNav === nav.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                                        >
                                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                                                <div className="absolute inset-0 bg-linear-to-b from-blue-900/10 to-transparent pointer-events-none" />
                                                <div className="relative z-10 flex flex-col gap-1">
                                                    {nav.items.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors group/item"
                                                        >
                                                            <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                                                <item.icon className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-slate-200 group-hover/item:text-white">{item.title}</div>
                                                                <div className="text-xs text-slate-500 group-hover/item:text-slate-400 mt-0.5">{item.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {hasMounted && (isAuthenticated ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-xl transition-all hover:bg-blue-50 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] active:scale-95"
                                >
                                    <LayoutDashboard className="w-4 h-4 text-blue-600" />
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
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-xl transition-all hover:bg-blue-50 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] active:scale-95"
                                >
                                    <UserPlus className="w-4 h-4 text-blue-600" />
                                    Sign up
                                </Link>
                            </>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        aria-label="Open menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
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

                                <div className="mt-8 pt-8 border-t border-slate-800">
                                    {hasMounted && (isAuthenticated ? (
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-slate-950 font-bold rounded-xl active:scale-95 transition-transform"
                                            >
                                                <LayoutDashboard className="w-5 h-5 text-blue-600" />
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
                                                className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-semibold rounded-xl border border-slate-800"
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
                                                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-semibold rounded-xl border border-slate-800"
                                            >
                                                <LogIn className="w-5 h-5" />
                                                Login
                                            </Link>
                                            <Link
                                                href="/signup"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-slate-950 font-bold rounded-xl"
                                            >
                                                <UserPlus className="w-4 h-4 text-blue-600" />
                                                Sign up
                                            </Link>
                                        </div>
                                    ))}
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
