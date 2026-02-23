import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Study Resources | Best Exam Test Series | XamSathi",
    description: "Read the latest study guides, syllabus updates, exam strategies, and tips to ace JEE and NEET with our online mock tests in India.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog & Study Resources | XamSathi",
        description: "Read the latest study guides, syllabus updates, exam strategies, and tips to ace JEE and NEET.",
        url: "https://www.xamsathi.in/blog",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
