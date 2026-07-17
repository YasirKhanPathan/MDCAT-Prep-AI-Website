export interface PastPaperQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subject: string;
  topic: string;
}

export interface PastPaper {
  id: string;
  title: string;
  year: number;
  province: string;
  totalQuestions: number;
  timeLimit: number; // in minutes
  description: string;
  questions: PastPaperQuestion[];
}

// Sindh MDCAT 2024 - Biology Section (Sample)
const sindh2024Biology: PastPaperQuestion[] = [
  {
    id: "s24b1",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: ["Ribosome", "Mitochondria", "Golgi apparatus", "Lysosome"],
    correctIndex: 1,
    explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's supply of ATP through cellular respiration.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "s24b2",
    question: "The process of conversion of DNA to RNA is called:",
    options: ["Translation", "Transcription", "Replication", "Transformation"],
    correctIndex: 1,
    explanation: "Transcription is the process where DNA is used as a template to synthesize complementary RNA molecules.",
    subject: "Biology",
    topic: "Molecular Biology"
  },
  {
    id: "s24b3",
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
    correctIndex: 3,
    explanation: "Vitamin K is essential for the synthesis of several proteins required for blood clotting, including prothrombin.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "s24b4",
    question: "The enzyme responsible for unwinding DNA during replication is:",
    options: ["DNA polymerase", "Helicase", "Ligase", "Primase"],
    correctIndex: 1,
    explanation: "Helicase unwinds the double helix structure of DNA by breaking hydrogen bonds between base pairs during replication.",
    subject: "Biology",
    topic: "Molecular Biology"
  },
  {
    id: "s24b5",
    question: "Which blood group is considered the universal donor?",
    options: ["A+", "B+", "AB+", "O-"],
    correctIndex: 3,
    explanation: "O- blood group is the universal donor because it lacks A, B antigens and Rh factor, making it compatible with all blood types.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "s24b6",
    question: "The functional unit of the kidney is:",
    options: ["Nephron", "Alveoli", "Neuron", "Hepatocyte"],
    correctIndex: 0,
    explanation: "The nephron is the structural and functional unit of the kidney, responsible for filtering blood and producing urine.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "s24b7",
    question: "Which of the following is a characteristic of prokaryotic cells?",
    options: ["Membrane-bound nucleus", "Membrane-bound organelles", "Circular DNA", "Linear chromosomes"],
    correctIndex: 2,
    explanation: "Prokaryotic cells have circular DNA (not enclosed in a nucleus) and lack membrane-bound organelles.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "s24b8",
    question: "The greenhouse effect is primarily caused by which gas?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correctIndex: 2,
    explanation: "Carbon dioxide is the primary greenhouse gas that traps heat in the Earth's atmosphere, contributing to global warming.",
    subject: "Biology",
    topic: "Ecology"
  },
  {
    id: "s24b9",
    question: "Mendel's law of independent assortment states that:",
    options: ["Genes are always inherited together", "Alleles separate during gamete formation", "One gene can have multiple alleles", "Traits are always dominant"],
    correctIndex: 1,
    explanation: "The law of independent assortment states that alleles of different genes assort independently of one another during gamete formation.",
    subject: "Biology",
    topic: "Genetics"
  },
  {
    id: "s24b10",
    question: "The hormone insulin is produced by:",
    options: ["Liver", "Pancreas", "Kidney", "Adrenal gland"],
    correctIndex: 1,
    explanation: "Insulin is produced by the beta cells of the islets of Langerhans in the pancreas. It regulates blood glucose levels.",
    subject: "Biology",
    topic: "Human Physiology"
  }
];

