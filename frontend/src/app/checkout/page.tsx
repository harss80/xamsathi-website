"use client";

import { useState } from "react";
import { trackLead } from "@/lib/trackLead";

export default function CheckoutPage() {
  const [courseId, setCourseId] = useState("course_demo");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white">Checkout</h1>
        <p className="text-slate-400 mt-2">This is the starting point for Buy/Enroll tracking.</p>

        <div className="mt-8 bg-slate-900/60 border border-white/10 rounded-3xl p-6">
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Course Id</label>
          <input
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="course_id"
          />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => {
                trackLead({
                  action: "buy_click",
                  entity_type: "course",
                  entity_id: courseId,
                });
                alert("Buy clicked (lead tracked)");
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 rounded-xl"
            >
              Buy
            </button>

            <button
              onClick={() => {
                trackLead({
                  action: "enroll_click",
                  entity_type: "course",
                  entity_id: courseId,
                });
                alert("Enroll clicked (lead tracked)");
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-xl"
            >
              Enroll
            </button>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            Tip: open Admin → Leads and you should see events for <code className="text-slate-200">buy_click</code> and <code className="text-slate-200">enroll_click</code>.
          </div>
        </div>
      </div>
    </main>
  );
}
