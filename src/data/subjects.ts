export interface Topic {
  id: string;
  name: string;
  subtopics: string[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  topics: Topic[];
}

export const biologyTopics: Topic[] = [
  {
    id: "cell-structure",
    name: "Cell Structure & Function",
    subtopics: [
      "Cell membrane structure and function",
      "Prokaryotic vs Eukaryotic cells",
      "Organelles and their functions",
      "Cell division (Mitosis & Meiosis)",
      "Cell cycle regulation",
    ],
  },
  {
    id: "biomolecules",
    name: "Biological Molecules",
    subtopics: [
      "Carbohydrates (mono, di, polysaccharides)",
      "Lipids (fats, phospholipids, steroids)",
      "Proteins (structure, enzymes)",
      "Nucleic acids (DNA & RNA)",
      "ATP and energy transfer",
    ],
  },
  {
    id: "enzymes",
    name: "Enzymes",
    subtopics: [
      "Enzyme structure and function",
      "Lock and key model",
      "Factors affecting enzyme activity",
      "Inhibition (competitive & non-competitive)",
      "Enzyme regulation",
    ],
  },
  {
    id: "genetics",
    name: "Genetics",
    subtopics: [
      "Mendel's laws of inheritance",
      "Monohybrid and dihybrid crosses",
      "Linkage and crossing over",
      "Sex-linked inheritance",
      "DNA replication and protein synthesis",
      "Mutations and genetic disorders",
    ],
  },
  {
    id: "evolution",
    name: "Evolution",
    subtopics: [
      "Natural selection",
      "Darwin's theory of evolution",
      "Evidence for evolution",
      "Speciation",
      "Hardy-Weinberg principle",
    ],
  },
  {
    id: "ecology",
    name: "Ecology",
    subtopics: [
      "Ecosystem structure and function",
      "Food chains and food webs",
      "Energy flow and nutrient cycling",
      "Population ecology",
      "Biodiversity and conservation",
      "Environmental issues",
    ],
  },
  {
    id: "human-physiology",
    name: "Human Physiology",
    subtopics: [
      "Digestive system",
      "Circulatory system",
      "Respiratory system",
      "Nervous system",
      "Endocrine system",
      "Excretory system",
      "Reproductive system",
      "Immune system",
    ],
  },
  {
    id: "plant-physiology",
    name: "Plant Physiology",
    subtopics: [
      "Photosynthesis",
      "Respiration in plants",
      "Transpiration and water transport",
      "Plant hormones and growth",
      "Mineral nutrition",
    ],
  },
];

export const chemistryTopics: Topic[] = [
  {
    id: "atomic-structure",
    name: "Atomic Structure",
    subtopics: [
      "Atomic models (Bohr, Quantum Mechanical)",
      "Electronic configuration",
      "Periodic table and periodic trends",
      "Isotopes, isobars, and isotones",
      "Quantum numbers",
    ],
  },
  {
    id: "chemical-bonding",
    name: "Chemical Bonding",
    subtopics: [
      "Ionic bonding",
      "Covalent bonding",
      "Metallic bonding",
      "VSEPR theory",
      "Hybridization (sp, sp2, sp3)",
      "Intermolecular forces",
    ],
  },
  {
    id: "stoichiometry",
    name: "Stoichiometry",
    subtopics: [
      "Mole concept",
      "Avogadro's number",
      "Balancing chemical equations",
      "Limiting reagent",
      "Empirical and molecular formulas",
    ],
  },
  {
    id: "states-of-matter",
    name: "States of Matter",
    subtopics: [
      "Gas laws (Boyle's, Charles's, Ideal Gas Law)",
      "Kinetic molecular theory",
      "Liquids and solids",
      "Phase transitions",
      "Real gases",
    ],
  },
  {
    id: "chemical-equilibrium",
    name: "Chemical Equilibrium",
    subtopics: [
      "Le Chatelier's principle",
      "Equilibrium constant (Kc, Kp)",
      "Acid-base equilibrium",
      "pH and buffer solutions",
      "Solubility product (Ksp)",
    ],
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    subtopics: [
      "Hydrocarbons (alkanes, alkenes, alkynes)",
      "Functional groups",
      "Alcohols, aldehydes, and ketones",
      "Carboxylic acids and esters",
      "Amino acids and proteins",
      "Organic reaction mechanisms",
    ],
  },
  {
    id: "electrochemistry",
    name: "Electrochemistry",
    subtopics: [
      "Redox reactions",
      "Galvanic cells",
      "Electrolysis",
      "Nernst equation",
      "Corrosion and its prevention",
    ],
  },
  {
    id: "chemical-kinetics",
    name: "Chemical Kinetics",
    subtopics: [
      "Rate of reaction",
      "Rate laws and rate constants",
      "Collision theory",
      "Activation energy",
      "Effect of catalysts",
    ],
  },
];

export const physicsTopics: Topic[] = [
  {
    id: "vectors",
    name: "Vectors and Scalars",
    subtopics: [
      "Vector addition and subtraction",
      "Scalar and vector products",
      "Resolution of vectors",
      "Unit vectors and notation",
    ],
  },
  {
    id: "newtons-laws",
    name: "Newton's Laws of Motion",
    subtopics: [
      "Newton's first law (Law of Inertia)",
      "Newton's second law (F = ma)",
      "Newton's third law (Action-Reaction)",
      "Friction (static and kinetic)",
      "Circular motion and centripetal force",
    ],
  },
  {
    id: "work-energy-power",
    name: "Work, Energy and Power",
    subtopics: [
      "Work done by constant and variable force",
      "Kinetic and potential energy",
      "Work-energy theorem",
      "Conservation of mechanical energy",
      "Power and efficiency",
    ],
  },
  {
    id: "rotational-motion",
    name: "Rotational Motion",
    subtopics: [
      "Moment of inertia",
      "Torque and angular momentum",
      "Rotational kinetic energy",
      "Rolling motion",
    ],
  },
  {
    id: "waves",
    name: "Waves and Oscillations",
    subtopics: [
      "Simple harmonic motion",
      "Wave properties (wavelength, frequency, amplitude)",
      "Transverse and longitudinal waves",
      "Sound waves",
      "Doppler effect",
      "Superposition and standing waves",
    ],
  },
  {
    id: "electrostatics",
    name: "Electrostatics",
    subtopics: [
      "Coulomb's law",
      "Electric field and field lines",
      "Electric potential and potential energy",
      "Capacitance and capacitors",
      "Dielectrics",
    ],
  },
  {
    id: "current-electricity",
    name: "Current Electricity",
    subtopics: [
      "Ohm's law",
      "Resistance and resistivity",
      "Series and parallel circuits",
      "Kirchhoff's laws",
      "Electrical power and energy",
    ],
  },
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    subtopics: [
      "Magnetic force on moving charges",
      "Lorentz force",
      "Electromagnetic induction",
      "Faraday's law",
      "Lenz's law",
    ],
  },
  {
    id: "modern-physics",
    name: "Modern Physics",
    subtopics: [
      "Photoelectric effect",
      "Bohr's atomic model",
      "X-rays",
      "Radioactivity and nuclear reactions",
      "Mass-energy equivalence (E = mc²)",
    ],
  },
];

