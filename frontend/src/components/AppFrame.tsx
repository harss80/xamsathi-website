"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import DashboardUtilities from "@/components/DashboardUtilities";
import ThemeToggle from "@/components/ThemeToggle";
import ShortcutHelp from "@/components/ShortcutHelp";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin") || pathname?.startsWith("/login") || pathname?.startsWith("/signup");

  if (hideNavbar) {
    return <>
      {children}
      <DashboardUtilities />
      <ThemeToggle />
      <ShortcutHelp />
    </>;
  }

  return (
    <>
      <Navbar />
      {children}
      <ThemeToggle />
      <ShortcutHelp />
    </>
  );
}
