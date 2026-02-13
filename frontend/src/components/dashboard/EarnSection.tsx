
"use client";

import React, { useState, useEffect } from 'react';
import { Copy, Gift, Coins, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EarnSection() {
    const [referralCode, setReferralCode] = useState<string | null>(null);
    const [inputCode, setInputCode] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch Referral Code
        const fetchCode = async () => {
            const token = localStorage.getItem("xamsathi_token");
            const userStr = localStorage.getItem("xamsathi_user");
            if (!userStr) return;
            const user = JSON.parse(userStr);
            const userId = user._id || user.id;

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/gamification/referral-code`, {
                    headers: { 'x-user-id': userId }
                });
                if (res.ok) {
                    const data = await res.json();
                    setReferralCode(data.code);
                }
            } catch (err) {
                console.error("Failed to fetch referral code", err);
            }
        };
        fetchCode();
    }, []);

    const handleCopy = () => {
        if (referralCode) {
            navigator.clipboard.writeText(referralCode);
            setMessage("Code copied to clipboard!");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    const handleRedeem = async () => {
        setError("");
        setMessage("");
        if (!inputCode) {
            setError("Please enter a code.");
            return;
        }

        const userStr = localStorage.getItem("xamsathi_user");
        if (!userStr) return;
        const user = JSON.parse(userStr);
        const userId = user._id || user.id;

        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/gamification/redeem-referral`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': userId
                },
                body: JSON.stringify({ code: inputCode })
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setInputCode("");
                // Refresh coins (optional, triggered by page reload usually)
            } else {
                setError(data.error || "Redemption failed.");
            }
        } catch (err) {
            setError("Failed to redeem code.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    Earn Rewards
                </h2>
                <p className="text-slate-400">Invite friends and earn Xamsathi Coins to decode premium tests.</p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Your Referral Code Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <div className="absolute top-0 right-0 p-32 opacity-10 bg-indigo-600 blur-[80px] rounded-full group-hover:opacity-20 transition-opacity" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Share2 className="w-8 h-8 text-indigo-400" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Invite Friends</h3>
                        <p className="text-slate-400 mb-8">
                            Share your unique code. Both you and your friend get <span className="text-yellow-400 font-bold">500 Coins</span> when they join!
                        </p>

                        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4">
                            <div className="font-mono text-xl font-bold text-indigo-300 tracking-wider">
                                {referralCode || "LOADING..."}
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                            >
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>
                        {message && !error && <p className="text-green-400 text-sm mt-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {message}</p>}
                    </div>
                </div>

                {/* Redeem Code Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
                    <div className="absolute top-0 right-0 p-32 opacity-10 bg-emerald-600 blur-[80px] rounded-full group-hover:opacity-20 transition-opacity" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Gift className="w-8 h-8 text-emerald-400" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Have a Code?</h3>
                        <p className="text-slate-400 mb-8">
                            Enter a referral code from a friend to instantly unlock your welcome bonus.
                        </p>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                                placeholder="ENTER CODE HERE"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            />
                            <button
                                onClick={handleRedeem}
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-bold text-white shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? "Verifying..." : <>Redeem Bonus <ArrowRight className="w-4 h-4" /></>}
                            </button>
                            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
                            {message && !inputCode && <p className="text-green-400 text-sm mt-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {message}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Features Teaser */}
            <div className="mt-12 pt-12 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6">Coming Soon</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 opacity-60">
                        <Coins className="w-8 h-8 text-yellow-500 mb-4" />
                        <h4 className="font-bold text-white mb-1">Coin Store</h4>
                        <p className="text-sm text-slate-500">Redeem coins for discounts on premium courses.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 opacity-60">
                        <Gift className="w-8 h-8 text-purple-500 mb-4" />
                        <h4 className="font-bold text-white mb-1">Exclusive Tests</h4>
                        <p className="text-sm text-slate-500">Unlock special high-difficulty tests with coins.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
