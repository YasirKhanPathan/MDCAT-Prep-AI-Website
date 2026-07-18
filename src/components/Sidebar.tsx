"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  MessageCircle,
  Target,
  HelpCircle,
  FileText,
  PlayCircle,
  ClipboardList,
  BarChart3,
  Brain,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Layers,
  AlertTriangle,
  FlaskConical,
  BookOpenCheck,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "Roadmap", icon: Map },
  { divider: true, label: "Study" },
  { href: "/chat", label: "AI Tutor", icon: MessageCircle },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/practice", label: "Practice MCQs", icon: Target },
  { href: "/quizzes", label: "Quizzes", icon: HelpCircle },
  { href: "/mock-exam", label: "Mock Exam", icon: BookOpenCheck },
  { divider: true, label: "Resources" },
  { href: "/notes", label: "Notes", icon: FileText },
  { href: "/lectures", label: "Lectures", icon: PlayCircle },
  { href: "/formulas", label: "Formula Sheet", icon: FlaskConical },
  { href: "/past-papers", label: "Past Papers", icon: ClipboardList },
  { divider: true, label: "Review" },
  { href: "/wrong-answers", label: "Wrong Answers", icon: AlertTriangle },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("mdcat-theme") === "dark" ||
      (!localStorage.getItem("mdcat-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mdcat-theme", next ? "dark" : "light");
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-gray-200 dark:border-gray-800 ${collapsed ? "justify-center" : ""}`}>
        <Brain className="h-8 w-8 text-emerald-500 flex-shrink-0" />
        {!collapsed && (
          <span className="text-lg font-bold gradient-text">MedPrep AI</span>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item, idx) => {
          if ("divider" in item && item.divider) {
            if (collapsed) return <div key={`div-${idx}`} className="border-t border-gray-200 dark:border-gray-800 my-2" />;
            return (
              <p key={`div-${idx}`} className="text-[10px] font-semibold uppercase text-gray-400 dark:text-gray-600 px-3 pt-4 pb-1">
                {item.label}
              </p>
            );
          }
          const navItem = item as { href: string; label: string; icon: React.ComponentType<{ className?: string }> };
          const href = navItem.href;
          const Icon = navItem.icon;
          const label = navItem.label;
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? label : undefined}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-800 space-y-1 flex-shrink-0">
        <button
          onClick={toggleDark}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full transition-colors ${collapsed ? "justify-center" : ""}`}
          title={collapsed ? (darkMode ? "Light Mode" : "Dark Mode") : undefined}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {!collapsed && <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`hidden lg:flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full transition-colors ${collapsed ? "justify-center" : ""}`}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
      >
        <div className="space-y-1.5">
          <div className="w-5 h-0.5 bg-gray-600 dark:bg-gray-400" />
          <div className="w-5 h-0.5 bg-gray-600 dark:bg-gray-400" />
          <div className="w-5 h-0.5 bg-gray-600 dark:bg-gray-400" />
        </div>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transform transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {sidebarContent}
      </div>

      {/* Desktop sidebar */}
      <aside className={`hidden lg:block fixed inset-y-0 left-0 z-40 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all ${collapsed ? "w-16" : "w-64"}`}>
        {sidebarContent}
      </aside>

      {/* Spacer */}
      <div className={`hidden lg:block flex-shrink-0 transition-all ${collapsed ? "w-16" : "w-64"}`} />
    </>
  );
}
