import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join XamSathi | Start Your Exam Preparation Free",
    description: "Create an account on XamSathi to participate in the best online mock tests in India, including high quality NEET practice questions.",
    alternates: { canonical: "/signup" },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return children;
}
