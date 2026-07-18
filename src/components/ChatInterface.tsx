"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Bot, User, Loader2, BookOpen, Trash2, Globe, GraduationCap, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { subjects } from "@/data/subjects";
import {
  isSpeechRecognitionSupported,
  isSpeechSynthesisSupported,
  startListening,
  stopListening,
  speakText,
  stopSpeaking,
} from "@/lib/speech";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type Language = "en" | "ur" | "roman";
type Level = "beginner" | "intermediate" | "advanced";

const CHAT_STORAGE_KEY = "mdcat-chat-history";
const LANG_STORAGE_KEY = "mdcat-chat-language";
const LEVEL_STORAGE_KEY = "mdcat-chat-level";

const languageLabels: Record<Language, string> = { en: "English", ur: "اردو", roman: "Roman Urdu" };
const levelLabels: Record<Level, string> = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

function loadChatHistory(): { messages: Message[]; subject: string } {
  if (typeof window === "undefined") return { messages: [], subject: "general" };
  const stored = localStorage.getItem(CHAT_STORAGE_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { return { messages: [], subject: "general" }; }
  }
  return { messages: [], subject: "general" };
}

function saveChatHistory(messages: Message[], subject: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify({ messages, subject }));
}

export default function ChatInterface() {
  const searchParams = useSearchParams();
  const urlSubject = searchParams.get("subject");

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("general");
  const [language, setLanguage] = useState<Language>("en");
  const [level, setLevel] = useState<Level>("intermediate");
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // STT state
  const [isRecording, setIsRecording] = useState(false);
  const [sttSupported, setSttSupported] = useState(false);
  const [sttError, setSttError] = useState<string | null>(null);

  // TTS state
  const [speakingMessageId, setSpeakingMessageId] = useState<number | null>(null);
  const [ttsSupported, setTtsSupported] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    setSttSupported(isSpeechRecognitionSupported());
    setTtsSupported(isSpeechSynthesisSupported());
  }, []);

  useEffect(() => {
    if (initialized) return;
    const saved = loadChatHistory();
    const savedLang = (localStorage.getItem(LANG_STORAGE_KEY) as Language) || "en";
    const savedLevel = (localStorage.getItem(LEVEL_STORAGE_KEY) as Level) || "intermediate";

    if (urlSubject && subjects.some((s) => s.id === urlSubject)) {
      setSelectedSubject(urlSubject);
      saveChatHistory(saved.messages, urlSubject);
    } else if (saved.subject) {
      setSelectedSubject(saved.subject);
    }

    setLanguage(savedLang);
    setLevel(savedLevel);

    if (saved.messages.length > 0) {
      setMessages(saved.messages);
    } else {
      setMessages([{
        role: "assistant",
        content: "Salam! I'm your AI MDCAT tutor. I can help you with any subject:\n\n🧬 **Biology** - Cell biology, genetics, ecology\n⚗️ **Chemistry** - Organic, inorganic, physical\n⚡ **Physics** - Mechanics, waves, electricity\n📝 **English** - Comprehension, grammar, vocabulary\n🧠 **Logical Reasoning** - Series, analogies, coding\n\nYou can type or use the microphone to ask questions!",
      }]);
    }
    setInitialized(true);
  }, [urlSubject, initialized]);

  useEffect(() => {
    if (initialized && messages.length > 0) {
      saveChatHistory(messages, selectedSubject);
    }
  }, [messages, selectedSubject, initialized]);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LANG_STORAGE_KEY, language);
    }
  }, [language, initialized]);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LEVEL_STORAGE_KEY, level);
    }
  }, [level, initialized]);

  const handleClearChat = () => {
    setMessages([{ role: "assistant", content: "Chat cleared! What would you like to study today?" }]);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  };

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
          language,
          level,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Failed to get response");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(e); }
  };

  // STT handlers
  const handleToggleRecording = useCallback(() => {
    if (isRecording) {
      stopListening();
      setIsRecording(false);
      return;
    }

    setSttError(null);

    startListening(
      language,
      (transcript, isFinal) => {
        if (isFinal) {
          setInput((prev) => {
            const newInput = prev ? `${prev} ${transcript}` : transcript;
            return newInput;
          });
        } else {
          setInput(transcript);
        }
      },
      () => {
        setIsRecording(false);
      },
      (error) => {
        setSttError(error);
        setIsRecording(false);
      }
    );

    setIsRecording(true);
  }, [isRecording, language]);

  // TTS handlers
  const handleSpeak = useCallback(
    (messageIndex: number, text: string) => {
      if (speakingMessageId === messageIndex) {
        stopSpeaking();
        setSpeakingMessageId(null);
        return;
      }

      stopSpeaking();
      setSpeakingMessageId(messageIndex);
      speakText(text, language, () => {
        setSpeakingMessageId(null);
      });
    },
    [speakingMessageId, language]
  );

  // Stop TTS when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const currentSubject = subjects.find((s) => s.id === selectedSubject);

  return (
    <div className="flex flex-col h-full">
      {/* Controls Bar */}
      <div className="border-b border-gray-200 dark:border-gray-800 p-4 space-y-3">
        {/* Subject Selector */}
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
          >General</button>
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSubject(s.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedSubject === s.id ? "text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              style={selectedSubject === s.id ? { backgroundColor: s.color } : undefined}
            >{s.name}</button>
          ))}
        </div>

        {/* Language + Level Row */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">Language:</span>
            {(Object.keys(languageLabels) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  language === lang ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >{languageLabels[lang]}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">Level:</span>
            {(Object.keys(levelLabels) as Level[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  level === lvl ? "bg-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >{levelLabels[lvl]}</button>
            ))}
          </div>
          <button
            onClick={handleClearChat}
            aria-label="Clear chat history"
            className="ml-auto p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {currentSubject && (
          <p className="text-xs text-gray-500 ml-7">
            Tutoring in: {currentSubject.name} | {languageLabels[language]} | {levelLabels[level]}
          </p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`animate-fade-in-up flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
            {message.role === "assistant" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              message.role === "user" ? "bg-emerald-500 text-white rounded-br-md" : "bg-gray-100 dark:bg-gray-800 rounded-bl-md"
            }`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**"))
                    return <p key={i} className="font-bold mb-1">{line.replace(/\*\*/g, "")}</p>;
                  if (line.startsWith("- "))
                    return <p key={i} className="ml-4">• {line.slice(2)}</p>;
                  return <p key={i}>{line || <br />}</p>;
                })}
              </div>
              {/* TTS button for assistant messages */}
              {message.role === "assistant" && ttsSupported && (
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => handleSpeak(index, message.content)}
                    aria-label={speakingMessageId === index ? "Stop reading aloud" : "Read this response aloud"}
                    className={`p-1 rounded-lg transition-colors ${
                      speakingMessageId === index
                        ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                        : "text-gray-400 hover:text-emerald-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {speakingMessageId === index ? (
                      <VolumeX className="h-4 w-4 animate-pulse" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
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
        {/* STT Error */}
        {sttError && (
          <div className="mb-2 p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
            <MicOff className="h-3 w-3 flex-shrink-0" />
            <span>{sttError}</span>
            <button onClick={() => setSttError(null)} className="ml-auto hover:text-red-900 dark:hover:text-red-100">&times;</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          {/* Microphone Button */}
          {sttSupported && (
            <button
              type="button"
              onClick={handleToggleRecording}
              disabled={isLoading}
              aria-label={isRecording ? "Stop voice input" : "Start voice input"}
              className={`flex-shrink-0 p-3 rounded-xl transition-all ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
          )}

          {/* Textarea */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your question"
            placeholder={
              isRecording ? "Listening..." :
              language === "ur" ? "اپنا سوال یہاں لکھیں..." :
              language === "roman" ? "Apna sawal yahan likhein..." :
              "Ask a question about any MDCAT topic..."
            }
            className={`flex-1 resize-none rounded-xl border bg-white dark:bg-gray-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              isRecording
                ? "border-red-300 dark:border-red-700 ring-2 ring-red-200 dark:ring-red-900"
                : "border-gray-300 dark:border-gray-700"
            }`}
            rows={1}
            disabled={isLoading}
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>

        {/* Voice status indicator */}
        {isRecording && (
          <div className="mt-2 flex items-center gap-2 text-xs text-red-500" role="status" aria-live="polite">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Listening... Speak now, then click the microphone when done</span>
          </div>
        )}
        {sttError && (
          <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">
            Tip: Speech recognition works best in Chrome or Edge browser
          </div>
        )}
      </div>
    </div>
  );
}
