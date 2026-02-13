
"use client";

import React, { useState, useEffect } from 'react';
import { Coins, Flame, Award } from 'lucide-react';

export default function GamificationHeader() {
    const [stats, setStats] = useState<{
        coins: number;
        streak: { count: number; last_active_date: string }
    }>({
        coins: 0,
        streak: { count: 0, last_active_date: "" }
    });

    useEffect(() => {
        // Fetch Gamification Status
        const fetchStatus = async () => {
            const token = localStorage.getItem("xamsathi_token");
            const userStr = localStorage.getItem("xamsathi_user");
            if (!userStr) return;

            const user = JSON.parse(userStr);
            const userId = user._id || user.id;

            try {
                // Call /api/gamification/status to update streak and get coins
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/gamification/status`, {
                    headers: { 'x-user-id': userId }
                });

                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (err) {
                console.error("Failed to load gamification stats", err);
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="flex items-center gap-4">
            {/* Streak Badge */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${stats.streak.count >= 1 ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'
                }`}>
                <Flame className={`w-4 h-4 ${stats.streak.count >= 1 ? 'fill-orange-500 animate-pulse' : ''}`} />
                <span className="text-sm font-bold">{stats.streak.count} DAYS</span>
            </div>

            {/* Coins Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Coins className="w-4 h-4 fill-yellow-500" />
                <span className="text-sm font-bold">{stats.coins}</span>
            </div>
        </div>
    );
}
