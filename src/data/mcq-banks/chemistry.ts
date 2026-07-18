import { Question } from "@/components/MCQCard";

export const chemistryHardQuestions: Question[] = [
  // Atomic Structure
  {
    question: "Which quantum number describes the shape of an orbital?",
    options: ["Principal quantum number (n)", "Angular momentum quantum number (l)", "Magnetic quantum number (ml)", "Spin quantum number (ms)"],
    correctIndex: 1,
    explanation: "The angular momentum quantum number (l) determines the shape of the orbital. l=0 is s (spherical), l=1 is p (dumbbell), l=2 is d (cloverleaf), l=3 is f (complex)."
  },
  {
    question: "The maximum number of electrons that can occupy the 3d subshell is:",
    options: ["2", "6", "10", "14"],
    correctIndex: 2,
    explanation: "The 3d subshell has l=2, giving ml values of -2, -1, 0, +1, +2 (5 orbitals). Each orbital holds 2 electrons, so maximum = 5 × 2 = 10 electrons."
  },
  {
    question: "According to Hund's rule, electrons will:",
    options: ["Pair up in the same orbital first", "Fill orbitals singly before pairing", "Always fill lower energy orbitals first", "Occupy any orbital randomly"],
    correctIndex: 1,
    explanation: "Hund's rule states that electrons fill degenerate (equal energy) orbitals singly with parallel spins before pairing. This minimizes electron-electron repulsion and maximizes exchange energy."
  },
  {
    question: "The ionization energy generally increases across a period because:",
    options: ["Atomic radius increases", "Nuclear charge increases while shielding remains constant", "Electron shielding increases", "Number of energy levels increases"],
    correctIndex: 1,
    explanation: "Across a period, protons are added to the nucleus but electrons go into the same shell (similar shielding). The increased effective nuclear charge holds electrons more tightly, requiring more energy to remove them."
  },
  // Chemical Bonding
  {
    question: "Which of the following molecules has the highest bond angle?",
    options: ["CH₄ (109.5°)", "NH₃ (107°)", "H₂O (104.5°)", "BF₃ (120°)"],
    correctIndex: 3,
    explanation: "BF₃ has sp² hybridization with no lone pairs on boron, giving a perfect trigonal planar geometry with 120° bond angles. CH₄ is tetrahedral (109.5°), NH₃ is trigonal pyramidal (107°), H₂O is bent (104.5°)."
  },
  {
    question: "In which of the following is the central atom sp³ hybridized?",
    options: ["BF₃", "BeCl₂", "SF₆", "NH₃"],
    correctIndex: 3,
    explanation: "NH₃ has 4 electron pairs around nitrogen (3 bonding + 1 lone pair), giving sp³ hybridization with trigonal pyramidal geometry. BF₃ is sp², BeCl₂ is sp, SF₆ is sp³d²."
  },
  {
    question: "Which type of bond is formed between Na and Cl in NaCl?",
    options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    correctIndex: 1,
    explanation: "NaCl forms an ionic bond. Na (electronegativity 0.9) loses an electron to become Na⁺, while Cl (electronegativity 3.0) gains an electron to become Cl⁻. The large electronegativity difference (>1.7) indicates ionic bonding."
  },
  {
    question: "Which molecule exhibits hydrogen bonding?",
    options: ["CH₄", "HCl", "HF", "PH₃"],
    correctIndex: 2,
    explanation: "HF exhibits hydrogen bonding because fluorine is highly electronegative and small, creating a strong dipole with H. H must be bonded to N, O, or F for hydrogen bonding. CH₄ and PH₃ are nonpolar; HCl has dipole-dipole but not H-bonding."
  },
  // Stoichiometry
  {
    question: "What is the molarity of a solution made by dissolving 5.85 g of NaCl (molar mass = 58.5 g/mol) in 500 mL of water?",
    options: ["0.1 M", "0.2 M", "0.5 M", "1.0 M"],
    correctIndex: 1,
    explanation: "Moles of NaCl = 5.85 g ÷ 58.5 g/mol = 0.1 mol. Molarity = 0.1 mol ÷ 0.5 L = 0.2 M."
  },
  {
    question: "In the reaction 2H₂ + O₂ → 2H₂O, how many liters of O₂ at STP are needed to完全 react with 4 g of H₂?",
    options: ["11.2 L", "22.4 L", "44.8 L", "5.6 L"],
    correctIndex: 2,
    explanation: "Moles of H₂ = 4 g ÷ 2 g/mol = 2 mol. From stoichiometry, 2 mol H₂ requires 1 mol O₂. At STP, 1 mol = 22.4 L, so 1 mol O₂ = 22.4 L. Wait — 2 mol H₂ : 1 mol O₂, so 1 mol O₂ needed = 22.4 L."
  },
  {
    question: "A limiting reagent is the one that:",
    options: ["Is present in excess", "Determines the maximum amount of product", "Has the highest molar mass", "Is consumed last"],
    correctIndex: 1,
    explanation: "The limiting reagent is completely consumed first and determines the maximum amount of product that can be formed. All stoichiometric calculations for product yield are based on the limiting reagent."
  },
  {
    question: "The empirical formula of a compound containing 40% C, 6.7% H, and 53.3% O is:",
    options: ["CHO", "CH₂O", "C₂H₄O₂", "C₃H₆O₃"],
    correctIndex: 1,
    explanation: "Assume 100g sample: C = 40g/12 = 3.33 mol, H = 6.7g/1 = 6.7 mol, O = 53.3g/16 = 3.33 mol. Ratio: C:H:O = 1:2:1. Empirical formula = CH₂O."
  },
  // Chemical Equilibrium
  {
    question: "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), if the pressure is increased at constant temperature:",
    options: ["Equilibrium shifts left", "Equilibrium shifts right", "No shift occurs", "Kc changes"],
    correctIndex: 1,
    explanation: "According to Le Chatelier's principle, increasing pressure favors the side with fewer gas molecules. Reactants have 4 moles of gas (1+3), products have 2 moles. The equilibrium shifts right (toward NH₃)."
  },
  {
    question: "If Kc = 100 for a reaction, what is the value of Kp at 25°C? (Kp = Kc(RT)^Δn, R = 0.0821, T = 298 K)",
    options: ["100", "100 × (0.0821 × 298)^Δn", "100 × 24.5^Δn", "Depends on Δn"],
    correctIndex: 3,
    explanation: "Kp = Kc(RT)^Δn. The exact value depends on Δn (change in moles of gas). For each specific reaction, Δn must be calculated to determine Kp from Kc."
  },
  {
    question: "Which of the following will increase the rate of a forward exothermic reaction?",
    options: ["Decreasing temperature", "Adding a catalyst", "Removing product", "Increasing pressure (if Δn > 0)"],
    correctIndex: 2,
    explanation: "Removing product shifts equilibrium forward by Le Chatelier's principle. A catalyst speeds up both forward and reverse equally. Decreasing temperature favors exothermic direction but doesn't increase rate. Increasing pressure only helps if products have fewer gas moles."
  },
  // Organic Chemistry
  {
    question: "Which of the following is an example of an addition reaction?",
    options: ["CH₄ + 2O₂ → CO₂ + 2H₂O", "CH₂=CH₂ + HCl → CH₃CH₂Cl", "C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O", "C₆H₅CH₃ + KMnO₄ → C₆H₅COOH"],
    correctIndex: 1,
    explanation: "Addition reactions occur in unsaturated compounds (alkenes, alkynes) where atoms are added across the double/triple bond. CH₂=CH₂ + HCl → CH₃CH₂Cl is a classic electrophilic addition."
  },
  {
    question: "The IUPAC name of CH₃-CH(OH)-CH₂-CH₃ is:",
    options: ["1-butanol", "2-butanol", "2-methyl-1-propanol", "Isobutanol"],
    correctIndex: 1,
    explanation: "The longest chain containing the -OH group has 4 carbons (butane). The -OH is on carbon 2, giving 2-butanol (or butan-2-ol)."
  },
  {
    question: "Which functional group is present in acetic acid (CH₃COOH)?",
    options: ["Hydroxyl group", "Carbonyl group", "Carboxyl group", "Aldehyde group"],
    correctIndex: 2,
    explanation: "The -COOH group is a carboxyl group, which combines a carbonyl (C=O) and hydroxyl (-OH) on the same carbon. It gives carboxylic acids their acidic properties."
  },
  {
    question: "Which test distinguishes between aldehydes and ketones?",
    options: ["Bromine water test", "Tollen's test (silver mirror test)", "Iodoform test", "Fehling's solution test"],
    correctIndex: 1,
    explanation: "Tollen's reagent (ammoniacal silver nitrate) oxidizes aldehydes but not ketones. Aldehydes produce a silver mirror, while ketones give no reaction. Fehling's solution also works for aliphatic aldehydes only."
  },
  {
    question: "The polymerization of ethene produces:",
    options: ["Polyester", "Polyethylene (PE)", "Nylon", "PVC"],
    correctIndex: 1,
    explanation: "Ethene (CH₂=CH₂) undergoes addition polymerization to form polyethylene (PE): nCH₂=CH₂ → [-CH₂-CH₂-]n. This is one of the most widely used plastics."
  },
  // Electrochemistry
  {
    question: "In a galvanic cell, the anode is the electrode where:",
    options: ["Reduction occurs", "Oxidation occurs", "Electrons flow toward", "Positive charge accumulates"],
    correctIndex: 1,
    explanation: "In any electrochemical cell, oxidation occurs at the anode. In a galvanic (voltaic) cell, the anode is the negative electrode from which electrons flow through the external circuit."
  },
  {
    question: "If E°cell = +0.80 V, what is the sign of ΔG°?",
    options: ["Positive (non-spontaneous)", "Negative (spontaneous)", "Zero (at equilibrium)", "Cannot be determined"],
    correctIndex: 1,
    explanation: "ΔG° = -nFE°cell. When E°cell is positive, ΔG° is negative, indicating a spontaneous reaction. This means the cell can do electrical work."
  },
  {
    question: "Electrolysis of molten NaCl produces:",
    options: ["Na at anode, Cl₂ at cathode", "Cl₂ at anode, Na at cathode", "NaOH at anode, H₂ at cathode", "H₂ at anode, Cl₂ at cathode"],
    correctIndex: 1,
    explanation: "In electrolysis, oxidation occurs at the anode (Cl⁻ → Cl₂) and reduction at the cathode (Na⁺ → Na). The anode attracts anions (Cl⁻) and the cathode attracts cations (Na⁺)."
  },
  // Chemical Kinetics
  {
    question: "A catalyst increases the rate of reaction by:",
    options: ["Increasing the temperature", "Lowering the activation energy", "Increasing the concentration", "Changing the equilibrium position"],
    correctIndex: 1,
    explanation: "Catalysts provide an alternative reaction pathway with lower activation energy (Ea). More molecules have sufficient energy to react, increasing the rate. Catalysts do not change ΔG, Keq, or the equilibrium position."
  },
  {
    question: "If a reaction is first order with rate constant k = 0.05 min⁻¹, the half-life is:",
    options: ["5 minutes", "10 minutes", "14 minutes", "20 minutes"],
    correctIndex: 2,
    explanation: "For a first-order reaction, t₁/₂ = 0.693/k = 0.693/0.05 = 13.86 ≈ 14 minutes. First-order half-life is independent of initial concentration."
  },
  {
    question: "Collision theory states that for a reaction to occur, colliding particles must have:",
    options: ["Any energy level", "Energy ≥ activation energy with correct orientation", "Energy ≥ bond energy", "Energy equal to ΔH"],
    correctIndex: 1,
    explanation: "According to collision theory, effective collisions require: (1) sufficient kinetic energy (≥ activation energy) and (2) correct geometric orientation of the colliding particles."
  },
  // States of Matter
  {
    question: "At the critical point of a substance:",
    options: ["Liquid and gas coexist in equilibrium", "Liquid and gas become indistinguishable", "Solid and liquid coexist", "The substance sublimes"],
    correctIndex: 1,
    explanation: "At the critical point, the distinction between liquid and gas phases disappears. Above the critical temperature and pressure, the substance exists as a supercritical fluid with properties of both liquid and gas."
  },
  {
    question: "Which gas law states that the volume of a given mass of gas is inversely proportional to its pressure at constant temperature?",
    options: ["Charles's law", "Boyle's law", "Avogadro's law", "Gay-Lussac's law"],
    correctIndex: 1,
    explanation: "Boyle's law: PV = k (constant) or P₁V₁ = P₂V₂ at constant T. As pressure increases, volume decreases proportionally, because gas molecules are forced closer together."
  },
  {
    question: "Surface tension in liquids is primarily caused by:",
    options: ["Gravitational forces", "Cohesive forces between molecules", "Air pressure", "Temperature gradients"],
    correctIndex: 1,
    explanation: "Surface tension results from cohesive intermolecular forces (hydrogen bonds, dipole-dipole, van der Waals) pulling surface molecules inward, creating a 'skin' effect that minimizes surface area."
  },
  // Nuclear Chemistry
  {
    question: "In beta (β⁻) decay, a neutron is converted into:",
    options: ["A proton and an electron", "A proton and a positron", "Two protons", "An alpha particle"],
    correctIndex: 0,
    explanation: "In β⁻ decay, a neutron converts into a proton and an electron (beta particle): n → p + e⁻ + ν̄e. The atomic number increases by 1 while the mass number stays the same."
  },
  {
    question: "The half-life of a radioactive isotope is the time required for:",
    options: ["All atoms to decay", "Half of the atoms to decay", "90% of the atoms to decay", "The activity to double"],
    correctIndex: 1,
    explanation: "Half-life (t₁/₂) is the time for half the radioactive atoms in a sample to decay. After each half-life, the remaining activity is halved. This is an exponential decay process."
  },
  {
    question: "Nuclear fission differs from nuclear fusion in that fission involves:",
    options: ["Combining light nuclei", "Splitting heavy nuclei into lighter ones", "Annihilation of matter", "Radioactive decay of individual atoms"],
    correctIndex: 1,
    explanation: "Fission splits heavy nuclei (like U-235) into lighter fragments, releasing energy. Fusion combines light nuclei (like H isotopes) into heavier ones, also releasing energy (powers the Sun)."
  },
  // Thermochemistry
  {
    question: "An exothermic reaction has:",
    options: ["ΔH > 0, absorbs heat", "ΔH < 0, releases heat", "ΔH = 0, no heat change", "ΔG > 0, non-spontaneous"],
    correctIndex: 1,
    explanation: "Exothermic reactions release heat to the surroundings (ΔH < 0). The products have lower enthalpy than the reactants. Examples include combustion and neutralization reactions."
  },
  {
    question: "Hess's law states that the total enthalpy change for a reaction is:",
    options: ["Dependent on the reaction pathway", "The same regardless of the pathway taken", "Proportional to temperature", "Always positive"],
    correctIndex: 1,
    explanation: "Hess's law states that ΔH is a state function — it depends only on initial and final states, not on the path taken. This allows calculation of ΔH for reactions that cannot be directly measured."
  },
  {
    question: "Which of the following has the highest standard enthalpy of combustion?",
    options: ["Methane (CH₄)", "Ethanol (C₂H₅OH)", "Glucose (C₆H₁₂O₆)", "Octane (C₈H₁₈)"],
    correctIndex: 3,
    explanation: "Octane has the highest enthalpy of combustion (~-5470 kJ/mol) because it has the most C-H bonds to break and the most CO₂ and H₂O molecules produced. Larger hydrocarbons release more energy per mole."
  },
  // Solutions & Colligative Properties
  {
    question: "The boiling point elevation of a solution depends on:",
    options: ["The identity of the solute", "The molality of the solution", "The volume of the solvent", "The density of the solution"],
    correctIndex: 1,
    explanation: "Boiling point elevation (ΔTb = iKbm) is a colligative property that depends on the number of solute particles (molality × van 't Hoff factor), not their identity."
  },
  {
    question: "A 0.1 M solution of NaCl will have a lower freezing point than a 0.1 M solution of glucose because:",
    options: ["NaCl has a higher molar mass", "NaCl dissociates into two ions", "NaCl is more polar", "Glucose has hydrogen bonding"],
    correctIndex: 1,
    explanation: "NaCl dissociates into Na⁺ and Cl⁻ (i ≈ 2), doubling the number of particles. Glucose doesn't dissociate (i = 1). Freezing point depression depends on particle concentration: ΔTf = iKfm."
  },
  {
    question: "Which of the following is an example of a colloidal system?",
    options: ["Salt water", "Sugar solution", "Milk", "Air"],
    correctIndex: 2,
    explanation: "Milk is a colloid (emulsion) where fat droplets (1-1000 nm) are dispersed in water. Colloids show the Tyndall effect (light scattering) and don't settle on standing, unlike suspensions."
  },
  // Acids, Bases & Salts
  {
    question: "A buffer solution resists changes in pH when small amounts of acid or base are added. A buffer is made of:",
    options: ["Strong acid + strong base", "Weak acid + its conjugate base", "Any acid in water", "Strong base + its conjugate acid"],
    correctIndex: 1,
    explanation: "A buffer consists of a weak acid and its conjugate base (or weak base and conjugate acid). The weak acid neutralizes added base, and the conjugate base neutralizes added acid, maintaining pH."
  },
  {
    question: "The pH of a 0.01 M HCl solution is:",
    options: ["1", "2", "3", "7"],
    correctIndex: 1,
    explanation: "HCl is a strong acid that completely dissociates: HCl → H⁺ + Cl⁻. [H⁺] = 0.01 M = 10⁻² M. pH = -log[H⁺] = -log(10⁻²) = 2."
  },
  {
    question: "Which salt is formed when a weak acid reacts with a strong base?",
    options: ["Neutral salt", "Acidic salt", "Basic salt", "Double salt"],
    correctIndex: 2,
    explanation: "When a weak acid reacts with a strong base, the conjugate base of the weak acid undergoes hydrolysis, producing OH⁻ ions. This makes the salt solution basic (pH > 7)."
  },
  // Chemical Industry
  {
    question: "In the Haber process for ammonia synthesis, which conditions are used?",
    options: ["Low T, low P, catalyst", "High T (450°C), high P (200 atm), iron catalyst", "Room T, atmospheric P", "High T, low P, no catalyst"],
    correctIndex: 1,
    explanation: "The Haber process (N₂ + 3H₂ ⇌ 2NH₃) uses high temperature (400-500°C) for kinetics, high pressure (150-300 atm) to shift equilibrium right (Le Chatelier), and an iron catalyst to speed up the reaction."
  },
  {
    question: "The Contact process manufactures:",
    options: ["Ammonia", "Sulfuric acid", "Nitric acid", "Sodium hydroxide"],
    correctIndex: 1,
    explanation: "The Contact process produces sulfuric acid (H₂SO₄): SO₂ is catalytically oxidized to SO₃ (using V₂O₅), which is absorbed in H₂SO₄ to form oleum (H₂S₂O₇), then diluted to H₂SO₄."
  },
];