// Sindh MDCAT 2024 - Chemistry Section (Sample)
const sindh2024Chemistry: PastPaperQuestion[] = [
  {
    id: "s24c1",
    question: "The pH of a neutral solution at 25°C is:",
    options: ["0", "7", "14", "1"],
    correctIndex: 1,
    explanation: "At 25°C, a neutral solution has a pH of 7. pH below 7 is acidic, above 7 is basic.",
    subject: "Chemistry",
    topic: "Acids, Bases and Salts"
  },
  {
    id: "s24c2",
    question: "Which of the following is an ionic compound?",
    options: ["H₂O", "NaCl", "CO₂", "CH₄"],
    correctIndex: 1,
    explanation: "NaCl (sodium chloride) is an ionic compound formed by the transfer of electrons between sodium and chlorine atoms.",
    subject: "Chemistry",
    topic: "Chemical Bonding"
  },
  {
    id: "s24c3",
    question: "The molecular mass of water (H₂O) is:",
    options: ["16 g/mol", "18 g/mol", "20 g/mol", "14 g/mol"],
    correctIndex: 1,
    explanation: "Water (H₂O) has molecular mass = 2(1) + 16 = 18 g/mol.",
    subject: "Chemistry",
    topic: "Stoichiometry"
  },
  {
    id: "s24c4",
    question: "Which gas law states that pressure is inversely proportional to volume at constant temperature?",
    options: ["Charles's law", "Boyle's law", "Avogadro's law", "Dalton's law"],
    correctIndex: 1,
    explanation: "Boyle's law states that for a given mass of gas at constant temperature, pressure is inversely proportional to volume (P ∝ 1/V).",
    subject: "Chemistry",
    topic: "States of Matter"
  },
  {
    id: "s24c5",
    question: "The oxidation state of oxygen in most compounds is:",
    options: ["+2", "-2", "+1", "-1"],
    correctIndex: 1,
    explanation: "Oxygen typically has an oxidation state of -2 in most compounds (except peroxides where it's -1).",
    subject: "Chemistry",
    topic: "Redox Reactions"
  },
  {
    id: "s24c6",
    question: "Which functional group is present in alcohols?",
    options: ["-CHO", "-COOH", "-OH", "-NH₂"],
    correctIndex: 2,
    explanation: "Alcohols contain the hydroxyl (-OH) functional group bonded to a carbon atom.",
    subject: "Chemistry",
    topic: "Organic Chemistry"
  },
  {
    id: "s24c7",
    question: "The number of moles in 36g of water (H₂O) is:",
    options: ["1 mole", "2 moles", "3 moles", "0.5 mole"],
    correctIndex: 1,
    explanation: "Number of moles = mass/molar mass = 36/18 = 2 moles.",
    subject: "Chemistry",
    topic: "Stoichiometry"
  },
  {
    id: "s24c8",
    question: "Which of the following is a strong electrolyte?",
    options: ["Acetic acid", "Ethanol", "Sodium chloride", "Glucose"],
    correctIndex: 2,
    explanation: "Sodium chloride (NaCl) is a strong electrolyte that completely dissociates into ions in aqueous solution.",
    subject: "Chemistry",
    topic: "Electrochemistry"
  },
  {
    id: "s24c9",
    question: "The IUPAC name of CH₃CH₂OH is:",
    options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
    correctIndex: 1,
    explanation: "CH₃CH₂OH has 2 carbon atoms in the chain with an -OH group, so it's ethanol (ethane + ol).",
    subject: "Chemistry",
    topic: "Organic Chemistry"
  },
  {
    id: "s24c10",
    question: "Which particle is present in the nucleus of an atom?",
    options: ["Electron", "Proton", "Photon", "Neutrino"],
    correctIndex: 1,
    explanation: "Protons (and neutrons) are present in the nucleus of an atom. Electrons orbit around the nucleus.",
    subject: "Chemistry",
    topic: "Atomic Structure"
  }
];

