import Link from "next/link";
import {
  Brain,
  MessageCircle,
  Target,
  BookOpen,
  BarChart3,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI Chat Tutor",
    description:
      "Ask any MDCAT question and get instant, detailed explanations from our AI tutor trained on the PMC syllabus.",
    href: "/chat",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Target,
    title: "Practice MCQs",
    description:
      "Generate unlimited practice questions for any topic. Choose difficulty level and track your accuracy.",
    href: "/practice",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: BookOpen,
    title: "All 5 Subjects",
    description:
      "Complete coverage of Biology, Chemistry, Physics, English, and Logical Reasoning for MDCAT.",
    href: "/subjects",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Monitor your preparation with detailed analytics, weak areas identification, and study streak tracking.",
    href: "/progress",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
];

const stats = [
  { icon: Zap, value: "500+", label: "Practice Questions" },
  { icon: Shield, value: "5", label: "Subjects Covered" },
  { icon: Clock, value: "24/7", label: "AI Tutor Available" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-950 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              AI-Powered MDCAT Preparation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Smart{" "}
              <span className="gradient-text">MDCAT Study Companion</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Prepare smarter for MDCAT with our AI tutor that explains concepts,
              generates practice questions, and tracks your progress across all
              5 subjects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-colors pulse-glow"
              >
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-emerald-500 font-semibold text-lg transition-colors"
              >
                Practice MCQs
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center justify-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                    <Icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Ace MDCAT
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform covers all aspects of MDCAT preparation,
              from concept learning to practice and progress tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl ${feature.bg} mb-4`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-950 dark:to-emerald-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your MDCAT Journey?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of Pakistani students preparing smarter with AI.
            Start with our AI tutor or jump straight into practice questions.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with AI Tutor
          </Link>
        </div>
      </section>
    </div>
  );
}
