import { subjects } from "./subjects";

export type DifficultyLevel = "easy" | "medium" | "hard";
export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export interface Flashcard {
  id: string;
  subjectId: string;
  topicId: string;
  front: string;
  back: string;
  difficulty: DifficultyLevel;
}

export interface FlashcardProgress {
  cardId: string;
  boxLevel: LeitnerBox;
  lastReviewed: string;
  nextReview: string;
  reviewCount: number;
  correctCount: number;
}

export interface FlashcardDeck {
  cards: Flashcard[];
  progress: Record<string, FlashcardProgress>;
  totalReviews: number;
}

const prebuiltCards: Flashcard[] = [
  // BIOLOGY
  { id: "bio-1", subjectId: "biology", topicId: "cell-structure", front: "What is the function of mitochondria?", back: "Mitochondria are the powerhouses of the cell. They generate most of the cell's ATP through cellular respiration (oxidative phosphorylation).", difficulty: "easy" },
  { id: "bio-2", subjectId: "biology", topicId: "cell-structure", front: "Difference between prokaryotic and eukaryotic cells?", back: "Prokaryotic: no membrane-bound nucleus or organelles, circular DNA, smaller (1-10 um). Eukaryotic: membrane-bound nucleus and organelles, linear DNA, larger (10-100 um).", difficulty: "medium" },
  { id: "bio-3", subjectId: "biology", topicId: "enzymes", front: "What is competitive inhibition?", back: "Competitive inhibition: inhibitor competes with substrate for the active site. Increases apparent Km, Vmax unchanged. Can be overcome by increasing substrate concentration.", difficulty: "medium" },
  { id: "bio-4", subjectId: "biology", topicId: "enzymes", front: "What is the lock and key model?", back: "The lock and key model proposes that the enzyme's active site has a specific shape that fits only one substrate (like a key fits a lock). This explains enzyme specificity.", difficulty: "easy" },
  { id: "bio-5", subjectId: "biology", topicId: "genetics", front: "What is the ratio in a monohybrid cross (F2)?", back: "3:1 (dominant:recessive). Example: Tt x Tt = 1 TT : 2 Tt : 1 tt, phenotypically 3 tall : 1 dwarf.", difficulty: "easy" },
  { id: "bio-6", subjectId: "biology", topicId: "genetics", front: "What is the difference between genotype and phenotype?", back: "Genotype: genetic makeup of an organism (e.g., Tt). Phenotype: observable characteristics resulting from genotype (e.g., tall plant).", difficulty: "easy" },
  { id: "bio-7", subjectId: "biology", topicId: "human-physiology", front: "What is the cardiac cycle?", back: "One complete heartbeat consisting of: atrial systole (atria contract) -> ventricular systole (ventricles contract) -> diastole (heart relaxes). Takes ~0.8 seconds.", difficulty: "medium" },
  { id: "bio-8", subjectId: "biology", topicId: "human-physiology", front: "What are the three types of muscle tissue?", back: "1) Skeletal (striated, voluntary), 2) Cardiac (striated, involuntary, intercalated discs), 3) Smooth (non-striated, involuntary, in organs).", difficulty: "easy" },
  { id: "bio-9", subjectId: "biology", topicId: "genetics", front: "What is DNA replication?", back: "Process of copying DNA before cell division. Semi-conservative: each new DNA has one old and one new strand. Enzymes: helicase (unwinds), primase (RNA primer), DNA polymerase (adds nucleotides), ligase (joins Okazaki fragments).", difficulty: "medium" },
  { id: "bio-10", subjectId: "biology", topicId: "ecology", front: "What is an ecosystem?", back: "An ecosystem is a community of living organisms (biotic) interacting with their non-living environment (abiotic). Energy flows through it, while nutrients cycle within it.", difficulty: "easy" },
  { id: "bio-11", subjectId: "biology", topicId: "biomolecules", front: "What are the 4 types of biomolecules?", back: "1) Carbohydrates (energy source), 2) Lipids (energy storage, membranes), 3) Proteins (enzymes, structure), 4) Nucleic Acids (DNA, RNA - genetic information).", difficulty: "easy" },
  { id: "bio-12", subjectId: "biology", topicId: "evolution", front: "What is natural selection?", back: "Darwin's mechanism: individuals with favorable traits survive and reproduce more. Over generations, advantageous traits become more common. Requirements: variation, inheritance, differential survival, reproduction.", difficulty: "medium" },

  // CHEMISTRY
  { id: "chem-1", subjectId: "chemistry", topicId: "atomic-structure", front: "What are the 4 quantum numbers?", back: "1) n (principal): energy level, 1,2,3... 2) l (azimuthal): subshell shape, 0=s,1=p,2=d,3=f 3) ml (magnetic): orbital orientation, -l to +l 4) ms (spin): electron spin, +1/2 or -1/2", difficulty: "hard" },
  { id: "chem-2", subjectId: "chemistry", topicId: "chemical-bonding", front: "What is the difference between ionic and covalent bonding?", back: "Ionic: transfer of electrons between atoms (metal + nonmetal), forms ions, electrostatic attraction. Covalent: sharing of electrons between atoms (nonmetal + nonmetal), forms molecules.", difficulty: "easy" },
  { id: "chem-3", subjectId: "chemistry", topicId: "stoichiometry", front: "What is Avogadro's number?", back: "6.022 x 10^23. It represents the number of particles (atoms, molecules, ions) in one mole of a substance.", difficulty: "easy" },
  { id: "chem-4", subjectId: "chemistry", topicId: "chemical-equilibrium", front: "What is Le Chatelier's Principle?", back: "When a system at equilibrium is disturbed, it shifts in the direction that partially counteracts the change. Example: adding product shifts equilibrium toward reactants.", difficulty: "medium" },
  { id: "chem-5", subjectId: "chemistry", topicId: "organic-chemistry", front: "What is the general formula for alkanes?", back: "CnH2n+2. They contain only single bonds (saturated hydrocarbons). Example: methane CH4, ethane C2H6, propane C3H8.", difficulty: "easy" },
  { id: "chem-6", subjectId: "chemistry", topicId: "electrochemistry", front: "What is the Nernst equation?", back: "E = E0 - (RT/nF)ln(Q). At 25C: E = E0 - (0.0592/n)log(Q). Relates cell potential to standard potential and reaction quotient.", difficulty: "hard" },
  { id: "chem-7", subjectId: "chemistry", topicId: "chemical-equilibrium", front: "What is pH?", back: "pH = -log[H+]. pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic. At 25C, pH + pOH = 14.", difficulty: "easy" },
  { id: "chem-8", subjectId: "chemistry", topicId: "states-of-matter", front: "What is the Ideal Gas Law?", back: "PV = nRT. P = pressure, V = volume, n = moles, R = gas constant (0.0821 L atm/mol K), T = temperature (Kelvin).", difficulty: "easy" },
  { id: "chem-9", subjectId: "chemistry", topicId: "chemical-kinetics", front: "What is the Arrhenius equation?", back: "k = Ae^(-Ea/RT). k = rate constant, A = pre-exponential factor, Ea = activation energy, R = gas constant, T = temperature.", difficulty: "hard" },
  { id: "chem-10", subjectId: "chemistry", topicId: "organic-chemistry", front: "Name the functional groups: -OH, -CHO, -COOH, -NH2", back: "-OH = Alcohol, -CHO = Aldehyde, -COOH = Carboxylic acid, -NH2 = Amine.", difficulty: "medium" },
  { id: "chem-11", subjectId: "chemistry", topicId: "stoichiometry", front: "What is a limiting reagent?", back: "The limiting reagent is the reactant that is completely consumed first in a chemical reaction. It determines the maximum amount of product that can be formed.", difficulty: "medium" },
  { id: "chem-12", subjectId: "chemistry", topicId: "atomic-structure", front: "What is electronegativity?", back: "The tendency of an atom to attract shared electrons in a chemical bond. Increases across a period (left to right) and decreases down a group. Fluorine is most electronegative (4.0).", difficulty: "medium" },

  // PHYSICS
  { id: "phys-1", subjectId: "physics", topicId: "newtons-laws", front: "What are Newton's three laws?", back: "1st: An object remains at rest or in uniform motion unless acted upon by force. 2nd: F = ma. 3rd: Every action has an equal and opposite reaction.", difficulty: "easy" },
  { id: "phys-2", subjectId: "physics", topicId: "work-energy-power", front: "What is the Work-Energy Theorem?", back: "Net work done on an object equals its change in kinetic energy: W_net = KEf - KEi = (1/2)mvf^2 - (1/2)mvi^2.", difficulty: "medium" },
  { id: "phys-3", subjectId: "physics", topicId: "electrostatics", front: "What is Coulomb's Law?", back: "F = kq1q2/r^2. The force between two point charges is directly proportional to the product of charges and inversely proportional to the square of distance. k = 9 x 10^9 Nm2/C2.", difficulty: "easy" },
  { id: "phys-4", subjectId: "physics", topicId: "current-electricity", front: "What is Ohm's Law?", back: "V = IR. Voltage (V) equals current (I) times resistance (R). Valid for ohmic conductors at constant temperature.", difficulty: "easy" },
  { id: "phys-5", subjectId: "physics", topicId: "waves", front: "What is the wave speed equation?", back: "v = f x lambda. Wave speed equals frequency times wavelength. Also v = lambda/T where T is period.", difficulty: "easy" },
  { id: "phys-6", subjectId: "physics", topicId: "modern-physics", front: "What is E = mc2?", back: "Einstein's mass-energy equivalence. Energy equals mass times speed of light squared. Shows that mass and energy are interchangeable. c = 3 x 10^8 m/s.", difficulty: "easy" },
  { id: "phys-7", subjectId: "physics", topicId: "electrostatics", front: "What is the capacitance formula?", back: "C = Q/V. Capacitance equals charge per unit voltage. Unit: Farad (F). For parallel plates: C = epsilon0*A/d.", difficulty: "medium" },
  { id: "phys-8", subjectId: "physics", topicId: "current-electricity", front: "How do you calculate power in a circuit?", back: "P = VI = I2R = V2/R. Power equals voltage times current, or current squared times resistance, or voltage squared divided by resistance.", difficulty: "medium" },
  { id: "phys-9", subjectId: "physics", topicId: "waves", front: "What is the Doppler Effect?", back: "Change in observed frequency when source and observer move relative to each other. Approaching: higher frequency. Receding: lower frequency. f' = f(v +/- vo)/(v -/+ vs).", difficulty: "medium" },
  { id: "phys-10", subjectId: "physics", topicId: "modern-physics", front: "What is the photoelectric effect?", back: "Emission of electrons when light hits a metal surface. KE_max = hf - phi (work function). Proves light has particle nature. Threshold frequency required.", difficulty: "medium" },
  { id: "phys-11", subjectId: "physics", topicId: "rotational-motion", front: "What is torque?", back: "Torque = r x F x sin(theta). It is the rotational equivalent of force. Measured in Newton-meters (Nm). Also: torque = I x alpha (moment of inertia x angular acceleration).", difficulty: "medium" },
  { id: "phys-12", subjectId: "physics", topicId: "electromagnetism", front: "What is Faraday's Law?", back: "emf = -dPhi/dt. The induced EMF equals the negative rate of change of magnetic flux. Lenz's law: induced current opposes the change causing it.", difficulty: "hard" },

  // ENGLISH
  { id: "eng-1", subjectId: "english", topicId: "grammar", front: "What is a noun?", back: "A noun is a word that names a person, place, thing, or idea. Types: common (dog), proper (London), abstract (freedom), collective (team).", difficulty: "easy" },
  { id: "eng-2", subjectId: "english", topicId: "vocabulary", front: "Synonym of 'ubiquitous'?", back: "Omnipresent, everywhere, pervasive. Example: 'Smartphones are ubiquitous in modern society.'", difficulty: "medium" },
  { id: "eng-3", subjectId: "english", topicId: "grammar", front: "When to use 'who' vs 'whom'?", back: "Who = subject (Who is there?). Whom = object (To whom it concerns?). Trick: replace with he/she (who) or him/her (whom).", difficulty: "medium" },
  { id: "eng-4", subjectId: "english", topicId: "reading-comprehension", front: "What is an inference in reading?", back: "An inference is a conclusion drawn from evidence and reasoning, not directly stated. Look for clues in the text and use logic to determine what the author implies.", difficulty: "easy" },

  // LOGICAL REASONING
  { id: "lr-1", subjectId: "logical-reasoning", topicId: "series", front: "What comes next: 2, 6, 12, 20, 30, ?", back: "42. Pattern: differences are 4, 6, 8, 10, 12. Each difference increases by 2. Alternatively: n(n+1) where n = 1,2,3,4,5,6.", difficulty: "medium" },
  { id: "lr-2", subjectId: "logical-reasoning", topicId: "coding-decoding", front: "If CAT = 24, DOG = 26, what is PIG?", back: "PIG = 41. Sum of positions: P(16)+I(9)+G(7) = 32. Wait, let me recalculate: CAT=3+1+20=24, DOG=4+15+7=26, PIG=16+9+7=32.", difficulty: "medium" },
  { id: "lr-3", subjectId: "logical-reasoning", topicId: "blood-relations", front: "If A is B's brother, B is C's mother, and C is D's father, how is A related to D?", back: "A is D's paternal uncle (father's brother). A-Brother, B-Mother of C, C-Father of D. So A is C's uncle, and D's paternal uncle.", difficulty: "medium" },
];

export function getAllPrebuiltCards(): Flashcard[] {
  return prebuiltCards;
}

export function getCardsBySubject(subjectId: string): Flashcard[] {
  return prebuiltCards.filter((c) => c.subjectId === subjectId);
}
