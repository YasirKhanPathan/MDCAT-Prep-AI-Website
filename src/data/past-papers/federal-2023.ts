import { PastPaperQuestion } from "@/data/pastPapers";

export const federal2023Biology: PastPaperQuestion[] = [
  { id: "f23b1", question: "The enzyme that removes primers during DNA replication is:", options: ["DNA polymerase I", "DNA polymerase III", "Ligase", "Primase"], correctIndex: 0, explanation: "DNA polymerase I removes RNA primers and fills the gaps with DNA nucleotides.", subject: "Biology", topic: "Molecular Biology" },
  { id: "f23b2", question: "Which of the following is an autosomal dominant disorder?", options: ["Hemophilia", "Color blindness", "Huntington's disease", "Sickle cell anemia"], correctIndex: 2, explanation: "Huntington's disease is caused by a dominant allele on chromosome 4.", subject: "Biology", topic: "Genetics" },
  { id: "f23b3", question: "The thylakoid membrane is the site of:", options: ["Calvin cycle", "Light-dependent reactions", "Glycolysis", "Krebs cycle"], correctIndex: 1, explanation: "Light-dependent reactions occur on the thylakoid membrane where photosystems I and II are located.", subject: "Biology", topic: "Plant Physiology" },
  { id: "f23b4", question: "Which white blood cell type is responsible for allergic reactions?", options: ["Neutrophils", "Lymphocytes", "Eosinophils", "Monocytes"], correctIndex: 2, explanation: "Eosinophils are involved in allergic responses and parasitic infections.", subject: "Biology", topic: "Human Physiology" },
  { id: "f23b5", question: "The operon model of gene regulation was proposed by:", options: ["Watson and Crick", "Jacob and Monod", "McClintock", "Avery"], correctIndex: 1, explanation: "Jacob and Monod proposed the lac operon model in 1961 to explain gene regulation in bacteria.", subject: "Biology", topic: "Molecular Biology" },
  { id: "f23b6", question: "The term 'ecological niche' refers to:", options: ["Physical habitat", "Role and position of a species in its environment", "Number of organisms", "Feeding relationships"], correctIndex: 1, explanation: "An ecological niche encompasses all the interactions of a species with its environment.", subject: "Biology", topic: "Ecology" },
  { id: "f23b7", question: "Which of the following is NOT a characteristic of cancer cells?", options: ["Uncontrolled division", "Apoptosis", "Metastasis", "Immortality"], correctIndex: 1, explanation: "Cancer cells evade apoptosis (programmed cell death), which is why they continue to divide.", subject: "Biology", topic: "Health and Disease" },
  { id: "f23b8", question: "The central dogma of molecular biology states:", options: ["DNA to RNA to Protein", "Protein to RNA to DNA", "RNA to DNA to Protein", "DNA to Protein to RNA"], correctIndex: 0, explanation: "The central dogma: DNA is transcribed to RNA, which is translated to protein.", subject: "Biology", topic: "Molecular Biology" },
  { id: "f23b9", question: "Which organelle is involved in photorespiration?", options: ["Mitochondria", "Chloroplast", "Peroxisome", "All of the above"], correctIndex: 3, explanation: "Photorespiration involves all three organelles: chloroplast, peroxisome, and mitochondria.", subject: "Biology", topic: "Plant Physiology" },
  { id: "f23b10", question: "The sex of honeybees is determined by:", options: ["XY chromosomes", "ZW chromosomes", "Number of chromosomes (haplodiploidy)", "Environmental factors"], correctIndex: 2, explanation: "Honeybees use haplodiploidy: males are haploid (unfertilized eggs), females are diploid (fertilized eggs).", subject: "Biology", topic: "Genetics" },
];

export const federal2023Chemistry: PastPaperQuestion[] = [
  { id: "f23c1", question: "The geometry of XeF4 is:", options: ["Square planar", "Tetrahedral", "See-saw", "Octahedral"], correctIndex: 0, explanation: "XeF4 has 4 bonding pairs and 2 lone pairs giving square planar geometry.", subject: "Chemistry", topic: "Chemical Bonding" },
  { id: "f23c2", question: "Which of the following is a nucleophilic substitution reaction?", options: ["CH4 + Cl2 to CH3Cl", "CH3Br + NaOH to CH3OH + NaBr", "CH2=CH2 + HBr to CH3CH2Br", "2CH3COOH to (CH3CO)2O + H2O"], correctIndex: 1, explanation: "CH3Br + NaOH: OH- (nucleophile) replaces Br- (leaving group) in an SN2 reaction.", subject: "Chemistry", topic: "Organic Chemistry" },
  { id: "f23c3", question: "The bond order of O2 is:", options: ["1", "1.5", "2", "2.5"], correctIndex: 2, explanation: "Using MO theory: O2 has bond order = (8-4)/2 = 2 (double bond).", subject: "Chemistry", topic: "Chemical Bonding" },
  { id: "f23c4", question: "The Gibbs free energy change for a spontaneous reaction is:", options: ["Positive", "Negative", "Zero", "Infinity"], correctIndex: 1, explanation: "Delta G < 0 for spontaneous reactions.", subject: "Chemistry", topic: "Chemical Energetics" },
  { id: "f23c5", question: "Which of the following is a colloid?", options: ["Salt solution", "Sugar solution", "Milk", "Air"], correctIndex: 2, explanation: "Milk is a colloid (emulsion of fat droplets in water).", subject: "Chemistry", topic: "States of Matter" },
  { id: "f23c6", question: "The de-Broglie wavelength of an electron accelerated through 100V is approximately:", options: ["0.123 nm", "1.23 nm", "12.3 nm", "123 nm"], correctIndex: 1, explanation: "Lambda = h/sqrt(2meV) approximately equals 1.23/sqrt(V) nm. For V=100: lambda equals 0.123 nm.", subject: "Chemistry", topic: "Atomic Structure" },
  { id: "f23c7", question: "Which of the following is an electrophilic aromatic substitution?", options: ["Nitration of benzene", "Hydrogenation of ethene", "Hydrolysis of ester", "Dehydration of alcohol"], correctIndex: 0, explanation: "Nitration of benzene is an electrophilic aromatic substitution reaction.", subject: "Chemistry", topic: "Organic Chemistry" },
  { id: "f23c8", question: "The pH of a 0.001 M NaOH solution is:", options: ["3", "7", "11", "14"], correctIndex: 2, explanation: "[OH-] = 0.001 = 10^-3, so pOH = 3, pH = 14 - 3 = 11.", subject: "Chemistry", topic: "Acids, Bases and Salts" },
  { id: "f23c9", question: "Which of the following is a lanthanide?", options: ["Lanthanum", "Uranium", "Iron", "Copper"], correctIndex: 0, explanation: "Lanthanum (La) is the namesake of the lanthanide series (elements 57-71).", subject: "Chemistry", topic: "Periodic Table" },
  { id: "f23c10", question: "The IUPAC name of CH3CH=CHCH3 is:", options: ["1-Butene", "2-Butene", "But-2-ene", "Both B and C"], correctIndex: 3, explanation: "CH3CH=CHCH3 is 2-butene (or but-2-ene in IUPAC 2013 recommendations).", subject: "Chemistry", topic: "Organic Chemistry" },
];