export const englishTopics: Topic[] = [
  {
    id: "reading-comprehension",
    name: "Reading Comprehension",
    subtopics: [
      "Main idea identification",
      "Inference and implication",
      "Vocabulary in context",
      "Author's tone and purpose",
      "Passage-based questions",
    ],
  },
  {
    id: "grammar",
    name: "Grammar and Sentence Structure",
    subtopics: [
      "Parts of speech",
      "Subject-verb agreement",
      "Tenses (past, present, future)",
      "Active and passive voice",
      "Direct and indirect speech",
      "Error detection and correction",
    ],
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    subtopics: [
      "Synonyms and antonyms",
      "One-word substitutions",
      "Idioms and phrases",
      "Word analogies",
      "Confusing word pairs",
    ],
  },
  {
    id: "sentence-correction",
    name: "Sentence Correction",
    subtopics: [
      "Identifying grammatical errors",
      "Choosing correct alternatives",
      "Improving sentence structure",
      "Parallel construction",
    ],
  },
];

export const logicalReasoningTopics: Topic[] = [
  {
    id: "series",
    name: "Number and Letter Series",
    subtopics: [
      "Arithmetic sequences",
      "Geometric sequences",
      "Mixed pattern series",
      "Letter series",
      "Alphanumeric series",
    ],
  },
  {
    id: "analogies",
    name: "Analogies",
    subtopics: [
      "Word analogies",
      "Number analogies",
      "Figure analogies",
      "Relationship classification",
    ],
  },
  {
    id: "coding-decoding",
    name: "Coding-Decoding",
    subtopics: [
      "Letter coding",
      "Number coding",
      "Mixed coding",
      "Condition-based coding",
    ],
  },
  {
    id: "blood-relations",
    name: "Blood Relations",
    subtopics: [
      "Direct blood relations",
      "Coded blood relations",
      "Family tree construction",
    ],
  },
  {
    id: "direction-sense",
    name: "Direction Sense",
    subtopics: [
      "Cardinal and intermediate directions",
      "Shadow-based problems",
      "Distance and direction tracking",
    ],
  },
  {
    id: "syllogisms",
    name: "Syllogisms and Logic",
    subtopics: [
      "Statement and conclusions",
      "Statement and assumptions",
      "Cause and effect reasoning",
      "Course of action",
    ],
  },
];

export const subjects: Subject[] = [
  {
    id: "biology",
    name: "Biology",
    icon: "Dna",
    color: "#10b981",
    description: "Cell biology, genetics, ecology, human & plant physiology",
    topics: biologyTopics,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "FlaskConical",
    color: "#3b82f6",
    description: "Atomic structure, bonding, organic, and physical chemistry",
    topics: chemistryTopics,
  },
  {
    id: "physics",
    name: "Physics",
    icon: "Atom",
    color: "#f59e0b",
    description: "Mechanics, waves, electricity, and modern physics",
    topics: physicsTopics,
  },
  {
    id: "english",
    name: "English",
    icon: "BookOpen",
    color: "#8b5cf6",
    description: "Reading comprehension, grammar, and vocabulary",
    topics: englishTopics,
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    icon: "Brain",
    color: "#ef4444",
    description: "Series, analogies, coding, and analytical reasoning",
    topics: logicalReasoningTopics,
  },
];

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getTopicById(subjectId: string, topicId: string): Topic | undefined {
  const subject = getSubjectById(subjectId);
  return subject?.topics.find((t) => t.id === topicId);
}
