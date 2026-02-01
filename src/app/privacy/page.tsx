"use client";

import { motion } from "framer-motion";
import { Lock, Eye, Server, Cookie, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Privacy <span className="text-blue-500">Policy</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        We value your trust and are committed to protecting your personal information.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    <PrivacyCard
                        icon={UserCheck}
                        title="Information We Collect"
                        delay={0}
                    >
                        <p className="mb-3">We collect information that you voluntarily provide to us when you register for an account, purchase a course, or communicate with us.</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li>Name, Email Address, Phone Number</li>
                            <li>Payment Information (processed securely by Razorpay)</li>
                            <li>Academic details (Class, Exam Interest) to personalize your experience</li>
                        </ul>
                    </PrivacyCard>

                    <PrivacyCard
                        icon={Server}
                        title="How We Use Your Data"
                        delay={0.1}
                    >
                        <p>We use your information to:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2 text-slate-400">
                            <li>Provide and manage access to our courses and test series.</li>
                            <li>Communicate with you regarding updates, offers, and support.</li>
                            <li>Analyze platform usage to improve our content and user experience.</li>
                        </ul>
                    </PrivacyCard>

                    <PrivacyCard
                        icon={Eye}
                        title="Data Sharing & Disclosure"
                        delay={0.2}
                    >
                        <p>
                            We <strong>do not sell</strong> your personal data to third parties.
                            We may share data with trusted service providers (like payment gateways or hosting services) strictly for the purpose of operational functionality.
                            These providers are obligated to protect your data.
                        </p>
                    </PrivacyCard>

                    <PrivacyCard
                        icon={Lock}
                        title="Data Security"
                        delay={0.3}
                    >
                        <p>
                            We implement industry-standard security measures to protect your data from unauthorized access.
                            All payment transactions are encrypted and processed through secure gateways (Razorpay).
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </PrivacyCard>

                    <PrivacyCard
                        icon={Cookie}
                        title="Cookies"
                        delay={0.4}
                    >
                        <p>
                            We use cookies to enhance your browsing experience, remember your preferences, and understand how you use our website.
                            You can control cookie settings through your browser.
                        </p>
                    </PrivacyCard>
                </div>

                <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-800 text-center">
                    <h3 className="text-white font-semibold mb-2">Contact Us</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        If you have any questions or concerns about our Privacy Policy, please contact us.
                    </p>
                    <a href="mailto:privacy@xamsathi.com" className="text-blue-400 hover:text-blue-300">privacy@xamsathi.com</a>
                </div>
            </div>
        </main>
    );
}

function PrivacyCard({ icon: Icon, title, children, delay }: { icon: any, title: string, children: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay }}
            className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-blue-900/50 transition-colors"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-900 rounded-lg text-blue-500">
                    <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="text-slate-300 leading-relaxed pl-0 md:pl-[4.5rem]">
                {children}
            </div>
        </motion.div>
    );
}
