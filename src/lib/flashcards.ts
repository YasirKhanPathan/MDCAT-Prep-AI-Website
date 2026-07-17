import { Flashcard, FlashcardDeck, FlashcardProgress, LeitnerBox, getAllPrebuiltCards } from "@/data/flashcards";

const STORAGE_KEY = "mdcat-flashcards";

const LEITNER_INTERVALS: Record<LeitnerBox, number> = {
  1: 1, 2: 2, 3: 4, 4: 8, 5: 16,
};

function createEmptyDeck(): FlashcardDeck {
  return { cards: [], progress: {}, totalReviews: 0 };
}

export function getDeck(): FlashcardDeck {
  if (typeof window === "undefined") return createEmptyDeck();
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const deck = JSON.parse(stored) as FlashcardDeck;
      if (deck.cards.length === 0) {
        deck.cards = getAllPrebuiltCards();
        saveDeck(deck);
      }
      return deck;
    } catch { return createEmptyDeck(); }
  }
  const deck = createEmptyDeck();
  deck.cards = getAllPrebuiltCards();
  saveDeck(deck);
  return deck;
}

export function saveDeck(deck: FlashcardDeck) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
}

export function calculateNextBox(currentBox: LeitnerBox, isCorrect: boolean): LeitnerBox {
  if (isCorrect) return Math.min(currentBox + 1, 5) as LeitnerBox;
  return 1;
}

export function calculateNextReviewDate(newBox: LeitnerBox): Date {
  const now = new Date();
  now.setDate(now.getDate() + LEITNER_INTERVALS[newBox]);
  return now;
}

export function getDueCards(deck: FlashcardDeck): Flashcard[] {
  const now = new Date();
  return deck.cards.filter((card) => {
    const progress = deck.progress[card.id];
    if (!progress) return true;
    return new Date(progress.nextReview) <= now;
  });
}

export function reviewCard(deck: FlashcardDeck, cardId: string, isCorrect: boolean): FlashcardDeck {
  const now = new Date().toISOString();
  const existing = deck.progress[cardId];
  const currentBox = existing?.boxLevel ?? 1;
  const newBox = calculateNextBox(currentBox, isCorrect);
  const nextReview = calculateNextReviewDate(newBox);

  const newProgress: FlashcardProgress = {
    cardId,
    boxLevel: newBox,
    lastReviewed: now,
    nextReview: nextReview.toISOString(),
    reviewCount: (existing?.reviewCount ?? 0) + 1,
    correctCount: (existing?.correctCount ?? 0) + (isCorrect ? 1 : 0),
  };

  return {
    ...deck,
    progress: { ...deck.progress, [cardId]: newProgress },
    totalReviews: deck.totalReviews + 1,
  };
}

export function getMasteryStats(deck: FlashcardDeck) {
  const dueCount = getDueCards(deck).length;
  const boxes = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const card of deck.cards) {
    const p = deck.progress[card.id];
    boxes[p?.boxLevel ?? 1]++;
  }
  return {
    total: deck.cards.length,
    dueToday: dueCount,
    mastered: boxes[5],
    learning: boxes[2] + boxes[3] + boxes[4],
    newCards: deck.cards.length - Object.keys(deck.progress).length,
    boxes,
  };
}

export function resetDeck() {
  saveDeck(createEmptyDeck());
}
