"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { getPastPaperById } from "@/data/past-papers";
import { recordQuizResult, recordWrongAnswer } from "@/lib/progress";
import MCQCard from "@/components/MCQCard";
import { Clock, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";

type Phase = "intro" | "exam" | "results";

export default function PastPaperDetailPage() {
  const params = useParams();
  const router = useRouter();
  const paperId = params.paperId as string;
  const paper = getPastPaperById(paperId);

  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTimeUp = useCallback(() => {
    if (phase === "exam") handleSubmit();
  }, [phase]);

  useEffect(() => {
    if (phase !== "exam" || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current!); handleTimeUp(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, timeLeft, handleTimeUp]);

  if (!paper || !paper.questions) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Paper Not Found</h1>
        <button onClick={() => router.push("/past-papers")} className="text-emerald-500 hover:underline">Back to Past Papers</button>
      </div>
    );
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    const durationSeconds = parseInt(paper.duration) * 60;
    setAnswers(Array.from({ length: paper.questions!.length }));
    setTimeLeft(durationSeconds);
    setPhase("exam");
  };

  const handleAnswer = (qi: number, si: number) => {
    const next = [...answers];
    next[qi] = si;
    setAnswers(next);

    const q = paper.questions![qi];
    if (si !== q.correctIndex) {
      recordWrongAnswer({
        subject: paper.province.toLowerCase(),
        topic: `${paper.title}`,
        question: q.question,
        options: q.options,
        selectedAnswer: si,
        correctAnswer: q.correctIndex,
        explanation: q.explanation,
      });
    }
  };

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const correctCount = paper.questions!.filter((q, i) => answers[i] === q.correctIndex).length;

    recordQuizResult({
      subject: paper.province.toLowerCase(),
      topic: paper.title,
      totalQuestions: paper.questions!.length,
      correctAnswers: correctCount,
      difficulty: "hard",
      timeSpent: parseInt(paper.duration) * 60 - timeLeft,
    });

    setPhase("results");
  };

  const answeredCount = answers.filter((a) => a !== undefined).length;

  if (phase === "results") {
    const correctCount = paper.questions!.filter((q, i) => answers[i] === q.correctIndex).length;
    const pct = Math.round((correctCount / paper.questions!.length) * 100);

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Paper Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{paper.title}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
              <p className="text-3xl font-bold text-emerald-500">{pct}%</p>
              <p className="text-sm text-gray-500">Accuracy</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <p className="text-3xl font-bold text-blue-500">{correctCount}</p>
              <p className="text-sm text-gray-500">Correct</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-3xl font-bold">{paper.questions!.length}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={() => router.push("/past-papers")} className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-emerald-500 transition-colors">Back</button>
            <button onClick={() => { setPhase("intro"); setAnswers([]); setCurrentQ(0); }} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">Retake</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "exam") {
    return (
      <div className="min-h-screen">
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{paper.title}</span>
              <span className="text-sm text-gray-500">Q {currentQ + 1}/{paper.questions!.length}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{answeredCount} answered</span>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-lg font-mono text-sm font-bold ${timeLeft < 120 ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse" : "bg-gray-100 dark:bg-gray-800"}`}>
                <Clock className="h-4 w-4" /> {formatTime(timeLeft)}
              </div>
              <button onClick={handleSubmit} className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium">Submit</button>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${((currentQ + 1) / paper.questions!.length) * 100}%` }} />
          </div>
          <MCQCard
            question={paper.questions![currentQ]}
            index={currentQ}
            showResult={answers[currentQ] !== undefined}
            onAnswer={(i) => handleAnswer(currentQ, i)}
            selectedAnswer={answers[currentQ]}
          />
          <div className="flex justify-between mt-6">
            <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button onClick={() => setCurrentQ(Math.min(paper.questions!.length - 1, currentQ + 1))} disabled={currentQ === paper.questions!.length - 1} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={() => router.push("/past-papers")} className="text-sm text-gray-500 hover:text-emerald-500 mb-6">← Back to Past Papers</button>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-2xl font-bold mb-2">{paper.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{paper.description}</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl font-bold">{paper.totalMCQs}</p>
            <p className="text-xs text-gray-500">MCQs</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl font-bold">{paper.duration}</p>
            <p className="text-xs text-gray-500">Time</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl font-bold">{paper.province}</p>
            <p className="text-xs text-gray-500">Province</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-700 dark:text-amber-300">Exam Mode</p>
              <p className="text-amber-600 dark:text-amber-400">Timer starts immediately. Navigate freely. Submit when done.</p>
            </div>
          </div>
        </div>
        <button onClick={handleStart} className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-colors">
          Start Solving
        </button>
      </div>
    </div>
  );
}
