export interface PastPaper {
  id: string;
  title: string;
  year: string;
  province: string;
  totalMCQs: number;
  duration: string;
  url: string;
  source: string;
  description: string;
  type: "external" | "ai-generated";
}

export const pastPapers: PastPaper[] = [
  { id: "pp-1", title: "MDCAT 2024 Punjab", year: "2024", province: "Punjab", totalMCQs: 180, duration: "3 hours", url: "https://medicoengineer.com/material/past-papers", source: "Medico Engineer", description: "Official MDCAT 2024 paper conducted by UHS Lahore.", type: "external" },
  { id: "pp-2", title: "MDCAT 2023 Punjab", year: "2023", province: "Punjab", totalMCQs: 200, duration: "3.5 hours", url: "https://medicoengineer.com/material/past-papers", source: "Medico Engineer", description: "First provincial MDCAT conducted by UHS.", type: "external" },
  { id: "pp-3", title: "NMDCAT 2022", year: "2022", province: "National", totalMCQs: 200, duration: "3.5 hours", url: "https://pakmcqs.com/category/past-papers", source: "PakMcqs", description: "National MDCAT 2022 by PMC.", type: "external" },
  { id: "pp-4", title: "NMDCAT 2021", year: "2021", province: "National", totalMCQs: 210, duration: "3.5 hours", url: "https://pakmcqs.com/category/past-papers", source: "PakMcqs", description: "National MDCAT 2021 with 210 MCQs.", type: "external" },
  { id: "pp-5", title: "MDCAT 2024 KPK", year: "2024", province: "KPK", totalMCQs: 180, duration: "3 hours", url: "https://medicoengineer.com/material/past-papers", source: "Medico Engineer", description: "MDCAT 2024 conducted by KMU for KPK.", type: "external" },
  { id: "pp-6", title: "AI Full Test #1", year: "2025", province: "AI-Generated", totalMCQs: 180, duration: "3 hours", url: "/quizzes/ai-full-test-1", source: "MedPrep AI", description: "AI-generated full-length MDCAT test with balanced subject distribution.", type: "ai-generated" },
  { id: "pp-7", title: "AI Full Test #2", year: "2025", province: "AI-Generated", totalMCQs: 180, duration: "3 hours", url: "/quizzes/ai-full-test-2", source: "MedPrep AI", description: "Second AI-generated test with different question set.", type: "ai-generated" },
  { id: "pp-8", title: "AI Biology Marathon", year: "2025", province: "AI-Generated", totalMCQs: 81, duration: "1 hour", url: "/quizzes/ai-bio-marathon", source: "MedPrep AI", description: "81 Biology MCQs matching MDCAT weightage.", type: "ai-generated" },
];

export function getExternalPapers(): PastPaper[] {
  return pastPapers.filter((p) => p.type === "external");
}

export function getAIGeneratedPapers(): PastPaper[] {
  return pastPapers.filter((p) => p.type === "ai-generated");
}

export function getPastPaperById(id: string): PastPaper | undefined {
  return pastPapers.find((p) => p.id === id);
}
