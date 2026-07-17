"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Brain, ChevronRight, ChevronLeft, CheckCircle, Target, BookOpen, Clock } from "lucide-react";
import { subjects } from "@/data/subjects";

const ONBOARD_KEY = "mdcat-onboarded";

type Step = 0 | 1 | 2 | 3;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [level, setLevel] = useState<string>("intermediate");
  const [weakSubjects, setWeakSubjects] = useState<string[]>([]);
  const [examDate, setExamDate] = useState("");
  const [dailyHours, setDailyHours] = useState<number>(4);

  useEffect(() => {
    if (localStorage.getItem(ONBOARD_KEY)) {
      router.replace("/dashboard");
    }
  }, [router]);

  const toggleSubject = (id: string) => {
    setWeakSubjects((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const handleFinish = () => {
    localStorage.setItem(ONBOARD_KEY, "true");
    localStorage.setItem("mdcat-user-profile", JSON.stringify({ name, level, weakSubjects, examDate, dailyHours }));
    router.push("/dashboard");
  };

  const canNext = () => {
    if (step === 0) return name.trim().length > 0;
    return true;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-950">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Brain className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
          <h1 className="text-2xl font-bold">Welcome to MedPrep AI</h1>
          <p className="text-gray-500 text-sm mt-1">Let&apos;s personalize your MDCAT preparation</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {[0, 1, 2, 3].map((s) => (
            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-emerald-500" : "bg-gray-200 dark:bg-gray-800"}`} />
          ))}
        </div>

        {/* Steps */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          {/* Step 0: Name */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">What&apos;s your name?</h2>
              <p className="text-sm text-gray-500 mb-6">We&apos;ll use this to personalize your experience</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                autoFocus
              />
            </div>
          )}

          {/* Step 1: Level */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">What&apos;s your current level?</h2>
              <p className="text-sm text-gray-500 mb-6">This helps the AI tutor adjust explanations</p>
              <div className="space-y-3">
                {[
                  { id: "beginner", label: "Beginner", desc: "Just starting MDCAT prep", icon: "🌱" },
                  { id: "intermediate", label: "Intermediate", desc: "Know the basics, need practice", icon: "📚" },
                  { id: "advanced", label: "Advanced", desc: "Strong foundation, need exam strategy", icon: "🎯" },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLevel(l.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                      level === l.id ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl">{l.icon}</span>
                    <div>
                      <p className="font-medium">{l.label}</p>
                      <p className="text-sm text-gray-500">{l.desc}</p>
                    </div>
                    {level === l.id && <CheckCircle className="h-5 w-5 text-emerald-500 ml-auto" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Weak Subjects */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Which subjects are you weakest in?</h2>
              <p className="text-sm text-gray-500 mb-6">Select all that apply (we&apos;ll focus on these)</p>
              <div className="space-y-3">
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => toggleSubject(s.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                      weakSubjects.includes(s.id) ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl">{s.id === "biology" ? "🧬" : s.id === "chemistry" ? "⚗️" : s.id === "physics" ? "⚡" : s.id === "english" ? "📝" : "🧠"}</span>
                    <div className="flex-1">
                      <p className="font-medium">{s.name}</p>
                      <p className="text-sm text-gray-500">{s.description}</p>
                    </div>
                    {weakSubjects.includes(s.id) && <CheckCircle className="h-5 w-5 text-emerald-500" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Schedule */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Set your study schedule</h2>
              <p className="text-sm text-gray-500 mb-6">Help us create your personalized roadmap</p>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">When is your MDCAT exam?</label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Daily study hours: {dailyHours}h</label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1h</span><span>6h</span><span>12h</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-sm">
                <p className="font-medium text-emerald-700 dark:text-emerald-300">You&apos;re all set, {name}!</p>
                <p className="text-emerald-600 dark:text-emerald-400 mt-1">
                  {weakSubjects.length > 0
                    ? `We'll focus on ${weakSubjects.map((s) => subjects.find((sub) => sub.id === s)?.name).join(", ")}`
                    : "Great! You're well-rounded."}
                  {" "}at {dailyHours}h/day.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={() => setStep((prev) => (prev - 1) as Step)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700">
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
            ) : <div />}
            {step < 3 ? (
              <button
                onClick={() => setStep((prev) => (prev + 1) as Step)}
                disabled={!canNext()}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
              >
                Get Started <CheckCircle className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
