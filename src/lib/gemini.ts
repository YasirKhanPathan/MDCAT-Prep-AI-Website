import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

export const genAI = new GoogleGenerativeAI(API_KEY);

export function getModel() {
  return genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      maxOutputTokens: 2048,
    },
  });
}

export async function generateChatResponse(
  message: string,
  subjectContext: string,
  history: Array<{ role: string; parts: string }> = []
) {
  const model = getModel();
  const chat = model.startChat({
    history: history.map((h) => ({
      role: h.role as "user" | "model",
      parts: [{ text: h.parts }],
    })),
  });

  const result = await chat.sendMessage(message);
  return result.response.text();
}

export async function generateMCQs(
  subject: string,
  topic: string,
  subtopic: string,
  count: number = 10,
  difficulty: string = "medium"
) {
  const model = getModel();
  const prompt = `Generate ${count} MDCAT-style multiple choice questions for the following topic:
Subject: ${subject}
Topic: ${topic}
Subtopic: ${subtopic}
Difficulty: ${difficulty}

Return ONLY a valid JSON array with this exact format:
[
  {
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Detailed explanation of why the correct answer is right and why others are wrong."
  }
]

Requirements:
- Questions should be MDCAT exam style
- Each question must have exactly 4 options
- correctIndex is 0-indexed (0=A, 1=B, 2=C, 3=D)
- Explanations should be educational and detailed
- Mix of easy, medium, and hard questions appropriate for MDCAT
- Do NOT include any text before or after the JSON array`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return JSON.parse(text);
  } catch {
    throw new Error("Failed to parse generated questions");
  }
}
