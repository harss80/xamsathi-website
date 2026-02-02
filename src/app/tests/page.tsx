"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Search, GraduationCap, ArrowRight } from "lucide-react";

const TEST_CATEGORIES = [
  {
    id: "jee-main-advanced",
    title: "JEE Main & Advanced",
    description: "Full-length mock tests, chapter-wise practice, and previous year papers.",
    count: "150+ Tests",
    color: "blue"
  },
  {
    id: "neet-ug",
    title: "NEET UG",
    description: "NCERT-based test series with detailed performance analysis.",
    count: "200+ Tests",
    color: "green"
  },
  {
    id: "upsc-cse",
    title: "UPSC CSE",
    description: "Prelims and Mains test series with current affairs coverage.",
    count: "80+ Tests",
    color: "orange"
  },
  {
    id: "ssc-cgl",
    title: "SSC CGL",
    description: "Speed enhancement tests for Tier I and Tier II exams.",
    count: "120+ Tests",
    color: "purple"
  },
  {
    id: "banking-exams",
    title: "Banking Exams",
    description: "IBPS, SBI, and RBI focused mock drills.",
    count: "100+ Tests",
    color: "pink"
  },
  {
    id: "cbse-class-10-12",
    title: "CBSE Class 10 & 12",
    description: "Board exam preparation with sample papers and question banks.",
    count: "50+ Tests",
    color: "cyan"
  }
];

export default function TestsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = TEST_CATEGORIES.filter(test =>
    test.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search for exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <Link
              key={test.id}
              href={`/exams/${test.id}`}
              className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity bg-${test.color}-500 blur-2xl rounded-bl-3xl w-24 h-24`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${test.color}-500/10 text-${test.color}-500`}>
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

        {filteredTests.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p>No test series found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
