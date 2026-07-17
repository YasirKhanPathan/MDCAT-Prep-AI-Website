import { NextRequest } from "next/server";
import { generateMCQs } from "@/lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { subject, topic, subtopic, count, difficulty } = await request.json();

    const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!API_KEY) {
      return Response.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    const questions = await generateMCQs(
      subject,
      topic,
      subtopic,
      count || 10,
      difficulty || "medium"
    );

    return Response.json({ questions });
  } catch (error) {
    console.error("Question generation error:", error);
    return Response.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