export const federal2023Physics: PastPaperQuestion[] = [
  { id: "f23p1", question: "The recoil velocity of a gun when a bullet is fired is:", options: ["mv/M", "Mv/m", "mv/(m+M)", "Mv/(m+M)"], correctIndex: 0, explanation: "By conservation of momentum: mv = MV_recoil, so V_recoil = mv/M.", subject: "Physics", topic: "Forces and Motion" },
  { id: "f23p2", question: "The efficiency of a Carnot engine depends on:", options: ["Working substance", "Temperature of source and sink", "Speed of engine", "Mass of engine"], correctIndex: 1, explanation: "Carnot efficiency = 1 - T_cold/T_hot, depending only on source and sink temperatures.", subject: "Physics", topic: "Thermodynamics" },
  { id: "f23p3", question: "In Young's double slit experiment, if one slit is covered, the:", options: ["Pattern disappears", "Central maximum becomes brighter", "Fringe width changes", "Intensity doubles"], correctIndex: 1, explanation: "With one slit, single-slit diffraction occurs. The central maximum is brighter but wider.", subject: "Physics", topic: "Light" },
  { id: "f23p4", question: "The energy stored in a magnetic field of an inductor is:", options: ["LI", "LI^2", "1/2 LI^2", "1/2 LI"], correctIndex: 2, explanation: "Energy stored in an inductor: E = 1/2 LI^2, where L = inductance and I = current.", subject: "Physics", topic: "Electromagnetism" },
  { id: "f23p5", question: "The stopping potential in photoelectric effect depends on:", options: ["Intensity of light", "Frequency of light", "Work function only", "Both frequency and intensity"], correctIndex: 1, explanation: "Stopping potential depends on the frequency of incident light, not intensity.", subject: "Physics", topic: "Modern Physics" },
  { id: "f23p6", question: "The velocity of sound in vacuum is:", options: ["340 m/s", "300 m/s", "Zero", "Infinite"], correctIndex: 2, explanation: "Sound is a mechanical wave and cannot propagate through vacuum. Velocity is zero.", subject: "Physics", topic: "Waves" },
  { id: "f23p7", question: "Which of the following is dimensionally incorrect?", options: ["F = ma", "v = at", "s = ut + 1/2 at^2", "E = mv"], correctIndex: 3, explanation: "E = mv is dimensionally incorrect. Energy = mass x velocity^2 (KE) or force x distance.", subject: "Physics", topic: "Forces and Motion" },
  { id: "f23p8", question: "The potential at the center of a charged hollow sphere is:", options: ["Zero", "Maximum", "Minimum", "Infinite"], correctIndex: 1, explanation: "Inside a charged hollow conductor, the potential is constant and equals the surface potential (maximum).", subject: "Physics", topic: "Electricity" },
  { id: "f23p9", question: "The gyromagnetic ratio relates:", options: ["Angular momentum to magnetic moment", "Mass to charge", "Force to acceleration", "Energy to frequency"], correctIndex: 0, explanation: "The gyromagnetic ratio is the ratio of magnetic moment to angular momentum.", subject: "Physics", topic: "Electromagnetism" },
  { id: "f23p10", question: "In Bohr's model, the radius of the nth orbit is proportional to:", options: ["n", "n^2", "1/n", "1/n^2"], correctIndex: 1, explanation: "In Bohr's model, r_n = n^2 x r_1, so radius is proportional to n^2.", subject: "Physics", topic: "Modern Physics" },
];

export const federalMDCAT2023 = {
  id: "federal-mdcat-2023",
  title: "Federal MDCAT 2023",
  year: 2023,
  province: "Federal (PMC)",
  totalQuestions: 30,
  timeLimit: 45,
  description: "Past paper from Pakistan Medical Commission Federal MDCAT 2023. Biology, Chemistry, and Physics sections.",
  questions: [...federal2023Biology, ...federal2023Chemistry, ...federal2023Physics]
};
