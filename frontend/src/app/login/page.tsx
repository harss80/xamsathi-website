"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Lock, CheckCircle2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import { loadGoogleScript } from "@/lib/google-auth";

const LoginForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({ email: "", password: "" });

    const setAuthCookie = (token: string) => {
        try {
            const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
            const secure = isHttps ? "; Secure" : "";
            document.cookie = `xamsathi_token=${encodeURIComponent(token)}; Path=/; Domain=.xamsathi.in; Max-Age=${60 * 60 * 24 * 30}; SameSite=Lax${secure}`;
        } catch { }
    };

    const getCookie = (name: string) => {
        try {
            const m = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}=([^;]*)`));
            return m ? decodeURIComponent(m[1]) : null;
        } catch {
            return null;
        }
    };

    const getBackendBase = () => {
        const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
        if (envBase) return envBase;
        if (typeof window !== "undefined") {
            const host = window.location.hostname;
            if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
        }
        throw new Error("Missing NEXT_PUBLIC_BACKEND_URL");
    };

    useEffect(() => {
        try {
            const t = localStorage.getItem("xamsathi_token") || getCookie("xamsathi_token");
            if (t) {
                localStorage.setItem("xamsathi_token", t);
                router.replace("/dashboard");
                return;
            }
        } catch { }
        loadGoogleScript(["google-signin-button-login"]);
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const base = getBackendBase();
            const url = new URL("/api/auth/login", base).toString();
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Login failed");
                return;
            }

            // Save token and user data
            localStorage.setItem("xamsathi_token", data.token);
            localStorage.setItem("xamsathi_user", JSON.stringify(data.user));
            setAuthCookie(data.token);
            const next = searchParams?.get("next");
            const safeNext = next && next.startsWith("/") ? next : "/dashboard";
            const onboardingDone = !!data?.user?.onboarding_completed;
            router.push(onboardingDone ? safeNext : `/admission?next=${encodeURIComponent(safeNext)}`);
        } catch (e) {
            const msg = e instanceof Error ? e.message : "";
            if (msg.includes("NEXT_PUBLIC_BACKEND_URL")) {
                setError("Backend configuration missing. Please try again after deployment update.");
            } else {
                setError("Network error. Try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex font-sans">
            {/* Left Side - Visual Panel (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl"
                    >
                        <div className="mb-6">
                            <Image src="/Brand.png" alt="XamSathi" width={180} height={50} className="h-10 w-auto" />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Master Your Exam Preparation Journey
                        </h1>
                        <div className="space-y-4">
                            {[
                                "Access comprehensive test series",
                                "Detailed performance analytics",
                                "Expert mentorship & guidance",
                                "Adaptive learning paths"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-200">
                                    <div className="bg-blue-500/20 p-1 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Form Panel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
                {/* Mobile Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none lg:hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[80px]" />
                </div>

                <div className="w-full max-w-md space-y-8 relative z-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
                        <p className="mt-2 text-slate-400">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-slate-300">Password</label>
                                <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 font-medium">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.99]"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
                        <div className="relative flex justify-center text-sm"><span className="px-4 bg-slate-950 text-slate-500">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div id="google-signin-button-login" className="w-full flex items-center justify-center"></div>
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300 py-3 rounded-xl transition-all text-sm font-medium">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            GitHub
                        </button>
                    </div>

                    <p className="text-center text-slate-400 text-sm mt-8">
                        Don&apos;t have an account? <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-all">Sign up for free</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
