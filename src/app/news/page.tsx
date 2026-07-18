"use client";

import { Newspaper, ExternalLink, Bell, Calendar, BookOpen, AlertCircle, CheckCircle2, Info } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "announcement" | "update" | "tip" | "resource";
  content: string;
  source?: string;
  sourceUrl?: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "MDCAT 2026 Preparation Has Begun",
    date: "2025-01-15",
    category: "announcement",
    content: "PMC has announced the start of MDCAT 2026 preparation cycle. Students should begin their preparation early and follow the official syllabus. The exam is expected to be held in September-October 2026.",
    source: "Pakistan Medical Commission",
    sourceUrl: "https://www.pmc.gov.pk",
  },
  {
    id: "2",
    title: "Sindh MDCAT Registration Opens",
    date: "2024-12-01",
    category: "announcement",
    content: "LUMHS has opened registration for Sindh MDCAT 2025. Eligible students can apply through the official portal. Last date for submission is January 31, 2025.",
    source: "LUMHS",
    sourceUrl: "https://www.lumhs.edu.pk",
  },
  {
    id: "3",
    title: "Updated MDCAT Syllabus 2025",
    date: "2024-11-15",
    category: "update",
    content: "The MDCAT syllabus has been updated for 2025. Key changes include: Biology section now includes more molecular biology questions, Chemistry has expanded organic chemistry coverage, and Physics includes additional modern physics topics.",
    source: "PMC",
  },
  {
    id: "4",
    title: "Top 5 Study Tips for MDCAT Success",
    date: "2024-11-01",
    category: "tip",
    content: "1. Start with conceptual understanding, not memorization. 2. Practice MCQs daily (minimum 50 per day). 3. Take at least 5 full mock exams before the real test. 4. Review your wrong answers thoroughly. 5. Join a study group for motivation and doubt clearing.",
  },
  {
    id: "5",
    title: "NUMS MDCAT Merit List Released",
    date: "2024-10-20",
    category: "announcement",
    content: "NUMS has released the merit list for MDCAT 2024 admissions. Students can check their results on the NUMS portal. Congratulations to all selected candidates!",
    source: "NUMS",
    sourceUrl: "https://www.nums.edu.pk",
  },
  {
    id: "6",
    title: "Free MDCAT Practice Resources",
    date: "2024-10-10",
    category: "resource",
    content: "Medico Engineer has released free MDCAT practice resources including topic-wise MCQs, mock exams, and short notes. Over 25,000 students are currently using the platform for preparation.",
    source: "Medico Engineer",
    sourceUrl: "https://medicoengineer.com",
  },
  {
    id: "7",
    title: "Punjab MDCAT Exam Date Announced",
    date: "2024-09-15",
    category: "announcement",
    content: "UHS has announced that Punjab MDCAT 2024 will be held on September 22, 2024. Students should ensure their registration is complete and download their roll number slips from the UHS portal.",
    source: "UHS Lahore",
    sourceUrl: "https://www.uhs.edu.pk",
  },
  {
    id: "8",
    title: "Biology High-Yield Topics for MDCAT",
    date: "2024-09-01",
    category: "tip",
    content: "Focus on these high-yield Biology topics: Cell Biology (15% of paper), Genetics (12%), Human Physiology (20%), Molecular Biology (10%), and Ecology (8%). These 5 topics alone cover 65% of the Biology section.",
  },
  {
    id: "9",
    title: "KPK MDCAT Reconducted Successfully",
    date: "2024-08-20",
    category: "update",
    content: "KMU has successfully reconducted the KPK MDCAT exam. Results are expected within 2 weeks. Students can check their scores on the KMU portal.",
    source: "KMU",
    sourceUrl: "https://www.kmu.edu.pk",
  },
  {
    id: "10",
    title: "Chemistry Organic Reactions Guide",
    date: "2024-08-10",
    category: "resource",
    content: "Master these organic reaction types for MDCAT: Substitution (SN1, SN2), Elimination (E1, E2), Addition (electrophilic, nucleophilic), and Oxidation-Reduction. Understanding mechanisms is more important than memorizing products.",
  },
  {
    id: "11",
    title: "MDCAT Physics Formula Sheet Available",
    date: "2024-07-25",
    category: "resource",
    content: "A comprehensive physics formula sheet covering all MDCAT topics is now available. Includes 70+ formulas organized by topic with derivations and example problems.",
  },
  {
    id: "12",
    title: "Study Schedule: 3 Months to MDCAT",
    date: "2024-07-15",
    category: "tip",
    content: "Month 1: Complete syllabus coverage (all 5 subjects). Month 2: Practice MCQs and take topic-wise tests. Month 3: Full mock exams and revision. Dedicate 6-8 hours daily for optimal preparation.",
  },
];

const categoryConfig = {
  announcement: { icon: Bell, color: "text-blue-500", bg: "bg-blue-500/10", label: "Announcement" },
  update: { icon: Info, color: "text-purple-500", bg: "bg-purple-500/10", label: "Update" },
  tip: { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-500/10", label: "Study Tip" },
  resource: { icon: BookOpen, color: "text-orange-500", bg: "bg-orange-500/10", label: "Resource" },
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MDCAT News & Updates</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with the latest MDCAT announcements, exam dates, and study resources
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href="https://www.pmc.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-blue-500" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">PMC Official</div>
              <div className="text-sm text-gray-500">pmc.gov.pk</div>
            </div>
          </a>
          <a
            href="https://medicoengineer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-green-500" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Medico Engineer</div>
              <div className="text-sm text-gray-500">Free MDCAT Practice</div>
            </div>
          </a>
          <a
            href="https://pakmcqs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-purple-500" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">PakMcqs</div>
              <div className="text-sm text-gray-500">Past Papers & MCQs</div>
            </div>
          </a>
        </div>

        {/* News Items */}
        <div className="space-y-4">
          {newsItems.map((item) => {
            const config = categoryConfig[item.category];
            const Icon = config.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                        <Icon className="h-3 w-3" />
                        {config.label}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.content}</p>
                    {item.source && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-gray-500">Source:</span>
                        {item.sourceUrl ? (
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                          >
                            {item.source}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-xs text-gray-500">{item.source}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">Disclaimer</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-xs mt-1">
                This page provides general information about MDCAT. Always verify announcements from official sources (PMC, UHS, LUMHS, KMU, NUMS). Exam dates and policies may change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
