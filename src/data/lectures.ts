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
  { id: "lec-bio-2", title: "Genetics & DNA Replication", subject: "biology", topic: "Genetics", channel: "KIPS Virtual", youtubeId: "example1", duration: "50 min", description: "Mendelian genetics, DNA replication, and protein synthesis." },
  { id: "lec-bio-3", title: "Human Physiology - Digestive System", subject: "biology", topic: "Human Physiology", channel: "KIPS Official", youtubeId: "example2", duration: "40 min", description: "Complete digestive system anatomy and physiology." },
  { id: "lec-bio-4", title: "Enzymes and Their Functions", subject: "biology", topic: "Enzymes", channel: "KIPS Virtual", youtubeId: "example3", duration: "35 min", description: "Enzyme structure, kinetics, and inhibition types." },
  { id: "lec-bio-5", title: "Evolution & Natural Selection", subject: "biology", topic: "Evolution", channel: "KIPS Official", youtubeId: "example4", duration: "30 min", description: "Darwin's theory, evidence for evolution, and speciation." },

  // Chemistry
  { id: "lec-chem-1", title: "Atomic Structure Complete", subject: "chemistry", topic: "Atomic Structure", channel: "KIPS Official", youtubeId: "example5", duration: "45 min", description: "Bohr model, quantum numbers, and electronic configuration." },
  { id: "lec-chem-2", title: "Organic Chemistry Basics", subject: "chemistry", topic: "Organic Chemistry", channel: "KIPS Virtual", youtubeId: "example6", duration: "55 min", description: "Hydrocarbons, functional groups, and naming conventions." },
  { id: "lec-chem-3", title: "Chemical Equilibrium", subject: "chemistry", topic: "Chemical Equilibrium", channel: "KIPS Official", youtubeId: "example7", duration: "40 min", description: "Le Chatelier's principle, Kc, Kp, and pH calculations." },
  { id: "lec-chem-4", title: "Electrochemistry", subject: "chemistry", topic: "Electrochemistry", channel: "KIPS Virtual", youtubeId: "example8", duration: "35 min", description: "Galvanic cells, electrolysis, and Nernst equation." },

  // Physics
  { id: "lec-phys-1", title: "Newton's Laws of Motion", subject: "physics", topic: "Newton's Laws of Motion", channel: "KIPS Official", youtubeId: "example9", duration: "50 min", description: "All three laws with real-world examples and problem solving." },
  { id: "lec-phys-2", title: "Work, Energy & Power", subject: "physics", topic: "Work, Energy & Power", channel: "KIPS Virtual", youtubeId: "example10", duration: "45 min", description: "Kinetic energy, potential energy, and conservation laws." },
  { id: "lec-phys-3", title: "Electrostatics Complete", subject: "physics", topic: "Electrostatics", channel: "KIPS Official", youtubeId: "example11", duration: "55 min", description: "Coulomb's law, electric fields, and capacitance." },
  { id: "lec-phys-4", title: "Waves and Sound", subject: "physics", topic: "Waves & Oscillations", channel: "KIPS Virtual", youtubeId: "example12", duration: "40 min", description: "Wave properties, SHM, Doppler effect, and standing waves." },

  // English
  { id: "lec-eng-1", title: "Reading Comprehension Tips", subject: "english", topic: "Reading Comprehension", channel: "KIPS Official", youtubeId: "example13", duration: "30 min", description: "Strategies for tackling reading comprehension passages." },
  { id: "lec-eng-2", title: "Grammar Rules for MDCAT", subject: "english", topic: "Grammar", channel: "KIPS Virtual", youtubeId: "example14", duration: "35 min", description: "Essential grammar rules and common error patterns." },
];

export function getLecturesBySubject(subjectId: string): LectureResource[] {
  return lectures.filter((l) => l.subject === subjectId);
}

export function getLectureById(id: string): LectureResource | undefined {
  return lectures.find((l) => l.id === id);
}
