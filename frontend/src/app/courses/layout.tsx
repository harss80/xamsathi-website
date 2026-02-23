import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Online Test Series & Courses for JEE, NEET, CBSE | XamSathi",
  description:
    "Enroll in the best exam test series for JEE, NEET, CBSE, and Government Exams. Get high-quality study materials, practice tests, and expert guidance at XamSathi.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Best Online Test Series & Courses for JEE, NEET, CBSE | XamSathi",
    description: "Enroll in the best exam test series for JEE, NEET, CBSE, and Government Exams. Get high-quality study materials, practice tests, and expert guidance at XamSathi.",
    url: "https://www.xamsathi.in/courses",
    images: [
      {
        url: "/hero-students.png",
        width: 1200,
        height: 630,
        alt: "XamSathi Courses",
      },
    ],
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
