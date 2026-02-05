import { NextResponse } from "next/server";

export async function GET() {
  // Mock data; replace with DB query in production
  const data = {
    summary: { overallAvg: 76, thisWeekAvg: 82, lastTest: 79 },
    trend: [50, 60, 55, 70, 65, 80, 72, 78],
    subjects: [
      { name: 'Physics', value: 78 },
      { name: 'Chemistry', value: 72 },
      { name: 'Mathematics', value: 81 },
    ],
  };
  return NextResponse.json(data);
}
