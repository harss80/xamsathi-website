"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft, GraduationCap, ArrowRight } from "lucide-react";
import { trackLead } from "@/lib/trackLead";
import ExamSearch from "@/components/ExamSearch";

const TEST_CATEGORIES = [
  {
    id: "jee-main",
    title: "JEE Main",
    description: "Full-length mocks, chapter-wise practice and PYQs.",
    count: "Engineering",
    href: "/engineering-exams/jee-main",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    glow: "bg-blue-500",
  },
  {
    id: "neet",
    title: "NEET UG",
    description: "NCERT-first mocks and practice with detailed solutions.",
    count: "Medical",
    href: "/medical-exams/neet",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-300",
    glow: "bg-pink-500",
  },
  {
    id: "upsc",
    title: "UPSC",
    description: "Prelims & Mains practice sets.",
    count: "Government",
    href: "/government-exams/upsc",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    glow: "bg-emerald-500",
  },
  {
    id: "ssc",
    title: "SSC",
    description: "CGL, CHSL, MTS practice.",
    count: "Government",
    href: "/government-exams/ssc",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    glow: "bg-emerald-500",
  },
  {
    id: "banking",
    title: "Banking",
    description: "IBPS & SBI practice for speed + accuracy.",
    count: "Banking",
    href: "/banking-exams",
    iconBg: "bg-yellow-500/10",
    iconText: "text-yellow-200",
    glow: "bg-yellow-500",
  },
  {
    id: "railway",
    title: "Railways",
    description: "RRB NTPC, Group D practice sets.",
    count: "Government",
    href: "/government-exams/railway",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    glow: "bg-emerald-500",
  }
];

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
              <FileText className="w-8 h-8 text-blue-500" />
              Test Series Library
            </h1>
            <p className="text-slate-400">Explore our comprehensive collection of mock tests</p>
          </div>

          <div className="relative w-full md:w-96">
            <ExamSearch placeholder="Search your exam..." className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEST_CATEGORIES.map((test) => (
            <Link
              key={test.id}
              href={test.href}
              onClick={() => {
                trackLead({
                  action: "testseries_view_details",
                  entity_type: "test_category",
                  entity_id: test.id,
                  meta: { title: test.title },
                });
              }}
              className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${test.glow} blur-2xl rounded-bl-3xl w-24 h-24`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${test.iconBg} ${test.iconText}`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400 border border-slate-700">
                  {test.count}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {test.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                {test.description}
              </p>

              <div className="flex items-center text-sm font-medium text-blue-500 gap-1 group-hover:gap-2 transition-all">
                View Details <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
