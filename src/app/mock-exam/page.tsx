"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Clock, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import MCQCard, { Question } from "@/components/MCQCard";
import { recordQuizResult } from "@/lib/progress";

type Phase = "setup" | "generating" | "exam" | "submitting" | "results";

const MDCAT_DISTRIBUTION = [
  { subject: "Biology", count: 81 },
  { subject: "Chemistry", count: 45 },
  { subject: "Physics", count: 36 },
  { subject: "English", count: 9 },
  { subject: "Logical Reasoning", count: 9 },
];

export default function MockExamPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("setup");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10800);
  const [showNav, setShowNav] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const correctCount = questions.filter((q, i) => answers[i] === q.correctIndex).length;
    const pct = Math.round((correctCount / questions.length) * 100);

    recordQuizResult({ subject: "mock-exam", topic: "MDCAT Full Length", totalQuestions: questions.length, correctAnswers: correctCount, difficulty: "hard", timeSpent: 10800 - timeLeft });

    setPhase("results");
  }, [questions, answers, timeLeft]);

  useEffect(() => {
    if (phase !== "exam" || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current!); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, timeLeft]);

  useEffect(() => {
    if (phase === "exam" && timeLeft === 0 && questions.length > 0) {
      handleSubmit();
    }
  }, [phase, timeLeft, questions.length, handleSubmit]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleStart = async () => {
    setPhase("generating");
    setError(null);
    try {
      const allQuestions: Question[] = [];
      const results = await Promise.all(
        MDCAT_DISTRIBUTION.map((dist) =>
          fetch("/api/generate-questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject: dist.subject, topic: dist.subject, subtopic: dist.subject, count: dist.count, difficulty: "mixed" }),
          }).then((res) => {
            if (!res.ok) throw new Error(`Failed for ${dist.subject}`);
            return res.json();
          })
        )
      );
      for (const data of results) {
        allQuestions.push(...data.questions);
      }
      setQuestions(allQuestions);
      setAnswers(Array.from({ length: allQuestions.length }));
      setPhase("exam");
    } catch {
      setError("Failed to generate exam. Please try again.");
      setPhase("setup");
    }
  };

  const handleAnswer = (qi: number, si: number) => {
    const next = [...answers];
    next[qi] = si;
    setAnswers(next);
  };

  const answeredCount = answers.filter((a) => a !== undefined).length;

  if (phase === "results") {
    const correctCount = questions.filter((q, i) => answers[i] === q.correctIndex).length;
    const pct = Math.round((correctCount / questions.length) * 100);
    const subjectScores = MDCAT_DISTRIBUTION.map((d) => {
      const startIdx = MDCAT_DISTRIBUTION.slice(0, MDCAT_DISTRIBUTION.indexOf(d)).reduce((a, x) => a + x.count, 0);
      const subAnswers = answers.slice(startIdx, startIdx + d.count);
      const subCorrect = questions.slice(startIdx, startIdx + d.count).filter((q, i) => subAnswers[i] === q.correctIndex).length;
      return { ...d, correct: subCorrect, pct: Math.round((subCorrect / d.count) * 100) };
    });

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Mock Exam Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">MDCAT Full Length Test — 180 MCQs</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
              <p className="text-4xl font-bold text-emerald-500">{pct}%</p>
              <p className="text-sm text-gray-500">Overall</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <p className="text-4xl font-bold text-blue-500">{correctCount}</p>
              <p className="text-sm text-gray-500">Correct</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-4xl font-bold">{questions.length}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Subject Breakdown</h3>
          <div className="space-y-3">
            {subjectScores.map((s) => (
              <div key={s.subject} className="flex items-center gap-4">
                <span className="w-32 text-sm font-medium">{s.subject}</span>
                <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
                <span className="w-16 text-right text-sm font-bold">{s.correct}/{s.count}</span>
                <span className="w-12 text-right text-sm text-gray-500">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={() => router.push("/dashboard")} className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-emerald-500 transition-colors">Dashboard</button>
          <button onClick={() => { setPhase("setup"); setQuestions([]); setAnswers([]); setCurrentQ(0); setTimeLeft(10800); }} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">Retake Exam</button>
        </div>
      </div>
    );
  }

  if (phase === "generating") {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center py-20">
        <div className="animate-spin h-12 w-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Generating 180 MCQs...</h2>
        <p className="text-gray-500">This may take 1-2 minutes. Please wait.</p>
      </div>
    );
  }

  if (phase === "exam") {
    return (
      <div className="min-h-screen">
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium hidden sm:inline">MDCAT Mock Exam</span>
              <span className="text-sm text-gray-500">Q {currentQ + 1}/{questions.length}</span>
              <span className="text-sm text-gray-500">{answeredCount} answered</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowNav(!showNav)} className="text-sm text-gray-500 hover:text-emerald-500" aria-label="Question Navigator">Nav</button>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-lg font-mono text-sm font-bold ${timeLeft < 600 ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse" : "bg-gray-100 dark:bg-gray-800"}`}>
                <Clock className="h-4 w-4" /> {formatTime(timeLeft)}
              </div>
              <button onClick={() => setConfirmSubmit(true)} className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium">Submit</button>
            </div>
          </div>
        </div>

        {confirmSubmit && (
          <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 max-w-sm w-full text-center">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Submit Exam?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                You have answered {answeredCount} out of {questions.length} questions. This action cannot be undone.
              </p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setConfirmSubmit(false)} className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium">Cancel</button>
                <button onClick={() => { setConfirmSubmit(false); handleSubmit(); }} className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium">Confirm Submit</button>
              </div>
            </div>
          </div>
        )}

        {showNav && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setShowNav(false)}>
            <div className="absolute right-4 top-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 w-80 max-h-[70vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-semibold mb-3">Question Navigator</h3>
              <div className="grid grid-cols-10 gap-1.5">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentQ(i); setShowNav(false); }}
                    aria-label={`Question ${i + 1}, ${answers[i] !== undefined ? "answered" : "not answered"}`}
                    className={`w-8 h-8 rounded text-xs font-medium ${
                      i === currentQ ? "bg-emerald-500 text-white" :
                      answers[i] !== undefined ? "bg-blue-500 text-white" :
                      "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >{i + 1}</button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
          </div>

          <MCQCard
            question={questions[currentQ]}
            index={currentQ}
            showResult={answers[currentQ] !== undefined}
            onAnswer={(i) => handleAnswer(currentQ, i)}
            selectedAnswer={answers[currentQ]}
          />

          <div className="flex justify-between mt-6">
            <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))} disabled={currentQ === questions.length - 1} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">MDCAT Mock Exam</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Simulate the real MDCAT experience</p>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-center">
            <p className="text-2xl font-bold">180</p>
            <p className="text-sm text-gray-500">MCQs</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-center">
            <p className="text-2xl font-bold">3:00:00</p>
            <p className="text-sm text-gray-500">Time Limit</p>
          </div>
        </div>

        <h3 className="font-semibold mb-3">Subject Distribution</h3>
        <div className="space-y-2 mb-6">
          {MDCAT_DISTRIBUTION.map((d) => (
            <div key={d.subject} className="flex justify-between text-sm">
              <span>{d.subject}</span>
              <span className="font-medium">{d.count} MCQs ({Math.round(d.count / 180 * 100)}%)</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-700 dark:text-amber-300">Important</p>
              <p className="text-amber-600 dark:text-amber-400">Timer starts immediately. You can navigate between questions. Answers are auto-saved. A confirmation dialog will appear before final submission.</p>
            </div>
          </div>
        </div>

        <button onClick={handleStart} className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-colors">
          Start Mock Exam
        </button>
      </div>
    </div>
  );
}
