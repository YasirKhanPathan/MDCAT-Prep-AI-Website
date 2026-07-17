import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDCAT Prep AI - Your Smart Study Companion",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>MDCAT Prep AI &copy; {new Date().getFullYear()} | Built for Pakistani Medical Students</p>
        </footer>
      </body>
    </html>
  );
}
