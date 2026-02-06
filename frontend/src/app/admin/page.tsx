"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import Sidebar from "@/components/admin/Sidebar";
import { Search, Plus, Upload, Trash2, Edit, MoreVertical, CheckCircle, XCircle, Bell, Filter, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AdminPanel() {
  const [secret, setSecret] = useState("");
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "";

  // Data States
  const [courses, setCourses] = useState<Array<Record<string, any>>>([]);
  const [tests, setTests] = useState<Array<Record<string, any>>>([]);
  const [questions, setQuestions] = useState<Array<Record<string, any>>>([]);
  const [attempts, setAttempts] = useState<Array<Record<string, any>>>([]);
  const [users, setUsers] = useState<Array<Record<string, any>>>([]);
  const [jobs, setJobs] = useState<Array<Record<string, any>>>([]);
  const [analytics, setAnalytics] = useState<Record<string, any>>({});

  // Form States
  const [activeTab, setActiveTab] = useState("analytics");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseClass, setCourseClass] = useState<number>(10);

  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [testTitle, setTestTitle] = useState("");
  const [testDifficulty, setTestDifficulty] = useState("");
  const [testDuration, setTestDuration] = useState<number>(60);

  const [questionsJson, setQuestionsJson] = useState<string>(
    JSON.stringify([
      {
        test_id: "REPLACE_WITH_TEST_ID",
        body: "2 + 2 = ?",
        options: ["1", "2", "4", "8"],
        correct_indices: [2],
        explanation: "Basic addition.",
        tags: ["math", "easy"],
        pool_key: "math_basic_1"
      }
    ], null, 2)
  );

  // API Functions
  async function fetchCourses() {
    const url = base ? new URL("/api/admin/courses", base).toString() : "/api/admin/courses";
    const res = await fetch(url + "?limit=200", { headers: { "x-admin-secret": secret } });
    if (res.ok) setCourses((await res.json()).items || []);
  }

  async function createCourse() {
    const url = base ? new URL("/api/admin/courses", base).toString() : "/api/admin/courses";
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ title: courseTitle, description: courseDesc, class_grade: courseClass }),
    });
    if (res.ok) {
      setCourseTitle(""); setCourseDesc(""); await fetchCourses(); alert("Course created");
    } else {
      alert("Error: " + (await res.json()).error);
    }
  }

  async function fetchTests(courseId?: string) {
    const _base = base || location.origin;
    const url = new URL("/api/admin/tests", _base);
    if (courseId) url.searchParams.set("course_id", courseId);
    const res = await fetch(url.toString(), { headers: { "x-admin-secret": secret } });
    if (res.ok) setTests((await res.json()).items || []);
  }

  async function createTest() {
    const url = base ? new URL("/api/admin/tests", base).toString() : "/api/admin/tests";
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ course_id: selectedCourse, title: testTitle, difficulty: testDifficulty, duration_min: testDuration }),
    });
    if (res.ok) {
      setTestTitle(""); await fetchTests(selectedCourse || undefined); alert("Test created");
    } else {
      alert("Error: " + (await res.json()).error);
    }
  }

  async function uploadQuestions() {
    let payload: any;
    try { payload = JSON.parse(questionsJson); if (!Array.isArray(payload)) throw new Error(); }
    catch { alert("Invalid JSON. Provide an array of questions"); return; }

    const url = base ? new URL("/api/admin/questions", base).toString() : "/api/admin/questions";
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify(payload),
    });
    if (res.ok) { alert("Questions uploaded"); await fetchQuestions(); }
    else { alert("Error: " + (await res.json()).error); }
  }

  async function fetchAttempts() {
    const url = base ? new URL("/api/admin/attempts", base).toString() : "/api/admin/attempts";
    const res = await fetch(url + "?limit=200", { headers: { "x-admin-secret": secret } });
    if (res.ok) setAttempts((await res.json()).items || []);
  }

  async function fetchQuestions() {
    const url = base ? new URL("/api/admin/questions", base).toString() : "/api/admin/questions";
    const res = await fetch(url + "?limit=200", { headers: { "x-admin-secret": secret } });
    if (res.ok) setQuestions((await res.json()).items || []);
  }

  async function fetchUsers() {
    const url = base ? new URL("/api/admin/users", base).toString() : "/api/admin/users";
    const res = await fetch(url + "?limit=200", { headers: { "x-admin-secret": secret } });
    if (res.ok) setUsers((await res.json()).items || []);
  }

  async function fetchJobs() {
    const url = base ? new URL("/api/admin/jobs", base).toString() : "/api/admin/jobs";
    const res = await fetch(url + "?limit=200", { headers: { "x-admin-secret": secret } });
    if (res.ok) setJobs((await res.json()).items || []);
  }

  async function fetchAnalytics() {
    const url = base ? new URL("/api/admin/analytics", base).toString() : "/api/admin/analytics";
    const res = await fetch(url, { headers: { "x-admin-secret": secret } });
    if (res.ok) setAnalytics(await res.json());
  }

  useEffect(() => {
    if (secret) {
      fetchCourses();
      fetchAttempts();
      fetchQuestions();
      fetchUsers();
      fetchJobs();
      fetchAnalytics();
    }
  }, [secret]);

  useEffect(() => {
    if (secret) fetchTests(selectedCourse || undefined);
  }, [secret, selectedCourse]);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 ml-72 p-8 h-screen overflow-y-auto relative z-10 custom-scrollbar">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-3xl sticky top-0 z-40 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent border-none text-sm w-64 text-slate-300 placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter Admin Secret..."
                className="bg-slate-950/50 border border-slate-700 text-slate-300 px-4 py-2 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 text-sm transition-all"
              />
              <span className="absolute left-3 top-2.5 text-slate-500 text-xs">🔒</span>
            </div>

            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900" />
            </button>

            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 ring-2 ring-white/10">
              A
            </div>
          </div>
        </header>

        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white capitalize tracking-tight"
          >
            {activeTab}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm mt-1"
          >
            Overview and management for {activeTab}
          </motion.p>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="space-y-8 pb-10"
          >

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <>
                <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Total Courses", value: analytics.totalCourses || 0, color: "from-blue-500 to-blue-600", icon: BookOpen },
                    { label: "Total Tests", value: analytics.totalTests || 0, color: "from-emerald-500 to-emerald-600", icon: FileText },
                    { label: "Total Attempts", value: analytics.totalAttempts || 0, color: "from-violet-500 to-violet-600", icon: History },
                    { label: "Total Users", value: analytics.totalUsers || 0, color: "from-orange-500 to-orange-600", icon: Users }
                  ].map((stat, i) => (
                    <div key={i} className="relative group overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20`} />
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                          {/* Icon placeholder since generic map doesn't have icons imported yet, using div as fallback or could import icons */}
                          <div className="w-5 h-5 text-white flex items-center justify-center font-bold">{i + 1}</div>
                        </div>
                        <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded-lg border border-white/5">+12%</span>
                      </div>
                      <div className="text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                      <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div variants={fadeIn} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-bold text-lg text-white">Attempts Overview</h3>
                      <select className="bg-slate-800/50 text-xs text-slate-300 border-none rounded-lg px-3 py-1.5 focus:ring-0">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={analytics.attemptsOverTime || []}>
                        <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#64748b" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                          itemStyle={{ color: '#e2e8f0' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="count"
                          stroke="#3b82f6"
                          strokeWidth={4}
                          dot={{ r: 4, fill: '#1e293b', stroke: '#3b82f6', strokeWidth: 2 }}
                          activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                          fill="url(#colorCount)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </motion.div>

                  <motion.div variants={fadeIn} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-xl">
                    <h3 className="font-bold text-lg text-white mb-8">Score Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={analytics.scoreDistribution || []}
                          dataKey="count"
                          nameKey="range"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          innerRadius={70}
                          paddingAngle={5}
                          stroke="none"
                        >
                          {(analytics.scoreDistribution || []).map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index % 4]} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-4 mt-4">
                      {['High', 'Good', 'Average', 'Low'].map((label, idx) => (
                        <div key={label} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][idx] }} />
                          {label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {/* Courses Tab */}
            {activeTab === "courses" && (
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                    <Plus className="text-blue-500" /> Create New Course
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Course Title</label>
                      <input className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="e.g. Advanced Physics" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
                    </div>
                    <div className="md:col-span-5">
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Description</label>
                      <input className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Short description..." value={courseDesc} onChange={(e) => setCourseDesc(e.target.value)} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Grade</label>
                      <input type="number" min={1} max={12} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="10" value={courseClass} onChange={(e) => setCourseClass(Number(e.target.value))} />
                    </div>
                    <div className="md:col-span-1 flex items-end">
                      <button onClick={createCourse} className="w-full h-[50px] bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 text-white rounded-xl font-bold transition-all flex items-center justify-center">
                        <CheckCircle size={22} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-white">All Courses</h3>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><Filter size={18} /></button>
                      <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><MoreVertical size={18} /></button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                      <thead className="bg-white/5 text-slate-200 font-semibold uppercase tracking-wider text-xs">
                        <tr>
                          <th className="px-6 py-5">Title</th>
                          <th className="px-6 py-5">Class</th>
                          <th className="px-6 py-5">Description</th>
                          <th className="px-6 py-5">Created Date</th>
                          <th className="px-6 py-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {courses.map((c) => (
                          <tr key={c.id} className="hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-5 font-bold text-white flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">{c.title.charAt(0)}</div>
                              {c.title}
                            </td>
                            <td className="px-6 py-5"><span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2.5 py-1 rounded-full text-xs font-semibold">Class {c.class_grade}</span></td>
                            <td className="px-6 py-5 truncate max-w-xs">{c.description}</td>
                            <td className="px-6 py-5 flex items-center gap-2"><Calendar size={14} /> {c.created_at ? new Date(c.created_at).toLocaleDateString() : "N/A"}</td>
                            <td className="px-6 py-5 text-right">
                              <button className="text-slate-500 hover:text-blue-400 transition-colors"><Edit size={16} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tests Tab */}
            {activeTab === "tests" && (
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-white">Create New Test</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    <div className="lg:col-span-2">
                      <label className="input-label">Select Course</label>
                      <select className="input-field" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                        <option value="">Select Course...</option>
                        {courses.map((c) => <option key={c.id} value={c.id}>{c.title} (Class {c.class_grade})</option>)}
                      </select>
                    </div>
                    <div className="lg:col-span-2">
                      <label className="input-label">Test Title</label>
                      <input className="input-field" placeholder="Weekly Test 1" value={testTitle} onChange={(e) => setTestTitle(e.target.value)} />
                    </div>
                    <div className="lg:col-span-1">
                      <label className="input-label">Difficulty</label>
                      <input className="input-field" placeholder="Easy/Hard" value={testDifficulty} onChange={(e) => setTestDifficulty(e.target.value)} />
                    </div>
                    <div className="lg:col-span-1">
                      <label className="input-label">Duration</label>
                      <div className="flex gap-2">
                        <input type="number" className="input-field" placeholder="60" value={testDuration} onChange={(e) => setTestDuration(Number(e.target.value))} />
                        <button onClick={createTest} className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-3 font-bold flex items-center justify-center shadow-lg shadow-blue-600/20"><Plus size={20} /></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                  <div className="p-6 border-b border-white/5"><h3 className="font-bold text-lg text-white">Test Library</h3></div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                      <thead className="bg-white/5 text-slate-200 font-semibold uppercase tracking-wider text-xs">
                        <tr>
                          <th className="px-6 py-5">Test Title</th>
                          <th className="px-6 py-5">Course ID</th>
                          <th className="px-6 py-5">Duration</th>
                          <th className="px-6 py-5">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {tests.map((t) => (
                          <tr key={t.id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-5 font-bold text-white hover:text-blue-400 cursor-pointer">{t.title}</td>
                            <td className="px-6 py-5 font-mono text-xs text-slate-500 bg-slate-950/30 w-fit px-2 py-1 rounded border border-white/5">{t.course_id}</td>
                            <td className="px-6 py-5">{t.duration_min} min</td>
                            <td className="px-6 py-5">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${t.difficulty === 'Hard' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'
                                }`}>
                                {t.difficulty || "Normal"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Tabs (Questions, Attempts, Users, Jobs) simplified for modern look */}
            {activeTab === "questions" && (
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 h-[80vh] flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">JSON Import</h3>
                    <button onClick={uploadQuestions} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all">
                      <Upload size={18} /> Upload Data
                    </button>
                  </div>
                  <textarea
                    className="flex-1 w-full bg-slate-950/80 border border-slate-800 rounded-2xl p-6 font-mono text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-300 resize-none custom-scrollbar"
                    value={questionsJson}
                    onChange={(e) => setQuestionsJson(e.target.value)}
                  />
                </div>
              </motion.div>
            )}

            {activeTab === "attempts" && (
              <motion.div variants={fadeIn} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5"><h3 className="font-bold text-lg text-white">Student Attempts</h3></div>
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-white/5 text-slate-200 font-semibold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-5">Student</th>
                      <th className="px-6 py-5">Test ID</th>
                      <th className="px-6 py-5">Score</th>
                      <th className="px-6 py-5">Percent</th>
                      <th className="px-6 py-5">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {attempts.map((a) => (
                      <tr key={a.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5 font-mono text-xs">{a.user_id}</td>
                        <td className="px-6 py-5 font-mono text-xs">{a.test_id}</td>
                        <td className="px-6 py-5 font-bold text-white">{a.score} <span className="text-slate-500 font-normal">/ {a.total}</span></td>
                        <td className="px-6 py-5">
                          <div className="w-full bg-slate-800 rounded-full h-1.5 w-24 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${(a.score / a.total) * 100}%` }} />
                          </div>
                        </td>
                        <td className="px-6 py-5">{a.started_at ? new Date(a.started_at).toLocaleDateString() : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === "users" && (
              <motion.div variants={fadeIn} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5"><h3 className="font-bold text-lg text-white">Registered Users</h3></div>
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-white/5 text-slate-200 font-semibold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-5">User</th>
                      <th className="px-6 py-5">Class</th>
                      <th className="px-6 py-5">Engagement</th>
                      <th className="px-6 py-5">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {users.map((u) => (
                      <tr key={u.user_id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5 font-medium text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-white/10">{u.user_id.slice(-2)}</div>
                          {u.user_id}
                        </td>
                        <td className="px-6 py-5">Class {u.class_grade}</td>
                        <td className="px-6 py-5">{u.attempt_count} Exams</td>
                        <td className="px-6 py-5">
                          <span className={`px-2 py-1 rounded-md text-xs font-bold ${u.avg_score > 0.7 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {(u.avg_score * 100).toFixed(0)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === "jobs" && (
              <motion.div variants={fadeIn} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5"><h3 className="font-bold text-lg text-white">Job Listings</h3></div>
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-white/5 text-slate-200 font-semibold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-5">Job Title</th>
                      <th className="px-6 py-5">Type</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-6 py-5">Posted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {jobs.map((j) => (
                      <tr key={j.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5 font-bold text-white">{j.title}</td>
                        <td className="px-6 py-5"><span className="border border-white/10 rounded px-2 py-1 text-xs uppercase tracking-wide bg-slate-800">{j.type}</span></td>
                        <td className="px-6 py-5 text-blue-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          {j.status}
                        </td>
                        <td className="px-6 py-5">{j.posted_at ? new Date(j.posted_at).toLocaleDateString() : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

      </main>

      <style jsx>{`
        .input-label {
            @apply block text-xs font-semibold text-slate-500 mb-2 uppercase;
        }
        .input-field {
            @apply w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white text-sm;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
