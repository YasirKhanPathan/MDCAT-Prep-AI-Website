"use client";

import { useState } from "react";
import Link from "next/link";
import { subjects, getSubjectById } from "@/data/subjects";
import {
  Target,
  ChevronRight,
  Clock,
  Zap,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import MCQCard, { Question } from "@/components/MCQCard";
import { recordQuizResult } from "@/lib/progress";

type Phase = "setup" | "generating" | "quiz" | "results";

export default function PracticePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("medium");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [showExplanations, setShowExplanations] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const subject = getSubjectById(selectedSubject);
  const topic = subject?.topics.find((t) => t.id === selectedTopic);

  const handleGenerate = async () => {
    if (!selectedSubject || !selectedTopic) return;
    setPhase("generating");

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: subject?.name,
          topic: topic?.name,
          subtopic: selectedSubtopic || topic?.name,
          count: questionCount,
          difficulty,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate questions");
      const data = await res.json();
      setQuestions(data.questions);
      setAnswers(Array.from({ length: data.questions.length }));
      setShowExplanations(new Array(data.questions.length).fill(false));
      setPhase("quiz");
    } catch {
      alert("Failed to generate questions. Make sure your Gemini API key is set.");
      setPhase("setup");
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

  const handleFinish = () => {
    const correctCount = questions.filter(
      (q, i) => answers[i] === q.correctIndex
    ).length;

    recordQuizResult({
      subject: selectedSubject,
      topic: selectedTopic,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      difficulty,
      timeSpent: 0,
    });

    setPhase("results");
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setPhase("setup");
    setSelectedSubject("");
    setSelectedTopic("");
    setSelectedSubtopic("");
    setQuestions([]);
    setAnswers([]);
    setShowExplanations([]);
    setCurrentQuestion(0);
  };

  const correctCount = questions.filter(
    (q, i) => answers[i] === q.correctIndex
  ).length;
  const answeredCount = answers.filter((a) => a !== undefined).length;

  if (phase === "results") {
    const percentage = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <BarChart3 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {subject?.name} — {topic?.name}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
              <p className="text-3xl font-bold text-emerald-500">{percentage}%</p>
              <p className="text-sm text-gray-500">Accuracy</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <p className="text-3xl font-bold text-blue-500">{correctCount}</p>
              <p className="text-sm text-gray-500">Correct</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-3xl font-bold">{questions.length}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-emerald-500 transition-colors"
            >
              New Quiz
            </button>
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
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>
              {answeredCount} answered · {correctCount} correct
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Current question */}
        <MCQCard
          question={questions[currentQuestion]}
          index={currentQuestion}
          showResult={showExplanations[currentQuestion] || false}
          onAnswer={(i) => handleAnswer(currentQuestion, i)}
          selectedAnswer={answers[currentQuestion]}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Exit Quiz
          </button>
          <div className="flex gap-3">
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={answeredCount < questions.length}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin h-12 w-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Generating Questions...</h2>
        <p className="text-gray-500">
          Creating {questionCount} {difficulty} questions for {topic?.name}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Practice MCQs</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate AI-powered practice questions for any MDCAT topic
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        {/* Subject Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Select Subject</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {subjects.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSubject(s.id);
                  setSelectedTopic("");
                  setSelectedSubtopic("");
                }}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  selectedSubject === s.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-2xl mb-2 block">
                  {s.id === "biology" && "🧬"}
                  {s.id === "chemistry" && "⚗️"}
                  {s.id === "physics" && "⚡"}
                  {s.id === "english" && "📝"}
                  {s.id === "logical-reasoning" && "🧠"}
                </span>
                <span className="text-sm font-medium">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Topic Selection */}
        {subject && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Select Topic</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subject.topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTopic(t.id);
                    setSelectedSubtopic("");
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTopic === t.id
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className="text-xs text-gray-500 block">
                    {t.subtopics.length} subtopics
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Subtopic Selection */}
        {topic && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">
              Select Subtopic (optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedSubtopic("")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedSubtopic === ""
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-sm font-medium">All subtopics</span>
              </button>
              {topic.subtopics.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedSubtopic(st)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSubtopic === st
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium">{st}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Difficulty & Count */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-3">Difficulty</label>
            <div className="flex gap-2">
              {["easy", "medium", "hard"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    difficulty === d
                      ? d === "easy"
                        ? "bg-green-500 text-white"
                        : d === "medium"
                        ? "bg-amber-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-3">Questions</label>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map((c) => (
                <button
                  key={c}
                  onClick={() => setQuestionCount(c)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    questionCount === c
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!selectedSubject || !selectedTopic}
          className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <Target className="h-5 w-5" />
          Generate Practice Questions
        </button>
      </div>
    </div>
  );
}
