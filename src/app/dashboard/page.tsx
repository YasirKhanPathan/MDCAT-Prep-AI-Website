"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  Flame,
  Trophy,
  MessageCircle,
  HelpCircle,
  FileText,
  PlayCircle,
  ClipboardList,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Circle,
} from "lucide-react";
import {
  getProgressData,
  getAccuracy,
  getRecentResults,
  type StudentProgress,
} from "@/lib/progress";
import { subjects } from "@/data/subjects";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

const quickActions = [
  { href: "/chat", label: "Ask AI Tutor", icon: MessageCircle, color: "bg-emerald-500" },
  { href: "/practice", label: "Practice MCQs", icon: Target, color: "bg-blue-500" },
  { href: "/quizzes", label: "Take a Quiz", icon: HelpCircle, color: "bg-amber-500" },
  { href: "/notes", label: "Read Notes", icon: FileText, color: "bg-purple-500" },
  { href: "/lectures", label: "Watch Lectures", icon: PlayCircle, color: "bg-red-500" },
  { href: "/past-papers", label: "Past Papers", icon: ClipboardList, color: "bg-indigo-500" },
];

export default function DashboardPage() {
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const data = getProgressData();
    setProgress(data);
    generateSuggestions(data);
  }, []);

  const generateSuggestions = (data: StudentProgress) => {
    const tips: string[] = [];

    if (data.totalQuestionsAttempted === 0) {
      tips.push("Start with a practice quiz to establish your baseline!");
      tips.push("Try the AI Tutor for any concept you find difficult.");
    } else {
      const accuracy = getAccuracy();
      if (accuracy < 50) {
        tips.push("Focus on understanding concepts before attempting more MCQs.");
      } else if (accuracy < 75) {
        tips.push("Good progress! Focus on your weak topics to improve further.");
      } else {
        tips.push("Excellent work! Try harder difficulty levels to challenge yourself.");
      }

      const weakTopics = Object.entries(data.topicStats)
        .filter(([, s]) => s.attempted >= 3)
        .map(([t, s]) => ({ topic: t, accuracy: Math.round((s.correct / s.attempted) * 100) }))
        .sort((a, b) => a.accuracy - b.accuracy)
        .slice(0, 3);

      if (weakTopics.length > 0) {
        tips.push(`Work on weak areas: ${weakTopics.map((w) => w.topic.split("/")[0]).join(", ")}`);
      }

      if (data.studyStreak === 0) {
        tips.push("Start a study streak! Practice today to build momentum.");
      } else if (data.studyStreak >= 3) {
        tips.push(`${data.studyStreak}-day streak! Keep it going!`);
      }
    }

    tips.push("Aim for 100-200 MCQs daily for optimal preparation.");
    setSuggestions(tips);
  };

  const accuracy = progress ? getAccuracy() : 0;
  const recentResults = progress ? getRecentResults(5) : [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here&apos;s your MDCAT preparation overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Target className="h-5 w-5 text-emerald-500 mb-2" />
          <p className="text-2xl font-bold">{progress?.totalQuestionsAttempted || 0}</p>
          <p className="text-sm text-gray-500">Questions Attempted</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <TrendingUp className="h-5 w-5 text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{accuracy}%</p>
          <p className="text-sm text-gray-500">Accuracy</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Trophy className="h-5 w-5 text-amber-500 mb-2" />
          <p className="text-2xl font-bold">{progress?.totalCorrectAnswers || 0}</p>
          <p className="text-sm text-gray-500">Correct Answers</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Flame className="h-5 w-5 text-red-500 mb-2" />
          <p className="text-2xl font-bold">{progress?.studyStreak || 0}</p>
          <p className="text-sm text-gray-500">Day Streak</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* AI Suggestions */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-emerald-500" />
            AI Recommendations
          </h2>
          <div className="space-y-3">
            {suggestions.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className={`${action.color} p-2 rounded-lg`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium flex-1">{action.label}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subject Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Subject Progress
          </h2>
          <div className="space-y-3">
            {subjects.map((s) => {
              const stats = progress?.subjectStats[s.id];
              const pct = stats ? Math.round((stats.correct / stats.attempted) * 100) : 0;
              return (
                <div key={s.id} className="flex items-center gap-3">
                  <span className="text-xl">{iconMap[s.id]}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-gray-500">{stats ? `${pct}%` : "Not started"}</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: s.color }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            Recent Activity
          </h2>
          {recentResults.length > 0 ? (
            <div className="space-y-3">
              {recentResults.map((result) => {
                const subject = subjects.find((s) => s.id === result.subject);
                const pct = Math.round((result.correctAnswers / result.totalQuestions) * 100);
                return (
                  <div key={result.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: subject?.color || "#6b7280" }}
                      >
                        {result.correctAnswers}/{result.totalQuestions}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{subject?.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(result.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        pct >= 75 ? "text-emerald-500" : pct >= 50 ? "text-amber-500" : "text-red-500"
                      }`}
                    >
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-8">
              No activity yet. Start practicing to see your progress!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
