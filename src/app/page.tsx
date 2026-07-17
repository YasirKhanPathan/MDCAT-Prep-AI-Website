"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const onboarded = localStorage.getItem("mdcat-onboarded");
    if (onboarded) {
      router.replace("/dashboard");
    } else {
      router.replace("/onboarding");
    }
    setChecked(true);
  }, [router]);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return null;
}
