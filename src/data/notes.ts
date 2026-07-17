export interface NoteResource {
  id: string;
  title: string;
  subject: string;
  topic: string;
  source: string;
  url: string;
  description: string;
  type: "pdf" | "link" | "article";
}

export const notes: NoteResource[] = [
  // Biology
  { id: "bio-1", title: "Cell Biology Complete Notes", subject: "biology", topic: "Cell Structure & Function", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Comprehensive cell biology notes covering organelles, cell division, and membrane transport.", type: "link" },
  { id: "bio-2", title: "Biology Review Short Notes", subject: "biology", topic: "General Biology", source: "Vinode Narain", url: "https://medicoengineer.com/material/notes", description: "Condensed biology review notes perfect for last-day revision.", type: "link" },
  { id: "bio-3", title: "Genetics & Evolution Notes", subject: "biology", topic: "Genetics", source: "KIPS Publications", url: "https://kipspublications.com", description: "Detailed genetics notes covering Mendelian inheritance, DNA, and evolution.", type: "link" },
  { id: "bio-4", title: "Human Physiology Notes", subject: "biology", topic: "Human Physiology", source: "PakMcqs", url: "https://pakmcqs.com/category/biology-mcqs", description: "Topic-wise biology MCQs with explanations for all physiology systems.", type: "link" },
  { id: "bio-5", title: "Enzymes & Biomolecules", subject: "biology", topic: "Biological Molecules", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Enzyme kinetics, inhibition, and biological molecule structures.", type: "link" },
  { id: "bio-6", title: "Ecology & Environment", subject: "biology", topic: "Ecology", source: "PakMcqs", url: "https://pakmcqs.com/category/biology-mcqs", description: "Ecology MCQs covering ecosystems, energy flow, and biodiversity.", type: "link" },

  // Chemistry
  { id: "chem-1", title: "Organic Chemistry Notes", subject: "chemistry", topic: "Organic Chemistry", source: "KIPS Publications", url: "https://kipspublications.com", description: "Complete organic chemistry covering hydrocarbons, functional groups, and reactions.", type: "link" },
  { id: "chem-2", title: "Physical Chemistry Notes", subject: "chemistry", topic: "Chemical Equilibrium", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Equilibrium, kinetics, and electrochemistry notes with solved problems.", type: "link" },
  { id: "chem-3", title: "Chemistry MCQs Bank", subject: "chemistry", topic: "General Chemistry", source: "PakMcqs", url: "https://pakmcqs.com/category/chemistry-mcqs", description: "Extensive chemistry MCQ collection with detailed explanations.", type: "link" },
  { id: "chem-4", title: "Atomic Structure & Bonding", subject: "chemistry", topic: "Atomic Structure", source: "KIPS Publications", url: "https://kipspublications.com", description: "Atomic models, electronic configuration, and chemical bonding.", type: "link" },

  // Physics
  { id: "phys-1", title: "Physics XI & XII Notes", subject: "physics", topic: "General Physics", source: "Sir Kamran", url: "https://medicoengineer.com/material/notes", description: "Complete physics notes by Sir Kamran covering all MDCAT topics.", type: "link" },
  { id: "phys-2", title: "Physics MCQs Collection", subject: "physics", topic: "General Physics", source: "PakMcqs", url: "https://pakmcqs.com/category/physics-mcqs", description: "Physics MCQs organized by topic with solutions.", type: "link" },
  { id: "phys-3", title: "Mechanics & Waves Notes", subject: "physics", topic: "Waves & Oscillations", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Newton's laws, work-energy, waves, and oscillations.", type: "link" },
  { id: "phys-4", title: "Electrostatics & Circuits", subject: "physics", topic: "Electrostatics", source: "KIPS Publications", url: "https://kipspublications.com", description: "Electric fields, capacitance, and circuit analysis.", type: "link" },

  // English
  { id: "eng-1", title: "English Last Day Review", subject: "english", topic: "Grammar", source: "Vinode Narain", url: "https://medicoengineer.com/material/notes", description: "Quick English grammar and vocabulary review for exam day.", type: "link" },
  { id: "eng-2", title: "English MCQs Practice", subject: "english", topic: "Reading Comprehension", source: "PakMcqs", url: "https://pakmcqs.com/category/english-mcqs", description: "English comprehension, grammar, and vocabulary MCQs.", type: "link" },

  // Logical Reasoning
  { id: "lr-1", title: "Logical Reasoning Guide", subject: "logical-reasoning", topic: "Series & Analogies", source: "PakMcqs", url: "https://pakmcqs.com", description: "Complete guide to logical reasoning patterns and shortcuts.", type: "link" },
];

export function getNotesBySubject(subjectId: string): NoteResource[] {
  return notes.filter((n) => n.subject === subjectId);
}

export function getNoteById(id: string): NoteResource | undefined {
  return notes.find((n) => n.id === id);
}
