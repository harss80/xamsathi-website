"use client";

import { useEffect, useState } from "react";

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

  async function fetchCourses() {
    const url = base ? new URL("/api/admin/courses", base).toString() : "/api/admin/courses";
    const res = await fetch(url + "?limit=200", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setCourses(data);
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
    if (res.ok) setTests(await res.json());
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
    } else {
      const e = await res.json();
      alert("Error: " + e.error);
    }
  }

  useEffect(() => {
    if (secret) fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret]);

  useEffect(() => {
    if (secret) fetchTests(selectedCourse || undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret, selectedCourse]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

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

        <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
          <h2 className="font-semibold">Create Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Title" value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} />
            <input className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 md:col-span-2" placeholder="Description" value={courseDesc} onChange={(e)=>setCourseDesc(e.target.value)} />
            <input type="number" min={1} max={12} className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2" placeholder="Class" value={courseClass} onChange={(e)=>setCourseClass(Number(e.target.value))} />
          </div>
          <button onClick={createCourse} className="px-4 py-2 bg-blue-600 rounded-lg font-semibold">Create</button>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((c)=> (
                <div key={c.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-bold">{c.title}</div>
                  <div className="text-xs text-slate-400">Class {c.class_grade}</div>
                  <div className="text-sm text-slate-400 line-clamp-2">{c.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Tests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tests.map((t)=> (
                <div key={t.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-bold">{t.title}</div>
                  <div className="text-xs text-slate-400">Duration {t.duration_min} min</div>
                  <div className="text-xs text-slate-500">Course: {t.course_id}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
          <h2 className="font-semibold">Bulk Upload Questions (JSON)</h2>
          <textarea aria-label="Questions JSON" placeholder="Paste questions JSON here" className="w-full h-60 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-sm" value={questionsJson} onChange={(e)=>setQuestionsJson(e.target.value)} />
          <button onClick={uploadQuestions} className="px-4 py-2 bg-blue-600 rounded-lg font-semibold">Upload</button>
        </section>
      </div>
    </main>
  );
}
