import OpenAI from "openai";

const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || "";

export const groq = new OpenAI({
  apiKey: API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const MODEL = "llama-3.1-8b-instant";

export async function generateChatResponse(
  message: string,
  subjectContext: string,
  history: Array<{ role: string; parts: string }> = []
) {
  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: subjectContext },
    ...history.map((h) => ({
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

  return response.choices[0]?.message?.content || "No response generated.";
}

export async function generateMCQs(
  subject: string,
  topic: string,
  subtopic: string,
  count: number = 10,
  difficulty: string = "medium"
) {
  const difficultyInstructions: Record<string, string> = {
    easy: "Generate EASY questions suitable for beginners. Focus on basic definitions, simple recall, and fundamental concepts. Questions should test knowledge of facts and straightforward concepts.",
    medium: "Generate MEDIUM difficulty questions. Include application-based problems, require understanding of relationships between concepts, and test ability to analyze rather than just recall.",
    hard: "Generate HARD questions suitable for MDCAT exam preparation. Include complex multi-step problems, require deep conceptual understanding, combine multiple topics, and test analytical and application skills. Questions should be challenging and exam-level.",
    mixed: "Generate a MIX of easy (30%), medium (40%), and hard (30%) questions appropriate for comprehensive MDCAT preparation.",
  };

  const prompt = `Generate ${count} MDCAT-style multiple choice questions for the following topic:
Subject: ${subject}
Topic: ${topic}
Subtopic: ${subtopic}
Difficulty: ${difficulty.toUpperCase()}

Difficulty Requirements:
${difficultyInstructions[difficulty] || difficultyInstructions.medium}

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
- All questions MUST match the specified difficulty level exactly
- Do NOT include any text before or after the JSON array`;

  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 4096,
    top_p: 0.9,
  });

  const text = response.choices[0]?.message?.content || "";

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
