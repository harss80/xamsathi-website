"use client";

import { Smartphone, Download, Star } from "lucide-react";

const AppCTA = () => {
    return (
        <section className="py-24 bg-slate-950 overflow-hidden relative border-y border-slate-800">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full text-blue-400 font-medium text-sm mb-6 border border-slate-800">
                            <Smartphone className="w-4 h-4" /> Download Our Mobile App
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Learning in Your Pocket</h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                            Access video lectures, attempt tests, and download notes anytime, anywhere.
                            Features offline mode for uninterrupted learning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-3 shadow-lg">
                                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-[10px]">A</span>
                                </div>
                                <div className="text-left leading-none">
                                    <div className="text-[10px] text-slate-600 uppercase">Available on the</div>
                                    <div className="text-sm">App Store</div>
                                </div>
                            </button>
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-3 shadow-lg border border-slate-700">
                                <div className="w-6 h-6">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                </div>
                                <div className="text-left leading-none">
                                    <div className="text-[10px] text-slate-400 uppercase">Get it on</div>
                                    <div className="text-sm">Google Play</div>
                                </div>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                            </div>
                            <span>4.8/5 Rating based on 10k+ Reviews</span>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        {/* Phone Mockup Placeholder */}
                        <div className="mx-auto w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden ring-1 ring-slate-800">
                            <div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center">
                                <Smartphone className="w-16 h-16 text-slate-300 mb-4" />
                                <p className="text-slate-400 font-bold">App Interface</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppCTA;
