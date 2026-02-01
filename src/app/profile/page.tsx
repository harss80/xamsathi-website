"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, User, Target, BookOpen, Image as ImageIcon, Save } from "lucide-react";

type ProfileState = {
  photo: boolean;
  bio: boolean;
  goals: boolean;
  subjects: boolean;
  name?: string;
  about?: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileState>(() => {
    if (typeof window === "undefined") return { photo: false, bio: false, goals: false, subjects: false };
    try {
      let raw = localStorage.getItem("xamsathi_profile");
      if (!raw) raw = localStorage.getItem("eduman_profile");
      if (raw) return JSON.parse(raw);
    } catch {}
    return { photo: false, bio: false, goals: false, subjects: false };
  });

  useEffect(() => {
    try {
      const val = JSON.stringify(profile);
      localStorage.setItem("xamsathi_profile", val);
      localStorage.setItem("eduman_profile", val);
    } catch {}
  }, [profile]);

  const completedCount = (profile.photo ? 1 : 0) + (profile.bio ? 1 : 0) + (profile.goals ? 1 : 0) + (profile.subjects ? 1 : 0);
  const percent = Math.round((completedCount / 4) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="text-sm text-slate-400">Profile Completion: <span className="text-white font-bold">{percent}%</span></div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-300 mb-3">Basics</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400">Full Name</label>
                <input
                  value={profile.name ?? ""}
                  onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">About</label>
                <input
                  value={profile.about ?? ""}
                  onChange={(e) => setProfile((p) => ({ ...p, about: e.target.value, bio: e.target.value.trim().length > 0 ? true : p.bio }))}
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm"
                  placeholder="Short bio"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-300 mb-3">Checklist</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <button onClick={() => setProfile(p => ({ ...p, photo: !p.photo }))} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700">
                <span className="inline-flex items-center gap-2 text-sm"><ImageIcon className="w-4 h-4" /> Add profile photo</span>
                <span className={"text-xs font-bold px-2 py-0.5 rounded " + (profile.photo ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700")}>{profile.photo ? "Done" : "Pending"}</span>
              </button>
              <button onClick={() => setProfile(p => ({ ...p, bio: !p.bio }))} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700">
                <span className="inline-flex items-center gap-2 text-sm"><User className="w-4 h-4" /> Write a short bio</span>
                <span className={"text-xs font-bold px-2 py-0.5 rounded " + (profile.bio ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700")}>{profile.bio ? "Done" : "Pending"}</span>
              </button>
              <button onClick={() => setProfile(p => ({ ...p, goals: !p.goals }))} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700">
                <span className="inline-flex items-center gap-2 text-sm"><Target className="w-4 h-4" /> Set learning goals</span>
                <span className={"text-xs font-bold px-2 py-0.5 rounded " + (profile.goals ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700")}>{profile.goals ? "Done" : "Pending"}</span>
              </button>
              <button onClick={() => setProfile(p => ({ ...p, subjects: !p.subjects }))} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700">
                <span className="inline-flex items-center gap-2 text-sm"><BookOpen className="w-4 h-4" /> Choose subjects</span>
                <span className={"text-xs font-bold px-2 py-0.5 rounded " + (profile.subjects ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700")}>{profile.subjects ? "Done" : "Pending"}</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button onClick={() => { try { const val = JSON.stringify(profile); localStorage.setItem("xamsathi_profile", val); localStorage.setItem("eduman_profile", val); } catch {}; }} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
