import { NextRequest } from "next/server";
import { groq } from "@/lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const API_KEY = process.env.GROQ_API_KEY;
    if (!API_KEY) {
      return Response.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;
    const language = (formData.get("language") as string) || "en";

    if (!audioFile) {
      return Response.json(
        { error: "No audio file provided" },
        { status: 400 }
      );
    }

    // Map our language codes to Whisper language codes
    const whisperLangMap: Record<string, string> = {
      en: "en",
      ur: "ur",
      roman: "en",
    };

    const whisperLang = whisperLangMap[language] || "en";

    // Use Groq's Whisper API for transcription
    const transcription = await groq.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-large-v3-turbo",
      language: whisperLang,
      response_format: "text",
    });

    const text = typeof transcription === "string" ? transcription : (transcription as any).text || "";

    return Response.json({ text: text.trim() });
  } catch (error) {
    console.error("Transcription API error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Transcription failed: ${msg}` },
      { status: 500 }
    );
  }
}
