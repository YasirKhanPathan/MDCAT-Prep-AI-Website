"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getSubjectById } from "@/data/subjects";
import { ArrowLeft, MessageCircle, Target, ChevronRight } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

export default function SubjectDetailPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Subject Not Found</h1>
        <Link href="/subjects" className="text-emerald-500 hover:underline">
          Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <Link
        href="/subjects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Subjects
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{iconMap[subjectId]}</span>
          <div>
            <h1 className="text-3xl font-bold">{subject.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">
              {subject.description}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Link
            href={`/chat?subject=${subjectId}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Ask AI Tutor
          </Link>
          <Link
            href={`/practice?subject=${subjectId}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-emerald-500 text-sm font-medium transition-colors"
          >
            <Target className="h-4 w-4" />
            Practice MCQs
          </Link>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-4">
        {subject.topics.map((topic, index) => (
          <div
            key={topic.id}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: subject.color }}
                >
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">{topic.name}</h3>
              </div>
              <div className="ml-11">
                <ul className="space-y-1">
                  {topic.subtopics.map((subtopic) => (
                    <li
                      key={subtopic}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <ChevronRight className="h-3 w-3 text-gray-400" />
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex gap-3">
              <Link
                href={`/chat?subject=${subjectId}`}
                className="text-xs text-emerald-500 hover:text-emerald-600 font-medium"
              >
                Ask AI about this topic
              </Link>
              <Link
                href={`/practice?subject=${subjectId}`}
                className="text-xs text-blue-500 hover:text-blue-600 font-medium"
              >
                Practice MCQs
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
