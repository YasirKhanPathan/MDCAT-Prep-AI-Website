export interface DayTask {
  day: number;
  subject: string;
  topics: string[];
  hours: number;
  mcqTarget: number;
  notes: string;
}

export interface WeekPlan {
  week: number;
  title: string;
  description: string;
  days: DayTask[];
}

export const roadmap: WeekPlan[] = [
  {
    week: 1,
    title: "Foundation Review",
    description: "Build strong basics across all subjects. Focus on Biology and Chemistry foundations.",
    days: [
      { day: 1, subject: "Biology", topics: ["Cell Structure & Function", "Cell Membrane"], hours: 7, mcqTarget: 50, notes: "Start with cell biology - it's the foundation for everything" },
      { day: 2, subject: "Biology", topics: ["Biological Molecules", "Enzymes"], hours: 7, mcqTarget: 50, notes: "Focus on enzyme kinetics and inhibition types" },
      { day: 3, subject: "Chemistry", topics: ["Atomic Structure", "Electronic Configuration"], hours: 7, mcqTarget: 40, notes: "Master periodic table trends" },
      { day: 4, subject: "Chemistry", topics: ["Chemical Bonding", "VSEPR Theory"], hours: 7, mcqTarget: 40, notes: "Practice drawing Lewis structures" },
      { day: 5, subject: "Physics", topics: ["Vectors & Scalars", "Motion in One Dimension"], hours: 7, mcqTarget: 30, notes: "Focus on kinematic equations" },
      { day: 6, subject: "Physics", topics: ["Newton's Laws of Motion", "Friction"], hours: 7, mcqTarget: 30, notes: "Practice free-body diagrams" },
      { day: 7, subject: "All", topics: ["Week 1 Revision", "Practice Test"], hours: 6, mcqTarget: 100, notes: "Take a mini test covering all Week 1 topics" },
    ],
  },
  {
    week: 2,
    title: "Core Subjects Deep Dive",
    description: "Master human physiology and chemistry core topics. This is the heaviest week.",
    days: [
      { day: 8, subject: "Biology", topics: ["Digestive System", "Circulatory System"], hours: 8, mcqTarget: 60, notes: "Understand heart anatomy and blood flow" },
      { day: 9, subject: "Biology", topics: ["Respiratory System", "Nervous System"], hours: 8, mcqTarget: 60, notes: "Focus on nerve impulse transmission" },
      { day: 10, subject: "Biology", topics: ["Endocrine System", "Excretory System"], hours: 7, mcqTarget: 50, notes: "Learn hormone functions and feedback loops" },
      { day: 11, subject: "Biology", topics: ["Reproductive System", "Immune System"], hours: 7, mcqTarget: 50, notes: "Compare innate vs adaptive immunity" },
      { day: 12, subject: "Chemistry", topics: ["Stoichiometry", "States of Matter"], hours: 7, mcqTarget: 40, notes: "Practice mole concept calculations" },
      { day: 13, subject: "Chemistry", topics: ["Chemical Equilibrium", "Acids & Bases"], hours: 7, mcqTarget: 40, notes: "Master pH calculations and buffer solutions" },
      { day: 14, subject: "Physics", topics: ["Work, Energy & Power", "Rotational Motion"], hours: 7, mcqTarget: 35, notes: "Practice conservation of energy problems" },
    ],
  },
  {
    week: 3,
    title: "Advanced Topics & English",
    description: "Cover genetics, organic chemistry, modern physics, and English/Logical Reasoning.",
    days: [
      { day: 15, subject: "Biology", topics: ["Genetics", "DNA Replication & Protein Synthesis"], hours: 8, mcqTarget: 60, notes: "Master Mendelian genetics and crosses" },
      { day: 16, subject: "Biology", topics: ["Evolution", "Ecology", "Plant Physiology"], hours: 7, mcqTarget: 50, notes: "Understand Hardy-Weinberg and ecosystem energy flow" },
      { day: 17, subject: "Chemistry", topics: ["Organic Chemistry - Hydrocarbons", "Functional Groups"], hours: 8, mcqTarget: 45, notes: "Practice naming organic compounds" },
      { day: 18, subject: "Chemistry", topics: ["Organic Chemistry - Reactions", "Electrochemistry"], hours: 7, mcqTarget: 40, notes: "Focus on reaction mechanisms" },
      { day: 19, subject: "Physics", topics: ["Waves & Oscillations", "Sound"], hours: 7, mcqTarget: 35, notes: "Master SHM and wave equations" },
      { day: 20, subject: "Physics", topics: ["Electrostatics", "Current Electricity"], hours: 7, mcqTarget: 35, notes: "Practice circuit problems" },
      { day: 21, subject: "English + LR", topics: ["Reading Comprehension", "Grammar", "Logical Reasoning"], hours: 6, mcqTarget: 50, notes: "Practice 2 passages + 20 reasoning questions" },
    ],
  },
  {
    week: 4,
    title: "Revision & Exam Prep",
    description: "Full-length tests, weak area revision, and exam strategy. Peak performance week.",
    days: [
      { day: 22, subject: "All", topics: ["Full-Length Practice Test #1"], hours: 8, mcqTarget: 180, notes: "Simulate real exam: 3 hours, 180 MCQs" },
      { day: 23, subject: "All", topics: ["Test Analysis", "Weak Area Revision"], hours: 7, mcqTarget: 50, notes: "Analyze mistakes from FLP #1, revise weak topics" },
      { day: 24, subject: "All", topics: ["Full-Length Practice Test #2"], hours: 8, mcqTarget: 180, notes: "Another full exam simulation" },
      { day: 25, subject: "All", topics: ["Test Analysis", "High-Yield Topics"], hours: 7, mcqTarget: 60, notes: "Focus on most frequently tested topics" },
      { day: 26, subject: "All", topics: ["Past Papers Practice"], hours: 6, mcqTarget: 100, notes: "Solve actual past MDCAT papers" },
      { day: 27, subject: "All", topics: ["Final Revision", "Formula Sheet Review"], hours: 5, mcqTarget: 50, notes: "Light revision, review formulas and key facts" },
      { day: 28, subject: "All", topics: ["Rest & Light Review"], hours: 3, mcqTarget: 0, notes: "Relax, sleep well, review flashcards only. You're ready!" },
    ],
  },
];

export function getDayByNumber(day: number): DayTask | undefined {
  for (const week of roadmap) {
    const found = week.days.find((d) => d.day === day);
    if (found) return found;
  }
  return undefined;
}

export function getTotalDays(): number {
  return roadmap.reduce((acc, week) => acc + week.days.length, 0);
}

export function getTotalMCQTarget(): number {
  return roadmap.reduce(
    (acc, week) => acc + week.days.reduce((a, d) => a + d.mcqTarget, 0),
    0
  );
}

export function getTotalHours(): number {
  return roadmap.reduce(
    (acc, week) => acc + week.days.reduce((a, d) => a + d.hours, 0),
    0
  );
}
