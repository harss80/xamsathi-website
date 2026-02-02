import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Comprehensive courses for School, JEE, NEET, Government Exams, and more.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Courses | XamSathi",
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
