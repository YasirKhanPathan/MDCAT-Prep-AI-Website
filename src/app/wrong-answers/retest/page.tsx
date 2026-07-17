"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getWrongAnswers, clearWrongAnswer, recordQuizResult, type WrongAnswer } from "@/lib/progress";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trash2, Filter } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subject: string;
  topic: string;
  originalAnswer: WrongAnswer;
}

export default function RetestPage() {
  const router = useRouter();
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [filteredAnswers, setFilteredAnswers] = useState<WrongAnswer[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "results">("setup");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    const answers = getWrongAnswers();
    setWrongAnswers(answers);
    setFilteredAnswers(answers);
  }, []);

  useEffect(() => {
    if (selectedSubject === "all") {
      setFilteredAnswers(wrongAnswers);
    } else {
      setFilteredAnswers(wrongAnswers.filter(wa => wa.subject === selectedSubject));
    }
  }, [selectedSubject, wrongAnswers]);

  const subjects = [...new Set(wrongAnswers.map(wa => wa.subject))];

  const startQuiz = () => {
    const shuffled = [...filteredAnswers].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    const quizQuestions: QuizQuestion[] = selected.map(wa => ({
      id: wa.id,
      question: wa.question,
      options: wa.options,
      correctIndex: wa.correctAnswer,
      explanation: wa.explanation,
      subject: wa.subject,
      topic: wa.topic,
      originalAnswer: wa,
    }));

    setQuestions(quizQuestions);
    setAnswers(new Array(quizQuestions.length).fill(-1));
    setCurrentQuestion(0);
    setPhase("quiz");
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctIndex) {
        correctCount++;
        // Remove from wrong answers if answered correctly
        clearWrongAnswer(q.id);
      }
    });

    setScore({ correct: correctCount, total: questions.length });
    
    recordQuizResult({
      subject: "Wrong Answers Review",
      topic: "Re-test",
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      difficulty: "mixed",
      timeSpent: 0,
    });

    setPhase("results");
  };

  if (wrongAnswers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Wrong Answers!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You haven't recorded any wrong answers yet. Start practicing to build your review list.
            </p>
            <button
              onClick={() => router.push('/practice')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "setup") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/wrong-answers')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Wrong Answers
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Re-Test Wrong Answers</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Practice the questions you got wrong before. Answer correctly to remove them from your review list.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Subject Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Filter by Subject</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                >
                  <option value="all">All Subjects ({wrongAnswers.length} questions)</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>
                      {subject} ({wrongAnswers.filter(wa => wa.subject === subject).length} questions)
                    </option>
                  ))}
                </select>
              </div>

              {/* Question Count */}
              <div>
                <label className="block text-sm font-medium mb-2">Number of Questions</label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={filteredAnswers.length}>All ({filteredAnswers.length})</option>
                </select>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Tip:</strong> When you answer a question correctly during re-test, it will be removed from your wrong answers list.
              </p>
            </div>

            <button
              onClick={startQuiz}
              disabled={filteredAnswers.length === 0}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              Start Re-Test ({Math.min(questionCount, filteredAnswers.length)} questions)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    const percentage = Math.round((score.correct / score.total) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
              percentage >= 70 ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
            }`}>
              {percentage >= 70 ? (
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <h2 className="text-3xl font-bold mb-2">Re-Test Complete!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {score.correct} out of {score.total} correct ({percentage}%)
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {score.correct} question(s) have been removed from your wrong answers list.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setPhase("setup");
                  setQuestions([]);
                  setAnswers([]);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Practice Again
              </button>
              <button
                onClick={() => router.push('/wrong-answers')}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Wrong Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz phase
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const isAnswered = selectedAnswer !== -1;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              {question.subject}
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
              {question.topic}
            </span>
          </div>

          <h2 className="text-xl font-medium mb-6">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctIndex;
              const showCorrect = isAnswered && isCorrect;
              const showWrong = isAnswered && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : showWrong
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                        : isSelected
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showCorrect
                        ? 'border-green-500 bg-green-500'
                        : showWrong
                          ? 'border-red-500 bg-red-500'
                          : isSelected
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {(showCorrect || showWrong || isSelected) && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-500 ml-auto" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={`mt-6 p-4 rounded-lg ${
              selectedAnswer === question.correctIndex
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <p className="font-medium mb-2">
                {selectedAnswer === question.correctIndex ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Re-Test'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}