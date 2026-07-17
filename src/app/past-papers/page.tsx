"use client";

import { useState } from "react";
import { pastPapers, type PastPaper } from "@/data/pastPapers";
import { FileText, Clock, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PastPapersPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedProvince, setSelectedProvince] = useState<string | "all">("all");

  const filteredPapers = pastPapers.filter(paper => {
    if (selectedYear !== "all" && paper.year !== selectedYear) return false;
    if (selectedProvince !== "all" && paper.province !== selectedProvince) return false;
    return true;
  });

  const years = [...new Set(pastPapers.map(p => p.year))].sort((a, b) => b - a);
  const provinces = [...new Set(pastPapers.map(p => p.province))].sort();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Past Papers</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Practice with real MDCAT past papers from different provinces and years
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Province</label>
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Provinces</option>
            {provinces.map(province => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map(paper => (
          <div
            key={paper.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{paper.title}</h3>
                <p className="text-sm text-gray-500">{paper.province} Province</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {paper.description}
            </p>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>{paper.totalQuestions} Questions</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{paper.timeLimit} min</span>
              </div>
            </div>

            <Link
              href={`/past-papers/${paper.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors w-full justify-center"
            >
              Start Practice
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {filteredPapers.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No past papers found for the selected filters.</p>
          <p className="text-sm mt-2">Try adjusting your year or province selection.</p>
        </div>
      )}
    </div>
  );
}
