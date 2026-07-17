"use client";

import { Suspense } from "react";
import ChatInterface from "@/components/ChatInterface";

function ChatContent() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <ChatInterface />
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense
      fallback={
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <ChatContent />
    </Suspense>
  );
}
