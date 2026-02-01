import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216 50.552 50.552 0 00-2.658.814m-15.482 0A50.55 50.55 0 0112 13.489a50.55 50.55 0 0112-13.489M12 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0-4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">EduMan</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Empowering students with accessible, high-quality education and advanced testing tools. Your journey to success starts here.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors text-slate-400">Home</Link></li>
                            <li><Link href="/tests" className="hover:text-blue-400 transition-colors text-slate-400">Test Series</Link></li>
                            <li><Link href="/live-classes" className="hover:text-blue-400 transition-colors text-slate-400">Live Classes</Link></li>
                            <li><Link href="/courses" className="hover:text-blue-400 transition-colors text-slate-400">Study Material</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-400 transition-colors text-slate-400">Careers</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors text-slate-400">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors text-slate-400">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Exams */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Popular Exams</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">JEE Main & Advanced</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">NEET UG</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">UPSC CSE</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">SSC CGL</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">Banking Exams</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors text-slate-400">CBSE Class 10 & 12</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                <span>123 Education Lane, Tech Park, Bangalore, India - 560001</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>support@eduman.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} EduMan. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