// Sindh MDCAT 2024 - Physics Section (Sample)
const sindh2024Physics: PastPaperQuestion[] = [
  {
    id: "s24p1",
    question: "The SI unit of force is:",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    correctIndex: 2,
    explanation: "The SI unit of force is Newton (N). 1 N = 1 kg·m/s².",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "s24p2",
    question: "According to Newton's second law, F = ma. If mass is doubled and acceleration is halved, the force:",
    options: ["Doubles", "Halves", "Remains same", "Quadruples"],
    correctIndex: 2,
    explanation: "F = ma. If m → 2m and a → a/2, then F' = (2m)(a/2) = ma = F. Force remains the same.",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "s24p3",
    question: "The velocity of sound in air is approximately:",
    options: ["340 m/s", "300 m/s", "400 m/s", "250 m/s"],
    correctIndex: 0,
    explanation: "The speed of sound in air at room temperature (25°C) is approximately 340 m/s.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "s24p4",
    question: "The focal length of a concave mirror is:",
    options: ["Positive", "Negative", "Zero", "Infinity"],
    correctIndex: 1,
    explanation: "The focal length of a concave mirror is negative by sign convention.",
    subject: "Physics",
    topic: "Light"
  },
  {
    id: "s24p5",
    question: "The unit of electric current is:",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctIndex: 1,
    explanation: "The SI unit of electric current is Ampere (A).",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "s24p6",
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Mass", "Displacement"],
    correctIndex: 3,
    explanation: "Displacement is a vector quantity as it has both magnitude and direction.",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "s24p7",
    question: "The energy stored in a capacitor is given by:",
    options: ["CV", "½CV²", "C/V", "V/C"],
    correctIndex: 1,
    explanation: "Energy stored in a capacitor = ½CV², where C is capacitance and V is voltage.",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "s24p8",
    question: "The frequency of AC mains in Pakistan is:",
    options: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
    correctIndex: 0,
    explanation: "The frequency of alternating current (AC) mains in Pakistan is 50 Hz.",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "s24p9",
    question: "The work done in moving a charge of 2C through a potential difference of 5V is:",
    options: ["10 J", "2.5 J", "7 J", "3 J"],
    correctIndex: 0,
    explanation: "Work done = Q × V = 2 × 5 = 10 Joules.",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "s24p10",
    question: "The acceleration due to gravity on the Moon is approximately:",
    options: ["9.8 m/s²", "1.6 m/s²", "3.7 m/s²", "0.5 m/s²"],
    correctIndex: 1,
    explanation: "The acceleration due to gravity on the Moon is approximately 1.6 m/s², about 1/6th of Earth's gravity.",
    subject: "Physics",
    topic: "Gravitation"
  }
];

// Combined Sindh MDCAT 2024
const sindhMDCAT2024: PastPaper = {
  id: "sindh-mdcat-2024",
  title: "Sindh MDCAT 2024",
  year: 2024,
  province: "Sindh",
  totalQuestions: 30,
  timeLimit: 45,
  description: "Past paper from Sindh Medical & Dental College Admission Test 2024. Includes Biology, Chemistry, and Physics sections.",
  questions: [...sindh2024Biology, ...sindh2024Chemistry, ...sindh2024Physics]
};

