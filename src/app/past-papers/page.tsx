"use client";

import Link from "next/link";
import { getExternalPapers, getAIGeneratedPapers } from "@/data/past-papers";
import { ExternalLink, ClipboardList, PlayCircle, ArrowRight } from "lucide-react";

export default function PastPapersPage() {
  const external = getExternalPapers();
  const aiGenerated = getAIGeneratedPapers();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Past Papers</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Real MDCAT past papers + AI-generated full-length tests
        </p>
      </div>

      {/* External Past Papers */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-500" />
          Real Past Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {external.map((paper) => (
            <a
              key={paper.id}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold group-hover:text-emerald-500 transition-colors">
                  {paper.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-500 mb-3">{paper.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{paper.year}</span>
                <span>{paper.province}</span>
                <span>{paper.totalMCQs} MCQs</span>
                <span>{paper.duration}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Source: {paper.source}</p>
            </a>
          ))}
        </div>
      </div>

      {/* AI Generated */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-emerald-500" />
          AI-Generated Full Tests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiGenerated.map((paper) => (
            <Link
              key={paper.id}
              href={paper.url}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold group-hover:text-emerald-500 transition-colors">
                  {paper.title}
                </h3>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-sm text-gray-500 mb-3">{paper.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{paper.totalMCQs} MCQs</span>
                <span>{paper.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                  Take Test
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
