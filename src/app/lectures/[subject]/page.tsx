"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getSubjectById } from "@/data/subjects";
import { getLecturesBySubject } from "@/data/lectures";
import { ArrowLeft, PlayCircle, Clock, ExternalLink } from "lucide-react";

const iconMap: Record<string, string> = {
  biology: "🧬",
  chemistry: "⚗️",
  physics: "⚡",
  english: "📝",
  "logical-reasoning": "🧠",
};

export default function SubjectLecturesPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const subject = getSubjectById(subjectId);
  const subjectLectures = getLecturesBySubject(subjectId);

  if (!subject) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Subject Not Found</h1>
        <Link href="/lectures" className="text-emerald-500 hover:underline">
          Back to Lectures
        </Link>
      </div>
    );
  }

  const groupedByTopic = subjectLectures.reduce((acc, lecture) => {
    if (!acc[lecture.topic]) acc[lecture.topic] = [];
    acc[lecture.topic].push(lecture);
    return acc;
  }, {} as Record<string, typeof subjectLectures>);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link
        href="/lectures"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Lectures
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{iconMap[subjectId]}</span>
        <div>
          <h1 className="text-3xl font-bold">{subject.name} Lectures</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {subjectLectures.length} video lectures from reliable sources
          </p>
        </div>
      </div>

      {Object.keys(groupedByTopic).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedByTopic).map(([topic, topicLectures]) => (
            <div
              key={topic}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{topic}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topicLectures.map((lecture) => (
                  <a
                    key={lecture.id}
                    href={`https://www.youtube.com/watch?v=${lecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-emerald-500/50 hover:shadow-lg transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                      <img
                        src={`https://img.youtube.com/vi/${lecture.youtubeId}/mqdefault.jpg`}
                        alt={lecture.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lecture.duration}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm group-hover:text-emerald-500 transition-colors line-clamp-2">
                          {lecture.title}
                        </p>
                        <ExternalLink className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      </div>
                      <p className="text-xs text-gray-500">{lecture.channel}</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{lecture.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <PlayCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Lectures for this subject are being curated. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