// Punjab MDCAT 2024 - Biology Section (Sample)
const punjab2024Biology: PastPaperQuestion[] = [
  {
    id: "p24b1",
    question: "The organelle responsible for protein synthesis is:",
    options: ["Mitochondria", "Ribosome", "Lysosome", "Golgi body"],
    correctIndex: 1,
    explanation: "Ribosomes are the sites of protein synthesis in the cell.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "p24b2",
    question: "Which of the following is a monosaccharide?",
    options: ["Sucrose", "Lactose", "Glucose", "Starch"],
    correctIndex: 2,
    explanation: "Glucose is a monosaccharide (simple sugar). Sucrose and lactose are disaccharides; starch is a polysaccharide.",
    subject: "Biology",
    topic: "Biological Molecules"
  },
  {
    id: "p24b3",
    question: "The site of photosynthesis in plant cells is:",
    options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
    correctIndex: 1,
    explanation: "Chloroplasts are the organelles where photosynthesis occurs in plant cells.",
    subject: "Biology",
    topic: "Plant Physiology"
  },
  {
    id: "p24b4",
    question: "The function of white blood cells is to:",
    options: ["Transport oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
    correctIndex: 1,
    explanation: "White blood cells (leukocytes) are part of the immune system and defend the body against infections.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "p24b5",
    question: "DNA replication is described as semi-conservative because:",
    options: ["Only one strand is copied", "Each new DNA has one old and one new strand", "Both strands are completely new", "The process occurs in the cytoplasm"],
    correctIndex: 1,
    explanation: "In semi-conservative replication, each new DNA molecule consists of one original (parental) strand and one newly synthesized strand.",
    subject: "Biology",
    topic: "Molecular Biology"
  },
  {
    id: "p24b6",
    question: "Which enzyme breaks down starch into maltose?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    correctIndex: 1,
    explanation: "Amylase (salivary and pancreatic) breaks down starch into maltose during digestion.",
    subject: "Biology",
    topic: "Enzymes"
  },
  {
    id: "p24b7",
    question: "The process by which water moves from high concentration to low concentration through a semipermeable membrane is:",
    options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],
    correctIndex: 1,
    explanation: "Osmosis is the movement of water molecules from a region of high water concentration to low water concentration through a semipermeable membrane.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "p24b8",
    question: "The average human body temperature is:",
    options: ["35°C", "37°C", "39°C", "36.5°C"],
    correctIndex: 1,
    explanation: "The normal average human body temperature is approximately 37°C (98.6°F).",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "p24b9",
    question: "Which of the following is NOT a function of the liver?",
    options: ["Bile production", "Detoxification", "Insulin production", "Glycogen storage"],
    correctIndex: 2,
    explanation: "Insulin is produced by the pancreas, not the liver. The liver produces bile, detoxifies chemicals, and stores glycogen.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "p24b10",
    question: "The theory of natural selection was proposed by:",
    options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Koch"],
    correctIndex: 1,
    explanation: "Charles Darwin proposed the theory of natural selection in his book 'On the Origin of Species' (1859).",
    subject: "Biology",
    topic: "Evolution"
  }
];

// Punjab MDCAT 2024 - Chemistry Section (Sample)
const punjab2024Chemistry: PastPaperQuestion[] = [
  {
    id: "p24c1",
    question: "The atomic number of an element represents the number of:",
    options: ["Neutrons", "Protons", "Electrons in outer shell", "Total electrons"],
    correctIndex: 1,
    explanation: "Atomic number = number of protons in the nucleus of an atom.",
    subject: "Chemistry",
    topic: "Atomic Structure"
  },
  {
    id: "p24c2",
    question: "Which of the following has the highest electronegativity?",
    options: ["Sodium", "Magnesium", "Chlorine", "Argon"],
    correctIndex: 2,
    explanation: "Chlorine has the highest electronegativity (3.0) among the given elements. Electronegativity increases across a period.",
    subject: "Chemistry",
    topic: "Periodic Table"
  },
  {
    id: "p24c3",
    question: "The hybridization of carbon in methane (CH₄) is:",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correctIndex: 2,
    explanation: "In methane (CH₄), carbon forms 4 sigma bonds with 4 hydrogen atoms, requiring sp³ hybridization.",
    subject: "Chemistry",
    topic: "Chemical Bonding"
  },
  {
    id: "p24c4",
    question: "Which of the following is a strong acid?",
    options: ["Acetic acid", "Hydrochloric acid", "Carbonic acid", "Phosphoric acid"],
    correctIndex: 1,
    explanation: "Hydrochloric acid (HCl) is a strong acid that completely dissociates in water.",
    subject: "Chemistry",
    topic: "Acids, Bases and Salts"
  },
  {
    id: "p24c5",
    question: "The electronic configuration of sodium (Na) is:",
    options: ["2,8,1", "2,8,2", "2,8,8,1", "2,2,8,1"],
    correctIndex: 0,
    explanation: "Sodium (atomic number 11) has electronic configuration: 2, 8, 1 (K=2, L=8, M=1).",
    subject: "Chemistry",
    topic: "Atomic Structure"
  },
  {
    id: "p24c6",
    question: "The process of coating iron with zinc to prevent rusting is called:",
    options: ["Galvanization", "Electroplating", "Annealing", "Tempering"],
    correctIndex: 0,
    explanation: "Galvanization is the process of applying a protective zinc coating to iron or steel to prevent rusting.",
    subject: "Chemistry",
    topic: "Chemical Industry"
  },
  {
    id: "p24c7",
    question: "Which of the following is an exothermic reaction?",
    options: ["Melting of ice", "Evaporation of water", "Burning of natural gas", "Photosynthesis"],
    correctIndex: 2,
    explanation: "Burning of natural gas (combustion) releases heat energy, making it an exothermic reaction.",
    subject: "Chemistry",
    topic: "Chemical Energetics"
  },
  {
    id: "p24c8",
    question: "The formula of sodium oxide is:",
    options: ["NaO", "Na₂O", "NaO₂", "Na₂O₂"],
    correctIndex: 1,
    explanation: "Sodium (Na⁺) has +1 charge and oxide (O²⁻) has -2 charge. Two sodium ions combine with one oxide ion: Na₂O.",
    subject: "Chemistry",
    topic: "Chemical Bonding"
  },
  {
    id: "p24c9",
    question: "The number of significant figures in 0.00450 is:",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "Leading zeros are not significant. The significant figures are 4, 5, and the trailing zero = 3 significant figures.",
    subject: "Chemistry",
    topic: "Measurement"
  },
  {
    id: "p24c10",
    question: "Which of the following is an ester?",
    options: ["CH₃COOH", "CH₃COOCH₃", "CH₃OH", "CH₃CHO"],
    correctIndex: 1,
    explanation: "CH₃COOCH₃ (methyl acetate) is an ester, formed from the reaction of acetic acid with methanol.",
    subject: "Chemistry",
    topic: "Organic Chemistry"
  }
];

