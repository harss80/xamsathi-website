"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-950">
            <section className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Get in <span className="text-blue-500">Touch</span>
                        </motion.h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-900/20 p-3 rounded-lg text-blue-500">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-medium mb-1">Email Us</p>
                                            <p className="text-white text-lg">support@eduman.com</p>
                                            <p className="text-slate-500 text-sm">Mon-Fri, 9am-6pm IST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-900/20 p-3 rounded-lg text-purple-500">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-medium mb-1">Call Us</p>
                                            <p className="text-white text-lg">+91 98765 43210</p>
                                            <p className="text-slate-500 text-sm">24/7 Support for Premium Users</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-900/20 p-3 rounded-lg text-green-500">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-medium mb-1">Visit Us</p>
                                            <p className="text-white text-lg">EduMan HQ, Tech Park</p>
                                            <p className="text-slate-500 text-sm">Sector 62, Noida, UP - 201301</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Teaser */}
                            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-800/30">
                                <h4 className="text-xl font-bold text-white mb-2">Frequently Asked Questions</h4>
                                <p className="text-slate-400 mb-4">Find quick answers to common questions about our platform.</p>
                                <a href="/faq" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
                                    Visit FAQ Center <Send className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300 block">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300 block">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300 block">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange as any}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    >
                                        <option value="" disabled>Select a topic</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing & Payments</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300 block">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
