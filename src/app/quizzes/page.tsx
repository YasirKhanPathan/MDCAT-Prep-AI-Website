"use client";

import Link from "next/link";
import { quizSets } from "@/data/quizzes";
import { subjects } from "@/data/subjects";
import { Clock, Target, ChevronRight, HelpCircle } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  mixed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function QuizzesPage() {
  const groupedBySubject = subjects.map((s) => ({
    ...s,
    quizzes: quizSets.filter((q) => q.subject === s.id),
  }));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pre-built quiz sets organized by subject and difficulty
        </p>
      </div>

      <div className="space-y-8">
        {groupedBySubject.map((subject) => (
          <div key={subject.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{iconMap[subject.id]}</span>
              <h2 className="text-xl font-semibold">{subject.name}</h2>
              <span className="text-sm text-gray-500">({subject.quizzes.length} quizzes)</span>
            </div>

            {subject.quizzes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subject.quizzes.map((quiz) => (
                  <Link
                    key={quiz.id}
                    href={`/quizzes/${quiz.id}`}
                    className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-emerald-500/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold group-hover:text-emerald-500 transition-colors">
                        {quiz.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{quiz.description}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`px-2 py-0.5 rounded-full font-medium ${difficultyColors[quiz.difficulty]}`}>
                        {quiz.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Target className="h-3 w-3" /> {quiz.questionCount} Qs
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock className="h-3 w-3" /> {quiz.timeLimit}m
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No quizzes available yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
