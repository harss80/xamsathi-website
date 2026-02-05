import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: 1, day: "Today", time: "10:00 AM", subject: "Physics", topic: "Rotational Motion - Lec 4", instructor: "Dr. H.C. Verma", live: true },
    { id: 2, day: "Today", time: "02:00 PM", subject: "Mathematics", topic: "Complex Numbers", instructor: "Prof. R.K. Gupta", live: false },
    { id: 3, day: "Tomorrow", time: "04:30 PM", subject: "Chemistry", topic: "Organic Reaction Mechanisms", instructor: "Mrs. S. Sharma", live: false },
  ];
  return NextResponse.json(data);
}
