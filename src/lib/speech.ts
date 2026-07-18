/* eslint-disable @typescript-eslint/no-explicit-any */
type Language = "en" | "ur" | "roman";

// Feature detection
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as any;
  return !!(w.SpeechRecognition || w.webkitSpeechRecognition);
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === "undefined") return false;
  return !!window.speechSynthesis;
}

// Get SpeechRecognition constructor
function getSpeechRecognitionConstructor(): (new () => any) | null {
  if (typeof window === "undefined") return null;
  const w = window as any;
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

// Language to BCP 47 code mapping
const languageCodes: Record<Language, string> = {
  en: "en-US",
  ur: "en-US",
  roman: "en-US",
};

const ttsLanguageCodes: Record<Language, string> = {
  en: "en-US",
  ur: "ur-PK",
  roman: "en-US",
};

// Speech Recognition (STT)
let recognitionInstance: any = null;

export function startListening(
  language: Language,
  onResult: (transcript: string, isFinal: boolean) => void,
  onEnd: () => void,
  onError: (error: string) => void
): void {
  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    onError("Speech recognition is not supported in this browser.");
    return;
  }

  // Stop any existing instance
  stopListening();

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = languageCodes[language] || "en-US";

  recognition.onresult = (event: any) => {
    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    if (finalTranscript) {
      onResult(finalTranscript, true);
    } else if (interimTranscript) {
      onResult(interimTranscript, false);
    }
  };

  recognition.onend = () => {
    recognitionInstance = null;
    onEnd();
  };

  recognition.onerror = (event: any) => {
    recognitionInstance = null;
    if (event.error === "no-speech") {
      onError("No speech detected. Please try again.");
    } else if (event.error === "audio-capture") {
      onError("Microphone not found. Please check your device.");
    } else if (event.error === "not-allowed") {
      onError("Microphone access denied. Please allow microphone access in your browser settings.");
    } else {
      onError(`Speech recognition error: ${event.error}`);
    }
    onEnd();
  };

  recognitionInstance = recognition;
  recognition.start();
}

export function stopListening(): void {
  if (recognitionInstance) {
    recognitionInstance.abort();
    recognitionInstance = null;
  }
}

// Text-to-Speech (TTS)
let currentUtterance: SpeechSynthesisUtterance | null = null;

function getVoiceForLanguage(language: Language): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const targetLang = ttsLanguageCodes[language] || "en-US";
  const voices = window.speechSynthesis.getVoices();

  // Try exact match first
  const exact = voices.find((v) => v.lang === targetLang);
  if (exact) return exact;

  // Try partial match (e.g., "ur" matches "ur-PK")
  const partial = voices.find((v) => v.lang.startsWith(targetLang.split("-")[0]));
  if (partial) return partial;

  // Fallback to any English voice
  return voices.find((v) => v.lang.startsWith("en")) || voices[0] || null;
}

export function speakText(
  text: string,
  language: Language,
  onEnd?: () => void
): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  // Stop any ongoing speech
  stopSpeaking();

  // Clean markdown formatting from text
  const cleanText = text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/#{1,6}\s/g, "")
    .replace(/[•\-*]\s/g, "")
    .replace(/\n+/g, ". ");

  if (!cleanText.trim()) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const voice = getVoiceForLanguage(language);
  if (voice) utterance.voice = voice;

  utterance.rate = 0.95;
  utterance.pitch = 1;

  utterance.onend = () => {
    currentUtterance = null;
    onEnd?.();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    onEnd?.();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  currentUtterance = null;
}

export function isSpeaking(): boolean {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  return window.speechSynthesis.speaking;
}
