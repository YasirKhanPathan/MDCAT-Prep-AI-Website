"use client";

import Link from "next/link";
import { subjects } from "@/data/subjects";
import { FileText, ArrowRight } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

export default function NotesPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Study Notes</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Curated notes from KIPS, Medico Engineer, PakMcqs, and other reliable sources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/notes/${subject.id}`}
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
              <FileText className="h-4 w-4" />
              View Notes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
