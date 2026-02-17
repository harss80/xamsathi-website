"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import DashboardUtilities from "@/components/DashboardUtilities";
import ShortcutHelp from "@/components/ShortcutHelp";
import Footer from "@/components/Footer";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin") || pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/register");

  if (hideLayout) {
    return (
      <>
        {children}
        <DashboardUtilities />
        <ShortcutHelp />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ShortcutHelp />
    </>
  );
}
