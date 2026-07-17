"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPastPaperById, type PastPaper, type PastPaperQuestion } from "@/data/pastPapers";
import { Clock, ArrowLeft, CheckCircle, XCircle, AlertCircle, Trophy, RotateCcw } from "lucide-react";

interface Answer {
  questionId: string;
  selectedOption: number | null;
}

interface QuizState {
  currentQuestion: number;
  answers: Answer[];
  timeRemaining: number;
  isSubmitted: boolean;
  startTime: number;
}

export default function PastPaperPage() {
  const params = useParams();
  const router = useRouter();
  const paperId = params.id as string;
  
  const [paper, setPaper] = useState<PastPaper | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    timeRemaining: 0,
    isSubmitted: false,
    startTime: 0
  });
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const foundPaper = getPastPaperById(paperId);
    if (foundPaper) {
      setPaper(foundPaper);
      setQuizState({
        currentQuestion: 0,
        answers: foundPaper.questions.map(q => ({
          questionId: q.id,
          selectedOption: null
        })),
        timeRemaining: foundPaper.timeLimit * 60,
        isSubmitted: false,
        startTime: Date.now()
      });
    }
  }, [paperId]);

  // Timer
  useEffect(() => {
    if (quizState.isSubmitted || quizState.timeRemaining <= 0 || !paper) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
          handleSubmit();
          return { ...prev, timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.isSubmitted, quizState.timeRemaining, paper]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (quizState.isSubmitted) return;

    setQuizState(prev => ({
      ...prev,
      answers: prev.answers.map((answer, idx) => 
        idx === questionIndex 
          ? { ...answer, selectedOption: optionIndex }
          : answer
      )
    }));
  };

  const handleNextQuestion = () => {
    if (!paper) return;
    setQuizState(prev => ({
      ...prev,
      currentQuestion: Math.min(prev.currentQuestion + 1, paper.questions.length - 1)
    }));
  };

  const handlePrevQuestion = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0)
    }));
  };

  const handleJumpToQuestion = (index: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestion: index
    }));
  };

  const handleSubmit = useCallback(() => {
    setQuizState(prev => ({ ...prev, isSubmitted: true }));
    setShowResults(true);
  }, []);

  const handleRetake = () => {
    if (!paper) return;
    setQuizState({
      currentQuestion: 0,
      answers: paper.questions.map(q => ({
        questionId: q.id,
        selectedOption: null
      })),
      timeRemaining: paper.timeLimit * 60,
      isSubmitted: false,
      startTime: Date.now()
    });
    setShowResults(false);
  };

  const calculateScore = () => {
    if (!paper) return { correct: 0, total: 0, percentage: 0 };
    
    let correct = 0;
    paper.questions.forEach((question, index) => {
      const answer = quizState.answers[index];
      if (answer.selectedOption === question.correctIndex) {
        correct++;
      }
    });
    
    return {
      correct,
      total: paper.questions.length,
      percentage: Math.round((correct / paper.questions.length) * 100)
    };
  };

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Paper Not Found</h2>
          <p className="text-gray-600 mb-4">The past paper you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/past-papers')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Past Papers
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const timeTaken = paper.timeLimit * 60 - quizState.timeRemaining;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Trophy className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Quiz Complete!</h1>
                <p className="text-gray-600 dark:text-gray-400">{paper.title}</p>
              </div>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{score.percentage}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{score.correct}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">{score.total - score.correct}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Incorrect</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{formatTime(timeTaken)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Time Taken</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </button>
              <button
                onClick={() => router.push('/past-papers')}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Past Papers
              </button>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Detailed Results</h2>
            <div className="space-y-6">
              {paper.questions.map((question, index) => {
                const answer = quizState.answers[index];
                const isCorrect = answer.selectedOption === question.correctIndex;
                
                return (
                  <div
                    key={question.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect 
                        ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                        : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-1 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <XCircle className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-2">
                          <span className="text-gray-500">Q{index + 1}.</span> {question.question}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className={`p-2 rounded ${answer.selectedOption === question.correctIndex ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700'}`}>
                            Your Answer: {question.options[answer.selectedOption ?? -1] ?? 'Not answered'}
                          </div>
                          {answer.selectedOption !== question.correctIndex && (
                            <div className="p-2 rounded bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200">
                              Correct Answer: {question.options[question.correctIndex]}
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = paper.questions[quizState.currentQuestion];
  const answeredCount = quizState.answers.filter(a => a.selectedOption !== null).length;
  const progressPercentage = (answeredCount / paper.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/past-papers')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="font-bold text-lg">{paper.title}</h1>
                <p className="text-sm text-gray-500">Question {quizState.currentQuestion + 1} of {paper.questions.length}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Progress */}
              <div className="hidden md:flex items-center gap-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500">{answeredCount}/{paper.questions.length}</span>
              </div>

              {/* Timer */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold ${
                quizState.timeRemaining <= 60 
                  ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' 
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                <Clock className="w-5 h-5" />
                {formatTime(quizState.timeRemaining)}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={answeredCount === 0}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              {/* Subject & Topic Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {currentQ.subject}
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  {currentQ.topic}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl font-medium mb-6">
                {quizState.currentQuestion + 1}. {currentQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, optionIndex) => {
                  const isSelected = quizState.answers[quizState.currentQuestion]?.selectedOption === optionIndex;
                  
                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(quizState.currentQuestion, optionIndex)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {isSelected && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={handlePrevQuestion}
                  disabled={quizState.currentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={quizState.currentQuestion === paper.questions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  Next
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sticky top-24">
              <h3 className="font-bold mb-4">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {paper.questions.map((_, index) => {
                  const isAnswered = quizState.answers[index]?.selectedOption !== null;
                  const isCurrent = index === quizState.currentQuestion;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleJumpToQuestion(index)}
                      className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                          : isAnswered
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded" />
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded" />
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded" />
                  <span>Unanswered ({paper.questions.length - answeredCount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
