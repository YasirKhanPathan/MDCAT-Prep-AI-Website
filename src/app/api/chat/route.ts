import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "@/lib/prompts";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { message, subject, history } = await request.json();

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!API_KEY) {
      return Response.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: getSystemPrompt(subject || "general"),
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 2048,
      },
    });

    const chatHistory = (history || []).map((h: { role: string; parts: string }) => ({
      role: h.role,
      parts: [{ text: h.parts }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return Response.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
