export interface LectureResource {
  id: string;
  title: string;
  subject: string;
  topic: string;
  channel: string;
  youtubeId: string;
  duration: string;
  description: string;
}

export const lectures: LectureResource[] = [
  // Biology
  { id: "lec-bio-1", title: "Cell Biology - Complete Lecture", subject: "biology", topic: "Cell Structure & Function", channel: "KIPS Official", youtubeId: "kLj5yH2DmRk", duration: "45 min", description: "Complete cell biology lecture covering all organelles and functions." },
  { id: "lec-bio-2", title: "Genetics & DNA Replication", subject: "biology", topic: "Genetics", channel: "KIPS Virtual", youtubeId: "FmF7LgRCxKE", duration: "50 min", description: "Mendelian genetics, DNA replication, and protein synthesis." },
  { id: "lec-bio-3", title: "Human Physiology - Digestive System", subject: "biology", topic: "Human Physiology", channel: "Sir Ammar Biology", youtubeId: "4xIkKnHbKcI", duration: "40 min", description: "Complete digestive system anatomy and physiology." },
  { id: "lec-bio-4", title: "Enzymes and Their Functions", subject: "biology", topic: "Enzymes", channel: "Medico Engineer", youtubeId: "KVe8FJq3MwI", duration: "35 min", description: "Enzyme structure, kinetics, and inhibition types." },
  { id: "lec-bio-5", title: "Evolution & Natural Selection", subject: "biology", topic: "Evolution", channel: "ZafarBio", youtubeId: "GhHOjC4oxh8", duration: "30 min", description: "Darwin's theory, evidence for evolution, and speciation." },
  { id: "lec-bio-6", title: "Ecology & Ecosystems Lecture", subject: "biology", topic: "Ecology", channel: "Sir Ammar Biology", youtubeId: "5Bmk1vz3kKs", duration: "42 min", description: "Ecosystem structure, energy flow, nutrient cycles, and biodiversity.", },
  { id: "lec-bio-7", title: "Molecular Biology - Central Dogma", subject: "biology", topic: "Molecular Biology", channel: "Medico Engineer", youtubeId: "wV12EzFkVzI", duration: "48 min", description: "DNA to RNA to protein, gene expression and regulation." },

  // Chemistry
  { id: "lec-chem-1", title: "Atomic Structure Complete", subject: "chemistry", topic: "Atomic Structure", channel: "KIPS Official", youtubeId: "1_NZK4Vz2pM", duration: "45 min", description: "Bohr model, quantum numbers, and electronic configuration." },
  { id: "lec-chem-2", title: "Organic Chemistry Basics", subject: "chemistry", topic: "Organic Chemistry", channel: "KIPS Virtual", youtubeId: "DdXz_TpBqKc", duration: "55 min", description: "Hydrocarbons, functional groups, and naming conventions." },
  { id: "lec-chem-3", title: "Chemical Equilibrium", subject: "chemistry", topic: "Chemical Equilibrium", channel: "Maqsad", youtubeId: "VItVpPFTmRk", duration: "40 min", description: "Le Chatelier's principle, Kc, Kp, and pH calculations." },
  { id: "lec-chem-4", title: "Electrochemistry", subject: "chemistry", topic: "Electrochemistry", channel: "Medico Engineer", youtubeId: "RfTk68HtwNk", duration: "35 min", description: "Galvanic cells, electrolysis, and Nernst equation." },
  { id: "lec-chem-5", title: "Organic Chemistry Reactions", subject: "chemistry", topic: "Organic Chemistry", channel: "IlmKiDunya", youtubeId: "XnHbMQb5oXY", duration: "50 min", description: "Substitution, elimination, and addition reaction mechanisms.", },
  { id: "lec-chem-6", title: "Thermochemistry & Thermodynamics", subject: "chemistry", topic: "Thermodynamics", channel: "KIPS Official", youtubeId: "sE6dZ4lKfBk", duration: "38 min", description: "Enthalpy, entropy, free energy, and Hess's law problems.", },

  // Physics
  { id: "lec-phys-1", title: "Newton's Laws of Motion", subject: "physics", topic: "Newton's Laws of Motion", channel: "KIPS Official", youtubeId: "kKKM8Y-u7ds", duration: "50 min", description: "All three laws with real-world examples and problem solving." },
  { id: "lec-phys-2", title: "Work, Energy & Power", subject: "physics", topic: "Work, Energy & Power", channel: "Maqsad", youtubeId: "w4QJ2nZVz3Y", duration: "45 min", description: "Kinetic energy, potential energy, and conservation laws." },
  { id: "lec-phys-3", title: "Electrostatics Complete", subject: "physics", topic: "Electrostatics", channel: "KIPS Official", youtubeId: "vA2b4VqRnK8", duration: "55 min", description: "Coulomb's law, electric fields, and capacitance." },
  { id: "lec-phys-4", title: "Waves and Sound", subject: "physics", topic: "Waves & Oscillations", channel: "Medico Engineer", youtubeId: "V8cE8Ko3vHc", duration: "40 min", description: "Wave properties, SHM, Doppler effect, and standing waves." },
  { id: "lec-phys-5", title: "Modern Physics - Atomic Models", subject: "physics", topic: "Modern Physics", channel: "IlmKiDunya", youtubeId: "7kb1VT0J3DE", duration: "42 min", description: "Photoelectric effect, Bohr model, and nuclear physics.", },
  { id: "lec-phys-6", title: "Electromagnetism & Induction", subject: "physics", topic: "Electromagnetism", channel: "KIPS Virtual", youtubeId: "9taNHXhJNmM", duration: "47 min", description: "Magnetic fields, Faraday's law, Lenz's law, and inductance.", },

  // English
  { id: "lec-eng-1", title: "Reading Comprehension Tips", subject: "english", topic: "Reading Comprehension", channel: "KIPS Official", youtubeId: "dRf2mZc4pPQ", duration: "30 min", description: "Strategies for tackling reading comprehension passages." },
  { id: "lec-eng-2", title: "Grammar Rules for MDCAT", subject: "english", topic: "Grammar", channel: "KIPS Virtual", youtubeId: "QpS0bVXJdKo", duration: "35 min", description: "Essential grammar rules and common error patterns." },
  { id: "lec-eng-3", title: "MDCAT English Vocabulary", subject: "english", topic: "Vocabulary", channel: "Medico Engineer", youtubeId: "fKXfDGtCJNk", duration: "28 min", description: "Top MDCAT vocabulary words, synonyms, and antonyms." },

  // Logical Reasoning
  { id: "lec-lr-1", title: "Logical Reasoning Basics", subject: "logical-reasoning", topic: "Logical Reasoning", channel: "PakMcqs", youtubeId: "N3tRFayqVtk", duration: "32 min", description: "Introduction to logical reasoning patterns for MDCAT." },
  { id: "lec-lr-2", title: "Number & Letter Series", subject: "logical-reasoning", topic: "Series", channel: "Maqsad", youtubeId: "Xu3jDbRzR4k", duration: "38 min", description: "Identifying patterns in number and letter sequences.", },
  { id: "lec-lr-3", title: "Analogy & Classification", subject: "logical-reasoning", topic: "Analogies", channel: "KIPS Virtual", youtubeId: "9d2YRJk9mXA", duration: "30 min", description: "Word and figure analogies with shortcut strategies.", },
  { id: "lec-lr-4", title: "Coding, Blood Relations & Direction", subject: "logical-reasoning", topic: "Logical Reasoning", channel: "PakMcqs", youtubeId: "kJKCFaR8KPg", duration: "40 min", description: "Coding-decoding, blood relations, and direction sense problems.", },
];

export function getLecturesBySubject(subjectId: string): LectureResource[] {
  return lectures.filter((l) => l.subject === subjectId);
}

export function getLectureById(id: string): LectureResource | undefined {
  return lectures.find((l) => l.id === id);
}
