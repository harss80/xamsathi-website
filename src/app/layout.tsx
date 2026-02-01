import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep Geist, it's good
import "./globals.css";
import AppFrame from "@/components/AppFrame";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduMan - Master Your Exam Preparation",
  description: "Advanced test series and learning platform for JEE, NEET, UPSC, and Foundation students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}
      >
        <AppFrame>{children}</AppFrame>
        <Footer />
      </body>
    </html>
  );
}
