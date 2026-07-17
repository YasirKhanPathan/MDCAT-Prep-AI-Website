import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedPrep AI - Your Smart MDCAT Study Companion",
  description:
    "AI-powered MDCAT preparation platform for Pakistani medical students. Practice MCQs, chat with AI tutor, and track your progress.",
  keywords: "MDCAT, PMC, medical admission, Pakistan, AI tutor, MCQ practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            {children}
          </main>
        </div>
        <footer className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs text-gray-500 ml-0 lg:ml-16">
          <p>MedPrep AI &copy; {new Date().getFullYear()} | Built for Pakistani Medical Students</p>
        </footer>
      </body>
    </html>
  );
}
