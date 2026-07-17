"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getDeck, getDueCards, reviewCard, saveDeck } from "@/lib/flashcards";
import type { FlashcardDeck, Flashcard } from "@/data/flashcards";
import { CheckCircle, XCircle, ArrowLeft, RotateCcw } from "lucide-react";

export default function FlashcardStudyPage() {
  const router = useRouter();
  const [deck, setDeck] = useState<FlashcardDeck | null>(null);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    const d = getDeck();
    const due = getDueCards(d);
    setDeck(d);
    setDueCards(due);
    if (due.length === 0) setSessionComplete(true);
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (!deck || currentIndex >= dueCards.length) return;
    const card = dueCards[currentIndex];
    const updated = reviewCard(deck, card.id, isCorrect);
    saveDeck(updated);
    setDeck(updated);

    setSessionStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    setIsFlipped(false);
    if (currentIndex + 1 >= dueCards.length) {
      setSessionComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [deck, currentIndex, dueCards]);

  if (!deck) return <div className="p-6 max-w-3xl mx-auto"><div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" /></div>;

  if (sessionComplete) {
    const pct = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <RotateCcw className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {dueCards.length === 0 ? "No cards due for review right now." : "Great work on your flashcard session!"}
          </p>
          {sessionStats.total > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                <p className="text-3xl font-bold text-emerald-500">{pct}%</p>
                <p className="text-sm text-gray-500">Accuracy</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
                <p className="text-3xl font-bold text-blue-500">{sessionStats.correct}</p>
                <p className="text-sm text-gray-500">Correct</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                <p className="text-3xl font-bold">{sessionStats.total}</p>
                <p className="text-sm text-gray-500">Reviewed</p>
              </div>
            </div>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={() => router.push("/flashcards")} className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-emerald-500 transition-colors">
              Back to Flashcards
            </button>
            <button onClick={() => router.push("/dashboard")} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const card = dueCards[currentIndex];
  const progress = deck.progress[card.id];
  const boxLevel = progress?.boxLevel ?? 1;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push("/flashcards")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {dueCards.length} | Box {boxLevel}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-8">
        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${((currentIndex + 1) / dueCards.length) * 100}%` }} />
      </div>

      {/* Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 p-8 min-h-[300px] flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50 transition-all select-none mb-8"
      >
        <p className="text-xs text-gray-400 mb-4">{isFlipped ? "ANSWER" : "QUESTION"}</p>
        <p className="text-lg text-center leading-relaxed">
          {isFlipped ? card.back : card.front}
        </p>
        <p className="text-xs text-gray-400 mt-6">Click to {isFlipped ? "see question" : "reveal answer"}</p>
      </div>

      {/* Answer Buttons */}
      {isFlipped && (
        <div className="flex gap-4 animate-fade-in-up">
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
          >
            <XCircle className="h-5 w-5" />
            Forgot it
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
          >
            <CheckCircle className="h-5 w-5" />
            Knew it
          </button>
        </div>
      )}
    </div>
  );
}
