"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export default function AdminPanel() {
  const [secret, setSecret] = useState("");
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "";

  // Courses
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseClass, setCourseClass] = useState<number>(10);
  const [courses, setCourses] = useState<Array<Record<string, any>>>([]);

  // Tests
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [testTitle, setTestTitle] = useState("");
  const [testDifficulty, setTestDifficulty] = useState("");
  const [testDuration, setTestDuration] = useState<number>(60);
  const [tests, setTests] = useState<Array<Record<string, any>>>([]);

  // Questions bulk JSON
  const [questionsJson, setQuestionsJson] = useState<string>(
    JSON.stringify(
      [
        {
          test_id: "REPLACE_WITH_TEST_ID",
          body: "2 + 2 = ?",
          options: ["1", "2", "4", "8"],
          correct_indices: [2],
          explanation: "Basic addition.",
          tags: ["math", "easy"],
          pool_key: "math_basic_1"
        }
      ],
      null,
      2
    )
  );

  // Analytics
  const [analytics, setAnalytics] = useState<Record<string, any>>({});

  // Data tables
  const [attempts, setAttempts] = useState<Array<Record<string, any>>>([]);
  const [questions, setQuestions] = useState<Array<Record<string, any>>>([]);
  const [users, setUsers] = useState<Array<Record<string, any>>>([]);
  const [jobs, setJobs] = useState<Array<Record<string, any>>>([]);
  const [activeTab, setActiveTab] = useState("courses");

  async function fetchCourses() {
    const url = base ? new URL("/api/admin/courses", base).toString() : "/api/admin/courses";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setCourses(data.items || []);
    }
  }

  async function createCourse() {
    const url = base ? new URL("/api/admin/courses", base).toString() : "/api/admin/courses";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-admin-secret": secret,
      },
      body: JSON.stringify({
        title: courseTitle,
        description: courseDesc,
        class_grade: courseClass,
      }),
    });
    if (res.ok) {
      setCourseTitle("");
      setCourseDesc("");
      await fetchCourses();
      alert("Course created");
    } else {
      const e = await res.json();
      alert("Error: " + e.error);
    }
  }

  async function fetchTests(courseId?: string) {
    const _base = base || location.origin;
    const url = new URL("/api/admin/tests", _base);
    if (courseId) url.searchParams.set("course_id", courseId);
    const res = await fetch(url.toString(), { headers: { "x-admin-secret": secret } });
    if (res.ok) {
      const data = await res.json();
      setTests(data.items || []);
    }
  }

  async function createTest() {
    const url = base ? new URL("/api/admin/tests", base).toString() : "/api/admin/tests";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-admin-secret": secret,
      },
      body: JSON.stringify({
        course_id: selectedCourse,
        title: testTitle,
        difficulty: testDifficulty,
        duration_min: testDuration,
      }),
    });
    if (res.ok) {
      setTestTitle("");
      await fetchTests(selectedCourse || undefined);
      alert("Test created");
    } else {
      const e = await res.json();
      alert("Error: " + e.error);
    }
  }

  async function uploadQuestions() {
    let payload: any;
    try {
      payload = JSON.parse(questionsJson);
      if (!Array.isArray(payload)) throw new Error();
    } catch {
      alert("Invalid JSON. Provide an array of questions");
      return;
    }
    const url = base ? new URL("/api/admin/questions", base).toString() : "/api/admin/questions";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-admin-secret": secret,
      },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      alert("Questions uploaded");
      await fetchQuestions();
    } else {
      const e = await res.json();
      alert("Error: " + e.error);
    }
  }

  async function fetchAttempts() {
    const url = base ? new URL("/api/admin/attempts", base).toString() : "/api/admin/attempts";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setAttempts(data.items || []);
    }
  }

  async function fetchQuestions() {
    const url = base ? new URL("/api/admin/questions", base).toString() : "/api/admin/questions";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setQuestions(data.items || []);
    }
  }

  async function fetchUsers() {
    const url = base ? new URL("/api/admin/users", base).toString() : "/api/admin/users";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setUsers(data.items || []);
    }
  }

  async function fetchJobs() {
    const url = base ? new URL("/api/admin/jobs", base).toString() : "/api/admin/jobs";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setJobs(data.items || []);
    }
  }

  async function fetchAnalytics() {
    const url = base ? new URL("/api/admin/analytics", base).toString() : "/api/admin/analytics";
    const res = await fetch(url, {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setAnalytics(data);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret]);

  useEffect(() => {
    if (secret) fetchTests(selectedCourse || undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret, selectedCourse]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Owner Admin Panel</h1>

        <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
          <h2 className="font-semibold">Auth</h2>
          <p className="text-sm text-slate-400">Enter ADMIN_PANEL_SECRET to access admin APIs.</p>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="ADMIN_PANEL_SECRET"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2"
          />
        </section>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-800">
          {["courses", "tests", "questions", "attempts", "users", "jobs", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold capitalize transition-colors ${
                activeTab === tab
                  ? "text-white border-b-2 border-blue-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Create Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Title" value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} />
              <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 md:col-span-2" placeholder="Description" value={courseDesc} onChange={(e)=>setCourseDesc(e.target.value)} />
              <input type="number" min={1} max={12} className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Class" value={courseClass} onChange={(e)=>setCourseClass(Number(e.target.value))} />
            </div>
            <button onClick={createCourse} className="px-4 py-2 bg-blue-600 rounded-lg font-semibold">Create</button>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Courses ({courses.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-2">Title</th>
                      <th className="text-left p-2">Class</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((c)=> (
                      <tr key={c.id} className="border-b border-slate-800">
                        <td className="p-2 font-medium">{c.title}</td>
                        <td className="p-2">{c.class_grade}</td>
                        <td className="p-2 text-slate-400 max-w-xs truncate">{c.description}</td>
                        <td className="p-2 text-slate-500">{c.created_at ? new Date(c.created_at).toLocaleDateString() : "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Tests Tab */}
        {activeTab === "tests" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Create Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <select aria-label="Select course" className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" value={selectedCourse} onChange={(e)=>setSelectedCourse(e.target.value)}>
                <option value="">Select course</option>
                {courses.map((c)=> <option key={c.id} value={c.id}>{c.title} (Class {c.class_grade})</option>)}
              </select>
              <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Title" value={testTitle} onChange={(e)=>setTestTitle(e.target.value)} />
              <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Difficulty (optional)" value={testDifficulty} onChange={(e)=>setTestDifficulty(e.target.value)} />
              <input type="number" min={10} max={240} className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Duration" value={testDuration} onChange={(e)=>setTestDuration(Number(e.target.value))} />
              <button onClick={createTest} className="px-4 py-2 bg-blue-600 rounded-lg font-semibold">Create</button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Tests ({tests.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-2">Title</th>
                      <th className="text-left p-2">Course</th>
                      <th className="text-left p-2">Duration</th>
                      <th className="text-left p-2">Difficulty</th>
                      <th className="text-left p-2">Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((t)=> (
                      <tr key={t.id} className="border-b border-slate-800">
                        <td className="p-2 font-medium">{t.title}</td>
                        <td className="p-2">{t.course_id}</td>
                        <td className="p-2">{t.duration_min} min</td>
                        <td className="p-2">{t.difficulty || "N/A"}</td>
                        <td className="p-2">{t.active ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Questions Tab */}
        {activeTab === "questions" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Bulk Upload Questions (JSON)</h2>
            <textarea aria-label="Questions JSON" placeholder="Paste questions JSON here" className="w-full h-48 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-sm" value={questionsJson} onChange={(e)=>setQuestionsJson(e.target.value)} />
            <button onClick={uploadQuestions} className="px-4 py-2 bg-blue-600 rounded-lg font-semibold">Upload</button>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Questions ({questions.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-2">Body</th>
                      <th className="text-left p-2">Test ID</th>
                      <th className="text-left p-2">Options</th>
                      <th className="text-left p-2">Correct</th>
                      <th className="text-left p-2">Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((q)=> (
                      <tr key={q.id} className="border-b border-slate-800">
                        <td className="p-2 max-w-xs truncate" title={q.body}>{q.body}</td>
                        <td className="p-2">{q.test_id}</td>
                        <td className="p-2">{q.options?.length || 0}</td>
                        <td className="p-2">{q.correct_indices?.join(",") || "N/A"}</td>
                        <td className="p-2">{q.tags?.join(", ") || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Attempts Tab */}
        {activeTab === "attempts" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Test Attempts</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-2">User ID</th>
                    <th className="text-left p-2">Test ID</th>
                    <th className="text-left p-2">Score</th>
                    <th className="text-left p-2">Total</th>
                    <th className="text-left p-2">Started</th>
                    <th className="text-left p-2">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {attempts.map((a)=> (
                    <tr key={a.id} className="border-b border-slate-800">
                      <td className="p-2">{a.user_id}</td>
                      <td className="p-2">{a.test_id}</td>
                      <td className="p-2">{a.score ?? "N/A"}</td>
                      <td className="p-2">{a.total ?? "N/A"}</td>
                      <td className="p-2">{a.started_at ? new Date(a.started_at).toLocaleString() : "N/A"}</td>
                      <td className="p-2">{a.submitted_at ? new Date(a.submitted_at).toLocaleString() : "In Progress"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-2">User ID</th>
                    <th className="text-left p-2">Class Grade</th>
                    <th className="text-left p-2">Attempts</th>
                    <th className="text-left p-2">Avg Score</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u)=> (
                    <tr key={u.user_id} className="border-b border-slate-800">
                      <td className="p-2">{u.user_id}</td>
                      <td className="p-2">{u.class_grade}</td>
                      <td className="p-2">{u.attempt_count || 0}</td>
                      <td className="p-2">{u.avg_score ? (u.avg_score * 100).toFixed(1) + "%" : "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Jobs Tab */}
        {activeTab === "jobs" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h2 className="font-semibold">Jobs / Test Series</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-2">Title</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Posted</th>
                    <th className="text-left p-2">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j)=> (
                    <tr key={j.id} className="border-b border-slate-800">
                      <td className="p-2 font-medium">{j.title}</td>
                      <td className="p-2">{j.type || "N/A"}</td>
                      <td className="p-2">{j.status || "N/A"}</td>
                      <td className="p-2">{j.posted_at ? new Date(j.posted_at).toLocaleDateString() : "N/A"}</td>
                      <td className="p-2">{j.deadline ? new Date(j.deadline).toLocaleDateString() : "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-6">
            <h2 className="font-semibold">Analytics Dashboard</h2>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{analytics.totalCourses || 0}</div>
                <div className="text-sm text-slate-400">Total Courses</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{analytics.totalTests || 0}</div>
                <div className="text-sm text-slate-400">Total Tests</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">{analytics.totalAttempts || 0}</div>
                <div className="text-sm text-slate-400">Total Attempts</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400">{analytics.totalUsers || 0}</div>
                <div className="text-sm text-slate-400">Total Users</div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Attempts Over Time */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Attempts Over Time</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={analytics.attemptsOverTime || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
                    <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Attempts by Class */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Attempts by Class</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={analytics.attemptsByClass || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="class_grade" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
                    <Bar dataKey="count" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Score Distribution */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Score Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={analytics.scoreDistribution || []}
                      dataKey="count"
                      nameKey="range"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {(analytics.scoreDistribution || []).map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index % 4]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Top Tests by Attempts */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Top Tests by Attempts</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={analytics.topTests || []} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis type="number" stroke="#94a3b8" />
                    <YAxis dataKey="title" type="category" width={120} stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
                    <Bar dataKey="attempts" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
