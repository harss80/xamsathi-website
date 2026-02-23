import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | XamSathi - Online Exam Preparation",
    description: "Get in touch with XamSathi for any queries related to our NEET practice questions, JEE mock tests, and the best exam test series.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Us | XamSathi",
        description: "Get in touch with XamSathi for any queries related to our best exam test series.",
        url: "https://www.xamsathi.in/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
