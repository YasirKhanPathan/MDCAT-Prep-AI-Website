import { NextRequest } from "next/server";
import { groq, MODEL } from "@/lib/gemini";

export const dynamic = "force-dynamic";

interface ProgressData {
  totalQuestionsAttempted: number;
  totalCorrectAnswers: number;
  studyStreak: number;
  topicStats: Record<string, { attempted: number; correct: number }>;
  subjectStats: Record<string, { attempted: number; correct: number }>;
}

export async function POST(request: NextRequest) {
  try {
    const { progress, roadmapProgress, language } = (await request.json()) as {
      progress: ProgressData;
      roadmapProgress: Record<string, boolean>;
      language: string;
    };

    const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!API_KEY) {
      return Response.json({ error: "API key not configured" }, { status: 500 });
    }

    const langInstruction = language === "ur"
      ? "اردو میں جواب دیں۔"
      : language === "roman"
      ? "Roman Urdu mein jawab dein."
      : "Respond in English.";

    const topicStats = progress.topicStats || {};
    const weakAreas = Object.entries(topicStats)
      .filter(([, s]) => s.attempted >= 3)
      .map(([topic, s]) => ({
        topic,
        accuracy: Math.round((s.correct / s.attempted) * 100),
      }))
      .filter((t) => t.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 5);

    const completedDays = Object.values(roadmapProgress || {}).filter(Boolean).length;

    const prompt = `You are an MDCAT study advisor for a Pakistani student. ${langInstruction}

Student Progress:
- Total questions attempted: ${progress.totalQuestionsAttempted || 0}
- Overall accuracy: ${progress.totalQuestionsAttempted ? Math.round((progress.totalCorrectAnswers / progress.totalQuestionsAttempted) * 100) : 0}%
- Study streak: ${progress.studyStreak || 0} days
- Roadmap progress: ${completedDays}/28 days completed
${weakAreas.length > 0 ? `- Weak areas (low accuracy): ${weakAreas.map((w) => `${w.topic} (${w.accuracy}%)`).join(", ")}` : "- No weak areas identified yet (need more data)"}

Generate exactly 5 personalized daily tasks for today. Each task should be:
1. Specific and actionable
2. Based on their weak areas and roadmap position
3. Include estimated time
4. Mix of: studying concepts, practicing MCQs, and reviewing

Return ONLY a JSON array:
[
  {
    "task": "Specific task description",
    "subject": "Subject name",
    "priority": "high/medium/low",
    "estimatedMinutes": 30,
    "type": "study/practice/review"
  }
]`;

    const response = await groq.chat.completions.create({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const text = response.choices[0]?.message?.content || "[]";

    try {
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return Response.json({ tasks: JSON.parse(jsonMatch[0]) });
      }
      return Response.json({ tasks: JSON.parse(text) });
    } catch {
      return Response.json({ tasks: [] });
    }
  } catch (error) {
    console.error("Suggestions API error:", error);
    return Response.json({ tasks: [] });
  }
}
