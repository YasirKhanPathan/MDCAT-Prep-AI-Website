import { Question } from "@/components/MCQCard";
import { biologyHardQuestions } from "./biology";
import { chemistryHardQuestions } from "./chemistry";
import { physicsHardQuestions } from "./physics";
import { englishHardQuestions } from "./english";
import { logicalReasoningHardQuestions } from "./logical-reasoning";

export const mcqBanks: Record<string, Question[]> = {
  biology: biologyHardQuestions,
  chemistry: chemistryHardQuestions,
  physics: physicsHardQuestions,
  english: englishHardQuestions,
  "logical-reasoning": logicalReasoningHardQuestions,
};

export function getQuestionsBySubject(subject: string): Question[] {
  return mcqBanks[subject] || [];
}

export function getQuestionsBySubjectAndTopic(subject: string, topics: string[]): Question[] {
  const bank = mcqBanks[subject] || [];
  if (topics.length === 0) return bank;
  // For now return all questions for the subject since we don't have topic tags
  return bank;
}

export const totalQuestions = Object.values(mcqBanks).reduce((sum, q) => sum + q.length, 0);
