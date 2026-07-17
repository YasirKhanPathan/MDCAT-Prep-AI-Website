"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BarChart3,
  Target,
  TrendingUp,
  Calendar,
  Trophy,
  Flame,
  Trash2,
} from "lucide-react";
import {
  getProgressData,
  getAccuracy,
  getWeakTopics,
  getRecentResults,
  resetProgress,
  type StudentProgress,
} from "@/lib/progress";
import { subjects } from "@/data/subjects";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444"];

export default function ProgressPage() {
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    setProgress(getProgressData());
  }, []);

  if (!progress) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" />
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const accuracy = getAccuracy();
  const weakTopics = getWeakTopics(5);
  const recentResults = getRecentResults(5);

  const subjectChartData = subjects.map((s) => {
    const stats = progress.subjectStats[s.id];
    return {
      name: s.name,
      accuracy: stats ? Math.round((stats.correct / stats.attempted) * 100) : 0,
      attempted: stats?.attempted || 0,
    };
  });

  const pieData = subjects
    .filter((s) => progress.subjectStats[s.id])
    .map((s) => ({
      name: s.name,
      value: progress.subjectStats[s.id]?.attempted || 0,
    }));

  const handleReset = () => {
    resetProgress();
    setProgress(getProgressData());
    setShowResetConfirm(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your MDCAT preparation journey
          </p>
        </div>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Reset
        </button>
      </div>

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 flex items-center justify-between">
          <p className="text-sm text-red-700 dark:text-red-300">
            Are you sure? This will delete all your progress data.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-3 py-1 rounded-lg text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600"
            >
              Reset All
            </button>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Target className="h-5 w-5 text-emerald-500 mb-2" />
          <p className="text-2xl font-bold">{progress.totalQuestionsAttempted}</p>
          <p className="text-sm text-gray-500">Questions Attempted</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <TrendingUp className="h-5 w-5 text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{accuracy}%</p>
          <p className="text-sm text-gray-500">Overall Accuracy</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Trophy className="h-5 w-5 text-amber-500 mb-2" />
          <p className="text-2xl font-bold">{progress.totalCorrectAnswers}</p>
          <p className="text-sm text-gray-500">Correct Answers</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Flame className="h-5 w-5 text-red-500 mb-2" />
          <p className="text-2xl font-bold">{progress.studyStreak}</p>
          <p className="text-sm text-gray-500">Day Streak</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Accuracy by Subject */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Accuracy by Subject</h3>
          {subjectChartData.some((d) => d.attempted > 0) ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={subjectChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f9fafb",
                  }}
                />
                <Bar dataKey="accuracy" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[250px] flex items-center justify-center text-gray-500 text-sm">
              No quiz data yet. Start practicing to see your accuracy!
            </div>
          )}
        </div>

        {/* Questions by Subject (Pie) */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Questions by Subject</h3>
          {pieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f9fafb",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[250px] flex items-center justify-center text-gray-500 text-sm">
              No data yet. Complete some quizzes to see distribution!
            </div>
          )}
          {pieData.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {pieData.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  />
                  {d.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Weak Topics & Recent Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weak Topics */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Areas to Improve</h3>
          {weakTopics.length > 0 ? (
            <div className="space-y-3">
              {weakTopics.map((wt) => (
                <div
                  key={wt.topic}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                >
                  <div>
                    <p className="text-sm font-medium">{wt.topic.replace("/", " > ")}</p>
                    <p className="text-xs text-gray-500">
                      {wt.attempted} questions attempted
                    </p>
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      wt.accuracy < 50
                        ? "text-red-500"
                        : wt.accuracy < 75
                        ? "text-amber-500"
                        : "text-emerald-500"
                    }`}
                  >
                    {wt.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-8">
              Complete at least 3 questions per topic to see weak areas
            </p>
          )}
        </div>

        {/* Recent Results */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          {recentResults.length > 0 ? (
            <div className="space-y-3">
              {recentResults.map((result) => {
                const subject = subjects.find((s) => s.id === result.subject);
                const pct = Math.round(
                  (result.correctAnswers / result.totalQuestions) * 100
                );
                return (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                  >
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
                        pct >= 75
                          ? "text-emerald-500"
                          : pct >= 50
                          ? "text-amber-500"
                          : "text-red-500"
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
              No quizzes completed yet. Start practicing!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
