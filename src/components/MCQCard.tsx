"use client";

import { CheckCircle, XCircle } from "lucide-react";

export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface MCQCardProps {
  question: Question;
  index: number;
  showResult: boolean;
  onAnswer: (selectedIndex: number) => void;
  selectedAnswer?: number;
}

export default function MCQCard({
  question,
  index,
  showResult,
  onAnswer,
  selectedAnswer,
}: MCQCardProps) {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm font-bold">
          {index + 1}
        </span>
        <p className="text-base font-medium leading-relaxed">{question.question}</p>
      </div>

      <div className="space-y-2 ml-11" role="radiogroup" aria-label={`Question ${index + 1} options`}>
        {question.options.map((option, i) => {
          let optionClass =
            "border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500";

          if (showResult && selectedAnswer !== undefined) {
            if (i === question.correctIndex) {
              optionClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30";
            } else if (i === selectedAnswer && i !== question.correctIndex) {
              optionClass = "border-red-500 bg-red-50 dark:bg-red-950/30";
            } else {
              optionClass = "border-gray-200 dark:border-gray-700 opacity-50";
            }
          }

          const isSelected = selectedAnswer === i;
          const isCorrect = i === question.correctIndex;
          const isWrong = showResult && isSelected && !isCorrect;

          let ariaLabel = `Option ${letters[i]}: ${option}`;
          if (showResult) {
            if (isCorrect) ariaLabel += " (Correct answer)";
            if (isWrong) ariaLabel += " (Your answer - incorrect)";
            if (isSelected && isCorrect) ariaLabel += " (Your answer - correct)";
          }

          return (
            <button
              key={i}
              onClick={() => !showResult && onAnswer(i)}
              disabled={showResult}
              role="radio"
              aria-checked={isSelected}
              aria-label={ariaLabel}
              className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${optionClass}`}
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                {letters[i]}
              </span>
              <span className="text-sm">{option}</span>
              {showResult && isCorrect && (
                <CheckCircle className="ml-auto h-5 w-5 text-emerald-500" aria-hidden="true" />
              )}
              {isWrong && (
                <XCircle className="ml-auto h-5 w-5 text-red-500" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-4 ml-11 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 animate-fade-in-up">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
            Explanation
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
