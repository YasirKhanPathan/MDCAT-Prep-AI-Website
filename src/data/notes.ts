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
  { id: "bio-7", title: "Molecular Biology Central Dogma", subject: "biology", topic: "Molecular Biology", source: "Sir Ammar Biology", url: "https://sirammar.com/notes", description: "DNA replication, transcription, translation, and gene regulation notes.", type: "link" },
  { id: "bio-8", title: "Ecosystems & Biodiversity Notes", subject: "biology", topic: "Ecology", source: "ZafarBio", url: "https://zafarbio.com/notes", description: "Trophic levels, nutrient cycling, population ecology, and conservation.", type: "link" },
  { id: "bio-9", title: "Genetics Problem Solving", subject: "biology", topic: "Genetics", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Pedigree analysis, dihybrid crosses, and genetic disorders with practice problems.", type: "link" },
  { id: "bio-10", title: "Cell Division & Reproduction", subject: "biology", topic: "Cell Biology", source: "KIPS Publications", url: "https://kipspublications.com", description: "Mitosis, meiosis, cell cycle regulation, and comparison of cell division stages.", type: "link" },

  // Chemistry
  { id: "chem-1", title: "Organic Chemistry Notes", subject: "chemistry", topic: "Organic Chemistry", source: "KIPS Publications", url: "https://kipspublications.com", description: "Complete organic chemistry covering hydrocarbons, functional groups, and reactions.", type: "link" },
  { id: "chem-2", title: "Physical Chemistry Notes", subject: "chemistry", topic: "Chemical Equilibrium", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Equilibrium, kinetics, and electrochemistry notes with solved problems.", type: "link" },
  { id: "chem-3", title: "Chemistry MCQs Bank", subject: "chemistry", topic: "General Chemistry", source: "PakMcqs", url: "https://pakmcqs.com/category/chemistry-mcqs", description: "Extensive chemistry MCQ collection with detailed explanations.", type: "link" },
  { id: "chem-4", title: "Atomic Structure & Bonding", subject: "chemistry", topic: "Atomic Structure", source: "KIPS Publications", url: "https://kipspublications.com", description: "Atomic models, electronic configuration, and chemical bonding.", type: "link" },
  { id: "chem-5", title: "Organic Chemistry Reaction Mechanisms", subject: "chemistry", topic: "Organic Chemistry", source: "Maqsad", url: "https://maqsad.com/notes", description: "Nucleophilic substitution, elimination, and addition reactions with mechanisms.", type: "link" },
  { id: "chem-6", title: "Electrochemistry Complete Notes", subject: "chemistry", topic: "Electrochemistry", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Galvanic cells, electrolysis, Nernst equation, and electrochemical series.", type: "link" },
  { id: "chem-7", title: "Thermodynamics & Thermochemistry", subject: "chemistry", topic: "Thermodynamics", source: "IlmKiDunya", url: "https://ilmkidunya.com/notes", description: "Hess's law, enthalpy, entropy, and free energy calculations.", type: "link" },

  // Physics
  { id: "phys-1", title: "Physics XI & XII Notes", subject: "physics", topic: "General Physics", source: "Sir Kamran", url: "https://medicoengineer.com/material/notes", description: "Complete physics notes by Sir Kamran covering all MDCAT topics.", type: "link" },
  { id: "phys-2", title: "Physics MCQs Collection", subject: "physics", topic: "General Physics", source: "PakMcqs", url: "https://pakmcqs.com/category/physics-mcqs", description: "Physics MCQs organized by topic with solutions.", type: "link" },
  { id: "phys-3", title: "Mechanics & Waves Notes", subject: "physics", topic: "Waves & Oscillations", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Newton's laws, work-energy, waves, and oscillations.", type: "link" },
  { id: "phys-4", title: "Electrostatics & Circuits", subject: "physics", topic: "Electrostatics", source: "KIPS Publications", url: "https://kipspublications.com", description: "Electric fields, capacitance, and circuit analysis.", type: "link" },
  { id: "phys-5", title: "Modern Physics Notes", subject: "physics", topic: "Modern Physics", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Photoelectric effect, atomic models, nuclear physics, and radioactivity.", type: "link" },
  { id: "phys-6", title: "Electromagnetism & Magnetism", subject: "physics", topic: "Electromagnetism", source: "KIPS Publications", url: "https://kipspublications.com", description: "Magnetic fields, electromagnetic induction, and Faraday's laws.", type: "link" },
  { id: "phys-7", title: "Optics Complete Notes", subject: "physics", topic: "Optics", source: "Maqsad", url: "https://maqsad.com/notes", description: "Reflection, refraction, lenses, mirrors, and wave optics.", type: "link" },

  // English
  { id: "eng-1", title: "English Last Day Review", subject: "english", topic: "Grammar", source: "Vinode Narain", url: "https://medicoengineer.com/material/notes", description: "Quick English grammar and vocabulary review for exam day.", type: "link" },
  { id: "eng-2", title: "English MCQs Practice", subject: "english", topic: "Reading Comprehension", source: "PakMcqs", url: "https://pakmcqs.com/category/english-mcqs", description: "English comprehension, grammar, and vocabulary MCQs.", type: "link" },
  { id: "eng-3", title: "English Grammar Rules Handbook", subject: "english", topic: "Grammar", source: "KIPS Publications", url: "https://kipspublications.com", description: "Tenses, subject-verb agreement, articles, prepositions, and common errors.", type: "link" },
  { id: "eng-4", title: "MDCAT Vocabulary Wordlist", subject: "english", topic: "Vocabulary", source: "PakMcqs", url: "https://pakmcqs.com/category/english-mcqs", description: "High-frequency MDCAT vocabulary words with definitions and usage examples.", type: "link" },
  { id: "eng-5", title: "Synonyms & Antonyms Practice", subject: "english", topic: "Vocabulary", source: "IlmKiDunya", url: "https://ilmkidunya.com/notes", description: "Synonym and antonym MCQs commonly asked in MDCAT English section.", type: "link" },
  { id: "eng-6", title: "Sentence Correction & Error Detection", subject: "english", topic: "Grammar", source: "Medico Engineer", url: "https://medicoengineer.com/material/notes", description: "Common sentence errors, correction rules, and practice exercises.", type: "link" },

  // Logical Reasoning
  { id: "lr-1", title: "Logical Reasoning Guide", subject: "logical-reasoning", topic: "Series & Analogies", source: "PakMcqs", url: "https://pakmcqs.com", description: "Complete guide to logical reasoning patterns and shortcuts.", type: "link" },
  { id: "lr-2", title: "Number & Letter Series Practice", subject: "logical-reasoning", topic: "Series", source: "KIPS Publications", url: "https://kipspublications.com", description: "Number series, letter series, and mixed pattern problems with solutions.", type: "link" },
  { id: "lr-3", title: "Analogy & Classification MCQs", subject: "logical-reasoning", topic: "Analogies", source: "PakMcqs", url: "https://pakmcqs.com/category/logical-reasoning-mcqs", description: "Word analogies, figure analogies, and classification-based reasoning.", type: "link" },
  { id: "lr-4", title: "Direction, Blood Relation & Coding", subject: "logical-reasoning", topic: "Logical Reasoning", source: "Maqsad", url: "https://maqsad.com/notes", description: "Direction sense, blood relations, coding-decoding, and syllogisms.", type: "link" },
];

export function getNotesBySubject(subjectId: string): NoteResource[] {
  return notes.filter((n) => n.subject === subjectId);
}

export function getNoteById(id: string): NoteResource | undefined {
  return notes.find((n) => n.id === id);
}
