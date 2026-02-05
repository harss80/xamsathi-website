import { NextResponse } from "next/server";

export async function GET() {
  // In a real app, fetch from DB. Using static sample for now.
  const data = [
    { id: 1, title: "Weekly mock test results are live", time: "2h ago", tag: "Tests" },
    { id: 2, title: "New Chemistry notes uploaded", time: "Yesterday", tag: "Notes" },
    { id: 3, title: "Live doubt-solving session at 6 PM", time: "Today", tag: "Live" },
    { id: 4, title: "Maths assignment due tomorrow", time: "Today", tag: "Assignments" },
    { id: 5, title: "New course module unlocked: Optics", time: "3d ago", tag: "Courses" },
  ];
  return NextResponse.json(data);
}
