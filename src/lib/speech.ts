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

// Language to BCP 47 code mapping for recognition
// Note: Web Speech API in Chrome uses Google's cloud recognition
const recognitionLanguageCodes: Record<Language, string> = {
  en: "en-US",
  ur: "ur-PK",
  roman: "en-US",
};

const ttsLanguageCodes: Record<Language, string> = {
  en: "en-US",
  ur: "ur-PK",
  roman: "en-US",
};

// Speech Recognition (STT)
let recognitionInstance: any = null;
let instanceId = 0;
let recognitionTimer: ReturnType<typeof setTimeout> | null = null;

const MAX_RECORDING_TIME = 30000; // 30 seconds max

export function startListening(
  language: Language,
  onResult: (transcript: string, isFinal: boolean) => void,
  onEnd: () => void,
  onError: (error: string) => void
): void {
  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    onError(
      "Speech recognition is not supported in this browser. Please use Chrome or Edge."
    );
    return;
  }

  // Abort any existing instance silently
  if (recognitionInstance) {
    try {
      recognitionInstance.onend = null;
      recognitionInstance.onerror = null;
      recognitionInstance.onresult = null;
      recognitionInstance.abort();
    } catch {
      // Ignore
    }
    recognitionInstance = null;
  }

  if (recognitionTimer) {
    clearTimeout(recognitionTimer);
    recognitionTimer = null;
  }

  const id = ++instanceId;
  let hasReceivedResult = false;

  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Allow continuous listening
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.lang = recognitionLanguageCodes[language] || "en-US";

  recognition.onresult = (event: any) => {
    if (id !== instanceId) return;

    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      const transcript = result[0].transcript;

      if (result.isFinal) {
        finalTranscript += transcript;
        hasReceivedResult = true;
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
    if (id !== instanceId) return;

    if (recognitionTimer) {
      clearTimeout(recognitionTimer);
      recognitionTimer = null;
    }

    recognitionInstance = null;

    // If we got no results at all, it's a problem
    if (!hasReceivedResult) {
      onError(
        "No speech was detected. Make sure your microphone is working and try again."
      );
    }

    onEnd();
  };

  recognition.onerror = (event: any) => {
    if (id !== instanceId) return;

    if (recognitionTimer) {
      clearTimeout(recognitionTimer);
      recognitionTimer = null;
    }

    recognitionInstance = null;

    // "aborted" is expected when we manually stop
    if (event.error === "aborted") {
      onEnd();
      return;
    }

    // "no-speech" means microphone is working but no voice detected
    if (event.error === "no-speech") {
      onError(
        "No speech detected. Please speak clearly into your microphone and try again."
      );
      return;
    }

    if (event.error === "audio-capture") {
      onError(
        "No microphone found. Please connect a microphone and try again."
      );
      return;
    }

    if (event.error === "not-allowed") {
      onError(
        "Microphone access was denied. Please allow microphone access in your browser settings and reload the page."
      );
      return;
    }

    if (event.error === "network") {
      onError(
        "Network error during speech recognition. Please check your internet connection and try again."
      );
      return;
    }

    onError(`Speech recognition error: ${event.error}. Please try again.`);
  };

  recognitionInstance = recognition;

  try {
    recognition.start();
  } catch (e: any) {
    recognitionInstance = null;
    onError(
      `Failed to start speech recognition: ${e.message || "Unknown error"}. Please try again.`
    );
  }

  // Auto-stop after max time to prevent infinite recording
  recognitionTimer = setTimeout(() => {
    if (id === instanceId && recognitionInstance) {
      try {
        recognitionInstance.stop();
      } catch {
        // Ignore
      }
    }
  }, MAX_RECORDING_TIME);
}

export function stopListening(): void {
  if (recognitionTimer) {
    clearTimeout(recognitionTimer);
    recognitionTimer = null;
  }

  if (recognitionInstance) {
    try {
      recognitionInstance.onend = null;
      recognitionInstance.onerror = null;
      recognitionInstance.onresult = null;
      recognitionInstance.stop();
    } catch {
      // Ignore
    }
    recognitionInstance = null;
  }
}

// Text-to-Speech (TTS)
let currentUtterance: SpeechSynthesisUtterance | null = null;

function getVoiceForLanguage(language: Language): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const targetLang = ttsLanguageCodes[language] || "en-US";
  const voices = window.speechSynthesis.getVoices();

  if (voices.length === 0) return null;

  // Try exact match first
  const exact = voices.find((v) => v.lang === targetLang);
  if (exact) return exact;

  // Try partial match (e.g., "ur" matches "ur-PK")
  const baseLang = targetLang.split("-")[0];
  const partial = voices.find((v) => v.lang.startsWith(baseLang));
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
