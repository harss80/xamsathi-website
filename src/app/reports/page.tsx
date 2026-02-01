"use client";

import Link from "next/link";
import { BarChart3, ArrowLeft } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6" /> Reports
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[{label:'Overall Avg',value:'76%'},{label:'This Week',value:'82%'},{label:'Last Test',value:'79%'}].map((k)=> (
            <div key={k.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <div className="text-xs text-slate-400">{k.label}</div>
              <div className="text-2xl font-bold text-white">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 mb-6">
          <h2 className="text-sm font-bold text-slate-300 mb-3">Recent Mock Trend</h2>
          <svg viewBox="0 0 200 60" className="w-full h-24">
            <polyline fill="none" stroke="#22c55e" strokeWidth="3" points="0,50 25,40 50,45 75,30 100,35 125,20 150,28 175,18 200,22" />
            <polyline fill="rgba(34,197,94,0.1)" stroke="none" points="0,60 0,50 25,40 50,45 75,30 100,35 125,20 150,28 175,18 200,22 200,60" />
          </svg>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-sm font-bold text-slate-300 mb-4">Subject-wise</h2>
          <div className="space-y-3">
            {[{name:'Physics',value:78,color:'bg-emerald-500'},{name:'Chemistry',value:72,color:'bg-blue-500'},{name:'Mathematics',value:81,color:'bg-violet-500'}].map(s => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">{s.name}</span>
                  <span className="text-xs text-slate-400">{s.value}%</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className={`h-full ${s.color}`} style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
