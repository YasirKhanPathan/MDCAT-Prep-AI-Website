"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, BookOpen } from "lucide-react";
import { subjects } from "@/data/subjects";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("general");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Salam! I'm your AI MDCAT tutor. I can help you with any subject:\n\n🧬 **Biology** - Cell biology, genetics, ecology\n⚗️ **Chemistry** - Organic, inorganic, physical\n⚡ **Physics** - Mechanics, waves, electricity\n📝 **English** - Comprehension, grammar, vocabulary\n🧠 **Logical Reasoning** - Series, analogies, coding\n\nWhat would you like to study today?",
        },
      ]);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          subject: selectedSubject,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please make sure your Gemini API key is set in .env.local as NEXT_PUBLIC_GEMINI_API_KEY. Try again!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const currentSubject = subjects.find((s) => s.id === selectedSubject);

  return (
    <div className="flex flex-col h-full">
      {/* Subject Selector */}
      <div className="border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <BookOpen className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-500">Subject:</span>
          <button
            onClick={() => setSelectedSubject("general")}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedSubject === "general"
                ? "bg-emerald-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            General
          </button>
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedSubject === subject.id
                  ? "text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              style={
                selectedSubject === subject.id
                  ? { backgroundColor: subject.color }
                  : undefined
              }
            >
              {subject.name}
            </button>
          ))}
        </div>
        {currentSubject && (
          <p className="text-xs text-gray-500 mt-2 ml-7">
            Tutoring in: {currentSubject.name} — {currentSubject.description}
          </p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`animate-fade-in-up flex gap-3 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role === "assistant" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-emerald-500 text-white rounded-br-md"
                  : "bg-gray-100 dark:bg-gray-800 rounded-bl-md"
              }`}
            >
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={i} className="font-bold mb-1">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <p key={i} className="ml-4">
                        • {line.slice(2)}
                      </p>
                    );
                  }
                  return <p key={i}>{line || <br />}</p>;
                })}
              </div>
            </div>
            {message.role === "user" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="h-5 w-5 animate-spin text-emerald-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about any MDCAT topic..."
            className="flex-1 resize-none rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
