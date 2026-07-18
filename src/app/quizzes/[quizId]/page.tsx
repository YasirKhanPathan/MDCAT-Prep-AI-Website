"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { getQuizById } from "@/data/quizzes";
import { ArrowLeft, Clock, Target, CheckCircle2, Trophy } from "lucide-react";
import MCQCard, { Question } from "@/components/MCQCard";
import { recordQuizResult } from "@/lib/progress";

type Phase = "intro" | "generating" | "quiz" | "results";

export default function QuizDetailPage() {
  const params = useParams();
  const quizId = params.quizId as string;
  const quiz = getQuizById(quizId);

  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [showExplanations, setShowExplanations] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number; percentage: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFinish = useCallback(() => {
    if (!quiz) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const correctCount = questions.filter(
      (q, i) => answers[i] === q.correctIndex
    ).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    recordQuizResult({
      subject: quiz.subject,
      topic: quiz.topics[0],
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      difficulty: quiz.difficulty,
      timeSpent: quiz.timeLimit * 60 - timeLeft,
    });

    setQuizResult({ correct: correctCount, total: questions.length, percentage });
    setPhase("results");
  }, [questions, answers, quiz, timeLeft]);

  useEffect(() => {
    if (phase !== "quiz" || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, timeLeft]);

  useEffect(() => {
    if (phase === "quiz" && timeLeft === 0 && questions.length > 0) {
      handleFinish();
    }
  }, [phase, timeLeft, questions.length, handleFinish]);

  if (!quiz) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Quiz Not Found</h1>
        <Link href="/quizzes" className="text-emerald-500 hover:underline">
          Back to Quizzes
        </Link>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleStart = async () => {
    setPhase("generating");
    setError(null);

    try {
      if (quiz.staticQuestions && quiz.staticQuestions.length > 0) {
        const shuffled = [...quiz.staticQuestions].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
        setAnswers(Array.from({ length: shuffled.length }));
        setShowExplanations(new Array(shuffled.length).fill(false));
        setTimeLeft(quiz.timeLimit * 60);
        setPhase("quiz");
        return;
      }

      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: quiz.subject,
          topic: quiz.topics.join(", "),
          subtopic: quiz.topics[0],
          count: quiz.questionCount,
          difficulty: quiz.difficulty === "mixed" ? "medium" : quiz.difficulty,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setQuestions(data.questions);
      setAnswers(Array.from({ length: data.questions.length }));
      setShowExplanations(new Array(data.questions.length).fill(false));
      setTimeLeft(quiz.timeLimit * 60);
      setPhase("quiz");
    } catch {
      setError("Failed to generate questions. Please try again.");
      setPhase("intro");
    }
  };

  const handleAnswer = (questionIndex: number, selectedIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedIndex;
    setAnswers(newAnswers);

    const newShowExplanations = [...showExplanations];
    newShowExplanations[questionIndex] = true;
    setShowExplanations(newShowExplanations);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const answeredCount = answers.filter((a) => a !== undefined).length;

  if (phase === "results" && quizResult) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <Trophy className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{quiz.title}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
              <p className="text-3xl font-bold text-emerald-500">{quizResult.percentage}%</p>
              <p className="text-sm text-gray-500">Accuracy</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <p className="text-3xl font-bold text-blue-500">{quizResult.correct}</p>
              <p className="text-sm text-gray-500">Correct</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-3xl font-bold">{quizResult.total}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/quizzes"
              className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-emerald-500 transition-colors"
            >
              Back to Quizzes
            </Link>
            <Link
              href="/progress"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              View Progress
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">
                Q {currentQuestion + 1}/{questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {answeredCount} answered
              </span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-lg font-mono text-sm font-bold ${
              timeLeft < 300 ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : "bg-gray-100 dark:bg-gray-800"
            }`}>
              <Clock className="h-4 w-4" />
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <MCQCard
          question={questions[currentQuestion]}
          index={currentQuestion}
          showResult={showExplanations[currentQuestion] || false}
          onAnswer={(i) => handleAnswer(currentQuestion, i)}
          selectedAnswer={answers[currentQuestion]}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPhase("intro")}
            className="px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700"
          >
            Exit Quiz
          </button>
          <div className="flex gap-3">
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={answeredCount < questions.length}
                className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Finish Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "generating") {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center py-20">
        <div className="animate-spin h-12 w-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">
          {quiz.staticQuestions && quiz.staticQuestions.length > 0 ? "Loading Questions..." : "Generating Questions..."}
        </h2>
        <p className="text-gray-500">
          {quiz.staticQuestions && quiz.staticQuestions.length > 0
            ? `Preparing ${quiz.staticQuestions.length} pre-authored questions`
            : `Creating ${quiz.questionCount} ${quiz.difficulty} questions`
          }
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link
        href="/quizzes"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Quizzes
      </Link>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{quiz.description}</p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
            {error}
          </div>
        )}

        {quiz.staticQuestions && quiz.staticQuestions.length > 0 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-6">
            <CheckCircle2 className="h-3 w-3" />
            Pre-authored MCQs — Exam-ready difficulty
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <Target className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
            <p className="font-bold">{quiz.questionCount}</p>
            <p className="text-xs text-gray-500">Questions</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
            <p className="font-bold">{quiz.timeLimit} min</p>
            <p className="text-xs text-gray-500">Time Limit</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <CheckCircle2 className="h-5 w-5 text-amber-500 mx-auto mb-1" />
            <p className="font-bold capitalize">{quiz.difficulty}</p>
            <p className="text-xs text-gray-500">Difficulty</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Topics Covered</h3>
          <div className="flex flex-wrap gap-2">
            {quiz.topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-colors"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
