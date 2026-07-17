"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  Target,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import {
  roadmap,
  getTotalDays,
  getTotalMCQTarget,
  getTotalHours,
} from "@/data/roadmap";

const ROADMAP_STORAGE_KEY = "mdcat-roadmap-progress";

function loadRoadmapProgress(): Record<number, boolean> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(ROADMAP_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }
  return {};
}

function saveRoadmapProgress(progress: Record<number, boolean>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ROADMAP_STORAGE_KEY, JSON.stringify(progress));
}

const subjectColors: Record<string, string> = {
  Biology: "#10b981",
  Chemistry: "#3b82f6",
  Physics: "#f59e0b",
  "English + LR": "#8b5cf6",
  All: "#ef4444",
};

export default function RoadmapPage() {
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  useEffect(() => {
    setCompletedDays(loadRoadmapProgress());
  }, []);

  const toggleDay = (day: number) => {
    const next = { ...completedDays, [day]: !completedDays[day] };
    setCompletedDays(next);
    saveRoadmapProgress(next);
  };

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const totalDays = getTotalDays();
  const progressPct = Math.round((completedCount / totalDays) * 100);

  const getWeekProgress = (weekDays: number[]) => {
    const done = weekDays.filter((d) => completedDays[d]).length;
    return { done, total: weekDays.length };
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">1-Month MDCAT Roadmap</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A structured 28-day study plan to ace your MDCAT exam
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Calendar className="h-5 w-5 text-emerald-500 mb-2" />
          <p className="text-2xl font-bold">{completedCount}/{totalDays}</p>
          <p className="text-sm text-gray-500">Days Completed</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Target className="h-5 w-5 text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{getTotalMCQTarget().toLocaleString()}</p>
          <p className="text-sm text-gray-500">Total MCQ Target</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <Clock className="h-5 w-5 text-amber-500 mb-2" />
          <p className="text-2xl font-bold">{getTotalHours()}h</p>
          <p className="text-sm text-gray-500">Study Hours</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <BookOpen className="h-5 w-5 text-purple-500 mb-2" />
          <p className="text-2xl font-bold">{progressPct}%</p>
          <p className="text-sm text-gray-500">Progress</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Overall Progress</span>
          <span>{completedCount}/{totalDays} days</span>
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-4">
        {roadmap.map((week) => {
          const wp = getWeekProgress(week.days.map((d) => d.day));
          const isExpanded = expandedWeek === week.week;

          return (
            <div
              key={week.week}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              {/* Week Header */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-600">W{week.week}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{week.title}</h3>
                    <p className="text-sm text-gray-500">{week.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {wp.done}/{wp.total} days
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Week Days */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  {week.days.map((day) => {
                    const isCompleted = completedDays[day.day];
                    const color = subjectColors[day.subject] || "#6b7280";

                    return (
                      <div
                        key={day.day}
                        className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                          isCompleted
                            ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/10"
                            : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                        }`}
                      >
                        <button
                          onClick={() => toggleDay(day.day)}
                          className="mt-1 flex-shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-300 dark:text-gray-700 hover:text-emerald-500 transition-colors" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-bold text-gray-500">Day {day.day}</span>
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                              style={{ backgroundColor: color }}
                            >
                              {day.subject}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {day.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 italic">{day.notes}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {day.hours}h study
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="h-3 w-3" /> {day.mcqTarget} MCQs
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
