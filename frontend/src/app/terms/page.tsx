"use client";

import { motion } from "framer-motion";
import { ScrollText, Shield, FileText, Lock } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Terms & <span className="text-blue-500">Conditions</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Please read these terms carefully before using our platform.
                    </p>
                    <div className="mt-4 inline-block px-4 py-2 bg-slate-900/50 rounded-lg text-slate-500 text-sm border border-slate-800">
                        Effective Date: February 1, 2026
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <TermSection
                        icon={ScrollText}
                        title="1. Introduction"
                        content="Welcome to XamSathi. By accessing or using our website, mobile application, and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services."
                    />

                    <TermSection
                        icon={FileText}
                        title="2. Use of Services"
                        content={
                            <>
                                <p className="mb-2">You agree to use XamSathi for lawful educational purposes only.</p>
                                <ul className="list-disc list-inside space-y-1 ml-2 text-slate-400">
                                    <li>You must not share your account credentials with anyone else.</li>
                                    <li>You must not attempt to copy, distribute, or resell any content solely owned by XamSathi.</li>
                                    <li>We reserve the right to suspend accounts that violate these usage policies.</li>
                                </ul>
                            </>
                        }
                    />

                    <TermSection
                        icon={Shield}
                        title="3. Intellectual Property"
                        content="All content provided on XamSathi, including text, graphics, logos, videos, and test series, is the intellectual property of XamSathi and is protected by copyright laws. Unauthorized use of this content is strictly prohibited."
                    />

                    <TermSection
                        icon={Lock}
                        title="4. User Accounts & Security"
                        content="You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. XamSathi is not liable for any loss or damage arising from your failure to protect your account information."
                    />

                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p className="text-slate-300 leading-relaxed">
                            XamSathi shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. We do not guarantee that the platform will be error-free or uninterrupted, though we strive for excellence.
                        </p>
                    </div>

                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-white mb-4">6. Governing Law</h2>
                        <p className="text-slate-300 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-400 mb-2">Have questions about our Terms?</p>
                    <Link href="/contact" className="text-blue-500 hover:text-blue-400 font-semibold">Contact Support</Link>
                </div>
            </div>
        </main>
    );
}

function TermSection({ icon: Icon, title, content }: { icon: any, title: string, content: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
        >
            <div className="hidden md:flex w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 items-center justify-center flex-shrink-0 text-slate-400">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="md:hidden text-blue-500">#</span> {title}
                </h2>
                <div className="text-slate-300 leading-relaxed text-lg">
                    {content}
                </div>
            </div>
        </motion.div>
    );
}
