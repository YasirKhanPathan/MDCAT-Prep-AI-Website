"use client";

import { useState, useEffect } from "react";
import { subjects } from "@/data/subjects";
import { AlertTriangle, CheckCircle, XCircle, Trash2, Filter } from "lucide-react";

interface WrongAnswer {
  id: string;
  date: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  selectedAnswer: number;
  correctAnswer: number;
  explanation: string;
}

const STORAGE_KEY = "mdcat-progress";

function getWrongAnswersFromStorage(): WrongAnswer[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const progress = JSON.parse(stored);
    return progress.wrongAnswers || [];
  } catch {
    return [];
  }
}

function removeWrongAnswer(id: string) {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const progress = JSON.parse(stored);
    progress.wrongAnswers = (progress.wrongAnswers || []).filter((w: WrongAnswer) => w.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

function clearAllWrongAnswersFromStorage() {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const progress = JSON.parse(stored);
    progress.wrongAnswers = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

const subjectColors: Record<string, string> = {
  biology: "#10b981", chemistry: "#3b82f6", physics: "#f59e0b", english: "#8b5cf6", "logical-reasoning": "#ef4444",
};

export default function WrongAnswersPage() {
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [filterSubject, setFilterSubject] = useState("all");
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWrongAnswers(getWrongAnswersFromStorage());
  }, []);

  const filtered = filterSubject === "all" ? wrongAnswers : wrongAnswers.filter((w) => w.subject === filterSubject);

  const handleRemove = (id: string) => {
    removeWrongAnswer(id);
    setWrongAnswers((prev) => prev.filter((w) => w.id !== id));
  };

  const handleClearAll = () => {
    clearAllWrongAnswersFromStorage();
    setWrongAnswers([]);
    setShowConfirmClear(false);
  };

  if (!mounted) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-96" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Wrong Answer Review</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Review all incorrectly answered questions — {wrongAnswers.length} total
          </p>
        </div>
        {wrongAnswers.length > 0 && (
          <button
            onClick={() => setShowConfirmClear(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>
        )}
      </div>

      {showConfirmClear && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 flex items-center justify-between">
          <p className="text-sm text-red-700 dark:text-red-300">Clear all wrong answers? This cannot be undone.</p>
          <div className="flex gap-2">
            <button onClick={() => setShowConfirmClear(false)} className="px-3 py-1 rounded-lg text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">Cancel</button>
            <button onClick={handleClearAll} className="px-3 py-1 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600">Clear</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-6">
        <Filter className="h-4 w-4 text-gray-500" />
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-sm"
        >
          <option value="all">All Subjects</option>
          {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <span className="text-sm text-gray-500">{filtered.length} wrong answers</span>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 text-emerald-500 opacity-50" />
          <p className="text-lg font-medium mb-2">No wrong answers!</p>
          <p className="text-sm">Complete some quizzes and your mistakes will appear here for review.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(
            filtered.reduce((acc, wa) => {
              if (!acc[wa.subject]) acc[wa.subject] = [];
              acc[wa.subject].push(wa);
              return acc;
            }, {} as Record<string, WrongAnswer[]>)
          ).map(([subject, answers]) => (
            <div key={subject}>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subjectColors[subject] || "#6b7280" }} />
                {subjects.find((s) => s.id === subject)?.name || subject} ({answers.length})
              </h2>
              <div className="space-y-3">
                {answers.map((wa) => (
                  <div key={wa.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <p className="font-medium flex-1 pr-4">{wa.question}</p>
                      <button onClick={() => handleRemove(wa.id)} className="text-gray-400 hover:text-red-500 transition-colors" title="Remove">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {wa.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-lg text-sm flex items-center gap-2 ${
                            i === wa.correctAnswer ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300" :
                            i === wa.selectedAnswer ? "bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300" :
                            "bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {i === wa.correctAnswer && <CheckCircle className="h-4 w-4 flex-shrink-0" />}
                          {i === wa.selectedAnswer && i !== wa.correctAnswer && <XCircle className="h-4 w-4 flex-shrink-0" />}
                          <span className="text-xs font-bold mr-1">{String.fromCharCode(65 + i)}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>
                    {wa.explanation && (
                      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 text-sm text-blue-700 dark:text-blue-300">
                        <strong>Explanation:</strong> {wa.explanation}
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(wa.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
