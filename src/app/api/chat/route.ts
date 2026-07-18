import { NextRequest } from "next/server";
import { groq, MODEL } from "@/lib/gemini";
import { getSystemPrompt, type Language, type Level } from "@/lib/prompts";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { message, subject, history, language, level } = await request.json();

    const API_KEY = process.env.GROQ_API_KEY;
    if (!API_KEY) {
      return Response.json(
        { error: "Groq API key not configured. Please set GROQ_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: getSystemPrompt(subject || "general", (language as Language) || "en", (level as Level) || "intermediate") },
      ...(history || []).map((h: { role: string; parts: string }) => ({
        role: h.role === "user" ? ("user" as const) : ("assistant" as const),
        content: h.parts,
      })),
      { role: "user", content: message },
    ];

    const response = await groq.chat.completions.create({
      model: MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 0.9,
    });

    const text = response.choices[0]?.message?.content || "No response generated.";

    return Response.json({ response: text });
  } catch (error) {
    console.error("Chat API error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to generate response: ${msg}` },
      { status: 500 }
    );
  }
}
