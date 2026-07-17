export interface QuizSet {
  id: string;
  title: string;
  subject: string;
  description: string;
  questionCount: number;
  difficulty: "easy" | "medium" | "hard" | "mixed";
  timeLimit: number; // in minutes
  topics: string[];
}

export const quizSets: QuizSet[] = [
  { id: "qs-bio-1", title: "Cell Biology Quick Quiz", subject: "biology", description: "Test your knowledge of cell structure and function", questionCount: 15, difficulty: "easy", timeLimit: 15, topics: ["Cell Structure & Function"] },
  { id: "qs-bio-2", title: "Genetics Challenge", subject: "biology", description: "Advanced genetics problems and concepts", questionCount: 20, difficulty: "hard", timeLimit: 25, topics: ["Genetics"] },
  { id: "qs-bio-3", title: "Human Physiology Marathon", subject: "biology", description: "All human body systems in one quiz", questionCount: 30, difficulty: "medium", timeLimit: 35, topics: ["Human Physiology"] },
  { id: "qs-bio-4", title: "Enzymes & Biomolecules", subject: "biology", description: "Enzyme kinetics, inhibition, and biological molecules", questionCount: 15, difficulty: "medium", timeLimit: 18, topics: ["Enzymes", "Biological Molecules"] },
  { id: "qs-bio-5", title: "Ecology & Evolution", subject: "biology", description: "Ecosystems, natural selection, and biodiversity", questionCount: 15, difficulty: "easy", timeLimit: 15, topics: ["Ecology", "Evolution"] },

  { id: "qs-chem-1", title: "Atomic Structure Quiz", subject: "chemistry", description: "Bohr model, quantum numbers, and periodic trends", questionCount: 15, difficulty: "medium", timeLimit: 18, topics: ["Atomic Structure"] },
  { id: "qs-chem-2", title: "Organic Chemistry Basics", subject: "chemistry", description: "Hydrocarbons, functional groups, and reactions", questionCount: 20, difficulty: "medium", timeLimit: 25, topics: ["Organic Chemistry"] },
  { id: "qs-chem-3", title: "Chemical Equilibrium & pH", subject: "chemistry", description: "Le Chatelier, buffers, and pH calculations", questionCount: 15, difficulty: "hard", timeLimit: 20, topics: ["Chemical Equilibrium"] },
  { id: "qs-chem-4", title: "Stoichiometry Speed Run", subject: "chemistry", description: "Mole concept and calculations under time pressure", questionCount: 10, difficulty: "easy", timeLimit: 10, topics: ["Stoichiometry"] },

  { id: "qs-phys-1", title: "Mechanics Mastery", subject: "physics", description: "Newton's laws, work-energy, and motion", questionCount: 20, difficulty: "medium", timeLimit: 25, topics: ["Newton's Laws of Motion", "Work, Energy & Power"] },
  { id: "qs-phys-2", title: "Electrostatics & Circuits", subject: "physics", description: "Electric fields, capacitance, and current electricity", questionCount: 15, difficulty: "hard", timeLimit: 20, topics: ["Electrostatics", "Current Electricity"] },
  { id: "qs-phys-3", title: "Waves & Sound", subject: "physics", description: "Wave properties, SHM, and Doppler effect", questionCount: 15, difficulty: "medium", timeLimit: 18, topics: ["Waves & Oscillations"] },

  { id: "qs-eng-1", title: "English Comprehension", subject: "english", description: "Reading passages and grammar rules", questionCount: 15, difficulty: "medium", timeLimit: 15, topics: ["Reading Comprehension", "Grammar"] },
  { id: "qs-eng-2", title: "Vocabulary Builder", subject: "english", description: "Synonyms, antonyms, and one-word substitutions", questionCount: 15, difficulty: "easy", timeLimit: 12, topics: ["Vocabulary"] },

  { id: "qs-lr-1", title: "Logical Reasoning Sprint", subject: "logical-reasoning", description: "Series, analogies, and coding-decoding", questionCount: 15, difficulty: "medium", timeLimit: 15, topics: ["Series", "Analogies", "Coding-Decoding"] },
];

export function getQuizzesBySubject(subjectId: string): QuizSet[] {
  return quizSets.filter((q) => q.subject === subjectId);
}

export function getQuizById(id: string): QuizSet | undefined {
  return quizSets.find((q) => q.id === id);
}
