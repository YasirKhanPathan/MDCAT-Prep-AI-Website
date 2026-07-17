"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getDeck, getMasteryStats, getDueCards } from "@/lib/flashcards";
import type { FlashcardDeck } from "@/data/flashcards";
import { Layers, PlayCircle, List, BarChart3, RotateCcw } from "lucide-react";

export default function FlashcardsPage() {
  const [deck, setDeck] = useState<FlashcardDeck | null>(null);

  useEffect(() => {
    setDeck(getDeck());
  }, []);

  if (!deck) return <div className="p-6 max-w-5xl mx-auto"><div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" /></div>;

  const stats = getMasteryStats(deck);
  const dueCards = getDueCards(deck);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Flashcards</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Master key concepts with spaced repetition — cards you know well appear less often
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <p className="text-2xl font-bold">{stats.total}</p>
          <p className="text-sm text-gray-500">Total Cards</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <p className="text-2xl font-bold text-emerald-500">{stats.dueToday}</p>
          <p className="text-sm text-gray-500">Due Today</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <p className="text-2xl font-bold text-blue-500">{stats.mastered}</p>
          <p className="text-sm text-gray-500">Mastered</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <p className="text-2xl font-bold text-amber-500">{stats.learning}</p>
          <p className="text-sm text-gray-500">Learning</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <p className="text-2xl font-bold text-purple-500">{stats.newCards}</p>
          <p className="text-sm text-gray-500">New</p>
        </div>
      </div>

      {/* Box Distribution */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-emerald-500" /> Leitner Box Distribution
        </h2>
        <div className="flex items-end gap-2 h-32">
          {([1, 2, 3, 4, 5] as const).map((box) => {
            const count = stats.boxes[box];
            const maxCount = Math.max(...Object.values(stats.boxes), 1);
            const height = (count / maxCount) * 100;
            return (
              <div key={box} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-bold">{count}</span>
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${Math.max(height, 4)}%`,
                    backgroundColor: box === 5 ? "#10b981" : box >= 3 ? "#f59e0b" : "#ef4444",
                  }}
                />
                <span className="text-xs text-gray-500">Box {box}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Box 1: Review daily | Box 2: Every 2 days | Box 3: Every 4 days | Box 4: Every 8 days | Box 5: Every 16 days (Mastered)
        </p>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/flashcards/study"
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl p-6 text-center transition-colors"
        >
          <PlayCircle className="h-10 w-10 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Study Now</h3>
          <p className="text-sm text-emerald-100">{dueCards.length} cards due</p>
        </Link>
        <Link
          href="/flashcards/browse"
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:border-emerald-500/50 transition-colors"
        >
          <List className="h-10 w-10 mx-auto mb-3 text-blue-500" />
          <h3 className="text-lg font-semibold mb-1">Browse All</h3>
          <p className="text-sm text-gray-500">{stats.total} cards</p>
        </Link>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center">
          <Layers className="h-10 w-10 mx-auto mb-3 text-purple-500" />
          <h3 className="text-lg font-semibold mb-1">Spaced Repetition</h3>
          <p className="text-sm text-gray-500">Cards auto-scheduled</p>
        </div>
      </div>
    </div>
  );
}
