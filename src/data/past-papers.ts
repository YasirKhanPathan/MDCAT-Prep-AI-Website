import { Question } from "@/components/MCQCard";

export interface PastPaper {
  id: string;
  title: string;
  year: string;
  province: string;
  totalMCQs: number;
  duration: string;
  pdfUrl: string;
  pdfSource: string;
  description: string;
  type: "real-pdf" | "real-solvable";
  questions?: Question[];
}

export const pastPapers: PastPaper[] = [
  // SOLVABLE PAST PAPERS (AI-generated based on real exam patterns)
  {
    id: "pp-sindh-2024-solvable",
    title: "Sindh MDCAT 2024 (Practice Set)",
    year: "2024",
    province: "Sindh",
    totalMCQs: 20,
    duration: "25 min",
    pdfUrl: "https://medicoengineer.com/material/past-papers",
    pdfSource: "Medico Engineer",
    description: "Practice set based on Sindh MDCAT 2024 exam pattern. Solve in-app with timer.",
    type: "real-solvable",
    questions: [
      { question: "Which organelle is known as the powerhouse of the cell?", options: ["Ribosome", "Mitochondria", "Golgi apparatus", "Lysosome"], correctIndex: 1, explanation: "Mitochondria generate ATP through oxidative phosphorylation, providing energy for cellular processes." },
      { question: "The pH of human blood is approximately:", options: ["6.4", "7.0", "7.4", "8.0"], correctIndex: 2, explanation: "Human blood pH is maintained at approximately 7.35-7.45 by buffer systems." },
      { question: "Which vitamin is essential for blood clotting?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], correctIndex: 3, explanation: "Vitamin K is essential for the synthesis of clotting factors II, VII, IX, and X." },
      { question: "The SI unit of force is:", options: ["Joule", "Watt", "Newton", "Pascal"], correctIndex: 2, explanation: "Newton (N) is the SI unit of force. 1 N = 1 kg × 1 m/s²." },
      { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correctIndex: 2, explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere." },
      { question: "The atomic number of an element represents:", options: ["Number of neutrons", "Number of protons", "Mass number", "Number of electrons only"], correctIndex: 1, explanation: "Atomic number = number of protons in the nucleus of an atom." },
      { question: "Which of the following is a vector quantity?", options: ["Speed", "Distance", "Mass", "Velocity"], correctIndex: 3, explanation: "Velocity has both magnitude and direction, making it a vector quantity." },
      { question: "The powerhouse of the cell is also known as:", options: ["Endoplasmic reticulum", "Chloroplast", "Mitochondria", "Ribosome"], correctIndex: 2, explanation: "Mitochondria are called the powerhouse because they produce ATP through cellular respiration." },
      { question: "Which hormone is produced by the pancreas?", options: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"], correctIndex: 1, explanation: "Insulin is produced by beta cells of the islets of Langerhans in the pancreas." },
      { question: "The value of acceleration due to gravity on Earth is approximately:", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"], correctIndex: 1, explanation: "g ≈ 9.8 m/s² on Earth's surface. It varies slightly with location and altitude." },
      { question: "Which bond is formed by the sharing of electrons?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], correctIndex: 1, explanation: "Covalent bonds form when atoms share one or more pairs of electrons." },
      { question: "The function of red blood cells is to:", options: ["Fight infections", "Carry oxygen", "Clot blood", "Produce hormones"], correctIndex: 1, explanation: "RBCs contain hemoglobin which binds and transports oxygen from lungs to tissues." },
      { question: "Ohm's law states that:", options: ["V = IR", "V = I/R", "V = I²R", "V = IR²"], correctIndex: 0, explanation: "Ohm's law: Voltage (V) = Current (I) × Resistance (R) for ohmic conductors." },
      { question: "Which process converts glucose to pyruvate?", options: ["Krebs cycle", "Glycolysis", "Electron transport chain", "Fermentation"], correctIndex: 1, explanation: "Glycolysis is the first step of cellular respiration, converting glucose to 2 pyruvate molecules." },
      { question: "The Mendelian ratio for a dihybrid cross F2 generation is:", options: ["3:1", "9:3:3:1", "1:1", "2:1"], correctIndex: 1, explanation: "Dihybrid cross F2 ratio is 9:3:3:1 for two independently assorting traits." },
      { question: "Which wave property is measured in Hertz?", options: ["Wavelength", "Amplitude", "Frequency", "Velocity"], correctIndex: 2, explanation: "Frequency is measured in Hertz (Hz), representing the number of complete cycles per second." },
      { question: "The smallest unit of life is:", options: ["Tissue", "Organ", "Cell", "Organ system"], correctIndex: 2, explanation: "The cell is the basic structural and functional unit of all living organisms." },
      { question: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], correctIndex: 2, explanation: "During photosynthesis, CO₂ and H₂O are converted to glucose and O₂." },
      { question: "The SI unit of electric current is:", options: ["Volt", "Ampere", "Ohm", "Watt"], correctIndex: 1, explanation: "Ampere (A) is the SI unit of electric current." },
      { question: "DNA stands for:", options: ["Deoxyribonucleic acid", "Dinitrogen acid", "Deoxyribose nucleic agent", "Dynamic nucleic acid"], correctIndex: 0, explanation: "DNA = Deoxyribonucleic Acid. It carries genetic information in all living organisms." },
    ],
  },
  {
    id: "pp-punjab-2024-solvable",
    title: "Punjab MDCAT 2024 (Practice Set)",
    year: "2024",
    province: "Punjab",
    totalMCQs: 20,
    duration: "25 min",
    pdfUrl: "https://medicoengineer.com/material/past-papers",
    pdfSource: "Medico Engineer",
    description: "Practice set based on Punjab MDCAT 2024 exam pattern conducted by UHS.",
    type: "real-solvable",
    questions: [
      { question: "The enzyme that unwinds DNA during replication is:", options: ["DNA polymerase", "Helicase", "Ligase", "Primase"], correctIndex: 1, explanation: "Helicase unwinds the double helix by breaking hydrogen bonds between base pairs." },
      { question: "Which organelle is responsible for protein synthesis?", options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Nucleus"], correctIndex: 1, explanation: "Ribosomes are the sites of protein synthesis where amino acids are assembled into polypeptides." },
      { question: "The formula for kinetic energy is:", options: ["mv", "½mv²", "mgh", "Fd"], correctIndex: 1, explanation: "KE = ½mv² where m = mass and v = velocity." },
      { question: "Which acid is found in vinegar?", options: ["Hydrochloric acid", "Acetic acid", "Citric acid", "Lactic acid"], correctIndex: 1, explanation: "Acetic acid (CH₃COOH) is the main component of vinegar, typically 4-8% concentration." },
      { question: "The greenhouse effect is primarily caused by:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], correctIndex: 2, explanation: "CO₂ and other greenhouse gases trap heat in the atmosphere, causing global warming." },
      { question: "Which of the following is an example of a contact force?", options: ["Gravity", "Magnetic force", "Friction", "Electrostatic force"], correctIndex: 2, explanation: "Friction is a contact force that opposes motion between surfaces in contact." },
      { question: "The number of chromosomes in a human somatic cell is:", options: ["23", "44", "46", "48"], correctIndex: 2, explanation: "Human somatic cells have 46 chromosomes (23 pairs), while gametes have 23." },
      { question: "Which layer of the atmosphere contains the ozone layer?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctIndex: 1, explanation: "The ozone layer is in the stratosphere, absorbing most UV radiation from the sun." },
      { question: "The process of conversion of a liquid to gas at any temperature is called:", options: ["Boiling", "Evaporation", "Condensation", "Sublimation"], correctIndex: 1, explanation: "Evaporation occurs at any temperature, while boiling occurs at a specific boiling point." },
      { question: "Which blood group is the universal donor?", options: ["A", "B", "AB", "O"], correctIndex: 3, explanation: "Blood group O-negative is the universal donor because it has no A, B antigens or Rh factor." },
      { question: "The SI unit of pressure is:", options: ["Newton", "Pascal", "Joule", "Bar"], correctIndex: 1, explanation: "Pascal (Pa) is the SI unit of pressure. 1 Pa = 1 N/m²." },
      { question: "Which element has the highest electronegativity?", options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], correctIndex: 1, explanation: "Fluorine has the highest electronegativity (4.0 on Pauling scale) of all elements." },
      { question: "The human heart has how many chambers?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "The human heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower)." },
      { question: "Which law states that energy cannot be created or destroyed?", options: ["Newton's first law", "Law of conservation of energy", "Ohm's law", "Boyle's law"], correctIndex: 1, explanation: "The law of conservation of energy states energy can only be transformed, not created or destroyed." },
      { question: "The function of white blood cells is to:", options: ["Carry oxygen", "Fight infections", "Clot blood", "Transport nutrients"], correctIndex: 1, explanation: "WBCs are part of the immune system and defend the body against infections and diseases." },
      { question: "What is the molecular formula of water?", options: ["HO₂", "H₂O", "H₂O₂", "H₃O"], correctIndex: 1, explanation: "Water = H₂O (two hydrogen atoms bonded to one oxygen atom)." },
      { question: "The phenomenon of bending of light around obstacles is called:", options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], correctIndex: 2, explanation: "Diffraction is the bending and spreading of waves when they encounter an obstacle or opening." },
      { question: "Which vitamin deficiency causes scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correctIndex: 2, explanation: "Scurvy is caused by Vitamin C (ascorbic acid) deficiency, leading to gum disease and skin spots." },
      { question: "The SI unit of frequency is:", options: ["Meter", "Second", "Hertz", "Newton"], correctIndex: 2, explanation: "Hertz (Hz) is the SI unit of frequency, equal to one cycle per second." },
      { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctIndex: 1, explanation: "Mars appears red due to iron oxide (rust) on its surface." },
    ],
  },
  {
    id: "pp-nmdcat-2022-solvable",
    title: "NMDCAT 2022 (Practice Set)",
    year: "2022",
    province: "National",
    totalMCQs: 20,
    duration: "25 min",
    pdfUrl: "https://pakmcqs.com/category/past-papers",
    pdfSource: "PakMcqs",
    description: "Practice set based on the National MDCAT 2022 exam pattern conducted by PMC.",
    type: "real-solvable",
    questions: [
      { question: "The structure of DNA is described as:", options: ["Single helix", "Double helix", "Triple helix", "Sheet"], correctIndex: 1, explanation: "Watson and Crick described DNA as a right-handed double helix with antiparallel strands." },
      { question: "Which organelle is the site of photosynthesis?", options: ["Mitochondria", "Chloroplast", "Ribosome", "Endoplasmic reticulum"], correctIndex: 1, explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells." },
      { question: "The escape velocity from Earth is approximately:", options: ["7.9 km/s", "11.2 km/s", "15.4 km/s", "22.4 km/s"], correctIndex: 1, explanation: "Escape velocity from Earth ≈ 11.2 km/s. This is the minimum speed needed to escape Earth's gravity." },
      { question: "Which of the following is an organic compound?", options: ["NaCl", "H₂O", "CH₄", "CaCO₃"], correctIndex: 2, explanation: "CH₄ (methane) is organic because it contains carbon-hydrogen bonds." },
      { question: "The powerhouse of the cell performs which process?", options: ["Photosynthesis", "Cellular respiration", "Protein synthesis", "DNA replication"], correctIndex: 1, explanation: "Mitochondria perform cellular respiration, converting glucose to ATP." },
      { question: "Which instrument measures atmospheric pressure?", options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"], correctIndex: 1, explanation: "A barometer measures atmospheric pressure. Mercury barometers are most common." },
      { question: "The function of hemoglobin is to:", options: ["Fight disease", "Transport oxygen", "Clot blood", "Digest food"], correctIndex: 1, explanation: "Hemoglobin in RBCs binds oxygen in the lungs and releases it to tissues." },
      { question: "Which quantum number describes the shape of an orbital?", options: ["Principal (n)", "Azimuthal (l)", "Magnetic (ml)", "Spin (ms)"], correctIndex: 1, explanation: "The azimuthal quantum number (l) determines the shape of the orbital (s, p, d, f)." },
      { question: "Newton's second law of motion is expressed as:", options: ["F = mv", "F = ma", "F = m/a", "F = v/a"], correctIndex: 1, explanation: "F = ma: Force equals mass times acceleration." },
      { question: "Which of the following is a polysaccharide?", options: ["Glucose", "Fructose", "Starch", "Sucrose"], correctIndex: 2, explanation: "Starch is a polysaccharide made of many glucose units. Glucose and fructose are monosaccharides." },
      { question: "The wavelength of visible light ranges from:", options: ["100-300 nm", "400-700 nm", "700-1000 nm", "10-100 nm"], correctIndex: 1, explanation: "Visible light ranges from ~400 nm (violet) to ~700 nm (red)." },
      { question: "Which acid is found in the stomach?", options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], correctIndex: 1, explanation: "Hydrochloric acid (HCl) is secreted by parietal cells in the stomach, maintaining pH ~2." },
      { question: "The number of significant figures in 0.00450 is:", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "0.00450 has 3 significant figures: the leading zeros are not significant." },
      { question: "Which type of lens is used to correct myopia?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], correctIndex: 1, explanation: "Concave (diverging) lens corrects myopia (nearsightedness) by diverging light before the retina." },
      { question: "The process of cell division in bacteria is called:", options: ["Mitosis", "Meiosis", "Binary fission", "Budding"], correctIndex: 2, explanation: "Bacteria reproduce by binary fission, where one cell divides into two identical cells." },
      { question: "Which gas is evolved when zinc reacts with dilute HCl?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], correctIndex: 2, explanation: "Zn + 2HCl → ZnCl₂ + H₂↑. Zinc displaces hydrogen from the acid." },
      { question: "The angular momentum of a revolving body is given by:", options: ["L = mv", "L = Iω", "L = mr²", "L = mv²"], correctIndex: 1, explanation: "Angular momentum L = Iω, where I = moment of inertia and ω = angular velocity." },
      { question: "Which blood vessel carries blood away from the heart?", options: ["Vein", "Capillary", "Artery", "Venule"], correctIndex: 2, explanation: "Arteries carry oxygenated blood away from the heart (except pulmonary artery)." },
      { question: "The half-life of a radioactive substance is the time required for:", options: ["Complete decay", "Half the atoms to decay", "All energy to release", "Double the mass"], correctIndex: 1, explanation: "Half-life is the time for half the radioactive atoms to decay." },
      { question: "Which of the following is a strong electrolyte?", options: ["Acetic acid", "Ethanol", "Sodium chloride", "Sugar"], correctIndex: 2, explanation: "NaCl is a strong electrolyte that completely dissociates into Na⁺ and Cl⁻ ions in water." },
    ],
  },
];

export function getSolvablePapers(): PastPaper[] {
  return pastPapers.filter((p) => p.type === "real-solvable");
}

export function getPDFPapers(): PastPaper[] {
  return pastPapers.filter((p) => p.type === "real-pdf");
}

export function getPastPaperById(id: string): PastPaper | undefined {
  return pastPapers.find((p) => p.id === id);
}
