"use client";

import Link from "next/link";
import { subjects } from "@/data/subjects";
import { ArrowRight, BookOpen } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

export default function SubjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MDCAT Subjects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore all 5 subjects covered in the PMC MDCAT syllabus
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/subjects/${subject.id}`}
            className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{iconMap[subject.id]}</span>
              <div>
                <h2 className="text-xl font-semibold group-hover:text-emerald-500 transition-colors">
                  {subject.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {subject.topics.length} topics
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {subject.description}
            </p>
            <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
              Explore Topics
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/chat"
          className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 transition-colors"
        >
          <BookOpen className="h-8 w-8 text-emerald-500" />
          <div>
            <p className="font-semibold">Ask AI Tutor</p>
            <p className="text-sm text-gray-500">Get help with any subject</p>
          </div>
        </Link>
        <Link
          href="/practice"
          className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/40 transition-colors"
        >
          <BookOpen className="h-8 w-8 text-blue-500" />
          <div>
            <p className="font-semibold">Practice MCQs</p>
            <p className="text-sm text-gray-500">Test your knowledge</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
