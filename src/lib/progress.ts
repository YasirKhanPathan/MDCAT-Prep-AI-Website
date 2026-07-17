"use client";

export interface QuizResult {
  id: string;
  date: string;
  subject: string;
  topic: string;
  totalQuestions: number;
  correctAnswers: number;
  difficulty: string;
  timeSpent: number; // in seconds
}

export interface WrongAnswer {
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

export interface StudentProgress {
  quizResults: QuizResult[];
  wrongAnswers: WrongAnswer[];
  totalQuestionsAttempted: number;
  totalCorrectAnswers: number;
  subjectStats: Record<string, { attempted: number; correct: number }>;
  topicStats: Record<string, { attempted: number; correct: number }>;
  lastActivity: string | null;
  studyStreak: number;
}

function getProgress(): StudentProgress {
  if (typeof window === "undefined") {
    return createEmptyProgress();
  }
  const stored = localStorage.getItem("mdcat-progress");
  if (stored) {
    return JSON.parse(stored);
  }
  return createEmptyProgress();
}

function saveProgress(progress: StudentProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem("mdcat-progress", JSON.stringify(progress));
}

function createEmptyProgress(): StudentProgress {
  return {
    quizResults: [],
    wrongAnswers: [],
    totalQuestionsAttempted: 0,
    totalCorrectAnswers: 0,
    subjectStats: {},
    topicStats: {},
    lastActivity: null,
    studyStreak: 0,
  };
}

export function recordQuizResult(result: Omit<QuizResult, "id" | "date">) {
  const progress = getProgress();
  const newResult: QuizResult = {
    ...result,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };

  progress.quizResults.push(newResult);
  progress.totalQuestionsAttempted += result.totalQuestions;
  progress.totalCorrectAnswers += result.correctAnswers;

  if (!progress.subjectStats[result.subject]) {
    progress.subjectStats[result.subject] = { attempted: 0, correct: 0 };
  }
  progress.subjectStats[result.subject].attempted += result.totalQuestions;
  progress.subjectStats[result.subject].correct += result.correctAnswers;

  const topicKey = `${result.subject}/${result.topic}`;
  if (!progress.topicStats[topicKey]) {
    progress.topicStats[topicKey] = { attempted: 0, correct: 0 };
  }
  progress.topicStats[topicKey].attempted += result.totalQuestions;
  progress.topicStats[topicKey].correct += result.correctAnswers;

  const today = new Date().toDateString();
  const lastActivity = progress.lastActivity
    ? new Date(progress.lastActivity).toDateString()
    : null;

  if (lastActivity === today) {
    // Same day, keep streak
  } else if (lastActivity) {
    const lastDate = new Date(lastActivity);
    const diffDays = Math.floor(
      (new Date(today).getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 1) {
      progress.studyStreak += 1;
    } else if (diffDays > 1) {
      progress.studyStreak = 1;
    }
  } else {
    progress.studyStreak = 1;
  }

  progress.lastActivity = new Date().toISOString();
  saveProgress(progress);
  return newResult;
}

export function getProgressData(): StudentProgress {
  return getProgress();
}

export function getAccuracy(): number {
  const progress = getProgress();
  if (progress.totalQuestionsAttempted === 0) return 0;
  return Math.round(
    (progress.totalCorrectAnswers / progress.totalQuestionsAttempted) * 100
  );
}

export function getSubjectAccuracy(subjectId: string): number {
  const progress = getProgress();
  const stats = progress.subjectStats[subjectId];
  if (!stats || stats.attempted === 0) return 0;
  return Math.round((stats.correct / stats.attempted) * 100);
}

export function getWeakTopics(limit: number = 5): Array<{
  topic: string;
  accuracy: number;
  attempted: number;
}> {
  const progress = getProgress();
  return Object.entries(progress.topicStats)
    .filter(([, stats]) => stats.attempted >= 3)
    .map(([topic, stats]) => ({
      topic,
      accuracy: Math.round((stats.correct / stats.attempted) * 100),
      attempted: stats.attempted,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, limit);
}

export function getRecentResults(limit: number = 10): QuizResult[] {
  const progress = getProgress();
  return progress.quizResults
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function resetProgress() {
  saveProgress(createEmptyProgress());
}

export function recordWrongAnswer(answer: Omit<WrongAnswer, "id" | "date">) {
  const progress = getProgress();
  const newAnswer: WrongAnswer = {
    ...answer,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };
  progress.wrongAnswers.push(newAnswer);
  saveProgress(progress);
}

export function getWrongAnswers(): WrongAnswer[] {
  return getProgress().wrongAnswers;
}

export function getWrongAnswersBySubject(subjectId: string): WrongAnswer[] {
  return getProgress().wrongAnswers.filter((w) => w.subject === subjectId);
}

export function clearWrongAnswer(id: string) {
  const progress = getProgress();
  progress.wrongAnswers = progress.wrongAnswers.filter((w) => w.id !== id);
  saveProgress(progress);
}

export function clearAllWrongAnswers() {
  const progress = getProgress();
  progress.wrongAnswers = [];
  saveProgress(progress);
}
