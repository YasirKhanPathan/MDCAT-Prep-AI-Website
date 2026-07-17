"use client";

import { Suspense } from "react";
import PracticePageContent from "./PracticePageContent";

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto" />
        </div>
      }
    >
      <PracticePageContent />
    </Suspense>
  );
}
