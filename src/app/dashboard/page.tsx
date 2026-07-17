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
  Zap,
  Calendar,
} from "lucide-react";
import {
  getProgressData,
  getAccuracy,
  getRecentResults,
  getThisWeekStats,
  type StudentProgress,
} from "@/lib/progress";
import { subjects } from "@/data/subjects";

interface UserProfile {
  name: string;
  level: string;
  weakSubjects: string[];
  examDate: string;
  dailyHours: number;
}

interface AISuggestion {
  task: string;
  subject: string;
  priority: string;
  estimatedMinutes: number;
  type: string;
}

const ROADMAP_STORAGE_KEY = "mdcat-roadmap-progress";
const USER_PROFILE_KEY = "mdcat-user-profile";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

const priorityColors: Record<string, string> = {
  high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
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
  const [aiTasks, setAiTasks] = useState<AISuggestion[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [weeklyStats, setWeeklyStats] = useState({ questionsAttempted: 0, accuracy: 0, correctAnswers: 0 });

  useEffect(() => {
    try {
      const data = getProgressData();
      setProgress(data);
      
      const storedProfile = localStorage.getItem(USER_PROFILE_KEY);
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      }
      
      const stats = getThisWeekStats();
      setWeeklyStats(stats);
      
      fetchSuggestions(data);
    } catch (e) {
      console.error("Dashboard init error:", e);
      setLoadingTasks(false);
    }
  }, []);

  const fetchSuggestions = async (progressData: StudentProgress) => {
    try {
      const roadmapProgress = JSON.parse(localStorage.getItem(ROADMAP_STORAGE_KEY) || "{}");
      const lang = localStorage.getItem("mdcat-chat-language") || "en";
      const profile = localStorage.getItem(USER_PROFILE_KEY);
      const userProfileData = profile ? JSON.parse(profile) : null;
      
      const res = await fetch("/api/suggest-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          progress: progressData, 
          roadmapProgress, 
          language: lang,
          weakSubjects: userProfileData?.weakSubjects || [],
          level: userProfileData?.level || "intermediate"
        }),
      });
      const data = await res.json();
      setAiTasks(data.tasks || []);
    } catch {
      setAiTasks([]);
    } finally {
      setLoadingTasks(false);
    }
  };

  const accuracy = progress ? getAccuracy() : 0;
  const recentResults = progress ? getRecentResults(5) : [];

  const daysUntilExam = (() => {
    if (!userProfile?.examDate) return null;
    const examDate = new Date(userProfile.examDate);
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  })();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {userProfile?.name ? `Welcome back, ${userProfile.name}!` : 'Dashboard'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {daysUntilExam !== null 
            ? `${daysUntilExam} days until your MDCAT exam. Keep pushing!`
            : "Here's your MDCAT preparation overview."
          }
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {daysUntilExam !== null && (
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white">
            <Calendar className="h-5 w-5 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{daysUntilExam}</p>
            <p className="text-sm opacity-80">Days Until Exam</p>
          </div>
        )}
        
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

      {/* Weekly Summary Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-500" />
          This Week&apos;s Progress
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {weeklyStats.questionsAttempted}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Questions This Week</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {weeklyStats.accuracy}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Accuracy</p>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {progress?.wrongAnswers.length || 0}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Wrong Answers to Review</p>
          </div>
          <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {progress?.studyStreak || 0}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Day Streak</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* AI Suggestions */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-emerald-500" />
            AI-Powered Daily Tasks
          </h2>
          {loadingTasks ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin h-6 w-6 border-2 border-emerald-500 border-t-transparent rounded-full" />
              <span className="ml-3 text-sm text-gray-500">Generating personalized tasks...</span>
            </div>
          ) : aiTasks.length > 0 ? (
            <div className="space-y-3">
              {aiTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/30 transition-colors">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs font-bold text-emerald-600">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{task.task}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{task.subject}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{task.estimatedMinutes} min</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${priorityColors[task.priority] || ""}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Start practicing to get personalized AI recommendations!</p>
              </div>
            </div>
          )}
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
