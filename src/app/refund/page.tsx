"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCcw, AlertCircle, Mail, Clock } from "lucide-react";

export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Refund & <span className="text-blue-500">Cancellation Policy</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Transparent and fair policies to ensure the best experience for our students.
                    </p>
                    <div className="mt-4 inline-block px-4 py-2 bg-slate-900/50 rounded-lg text-slate-500 text-sm border border-slate-800">
                        Last Updated: February 2026
                    </div>
                </motion.div>

                <div className="space-y-8">
                    {/* Section 1: Digital Products Policy */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">No Refund on Digital Products</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Due to the intangible nature of our products (Test Series, Pre-recorded Courses, and PDF Notes),
                                    <strong> we do not strictly offer refunds </strong> once the content has been accessed, downloaded, or consumed.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    We encourage all students to check the free content, previews, and course descriptions thoroughly before making a purchase.
                                    Once a course or test series is purchased and unlocked, it is considered "consumed."
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 2: Exceptions */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-500">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Exceptions for Refunds</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We may consider refund requests only under the following specific circumstances:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                                    <li><strong>Double Payment:</strong> If you were charged twice for the same transaction due to a technical error.</li>
                                    <li><strong>Service Failure:</strong> If the content is technically inaccessible due to a fault on our end, and we are unable to resolve it within 7 days.</li>
                                    <li><strong>Accidental Purchase (Unaccessed):</strong> If a purchase was made accidentally and the content strictly has <strong>NOT</strong> been accessed or started. This request must be made within 24 hours of purchase.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3: Timeframe */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Refund Timeline</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Eligible refund requests will be processed within <strong>5-7 business days</strong>.
                                    The amount will be credited back to the original payment method used during the transaction.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 4: Contact */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-500">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    To request a refund, please contact our support team with your order details and the reason for the request.
                                </p>
                                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 inline-block">
                                    <p className="text-white font-mono">support@xamsathi.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>

                <div className="mt-16 text-center text-slate-500 text-sm">
                    <p>XamSathi reserves the right to modify this refund policy at any time without prior notice.</p>
                </div>
            </div>
        </main>
    );
}
