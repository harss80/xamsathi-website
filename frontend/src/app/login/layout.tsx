import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login to XamSathi | Best Online Mock Tests",
    description: "Sign in to access your dashboard, resume your JEE practice test online, and check your mock test results at XamSathi.",
    alternates: { canonical: "/login" },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return children;
}