// Punjab MDCAT 2024 - Physics Section (Sample)
const punjab2024Physics: PastPaperQuestion[] = [
  {
    id: "p24p1",
    question: "The momentum of a body is defined as:",
    options: ["Mass × Acceleration", "Mass × Velocity", "Force × Time", "Force × Distance"],
    correctIndex: 1,
    explanation: "Momentum (p) = mass (m) × velocity (v). It is a vector quantity.",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "p24p2",
    question: "The SI unit of energy is:",
    options: ["Watt", "Joule", "Newton", "Pascal"],
    correctIndex: 1,
    explanation: "The SI unit of energy is Joule (J). 1 J = 1 N·m.",
    subject: "Physics",
    topic: "Energy, Power and Efficiency"
  },
  {
    id: "p24p3",
    question: "The phenomenon of bending of light around corners is called:",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    correctIndex: 2,
    explanation: "Diffraction is the bending and spreading of light waves when they encounter an obstacle or pass through a narrow opening.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "p24p4",
    question: "Which of the following materials is a conductor of electricity?",
    options: ["Rubber", "Glass", "Copper", "Plastic"],
    correctIndex: 2,
    explanation: "Copper is an excellent conductor of electricity due to the presence of free electrons.",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "p24p5",
    question: "The time period of a simple pendulum depends on:",
    options: ["Mass of the bob", "Length of the pendulum", "Amplitude of swing", "Both mass and length"],
    correctIndex: 1,
    explanation: "The time period of a simple pendulum (T = 2π√(L/g)) depends only on the length of the pendulum and acceleration due to gravity.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "p24p6",
    question: "The device used to measure atmospheric pressure is:",
    options: ["Thermometer", "Barometer", "Manometer", "Hygrometer"],
    correctIndex: 1,
    explanation: "A barometer is used to measure atmospheric pressure. It was invented by Evangelista Torricelli.",
    subject: "Physics",
    topic: "Properties of Matter"
  },
  {
    id: "p24p7",
    question: "Which of the following is a renewable source of energy?",
    options: ["Coal", "Natural gas", "Solar energy", "Petroleum"],
    correctIndex: 2,
    explanation: "Solar energy is a renewable source of energy as it is naturally replenished and will not run out.",
    subject: "Physics",
    topic: "Nuclear Physics"
  },
  {
    id: "p24p8",
    question: "The resistance of a wire is directly proportional to:",
    options: ["Cross-sectional area", "Length", "Temperature", "Both length and temperature"],
    correctIndex: 1,
    explanation: "Resistance (R) is directly proportional to length (L) and inversely proportional to cross-sectional area (A): R = ρL/A.",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "p24p9",
    question: "The image formed by a plane mirror is:",
    options: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
    correctIndex: 1,
    explanation: "A plane mirror always forms a virtual, erect (upright), and laterally inverted image of the same size as the object.",
    subject: "Physics",
    topic: "Light"
  },
  {
    id: "p24p10",
    question: "The nuclear fusion reaction powers the:",
    options: ["Nuclear reactors", "Sun and stars", "Nuclear bombs only", "Radioactive decay"],
    correctIndex: 1,
    explanation: "Nuclear fusion is the process that powers the Sun and other stars, where hydrogen nuclei fuse to form helium.",
    subject: "Physics",
    topic: "Nuclear Physics"
  }
];

