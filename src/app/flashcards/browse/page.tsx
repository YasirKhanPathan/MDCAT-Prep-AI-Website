"use client";

import { useState, useEffect } from "react";
import { getDeck } from "@/lib/flashcards";
import type { FlashcardDeck, Flashcard } from "@/data/flashcards";
import { subjects } from "@/data/subjects";
import { ArrowLeft, Search, Filter } from "lucide-react";
import Link from "next/link";

const subjectColors: Record<string, string> = {
  biology: "#10b981", chemistry: "#3b82f6", physics: "#f59e0b", english: "#8b5cf6", "logical-reasoning": "#ef4444",
};

const boxColors: Record<number, string> = { 1: "text-red-500", 2: "text-orange-500", 3: "text-amber-500", 4: "text-blue-500", 5: "text-emerald-500" };

export default function FlashcardBrowsePage() {
  const [deck, setDeck] = useState<FlashcardDeck | null>(null);
  const [filterSubject, setFilterSubject] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setDeck(getDeck());
  }, []);

  if (!deck) return <div className="p-6 max-w-5xl mx-auto"><div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" /></div>;

  const filtered = deck.cards.filter((card) => {
    if (filterSubject !== "all" && card.subjectId !== filterSubject) return false;
    if (searchQuery && !card.front.toLowerCase().includes(searchQuery.toLowerCase()) && !card.back.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link href="/flashcards" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Flashcards
      </Link>

      <h1 className="text-2xl font-bold mb-6">Browse All Cards ({filtered.length})</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm outline-none w-48"
          />
        </div>
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-sm"
        >
          <option value="all">All Subjects</option>
          {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((card) => {
          const progress = deck.progress[card.id];
          const box = progress?.boxLevel ?? 1;
          return (
            <div key={card.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: subjectColors[card.subjectId] || "#6b7280" }}>
                  {subjects.find((s) => s.id === card.subjectId)?.name}
                </span>
                <span className={`text-xs font-bold ${boxColors[box]}`}>Box {box}</span>
              </div>
              <p className="font-medium mb-2">{card.front}</p>
              <p className="text-sm text-gray-500">{card.back}</p>
              {progress && (
                <div className="flex gap-4 mt-2 text-xs text-gray-400">
                  <span>Reviewed {progress.reviewCount}x</span>
                  <span>{progress.correctCount}/{progress.reviewCount} correct</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
