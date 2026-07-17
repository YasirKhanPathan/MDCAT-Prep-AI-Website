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
      "Cell membrane structure",
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
      "Mutations and genetic disorders",
      "DNA replication and protein synthesis",
    ],
  },
  {
    id: "evolution",
    name: "Evolution",
    subtopics: [
      "Natural selection",
      "Darwin's theory",
      "Evidence for evolution",
      "Speciation",
      "Hardy-Weinberg principle",
    ],
  },
  {
    id: "ecology",
    name: "Ecology",
    subtopics: [
      "Ecosystem structure",
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
      "Transpiration",
      "Plant hormones",
      "Mineral nutrition",
    ],
  },
];

export const chemistryTopics: Topic[] = [
  {
    id: "atomic-structure",
    name: "Atomic Structure",
    subtopics: [
      "Atomic models (Bohr, Quantum)",
      "Electronic configuration",
      "Periodic table trends",
      "Isotopes and isobars",
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
      "Hybridization",
      "Intermolecular forces",
    ],
  },
  {
    id: "stoichiometry",
    name: "Stoichiometry",
    subtopics: [
      "Mole concept",
      "Avogadro's number",
      "Chemical equations balancing",
      "Limiting reagent",
      "Empirical and molecular formulas",
    ],
  },
  {
    id: "states-of-matter",
    name: "States of Matter",
    subtopics: [
      "Gas laws (Boyle, Charles, Ideal gas)",
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
      "pH and buffers",
      "Solubility equilibrium",
    ],
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    subtopics: [
      "Hydrocarbons (alkanes, alkenes, alkynes)",
      "Functional groups",
      "Alcohols, aldehydes, ketones",
      "Carboxylic acids and esters",
      "Amino acids and proteins",
      "Reactions and mechanisms",
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
      "Corrosion",
    ],
  },
  {
    id: "chemical-kinetics",
    name: "Chemical Kinetics",
    subtopics: [
      "Rate of reaction",
      "Rate laws",
      "Collision theory",
      "Activation energy",
      "Catalysts",
    ],
  },
];

export const physicsTopics: Topic[] = [
  {
    id: "vectors",
    name: "Vectors & Scalars",
    subtopics: [
      "Vector addition and subtraction",
      "Scalar and vector products",
      "Resolution of vectors",
      "Unit vectors",
    ],
  },
  {
    id: "newtons-laws",
    name: "Newton's Laws of Motion",
    subtopics: [
      "First law (inertia)",
      "Second law (F=ma)",
      "Third law (action-reaction)",
      "Friction (static and kinetic)",
      "Circular motion",
    ],
  },
  {
    id: "work-energy-power",
    name: "Work, Energy & Power",
    subtopics: [
      "Work done by constant and variable force",
      "Kinetic and potential energy",
      "Work-energy theorem",
      "Conservation of energy",
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
    name: "Waves & Oscillations",
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
      "Power in circuits",
    ],
  },
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    subtopics: [
      "Magnetic force on charges",
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
      "Mass-energy equivalence",
    ],
  },
];

export const englishTopics: Topic[] = [
  {
    id: "reading-comprehension",
    name: "Reading Comprehension",
    subtopics: [
      "Main idea and theme",
      "Inference and implication",
      "Vocabulary in context",
      "Author's tone and purpose",
      "Passage-based questions",
    ],
  },
  {
    id: "grammar",
    name: "Grammar & Sentence Structure",
    subtopics: [
      "Parts of speech",
      "Subject-verb agreement",
      "Tenses",
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
      "Confusing words",
    ],
  },
  {
    id: "sentence-correction",
    name: "Sentence Correction",
    subtopics: [
      "Identifying errors",
      "Choosing correct alternatives",
      "Improving sentences",
      "Parallel structure",
    ],
  },
];

export const logicalReasoningTopics: Topic[] = [
  {
    id: "series",
    name: "Number & Letter Series",
    subtopics: [
      "Arithmetic series",
      "Geometric series",
      "Mixed patterns",
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
      "Relationship types",
    ],
  },
  {
    id: "coding-decoding",
    name: "Coding-Decoding",
    subtopics: [
      "Letter coding",
      "Number coding",
      "Mixed coding",
      "Coding based on conditions",
    ],
  },
  {
    id: "blood-relations",
    name: "Blood Relations",
    subtopics: [
      "Direct relations",
      "Coded relations",
      "Family tree problems",
    ],
  },
  {
    id: "direction-sense",
    name: "Direction Sense",
    subtopics: [
      "Cardinal directions",
      "Shadow problems",
      "Distance and direction tracking",
    ],
  },
  {
    id: "syllogisms",
    name: "Syllogisms & Logic",
    subtopics: [
      "Statement and conclusions",
      "Statement and assumptions",
      "Cause and effect",
      "Course of action",
    ],
  },
];

export const subjects: Subject[] = [
  {
    id: "biology",
    name: "Biology",
    icon: "🧬",
    color: "#10b981",
    description: "Cell biology, genetics, ecology, and human physiology",
    topics: biologyTopics,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "⚗️",
    color: "#3b82f6",
    description: "Organic, inorganic, and physical chemistry",
    topics: chemistryTopics,
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    color: "#f59e0b",
    description: "Mechanics, waves, electricity, and modern physics",
    topics: physicsTopics,
  },
  {
    id: "english",
    name: "English",
    icon: "📝",
    color: "#8b5cf6",
    description: "Reading comprehension, grammar, and vocabulary",
    topics: englishTopics,
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    icon: "🧠",
    color: "#ef4444",
    description: "Series, analogies, coding, and analytical reasoning",
    topics: logicalReasoningTopics,
  },
];