// Combined Punjab MDCAT 2024
const punjabMDCAT2024: PastPaper = {
  id: "punjab-mdcat-2024",
  title: "Punjab MDCAT 2024",
  year: 2024,
  province: "Punjab",
  totalQuestions: 30,
  timeLimit: 45,
  description: "Past paper from Punjab Medical & Dental College Admission Test 2024. Includes Biology, Chemistry, and Physics sections.",
  questions: [...punjab2024Biology, ...punjab2024Chemistry, ...punjab2024Physics]
};

// KPK MDCAT 2024 - Biology Section (Sample)
const kpk2024Biology: PastPaperQuestion[] = [
  {
    id: "k24b1",
    question: "The basic structural unit of life is:",
    options: ["Tissue", "Organ", "Cell", "Organ system"],
    correctIndex: 2,
    explanation: "The cell is the basic structural and functional unit of all living organisms.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "k24b2",
    question: "Which of the following is a communicable disease?",
    options: ["Diabetes", "Hypertension", "Tuberculosis", "Cancer"],
    correctIndex: 2,
    explanation: "Tuberculosis (TB) is a communicable disease caused by Mycobacterium tuberculosis that spreads through air.",
    subject: "Biology",
    topic: "Health and Disease"
  },
  {
    id: "k24b3",
    question: "The process of cell division that produces identical daughter cells is:",
    options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
    correctIndex: 1,
    explanation: "Mitosis produces two genetically identical daughter cells from a single parent cell.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "k24b4",
    question: "Which organelle is responsible for photosynthesis?",
    options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
    correctIndex: 1,
    explanation: "Chloroplasts contain chlorophyll and are the sites of photosynthesis in plant cells.",
    subject: "Biology",
    topic: "Plant Physiology"
  },
  {
    id: "k24b5",
    question: "The hormone that regulates blood sugar levels is:",
    options: ["Thyroxine", "Insulin", "Adrenaline", "Growth hormone"],
    correctIndex: 1,
    explanation: "Insulin, produced by the pancreas, regulates blood sugar levels by facilitating glucose uptake by cells.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "k24b6",
    question: "Which of the following is a renewable resource?",
    options: ["Coal", "Natural gas", "Solar energy", "Petroleum"],
    correctIndex: 2,
    explanation: "Solar energy is a renewable resource as it is naturally replenished and will not run out.",
    subject: "Biology",
    topic: "Ecology"
  },
  {
    id: "k24b7",
    question: "The powerhouse of the cell is:",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correctIndex: 2,
    explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP through cellular respiration.",
    subject: "Biology",
    topic: "Cell Biology"
  },
  {
    id: "k24b8",
    question: "Which blood vessels carry blood away from the heart?",
    options: ["Veins", "Arteries", "Capillaries", "Venules"],
    correctIndex: 1,
    explanation: "Arteries carry blood away from the heart. The largest artery is the aorta.",
    subject: "Biology",
    topic: "Human Physiology"
  },
  {
    id: "k24b9",
    question: "The scientific name of an organism consists of:",
    options: ["One word", "Two words", "Three words", "Four words"],
    correctIndex: 1,
    explanation: "Binomial nomenclature (proposed by Linnaeus) gives each organism a two-part scientific name: Genus + species.",
    subject: "Biology",
    topic: "Classification"
  },
  {
    id: "k24b10",
    question: "The process of digestion begins in:",
    options: ["Stomach", "Small intestine", "Mouth", "Esophagus"],
    correctIndex: 2,
    explanation: "Digestion begins in the mouth where salivary amylase breaks down starch into maltose.",
    subject: "Biology",
    topic: "Human Physiology"
  }
];

