/* eslint-disable @typescript-eslint/no-explicit-any */
type Language = "en" | "ur" | "roman";

// Feature detection
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === "undefined") return false;
  return !!window.speechSynthesis;
}

const ttsLanguageCodes: Record<Language, string> = {
  en: "en-US",
  ur: "ur-PK",
  roman: "en-US",
};

// MediaRecorder state
let mediaRecorder: MediaRecorder | null = null;
let audioChunks: Blob[] = [];
let stream: MediaStream | null = null;
let recordingStartTime = 0;

export async function startListening(
  language: Language,
  onResult: (transcript: string, isFinal: boolean) => void,
  onEnd: () => void,
  onError: (error: string) => void
): Promise<void> {
  try {
    // Request microphone access
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    audioChunks = [];
    recordingStartTime = Date.now();

    // Determine supported MIME type
    const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
      ? "audio/webm;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/webm")
      ? "audio/webm"
      : "audio/mp4";

    mediaRecorder = new MediaRecorder(stream, { mimeType });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const recordingDuration = (Date.now() - recordingStartTime) / 1000;

      // Minimum recording length check
      if (recordingDuration < 0.5) {
        onError("Recording too short. Please speak for at least 1 second.");
        cleanup();
        onEnd();
        return;
      }

      if (audioChunks.length === 0) {
        onError("No audio data recorded. Please try again.");
        cleanup();
        onEnd();
        return;
      }

      const audioBlob = new Blob(audioChunks, { type: mimeType });

      try {
        // Send to Groq Whisper API
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.webm");
        formData.append("language", language);

        const response = await fetch("/api/transcribe", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Transcription failed");
        }

        const data = await response.json();
        const text = data.text;

        if (text && text.trim()) {
          onResult(text.trim(), true);
        } else {
          onError("No speech was detected in the recording. Please speak clearly and try again.");
        }
      } catch (error: any) {
        console.error("Transcription error:", error);
        onError(`Transcription failed: ${error.message || "Please try again"}`);
      } finally {
        cleanup();
        onEnd();
      }
    };

    mediaRecorder.onerror = (event) => {
      console.error("MediaRecorder error:", event);
      onError("Recording failed. Please check your microphone and try again.");
      cleanup();
      onEnd();
    };

    mediaRecorder.start(100); // Collect data every 100ms for responsiveness
  } catch (error: any) {
    console.error("Microphone access error:", error);

    if (error.name === "NotAllowedError") {
      onError("Microphone access denied. Please allow microphone access in your browser settings and reload the page.");
    } else if (error.name === "NotFoundError") {
      onError("No microphone found. Please connect a microphone and try again.");
    } else if (error.name === "NotReadableError") {
      onError("Microphone is being used by another application. Please close other apps using the microphone.");
    } else {
      onError(`Could not access microphone: ${error.message || "Unknown error"}`);
    }

    cleanup();
    onEnd();
  }
}

export function stopListening(): void {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
}

function cleanup(): void {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  mediaRecorder = null;
  audioChunks = [];
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
