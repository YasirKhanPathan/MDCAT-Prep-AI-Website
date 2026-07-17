"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getSubjectById } from "@/data/subjects";
import { getNotesBySubject } from "@/data/notes";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

export default function SubjectNotesPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const subject = getSubjectById(subjectId);
  const subjectNotes = getNotesBySubject(subjectId);

  if (!subject) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Subject Not Found</h1>
        <Link href="/notes" className="text-emerald-500 hover:underline">
          Back to Notes
        </Link>
      </div>
    );
  }

  const groupedByTopic = subjectNotes.reduce((acc, note) => {
    if (!acc[note.topic]) acc[note.topic] = [];
    acc[note.topic].push(note);
    return acc;
  }, {} as Record<string, typeof subjectNotes>);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Notes
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{iconMap[subjectId]}</span>
        <div>
          <h1 className="text-3xl font-bold">{subject.name} Notes</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {subjectNotes.length} resources from reliable sources
          </p>
        </div>
      </div>

      {Object.keys(groupedByTopic).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedByTopic).map(([topic, topicNotes]) => (
            <div
              key={topic}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{topic}</h3>
              <div className="space-y-3">
                {topicNotes.map((note) => (
                  <a
                    key={note.id}
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                      <BookOpen className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium group-hover:text-emerald-500 transition-colors">
                          {note.title}
                        </p>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{note.description}</p>
                      <p className="text-xs text-gray-400">Source: {note.source}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Notes for this subject are being curated. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