// KPK MDCAT 2024 - Chemistry Section (Sample)
const kpk2024Chemistry: PastPaperQuestion[] = [
  {
    id: "k24c1",
    question: "The number of electrons in a sodium atom (Na) is:",
    options: ["10", "11", "12", "23"],
    correctIndex: 1,
    explanation: "Sodium has atomic number 11, which means it has 11 protons and 11 electrons in a neutral atom.",
    subject: "Chemistry",
    topic: "Atomic Structure"
  },
  {
    id: "k24c2",
    question: "Which of the following is a covalent compound?",
    options: ["NaCl", "KBr", "H₂O", "CaO"],
    correctIndex: 2,
    explanation: "H₂O (water) is a covalent compound formed by sharing electrons between hydrogen and oxygen atoms.",
    subject: "Chemistry",
    topic: "Chemical Bonding"
  },
  {
    id: "k24c3",
    question: "The chemical formula of baking soda is:",
    options: ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
    correctIndex: 1,
    explanation: "Baking soda is sodium bicarbonate (NaHCO₃). It is used in baking as a leavening agent.",
    subject: "Chemistry",
    topic: "Chemical Industry"
  },
  {
    id: "k24c4",
    question: "Which of the following is a physical change?",
    options: ["Burning of wood", "Rusting of iron", "Melting of ice", "Cooking of food"],
    correctIndex: 2,
    explanation: "Melting of ice is a physical change because the chemical composition (H₂O) remains the same.",
    subject: "Chemistry",
    topic: "Chemical Change"
  },
  {
    id: "k24c5",
    question: "The pH of pure water is:",
    options: ["0", "7", "14", "1"],
    correctIndex: 1,
    explanation: "Pure water has a pH of 7 at 25°C, which is neutral.",
    subject: "Chemistry",
    topic: "Acids, Bases and Salts"
  },
  {
    id: "k24c6",
    question: "Which of the following metals is the most reactive?",
    options: ["Gold", "Silver", "Sodium", "Copper"],
    correctIndex: 2,
    explanation: "Sodium is the most reactive among the given metals. It reacts violently with water.",
    subject: "Chemistry",
    topic: "Periodic Table"
  },
  {
    id: "k24c7",
    question: "The molar mass of carbon dioxide (CO₂) is:",
    options: ["28 g/mol", "44 g/mol", "32 g/mol", "16 g/mol"],
    correctIndex: 1,
    explanation: "CO₂ molar mass = 12 + 2(16) = 44 g/mol.",
    subject: "Chemistry",
    topic: "Stoichiometry"
  },
  {
    id: "k24c8",
    question: "Which of the following is a natural polymer?",
    options: ["Nylon", "Polyethylene", "DNA", "Teflon"],
    correctIndex: 2,
    explanation: "DNA is a natural polymer (nucleic acid) made up of nucleotide monomers.",
    subject: "Chemistry",
    topic: "Organic Chemistry"
  },
  {
    id: "k24c9",
    question: "The process of converting a solid directly to gas is called:",
    options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
    correctIndex: 2,
    explanation: "Sublimation is the transition of a substance directly from solid to gas without passing through the liquid phase.",
    subject: "Chemistry",
    topic: "States of Matter"
  },
  {
    id: "k24c10",
    question: "Which of the following is used as a moderator in nuclear reactors?",
    options: ["Uranium", "Cadmium", "Graphite", "Cobalt"],
    correctIndex: 2,
    explanation: "Graphite is used as a moderator in nuclear reactors to slow down neutrons for sustaining the chain reaction.",
    subject: "Chemistry",
    topic: "Nuclear Chemistry"
  }
];

