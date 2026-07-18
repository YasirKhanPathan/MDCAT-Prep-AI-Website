import { Question } from "@/components/MCQCard";
import { biologyHardQuestions } from "./mcq-banks/biology";
import { chemistryHardQuestions } from "./mcq-banks/chemistry";
import { physicsHardQuestions } from "./mcq-banks/physics";
import { englishHardQuestions } from "./mcq-banks/english";
import { logicalReasoningHardQuestions } from "./mcq-banks/logical-reasoning";

export interface QuizSet {
  id: string;
  title: string;
  subject: string;
  description: string;
  questionCount: number;
  difficulty: "easy" | "medium" | "hard" | "mixed";
  timeLimit: number;
  topics: string[];
  staticQuestions?: Question[];
}

// Helper to pick N random questions from a bank
function pickRandom(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const quizSets: QuizSet[] = [
  // === BIOLOGY QUIZZES ===
  {
    id: "qs-bio-1", title: "Cell Biology Quick Quiz", subject: "biology",
    description: "Test your knowledge of cell structure and function",
    questionCount: 15, difficulty: "easy", timeLimit: 15,
    topics: ["Cell Structure & Function"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i < 8), 15),
  },
  {
    id: "qs-bio-2", title: "Genetics Challenge", subject: "biology",
    description: "Advanced genetics problems — inheritance, mutations, and molecular biology",
    questionCount: 20, difficulty: "hard", timeLimit: 25,
    topics: ["Genetics"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i >= 5 && i < 16), 20),
  },
  {
    id: "qs-bio-3", title: "Human Physiology Marathon", subject: "biology",
    description: "All human body systems — cardiovascular, respiratory, renal, nervous",
    questionCount: 25, difficulty: "hard", timeLimit: 30,
    topics: ["Human Physiology"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i >= 11 && i < 30), 25),
  },
  {
    id: "qs-bio-4", title: "Enzymes & Biomolecules", subject: "biology",
    description: "Enzyme kinetics, inhibition, proteins, lipids, and carbohydrates",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Enzymes", "Biological Molecules"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i >= 30 && i < 39), 15),
  },
  {
    id: "qs-bio-5", title: "Ecology & Evolution", subject: "biology",
    description: "Ecosystems, natural selection, Hardy-Weinberg, and biodiversity",
    questionCount: 15, difficulty: "hard", timeLimit: 15,
    topics: ["Ecology", "Evolution"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i >= 25 && i < 35), 15),
  },
  {
    id: "qs-bio-6", title: "Plant Physiology Deep Dive", subject: "biology",
    description: "Photosynthesis, transpiration, plant hormones, and CAM/C4 pathways",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Plant Physiology"],
    staticQuestions: pickRandom(biologyHardQuestions.filter((_, i) => i >= 18 && i < 25), 15),
  },
  {
    id: "qs-bio-7", title: "Cell Division & Molecular Biology", subject: "biology",
    description: "Mitosis, meiosis, DNA replication, protein synthesis, and mutations",
    questionCount: 20, difficulty: "hard", timeLimit: 25,
    topics: ["Cell Structure & Function", "Genetics"],
    staticQuestions: pickRandom(biologyHardQuestions, 20),
  },

  // === CHEMISTRY QUIZZES ===
  {
    id: "qs-chem-1", title: "Atomic Structure & Periodicity", subject: "chemistry",
    description: "Quantum numbers, electronic configuration, and periodic trends",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Atomic Structure"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i < 5), 15),
  },
  {
    id: "qs-chem-2", title: "Chemical Bonding & Molecular Geometry", subject: "chemistry",
    description: "Ionic, covalent, metallic bonds, VSEPR, hybridization, and intermolecular forces",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Chemical Bonding"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 4 && i < 9), 15),
  },
  {
    id: "qs-chem-3", title: "Stoichiometry & Mole Concept", subject: "chemistry",
    description: "Molar calculations, limiting reagent, empirical formulas, and concentration",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Stoichiometry"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 8 && i < 13), 15),
  },
  {
    id: "qs-chem-4", title: "Chemical Equilibrium & pH", subject: "chemistry",
    description: "Le Chatelier's principle, Kc/Kp, buffers, and acid-base equilibria",
    questionCount: 15, difficulty: "hard", timeLimit: 20,
    topics: ["Chemical Equilibrium"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 12 && i < 16), 15),
  },
  {
    id: "qs-chem-5", title: "Organic Chemistry Masterclass", subject: "chemistry",
    description: "Hydrocarbons, functional groups, naming, reactions, and polymers",
    questionCount: 20, difficulty: "hard", timeLimit: 25,
    topics: ["Organic Chemistry"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 16 && i < 22), 20),
  },
  {
    id: "qs-chem-6", title: "Electrochemistry & Redox", subject: "chemistry",
    description: "Galvanic cells, electrolysis, Nernst equation, and Faraday's laws",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Electrochemistry"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 20 && i < 24), 12),
  },
  {
    id: "qs-chem-7", title: "Thermochemistry & Kinetics", subject: "chemistry",
    description: "Enthalpy, Hess's law, rate laws, activation energy, and catalysis",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Chemical Kinetics"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 24 && i < 30), 15),
  },
  {
    id: "qs-chem-8", title: "States of Matter & Solutions", subject: "chemistry",
    description: "Gas laws, colligative properties, colloids, and phase transitions",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["States of Matter"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 28 && i < 35), 15),
  },
  {
    id: "qs-chem-9", title: "Acids, Bases & Salts", subject: "chemistry",
    description: "pH calculations, buffers, hydrolysis, and neutralization reactions",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Chemical Equilibrium"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 32 && i < 38), 12),
  },
  {
    id: "qs-chem-10", title: "Nuclear & Industrial Chemistry", subject: "chemistry",
    description: "Radioactive decay, fission/fusion, Haber process, and Contact process",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Chemical Equilibrium"],
    staticQuestions: pickRandom(chemistryHardQuestions.filter((_, i) => i >= 35), 10),
  },

  // === PHYSICS QUIZZES ===
  {
    id: "qs-phys-1", title: "Vectors & Scalars", subject: "physics",
    description: "Vector addition, dot product, cross product, and resolution",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Vectors and Scalars"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i < 3), 10),
  },
  {
    id: "qs-phys-2", title: "Newton's Laws & Mechanics", subject: "physics",
    description: "F=ma, friction, circular motion, and equilibrium problems",
    questionCount: 15, difficulty: "hard", timeLimit: 20,
    topics: ["Newton's Laws of Motion"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 3 && i < 6), 15),
  },
  {
    id: "qs-phys-3", title: "Work, Energy & Power", subject: "physics",
    description: "Kinetic energy, potential energy, work-energy theorem, and conservation",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Work, Energy & Power"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 6 && i < 9), 15),
  },
  {
    id: "qs-phys-4", title: "Rotational Motion", subject: "physics",
    description: "Moment of inertia, torque, angular momentum, and rolling motion",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Rotational Motion"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 9 && i < 12), 12),
  },
  {
    id: "qs-phys-5", title: "Waves, Sound & SHM", subject: "physics",
    description: "Wave properties, standing waves, Doppler effect, and pendulums",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Waves & Oscillations"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 12 && i < 17), 15),
  },
  {
    id: "qs-phys-6", title: "Electrostatics", subject: "physics",
    description: "Coulomb's law, electric fields, Gauss's law, and capacitance",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Electrostatics"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 17 && i < 20), 15),
  },
  {
    id: "qs-phys-7", title: "Current Electricity", subject: "physics",
    description: "Ohm's law, Kirchhoff's laws, circuits, and power calculations",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Current Electricity"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 20 && i < 23), 15),
  },
  {
    id: "qs-phys-8", title: "Electromagnetism", subject: "physics",
    description: "Magnetic force, Faraday's law, Lenz's law, and electromagnetic induction",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Electromagnetism"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 23 && i < 26), 12),
  },
  {
    id: "qs-phys-9", title: "Modern Physics", subject: "physics",
    description: "Photoelectric effect, Bohr model, de Broglie, and nuclear physics",
    questionCount: 15, difficulty: "hard", timeLimit: 18,
    topics: ["Modern Physics"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 26 && i < 32), 15),
  },
  {
    id: "qs-phys-10", title: "Gravitation & Properties of Matter", subject: "physics",
    description: "Newton's law of gravitation, orbital mechanics, stress-strain, and elasticity",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Newton's Laws of Motion", "Vectors and Scalars"],
    staticQuestions: pickRandom(physicsHardQuestions.filter((_, i) => i >= 32), 12),
  },
  {
    id: "qs-phys-11", title: "Full Physics Review", subject: "physics",
    description: "Comprehensive hard physics covering all topics — exam simulation",
    questionCount: 25, difficulty: "hard", timeLimit: 30,
    topics: ["Newton's Laws of Motion", "Electrostatics", "Modern Physics"],
    staticQuestions: pickRandom(physicsHardQuestions, 25),
  },

  // === ENGLISH QUIZZES ===
  {
    id: "qs-eng-1", title: "Reading Comprehension", subject: "english",
    description: "Passage analysis, inference, main idea identification, and tone",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Reading Comprehension"],
    staticQuestions: pickRandom(englishHardQuestions.filter((_, i) => i < 3), 12),
  },
  {
    id: "qs-eng-2", title: "Grammar & Sentence Structure", subject: "english",
    description: "Subject-verb agreement, tenses, modifiers, and sentence correction",
    questionCount: 15, difficulty: "hard", timeLimit: 15,
    topics: ["Grammar"],
    staticQuestions: pickRandom(englishHardQuestions.filter((_, i) => i >= 3 && i < 9), 15),
  },
  {
    id: "qs-eng-3", title: "Vocabulary Builder", subject: "english",
    description: "Synonyms, antonyms, one-word substitutions, and word meanings",
    questionCount: 12, difficulty: "hard", timeLimit: 12,
    topics: ["Vocabulary"],
    staticQuestions: pickRandom(englishHardQuestions.filter((_, i) => i >= 9 && i < 15), 12),
  },
  {
    id: "qs-eng-4", title: "Idioms, Phrases & Analogies", subject: "english",
    description: "Common English idioms, word analogies, and figure of speech",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Vocabulary", "Sentence Correction"],
    staticQuestions: pickRandom(englishHardQuestions.filter((_, i) => i >= 15), 10),
  },
  {
    id: "qs-eng-5", title: "Complete English Review", subject: "english",
    description: "Full English section — comprehension, grammar, vocab, idioms",
    questionCount: 20, difficulty: "hard", timeLimit: 20,
    topics: ["Reading Comprehension", "Grammar", "Vocabulary"],
    staticQuestions: pickRandom(englishHardQuestions, 20),
  },

  // === LOGICAL REASONING QUIZZES ===
  {
    id: "qs-lr-1", title: "Number & Letter Series", subject: "logical-reasoning",
    description: "Arithmetic, geometric, and mixed pattern series",
    questionCount: 12, difficulty: "hard", timeLimit: 15,
    topics: ["Series"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions.filter((_, i) => i < 5), 12),
  },
  {
    id: "qs-lr-2", title: "Analogies & Classification", subject: "logical-reasoning",
    description: "Word, number, and figure analogies with classification",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Analogies"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions.filter((_, i) => i >= 5 && i < 10), 10),
  },
  {
    id: "qs-lr-3", title: "Coding-Decoding", subject: "logical-reasoning",
    description: "Letter coding, number coding, and mixed coding problems",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Coding-Decoding"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions.filter((_, i) => i >= 10 && i < 14), 10),
  },
  {
    id: "qs-lr-4", title: "Blood Relations & Direction Sense", subject: "logical-reasoning",
    description: "Family tree problems and navigation direction puzzles",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Blood Relations", "Direction Sense"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions.filter((_, i) => i >= 14 && i < 20), 10),
  },
  {
    id: "qs-lr-5", title: "Syllogisms & Logic", subject: "logical-reasoning",
    description: "Statement-conclusion, cause-effect, and logical deduction",
    questionCount: 10, difficulty: "hard", timeLimit: 12,
    topics: ["Syllogisms and Logic"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions.filter((_, i) => i >= 20 && i < 24), 10),
  },
  {
    id: "qs-lr-6", title: "Full Logical Reasoning Review", subject: "logical-reasoning",
    description: "Comprehensive LR — series, coding, blood relations, syllogisms",
    questionCount: 20, difficulty: "hard", timeLimit: 25,
    topics: ["Series", "Analogies", "Coding-Decoding", "Blood Relations", "Syllogisms and Logic"],
    staticQuestions: pickRandom(logicalReasoningHardQuestions, 20),
  },
];

export function getQuizzesBySubject(subjectId: string): QuizSet[] {
  return quizSets.filter((q) => q.subject === subjectId);
}

export function getQuizById(id: string): QuizSet | undefined {
  return quizSets.find((q) => q.id === id);
}
