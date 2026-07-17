"use client";

import Link from "next/link";
import { pastPapers } from "@/data/past-papers";
import { ExternalLink, PlayCircle, ArrowRight, ClipboardList } from "lucide-react";

export default function PastPapersPage() {
  const solvable = pastPapers.filter((p) => p.type === "real-solvable");
  const external = pastPapers.filter((p) => p.type === "real-pdf");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Past Papers</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Solve real MDCAT past papers in-app or download PDFs from reliable sources
        </p>
      </div>

      {/* Solvable In-App */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-emerald-500" />
          Solve Past Papers In-App
        </h2>
        <p className="text-sm text-gray-500 mb-4">Click to start solving — timer, scoring, and explanations included</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solvable.map((paper) => (
            <Link
              key={paper.id}
              href={`/past-papers/${paper.id}`}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold group-hover:text-emerald-500 transition-colors">
                  {paper.title}
                </h3>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-500 mb-3">{paper.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{paper.totalMCQs} MCQs</span>
                <span>{paper.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
                  Solve Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* External PDF Sources */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-500" />
          Download Past Papers (PDF)
        </h2>
        <p className="text-sm text-gray-500 mb-4">From reliable sources — opens in new tab</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Medico Engineer — All MDCAT Past Papers", url: "https://medicoengineer.com/material/past-papers", desc: "23 past papers from Sindh MDCAT (2000-2024). PDF downloads.", source: "Medico Engineer" },
            { title: "PakMcqs — Past Papers Collection", url: "https://pakmcqs.com/category/past-papers", desc: "General past papers including medical/entry test MCQs.", source: "PakMcqs" },
            { title: "KIPS Virtual — MDCAT Papers", url: "https://kipsvirtual.com", desc: "KIPS past papers with solutions (paid courses).", source: "KIPS Virtual" },
            { title: "UHS Lahore — Official MDCAT Papers", url: "https://uhs.edu.pk", desc: "University of Health Sciences official papers for Punjab MDCAT.", source: "UHS" },
          ].map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-blue-500/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold group-hover:text-blue-500 transition-colors text-sm">
                  {link.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-500 mb-2">{link.desc}</p>
              <p className="text-xs text-gray-400">Source: {link.source}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