// KPK MDCAT 2024 - Physics Section (Sample)
const kpk2024Physics: PastPaperQuestion[] = [
  {
    id: "k24p1",
    question: "The displacement-time graph of a uniformly accelerated motion is:",
    options: ["Straight line", "Parabola", "Hyperbola", "Circle"],
    correctIndex: 1,
    explanation: "For uniformly accelerated motion, displacement (s) = ut + ½at², which gives a parabolic graph.",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "k24p2",
    question: "The principle of moments states that:",
    options: ["Force = Mass × Acceleration", "Clockwise moments = Anticlockwise moments", "Energy = Mass × Speed²", "Pressure = Force / Area"],
    correctIndex: 1,
    explanation: "The principle of moments states that for a body in equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments.",
    subject: "Physics",
    topic: "Turning Effects of Forces"
  },
  {
    id: "k24p3",
    question: "The refractive index of water is approximately:",
    options: ["1.0", "1.33", "1.5", "2.0"],
    correctIndex: 1,
    explanation: "The refractive index of water is approximately 1.33, meaning light travels 1.33 times slower in water than in vacuum.",
    subject: "Physics",
    topic: "Light"
  },
  {
    id: "k24p4",
    question: "Which of the following is NOT a vector quantity?",
    options: ["Force", "Velocity", "Temperature", "Momentum"],
    correctIndex: 2,
    explanation: "Temperature is a scalar quantity as it has only magnitude and no direction.",
    subject: "Physics",
    topic: "Forces and Motion"
  },
  {
    id: "k24p5",
    question: "The capacity of a conductor to store charge is called:",
    options: ["Resistance", "Capacitance", "Inductance", "Conductance"],
    correctIndex: 1,
    explanation: "Capacitance is the ability of a conductor to store electric charge. It is measured in Farads (F).",
    subject: "Physics",
    topic: "Electricity"
  },
  {
    id: "k24p6",
    question: "The phenomenon responsible for the blue color of the sky is:",
    options: ["Reflection", "Refraction", "Scattering", "Interference"],
    correctIndex: 2,
    explanation: "The blue color of the sky is due to Rayleigh scattering, where shorter blue wavelengths are scattered more than other colors.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "k24p7",
    question: "Which of the following has the highest frequency?",
    options: ["Red light", "Green light", "Blue light", "Violet light"],
    correctIndex: 3,
    explanation: "Violet light has the highest frequency (and shortest wavelength) in the visible spectrum.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "k24p8",
    question: "The efficiency of a machine is defined as:",
    options: ["Input energy / Output energy", "Output energy / Input energy", "Input force / Output force", "Distance moved / Time taken"],
    correctIndex: 1,
    explanation: "Efficiency = (Useful output energy / Total input energy) × 100%. It is always less than 100% due to energy losses.",
    subject: "Physics",
    topic: "Energy, Power and Efficiency"
  },
  {
    id: "k24p9",
    question: "The unit of frequency is:",
    options: ["Meter", "Second", "Hertz", "Newton"],
    correctIndex: 2,
    explanation: "The SI unit of frequency is Hertz (Hz), where 1 Hz = 1 cycle per second.",
    subject: "Physics",
    topic: "Waves"
  },
  {
    id: "k24p10",
    question: "Which of the following is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
    correctIndex: 1,
    explanation: "An ammeter is used to measure electric current. It is connected in series in the circuit.",
    subject: "Physics",
    topic: "Electricity"
  }
];

// Combined KPK MDCAT 2024
const kpkMDCAT2024: PastPaper = {
  id: "kpk-mdcat-2024",
  title: "KPK MDCAT 2024",
  year: 2024,
  province: "KPK",
  totalQuestions: 30,
  timeLimit: 45,
  description: "Past paper from Khyber Medical University MDCAT 2024. Includes Biology, Chemistry, and Physics sections.",
  questions: [...kpk2024Biology, ...kpk2024Chemistry, ...kpk2024Physics]
};

// Export all past papers
export const pastPapers: PastPaper[] = [
  sindhMDCAT2024,
  punjabMDCAT2024,
  kpkMDCAT2024
];

// Helper function to get past paper by ID
export function getPastPaperById(id: string): PastPaper | undefined {
  return pastPapers.find(paper => paper.id === id);
}

// Helper function to get all past papers
export function getAllPastPapers(): PastPaper[] {
  return pastPapers;
}
