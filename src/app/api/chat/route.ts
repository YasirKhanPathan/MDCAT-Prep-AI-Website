import { NextRequest } from "next/server";
import { groq, MODEL } from "@/lib/gemini";
import { getSystemPrompt } from "@/lib/prompts";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { message, subject, history } = await request.json();

    const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!API_KEY) {
      return Response.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: getSystemPrompt(subject || "general") },
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
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
