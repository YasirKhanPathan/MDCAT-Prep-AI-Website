import { Question } from "@/components/MCQCard";

export const chemistryHardQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════
  // ATOMIC STRUCTURE (12 questions)
  // ═══════════════════════════════════════════════════════════════
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
    explanation: "The 3d subshell has l=2, giving ml values of -2, -1, 0, +1, +2 (5 orbitals). Each orbital holds 2 electrons, so maximum = 5 x 2 = 10 electrons."
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
  {
    question: "Which of the following has the highest first ionization energy?",
    options: ["Na", "Mg", "Al", "Si"],
    correctIndex: 1,
    explanation: "Mg ([Ne]3s2) has a filled 3s subshell which is relatively stable, giving it a higher first ionization energy than Al ([Ne]3s2 3p1), where the 3p electron is easier to remove. Na is easiest to ionize among these Period 3 metals."
  },
  {
    question: "The electronic configuration of Fe2+ (Z = 26) is:",
    options: ["[Ar] 3d6 4s2", "[Ar] 3d6", "[Ar] 3d4 4s2", "[Ar] 3d5 4s1"],
    correctIndex: 1,
    explanation: "Fe is [Ar]3d6 4s2. When Fe loses 2 electrons to form Fe2+, the 4s electrons are removed first (higher energy in the ion), giving [Ar]3d6. In transition metals, 4s electrons are always removed before 3d."
  },
  {
    question: "The number of radial nodes in a 3p orbital is:",
    options: ["0", "1", "2", "3"],
    correctIndex: 1,
    explanation: "Number of radial nodes = n - l - 1. For 3p: n=3, l=1, so radial nodes = 3 - 1 - 1 = 1. Angular nodes = l = 1. Total nodes = n - 1 = 2."
  },
  {
    question: "Which of the following transitions in a hydrogen atom emits the longest wavelength photon?",
    options: ["n = 4 to n = 1", "n = 4 to n = 2", "n = 3 to n = 1", "n = 2 to n = 1"],
    correctIndex: 1,
    explanation: "Longest wavelength = smallest energy difference. n=4 to n=2 has the smallest energy gap (part of the Balmer series). Energy differences between higher levels are smaller than transitions to n=1."
  },
  {
    question: "The effective nuclear charge experienced by a 3s electron in sodium is approximately:",
    options: ["+11", "+6.2", "+2.2", "+1"],
    correctIndex: 2,
    explanation: "Using Slater's rules: Z_eff = Z - S. For Na (Z=11), the 3s electron is screened by 10 inner electrons. Z_eff is approximately 11 - 8.8 = 2.2. This reduced nuclear charge explains why Na easily loses its outer electron."
  },
  {
    question: "Which of the following represents the correct order of orbital energies in a many-electron atom?",
    options: ["1s < 2s < 2p < 3s < 3p < 4s < 3d", "1s < 2s < 2p < 3s < 3p < 3d < 4s", "1s < 2s = 2p < 3s = 3p = 3d", "1s < 2p < 2s < 3p < 3s < 3d"],
    correctIndex: 0,
    explanation: "Due to electron-electron shielding and penetration effects, the 4s orbital fills before 3d in many-electron atoms. The order is 1s < 2s < 2p < 3s < 3p < 4s < 3d, following the Aufbau principle."
  },
  {
    question: "The Pauli exclusion principle states that:",
    options: ["Electrons fill orbitals from lowest to highest energy", "No two electrons in an atom can have the same set of four quantum numbers", "Electrons occupy degenerate orbitals singly first", "Each orbital can hold a maximum of 4 electrons"],
    correctIndex: 1,
    explanation: "The Pauli exclusion principle limits each orbital to a maximum of 2 electrons with opposite spins. Since each electron has a unique set of four quantum numbers (n, l, ml, ms), no two electrons in an atom can be identical."
  },
  {
    question: "Which ion has the same electronic configuration as neon ([He]2s2 2p6)?",
    options: ["Na+", "Cl-", "K+", "Both Na+ and F-"],
    correctIndex: 3,
    explanation: "Neon has 10 electrons. Na+ (11-1=10) and F- (9+1=10) both have 10 electrons, giving the same electronic configuration as neon. Cl- has 18 electrons ([Ar]), and K+ has 18 electrons ([Ar])."
  },
  // ═══════════════════════════════════════════════════════════════
  // CHEMICAL BONDING (12 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "Which of the following molecules has the highest bond angle?",
    options: ["CH4 (109.5 deg)", "NH3 (107 deg)", "H2O (104.5 deg)", "BF3 (120 deg)"],
    correctIndex: 3,
    explanation: "BF3 has sp2 hybridization with no lone pairs on boron, giving a perfect trigonal planar geometry with 120 deg bond angles. CH4 is tetrahedral (109.5 deg), NH3 is trigonal pyramidal (107 deg), H2O is bent (104.5 deg)."
  },
  {
    question: "In which of the following is the central atom sp3 hybridized?",
    options: ["BF3", "BeCl2", "SF6", "NH3"],
    correctIndex: 3,
    explanation: "NH3 has 4 electron pairs around nitrogen (3 bonding + 1 lone pair), giving sp3 hybridization with trigonal pyramidal geometry. BF3 is sp2, BeCl2 is sp, SF6 is sp3d2."
  },
  {
    question: "Which type of bond is formed between Na and Cl in NaCl?",
    options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    correctIndex: 1,
    explanation: "NaCl forms an ionic bond. Na (electronegativity 0.9) loses an electron to become Na+, while Cl (electronegativity 3.0) gains an electron to become Cl-. The large electronegativity difference (>1.7) indicates ionic bonding."
  },
  {
    question: "Which molecule exhibits hydrogen bonding?",
    options: ["CH4", "HCl", "HF", "PH3"],
    correctIndex: 2,
    explanation: "HF exhibits hydrogen bonding because fluorine is highly electronegative and small. H must be bonded to N, O, or F for hydrogen bonding. CH4 and PH3 are nonpolar; HCl has dipole-dipole interactions but not H-bonding."
  },
  {
    question: "The bond order in O2 according to molecular orbital theory is:",
    options: ["1", "1.5", "2", "3"],
    correctIndex: 2,
    explanation: "MO configuration of O2: (sigma1s)2(sigma*1s)2(sigma2s)2(sigma*2s)2(sigma2p)2(pi2p)4(pi*2p)2. Bond order = (10 bonding - 6 antibonding)/2 = 2. O2 also has 2 unpaired electrons, making it paramagnetic."
  },
  {
    question: "Which of the following has the longest bond length?",
    options: ["N triple bond N", "O double bond O", "F single bond F", "C single bond C"],
    correctIndex: 3,
    explanation: "Bond length increases with decreasing bond order. C-C single bond (bond order 1) has the longest bond length (~154 pm). N triple bond N is shortest (~110 pm), O=O is ~121 pm, F-F is ~142 pm."
  },
  {
    question: "According to VSEPR theory, the shape of XeF4 is:",
    options: ["Tetrahedral", "Square planar", "See-saw", "Square pyramidal"],
    correctIndex: 1,
    explanation: "XeF4 has 6 electron pairs around Xe (4 bonding + 2 lone pairs). The electron geometry is octahedral, but the two lone pairs occupy trans positions, giving a square planar molecular geometry."
  },
  {
    question: "Which of the following is NOT a condition for forming a coordinate (dative) bond?",
    options: ["One atom has a lone pair", "The other atom has an empty orbital", "Both atoms share the electron pair equally", "The bond is represented with an arrow"],
    correctIndex: 2,
    explanation: "In a coordinate bond, both electrons in the shared pair come from one atom (the donor). The donor has a lone pair and the acceptor has an empty orbital. The sharing is not equal since both electrons originate from one atom."
  },
  {
    question: "The hybridization of the central atom in BrF5 is:",
    options: ["sp3d", "sp3d2", "sp3", "d2sp3"],
    correctIndex: 1,
    explanation: "BrF5 has 6 electron pairs around Br (5 bonding + 1 lone pair), requiring sp3d2 hybridization. The molecular geometry is square pyramidal (derived from octahedral electron geometry with one lone pair)."
  },
  {
    question: "Which of the following molecules is paramagnetic?",
    options: ["N2", "CO", "NO", "HF"],
    correctIndex: 2,
    explanation: "NO has an odd number of valence electrons (11), so it must have at least one unpaired electron, making it paramagnetic. N2, CO, and HF all have all electrons paired in their molecular orbitals."
  },
  {
    question: "The lattice energy of an ionic compound depends on:",
    options: ["Only the charge of the cation", "The product of ion charges and inversely on the sum of ionic radii", "Only the size of the anion", "The number of molecules in the formula unit"],
    correctIndex: 1,
    explanation: "According to the Born-Lande equation, lattice energy is proportional to (q+ x q-)/(r+ + r-). Higher charges and smaller ionic radii lead to greater lattice energy. This explains why MgO has much higher lattice energy than NaCl."
  },
  {
    question: "Which of the following has the most covalent character?",
    options: ["NaCl", "MgCl2", "AlCl3", "KCl"],
    correctIndex: 2,
    explanation: "According to Fajans' rules, AlCl3 has the most covalent character because Al3+ has a high charge and small radius, giving it high polarizing power that distorts the electron cloud of Cl-, creating covalent character."
  },
  // ═══════════════════════════════════════════════════════════════
  // STOICHIOMETRY (10 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "What is the molarity of a solution made by dissolving 5.85 g of NaCl (molar mass = 58.5 g/mol) in 500 mL of water?",
    options: ["0.1 M", "0.2 M", "0.5 M", "1.0 M"],
    correctIndex: 1,
    explanation: "Moles of NaCl = 5.85 g / 58.5 g/mol = 0.1 mol. Molarity = 0.1 mol / 0.5 L = 0.2 M."
  },
  {
    question: "In the reaction 2H2 + O2 -> 2H2O, how many liters of O2 at STP are needed to completely react with 4 g of H2?",
    options: ["11.2 L", "22.4 L", "44.8 L", "5.6 L"],
    correctIndex: 1,
    explanation: "Moles of H2 = 4 g / 2 g/mol = 2 mol. From stoichiometry, 2 mol H2 requires 1 mol O2. At STP, 1 mol = 22.4 L, so 1 mol O2 = 22.4 L."
  },
  {
    question: "A limiting reagent is the one that:",
    options: ["Is present in excess", "Determines the maximum amount of product", "Has the highest molar mass", "Is consumed last"],
    correctIndex: 1,
    explanation: "The limiting reagent is completely consumed first and determines the maximum amount of product that can be formed. All stoichiometric calculations for product yield are based on the limiting reagent."
  },
  {
    question: "The empirical formula of a compound containing 40% C, 6.7% H, and 53.3% O is:",
    options: ["CHO", "CH2O", "C2H4O2", "C3H6O3"],
    correctIndex: 1,
    explanation: "Assume 100g sample: C = 40g/12 = 3.33 mol, H = 6.7g/1 = 6.7 mol, O = 53.3g/16 = 3.33 mol. Ratio C:H:O = 1:2:1. Empirical formula = CH2O."
  },
  {
    question: "How many moles of water are produced when 2 moles of methane undergo complete combustion?",
    options: ["2", "4", "6", "8"],
    correctIndex: 1,
    explanation: "Balanced equation: CH4 + 2O2 -> CO2 + 2H2O. From stoichiometry, 1 mol CH4 produces 2 mol H2O. Therefore, 2 mol CH4 produces 2 x 2 = 4 mol H2O."
  },
  {
    question: "A compound has a molecular formula of C6H12O6 and an empirical formula of CH2O. What is the ratio of the molecular formula to the empirical formula?",
    options: ["2", "3", "4", "6"],
    correctIndex: 3,
    explanation: "Molecular mass = (6x12) + (12x1) + (6x16) = 180 g/mol. Empirical mass = 12 + 2 + 16 = 30 g/mol. Ratio = 180/30 = 6. The molecular formula is 6 times the empirical formula."
  },
  {
    question: "If 50 mL of 0.1 M HCl is mixed with 50 mL of 0.1 M NaOH, what is the pH of the resulting solution?",
    options: ["1", "7", "13", "2"],
    correctIndex: 1,
    explanation: "Moles of HCl = 0.05 L x 0.1 M = 0.005 mol. Moles of NaOH = 0.05 L x 0.1 M = 0.005 mol. They react completely in a 1:1 ratio, producing only NaCl and water. The solution is neutral with pH = 7."
  },
  {
    question: "What mass of CaCO3 is needed to produce 22.4 L of CO2 at STP?",
    options: ["50 g", "100 g", "200 g", "500 g"],
    correctIndex: 1,
    explanation: "At STP, 22.4 L = 1 mol CO2. Reaction: CaCO3 -> CaO + CO2. From stoichiometry, 1 mol CaCO3 produces 1 mol CO2. Molar mass of CaCO3 = 100 g/mol. Mass = 1 mol x 100 g/mol = 100 g."
  },
  {
    question: "The percentage of nitrogen in ammonium nitrate (NH4NO3) is approximately:",
    options: ["17.5%", "25%", "35%", "50%"],
    correctIndex: 2,
    explanation: "Molar mass of NH4NO3 = 14 + 4 + 14 + 48 = 80 g/mol. Mass of N = 2 x 14 = 28 g. Percentage = (28/80) x 100 = 35%."
  },
  {
    question: "In the reaction Zn + CuSO4 -> ZnSO4 + Cu, how many grams of copper are deposited when 6.5 g of zinc reacts completely?",
    options: ["3.2 g", "6.4 g", "6.5 g", "12.8 g"],
    correctIndex: 1,
    explanation: "Moles of Zn = 6.5 g / 65 g/mol = 0.1 mol. From stoichiometry, 1 mol Zn produces 1 mol Cu. Mass of Cu = 0.1 mol x 64 g/mol = 6.4 g. Zn is oxidized and Cu2+ is reduced."
  },
  // ═══════════════════════════════════════════════════════════════
  // STATES OF MATTER (8 questions)
  // ═══════════════════════════════════════════════════════════════
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
    explanation: "Boyle's law: PV = k (constant) or P1V1 = P2V2 at constant T. As pressure increases, volume decreases proportionally, because gas molecules are forced closer together."
  },
  {
    question: "Surface tension in liquids is primarily caused by:",
    options: ["Gravitational forces", "Cohesive forces between molecules", "Air pressure", "Temperature gradients"],
    correctIndex: 1,
    explanation: "Surface tension results from cohesive intermolecular forces (hydrogen bonds, dipole-dipole, van der Waals) pulling surface molecules inward, creating a 'skin' effect that minimizes surface area."
  },
  {
    question: "The root mean square speed of gas molecules is directly proportional to:",
    options: ["Pressure", "Square root of absolute temperature", "Molar mass", "Number of moles"],
    correctIndex: 1,
    explanation: "vrms = sqrt(3RT/M). The root mean square speed is directly proportional to the square root of absolute temperature (T) and inversely proportional to the square root of molar mass (M)."
  },
  {
    question: "Which intermolecular force is the strongest?",
    options: ["London dispersion forces", "Dipole-dipole interactions", "Hydrogen bonding", "Ion-dipole interactions"],
    correctIndex: 3,
    explanation: "Ion-dipole interactions are the strongest intermolecular force, occurring between ions and polar molecules (e.g., Na+ in water). They are stronger than H-bonding > dipole-dipole > London forces."
  },
  {
    question: "According to the kinetic molecular theory, the average kinetic energy of gas molecules is directly proportional to:",
    options: ["Pressure", "Volume", "Absolute temperature", "Molar mass"],
    correctIndex: 2,
    explanation: "KEavg = (3/2)kT, where k is Boltzmann's constant and T is absolute temperature. Temperature is a measure of the average kinetic energy of molecules."
  },
  {
    question: "A real gas deviates most from ideal behavior at:",
    options: ["High temperature and low pressure", "Low temperature and high pressure", "High temperature and high pressure", "Low temperature and low pressure"],
    correctIndex: 1,
    explanation: "Real gases deviate at low T and high P because intermolecular attractions and molecular volume become significant. At high T, molecules move fast (less attraction effect); at low P, molecules are far apart (volume is negligible)."
  },
  {
    question: "The phenomenon of osmosis involves the movement of:",
    options: ["Solute particles through a semipermeable membrane", "Solvent molecules through a semipermeable membrane", "Both solute and solvent equally", "Gas molecules through a liquid"],
    correctIndex: 1,
    explanation: "Osmosis is the net movement of solvent (usually water) molecules through a semipermeable membrane from a region of lower solute concentration to higher solute concentration, to equalize concentrations."
  },
  // ═══════════════════════════════════════════════════════════════
  // CHEMICAL ENERGETICS (8 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "An exothermic reaction has:",
    options: ["Delta H > 0, absorbs heat", "Delta H < 0, releases heat", "Delta H = 0, no heat change", "Delta G > 0, non-spontaneous"],
    correctIndex: 1,
    explanation: "Exothermic reactions release heat to the surroundings (Delta H < 0). The products have lower enthalpy than the reactants. Examples include combustion and neutralization reactions."
  },
  {
    question: "Hess's law states that the total enthalpy change for a reaction is:",
    options: ["Dependent on the reaction pathway", "The same regardless of the pathway taken", "Proportional to temperature", "Always positive"],
    correctIndex: 1,
    explanation: "Hess's law states that Delta H is a state function - it depends only on initial and final states, not on the path taken. This allows calculation of Delta H for reactions that cannot be directly measured."
  },
  {
    question: "Which of the following has the highest standard enthalpy of combustion?",
    options: ["Methane (CH4)", "Ethanol (C2H5OH)", "Glucose (C6H12O6)", "Octane (C8H18)"],
    correctIndex: 3,
    explanation: "Octane has the highest enthalpy of combustion (~-5470 kJ/mol) because it has the most C-H bonds to break and the most CO2 and H2O molecules produced. Larger hydrocarbons release more energy per mole."
  },
  {
    question: "The bond enthalpy of a bond is defined as:",
    options: ["Energy released when the bond is formed", "Energy required to break one mole of the bond in the gas phase", "The average energy of all bonds in a molecule", "The energy difference between products and reactants"],
    correctIndex: 1,
    explanation: "Bond enthalpy (bond dissociation energy) is the energy required to break one mole of a specific bond in gaseous molecules. It is always positive (endothermic process)."
  },
  {
    question: "In a coffee-cup calorimeter, the heat released by the reaction is calculated using:",
    options: ["q = nRT", "q = mc(delta T)", "q = Delta H - T Delta S", "q = P delta V"],
    correctIndex: 1,
    explanation: "In a constant-pressure calorimeter, q = mc(Delta T) where m is mass, c is specific heat capacity, and Delta T is temperature change. This measures the enthalpy change of the reaction at constant pressure."
  },
  {
    question: "The enthalpy of formation of an element in its standard state is:",
    options: ["Always positive", "Always negative", "Zero by definition", "Depends on temperature"],
    correctIndex: 2,
    explanation: "By convention, the standard enthalpy of formation (Delta Hf) of any element in its most stable form at standard conditions (1 atm, 25 C) is zero. Examples: O2(g), Fe(s), C(graphite) all have Delta Hf = 0."
  },
  {
    question: "Which process has a positive Delta S (increase in entropy)?",
    options: ["Freezing water", "Condensing steam", "Dissolving sugar in water", "Precipitation of a salt"],
    correctIndex: 2,
    explanation: "Dissolving sugar in water increases disorder (more microstates) as the ordered crystal lattice breaks apart and molecules disperse in solution. Freezing, condensation, and precipitation all decrease entropy."
  },
  {
    question: "For a reaction to be spontaneous at constant T and P, which condition must be met?",
    options: ["Delta H must be negative", "Delta S must be positive", "Delta G must be negative", "Both Delta H must be negative and Delta S must be positive"],
    correctIndex: 2,
    explanation: "The Gibbs free energy equation Delta G = Delta H - T Delta S determines spontaneity. A reaction is spontaneous when Delta G < 0. This can occur even if Delta H > 0 (if T Delta S > Delta H)."
  },
  // ═══════════════════════════════════════════════════════════════
  // CHEMICAL KINETICS (8 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "A catalyst increases the rate of reaction by:",
    options: ["Increasing the temperature", "Lowering the activation energy", "Increasing the concentration", "Changing the equilibrium position"],
    correctIndex: 1,
    explanation: "Catalysts provide an alternative reaction pathway with lower activation energy (Ea). More molecules have sufficient energy to react, increasing the rate. Catalysts do not change Delta G, Keq, or the equilibrium position."
  },
  {
    question: "If a reaction is first order with rate constant k = 0.05 min^-1, the half-life is:",
    options: ["5 minutes", "10 minutes", "14 minutes", "20 minutes"],
    correctIndex: 2,
    explanation: "For a first-order reaction, t1/2 = 0.693/k = 0.693/0.05 = 13.86 approx 14 minutes. First-order half-life is independent of initial concentration."
  },
  {
    question: "Collision theory states that for a reaction to occur, colliding particles must have:",
    options: ["Any energy level", "Energy >= activation energy with correct orientation", "Energy >= bond energy", "Energy equal to Delta H"],
    correctIndex: 1,
    explanation: "According to collision theory, effective collisions require: (1) sufficient kinetic energy (>= activation energy) and (2) correct geometric orientation of the colliding particles."
  },
  {
    question: "For the reaction 2NO + O2 -> 2NO2, the rate law is rate = k[NO]^2[O2]. What is the overall order of reaction?",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "Overall order = sum of individual orders = 2 + 1 = 3. This is a third-order reaction. The rate law must be determined experimentally and cannot be predicted from the balanced equation alone."
  },
  {
    question: "The Arrhenius equation relates the rate constant to temperature as:",
    options: ["k = Ae^(-Ea/RT)", "k = Ae^(Ea/RT)", "k = RTln(A/Ea)", "k = Ea/RT"],
    correctIndex: 0,
    explanation: "k = Ae^(-Ea/RT) where A is the pre-exponential factor (frequency factor), Ea is activation energy, R is the gas constant, and T is absolute temperature. As T increases, k increases exponentially."
  },
  {
    question: "A reaction has an activation energy of 50 kJ/mol at 300 K. If the temperature is increased to 310 K, the rate will increase by approximately:",
    options: ["2 times", "3 times", "4 times", "5 times"],
    correctIndex: 0,
    explanation: "Using k2/k1 = exp[(Ea/R)(1/T1 - 1/T2)] = exp[(50000/8.314)(1/300 - 1/310)] = exp(0.647) = 1.91. The rate roughly doubles with a 10 C increase near room temperature, a well-known rule of thumb."
  },
  {
    question: "In a zero-order reaction, the rate:",
    options: ["Depends on concentration", "Is independent of concentration", "Doubles when concentration doubles", "Decreases exponentially"],
    correctIndex: 1,
    explanation: "Zero-order: rate = k (constant). The rate is independent of reactant concentration. Examples include some surface-catalyzed reactions where the surface is saturated. Concentration decreases linearly with time."
  },
  {
    question: "Which of the following increases the fraction of molecules with energy >= Ea?",
    options: ["Adding a catalyst", "Increasing concentration", "Increasing temperature", "Adding an inhibitor"],
    correctIndex: 2,
    explanation: "Increasing temperature shifts the Maxwell-Boltzmann distribution to higher energies, increasing the fraction of molecules with energy >= activation energy. A catalyst lowers Ea but does not change the energy distribution."
  },
  // ═══════════════════════════════════════════════════════════════
  // EQUILIBRIUM (10 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "For the equilibrium N2(g) + 3H2(g) <=> 2NH3(g), if the pressure is increased at constant temperature:",
    options: ["Equilibrium shifts left", "Equilibrium shifts right", "No shift occurs", "Kc changes"],
    correctIndex: 1,
    explanation: "According to Le Chatelier's principle, increasing pressure favors the side with fewer gas molecules. Reactants have 4 moles of gas (1+3), products have 2 moles. The equilibrium shifts right toward NH3."
  },
  {
    question: "If Kc = 100 for a reaction, what is the value of Kp at 25 C? (Kp = Kc(RT)^Delta n)",
    options: ["100", "100 x (0.0821 x 298)^Delta n", "100 x 24.5^Delta n", "Depends on Delta n"],
    correctIndex: 3,
    explanation: "Kp = Kc(RT)^Delta n. The exact value depends on Delta n (change in moles of gas). For each specific reaction, Delta n must be calculated to determine Kp from Kc."
  },
  {
    question: "Which of the following will increase the rate of a forward exothermic reaction?",
    options: ["Decreasing temperature", "Adding a catalyst", "Removing product", "Increasing pressure (if Delta n > 0)"],
    correctIndex: 2,
    explanation: "Removing product shifts equilibrium forward by Le Chatelier's principle. A catalyst speeds up both forward and reverse equally. Decreasing temperature favors exothermic direction but does not increase rate."
  },
  {
    question: "The equilibrium expression Kc for the reaction 2SO2(g) + O2(g) <=> 2SO3(g) is:",
    options: ["[SO3]^2 / ([SO2]^2 [O2])", "[SO2]^2 [O2] / [SO3]^2", "[SO3] / ([SO2] [O2])", "[SO3]^2 / [SO2]^2"],
    correctIndex: 0,
    explanation: "Kc = [products]^coefficients / [reactants]^coefficients. Kc = [SO3]^2 / ([SO2]^2 [O2]). Pure solids and liquids are excluded from equilibrium expressions."
  },
  {
    question: "For the reaction H2O(l) <=> H+(aq) + OH-(aq), Kw = 1.0 x 10^-14 at 25 C. A solution with pH 3 has [OH-] equal to:",
    options: ["1.0 x 10^-3 M", "1.0 x 10^-11 M", "1.0 x 10^-7 M", "1.0 x 10^-14 M"],
    correctIndex: 1,
    explanation: "pH = 3 means [H+] = 10^-3 M. Using Kw = [H+][OH-] = 10^-14, [OH-] = 10^-14 / 10^-3 = 10^-11 M."
  },
  {
    question: "The solubility product (Ksp) expression for Ca3(PO4)2 is:",
    options: ["[Ca2+]^3 [PO4^3-]^2", "[Ca2+] [PO4^3-]", "[Ca2+]^3 [PO4^3-]^2 / [Ca3(PO4)2]", "3[Ca2+] x 2[PO4^3-]"],
    correctIndex: 0,
    explanation: "Ksp = [Ca2+]^3 [PO4^3-]^2. The stoichiometric coefficients become exponents. Pure solids are omitted from the expression. Ksp gives the product of ion concentrations at saturation."
  },
  {
    question: "A catalyst affects the equilibrium by:",
    options: ["Shifting it to the right", "Shifting it to the left", "Increasing Kc", "Not affecting the position of equilibrium at all"],
    correctIndex: 3,
    explanation: "A catalyst speeds up both forward and reverse reactions equally, so it does not change the equilibrium position or Kc. It only helps the system reach equilibrium faster."
  },
  {
    question: "If the temperature of an exothermic reaction at equilibrium is increased, the value of Kc:",
    options: ["Increases", "Decreases", "Remains the same", "Doubles"],
    correctIndex: 1,
    explanation: "For an exothermic reaction, increasing temperature shifts equilibrium left (favors reactants) by Le Chatelier's principle. This decreases the concentration of products relative to reactants, so Kc decreases."
  },
  {
    question: "For a reaction at equilibrium, if Q < Kc:",
    options: ["The reaction shifts to the left", "The reaction is at equilibrium", "The reaction shifts to the right", "The reaction stops"],
    correctIndex: 2,
    explanation: "Q is the reaction quotient. If Q < Kc, the ratio of products to reactants is less than at equilibrium, so the forward reaction proceeds to produce more products until Q = Kc."
  },
  {
    question: "In the equilibrium N2O4(g) <=> 2NO2(g), if N2O4 is added to the system at constant volume:",
    options: ["NO2 concentration decreases immediately", "The system shifts right to partially restore equilibrium", "Kc increases", "The total pressure remains unchanged"],
    correctIndex: 1,
    explanation: "Adding N2O4 increases reactant concentration. By Le Chatelier's principle, the system shifts right to consume some of the added N2O4, producing more NO2 until a new equilibrium is established."
  },
  // ═══════════════════════════════════════════════════════════════
  // ACIDS, BASES AND SALTS (10 questions)
  // ═══════════════════════════════════════════════════════════════
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
    explanation: "HCl is a strong acid that completely dissociates: HCl -> H+ + Cl-. [H+] = 0.01 M = 10^-2 M. pH = -log[H+] = -log(10^-2) = 2."
  },
  {
    question: "Which salt is formed when a weak acid reacts with a strong base?",
    options: ["Neutral salt", "Acidic salt", "Basic salt", "Double salt"],
    correctIndex: 2,
    explanation: "When a weak acid reacts with a strong base, the conjugate base of the weak acid undergoes hydrolysis, producing OH- ions. This makes the salt solution basic (pH > 7). Example: CH3COONa from CH3COOH + NaOH."
  },
  {
    question: "The pH of a 0.1 M NaOH solution is:",
    options: ["1", "7", "13", "14"],
    correctIndex: 2,
    explanation: "NaOH is a strong base that completely dissociates. [OH-] = 0.1 M = 10^-1 M. pOH = 1. pH = 14 - pOH = 14 - 1 = 13."
  },
  {
    question: "Which of the following is an amphoteric substance?",
    options: ["HCl", "NaOH", "H2O", "NaCl"],
    correctIndex: 2,
    explanation: "Amphoteric substances can act as both acids and bases. Water can accept H+ (act as a base) to form H3O+, or donate H+ (act as an acid) to form OH-. Al(OH)3 and Zn(OH)2 are also amphoteric."
  },
  {
    question: "A solution of sodium acetate (CH3COONa) in water will be:",
    options: ["Acidic", "Basic", "Neutral", "Amphoteric"],
    correctIndex: 1,
    explanation: "CH3COONa is a salt of a weak acid (CH3COOH) and strong base (NaOH). The acetate ion hydrolyzes: CH3COO- + H2O <=> CH3COOH + OH-, producing OH- ions and making the solution basic."
  },
  {
    question: "The Henderson-Hasselbalch equation for a buffer is:",
    options: ["pH = pKa + log([A-]/[HA])", "pH = pKa - log([HA]/[A-])", "pH = -log[H+]", "pOH = -log[OH-]"],
    correctIndex: 0,
    explanation: "pH = pKa + log([A-]/[HA]) where [A-] is the conjugate base concentration and [HA] is the weak acid concentration. When [A-] = [HA], pH = pKa. This equation is essential for buffer calculations."
  },
  {
    question: "In a strong acid - strong base titration, the equivalence point pH is:",
    options: ["Less than 7", "Exactly 7", "Greater than 7", "Depends on the indicator"],
    correctIndex: 1,
    explanation: "At the equivalence point of a strong acid-strong base titration, equal moles of H+ and OH- have reacted, producing only water and a neutral salt (e.g., NaCl). The pH is exactly 7 at 25 C."
  },
  {
    question: "Which indicator would be best for a weak acid - strong base titration?",
    options: ["Methyl orange (pH 3.1-4.4)", "Phenolphthalein (pH 8.2-10.0)", "Bromothymol blue (pH 6.0-7.6)", "Thymol blue (pH 1.2-2.8)"],
    correctIndex: 1,
    explanation: "In a weak acid-strong base titration, the equivalence point pH is above 7 due to formation of a basic salt. Phenolphthalein (range 8.2-10.0) changes color near this equivalence point, making it ideal."
  },
  {
    question: "The autoionization constant of water (Kw) increases with temperature. At 100 C, Kw is approximately 10^-12. The pH of pure water at 100 C is:",
    options: ["7", "6", "14", "8"],
    correctIndex: 1,
    explanation: "At 100 C, Kw = [H+][OH-] = 10^-12. In pure water, [H+] = [OH-], so [H+] = sqrt(10^-12) = 10^-6 M. pH = -log(10^-6) = 6. The water is still neutral even though pH < 7."
  },
  // ═══════════════════════════════════════════════════════════════
  // ELECTROCHEMISTRY (8 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "In a galvanic cell, the anode is the electrode where:",
    options: ["Reduction occurs", "Oxidation occurs", "Electrons flow toward", "Positive charge accumulates"],
    correctIndex: 1,
    explanation: "In any electrochemical cell, oxidation occurs at the anode. In a galvanic (voltaic) cell, the anode is the negative electrode from which electrons flow through the external circuit."
  },
  {
    question: "If Ecell = +0.80 V, what is the sign of Delta G?",
    options: ["Positive (non-spontaneous)", "Negative (spontaneous)", "Zero (at equilibrium)", "Cannot be determined"],
    correctIndex: 1,
    explanation: "Delta G = -nFEcell. When Ecell is positive, Delta G is negative, indicating a spontaneous reaction. The cell can do electrical work."
  },
  {
    question: "Electrolysis of molten NaCl produces:",
    options: ["Na at anode, Cl2 at cathode", "Cl2 at anode, Na at cathode", "NaOH at anode, H2 at cathode", "H2 at anode, Cl2 at cathode"],
    correctIndex: 1,
    explanation: "In electrolysis, oxidation occurs at the anode (2Cl- -> Cl2 + 2e-) and reduction at the cathode (Na+ + e- -> Na). The anode attracts anions (Cl-) and the cathode attracts cations (Na+)."
  },
  {
    question: "The Nernst equation is used to calculate:",
    options: ["Standard cell potential", "Cell potential under non-standard conditions", "Equilibrium constant", "Activation energy"],
    correctIndex: 1,
    explanation: "The Nernst equation E = Eo - (RT/nF)lnQ calculates cell potential under non-standard conditions. When Q = 1 (standard conditions), E = Eo. At equilibrium, E = 0 and Q = K."
  },
  {
    question: "According to Faraday's first law of electrolysis, the mass deposited at an electrode is:",
    options: ["Directly proportional to the current only", "Directly proportional to the charge passed (Q = It)", "Inversely proportional to time", "Independent of the nature of the electrolyte"],
    correctIndex: 1,
    explanation: "Faraday's first law: mass (m) = (Q x M) / (n x F) where Q = It is charge passed, M is molar mass, n is number of electrons transferred, and F = 96485 C/mol. Mass is proportional to total charge."
  },
  {
    question: "Which of the following metals would be deposited LAST during electrolysis of a mixed solution containing Ag+, Cu2+, and Zn2+?",
    options: ["Ag", "Cu", "Zn", "All deposit simultaneously"],
    correctIndex: 2,
    explanation: "Metals with the most positive reduction potential are deposited first. Order of deposition: Ag+ (+0.80V) > Cu2+ (+0.34V) > Zn2+ (-0.76V). Zinc, having the most negative reduction potential, is deposited last."
  },
  {
    question: "The standard reduction potential of a half-cell is defined relative to:",
    options: ["The standard hydrogen electrode (SHE) at 0 V", "The calomel electrode", "The copper electrode", "Any arbitrary reference"],
    correctIndex: 0,
    explanation: "All standard reduction potentials are measured relative to the Standard Hydrogen Electrode (SHE), which is assigned Eo = 0 V by convention. SHE consists of H2 gas at 1 atm and H+ ions at 1 M."
  },
  {
    question: "In a lead-acid battery during discharge, the reaction at the cathode is:",
    options: ["Pb -> PbSO4 + 2e-", "PbO2 + 4H+ + SO4^2- + 2e- -> PbSO4 + 2H2O", "PbO2 -> Pb + O2", "PbSO4 -> Pb + SO4^2-"],
    correctIndex: 1,
    explanation: "In a lead-acid battery, reduction occurs at the cathode: PbO2 + 4H+ + SO4^2- + 2e- -> PbSO4 + 2H2O. At the anode (oxidation): Pb + SO4^2- -> PbSO4 + 2e-. Ecell = 2.04 V."
  },
  // ═══════════════════════════════════════════════════════════════
  // ORGANIC CHEMISTRY (15 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "Which of the following is an example of an addition reaction?",
    options: ["CH4 + 2O2 -> CO2 + 2H2O", "CH2=CH2 + HCl -> CH3CH2Cl", "C2H5OH + CH3COOH -> CH3COOC2H5 + H2O", "C6H5CH3 + KMnO4 -> C6H5COOH"],
    correctIndex: 1,
    explanation: "Addition reactions occur in unsaturated compounds (alkenes, alkynes) where atoms are added across the double/triple bond. CH2=CH2 + HCl -> CH3CH2Cl is a classic electrophilic addition."
  },
  {
    question: "The IUPAC name of CH3-CH(OH)-CH2-CH3 is:",
    options: ["1-butanol", "2-butanol", "2-methyl-1-propanol", "Isobutanol"],
    correctIndex: 1,
    explanation: "The longest chain containing the -OH group has 4 carbons (butane). The -OH is on carbon 2, giving 2-butanol (butan-2-ol). Number from the end nearest to the -OH group."
  },
  {
    question: "Which functional group is present in acetic acid (CH3COOH)?",
    options: ["Hydroxyl group", "Carbonyl group", "Carboxyl group", "Aldehyde group"],
    correctIndex: 2,
    explanation: "The -COOH group is a carboxyl group, which combines a carbonyl (C=O) and hydroxyl (-OH) on the same carbon. It gives carboxylic acids their acidic properties."
  },
  {
    question: "Which test distinguishes between aldehydes and ketones?",
    options: ["Bromine water test", "Tollen's test (silver mirror test)", "Iodoform test", "Fehling's solution test"],
    correctIndex: 1,
    explanation: "Tollen's reagent (ammoniacal silver nitrate) oxidizes aldehydes but not ketones. Aldehydes produce a silver mirror, while ketones give no reaction. Both Tollen's and Fehling's tests work, but Tollen's is more reliable for aromatic aldehydes."
  },
  {
    question: "The polymerization of ethene produces:",
    options: ["Polyester", "Polyethylene (PE)", "Nylon", "PVC"],
    correctIndex: 1,
    explanation: "Ethene (CH2=CH2) undergoes addition polymerization to form polyethylene (PE): nCH2=CH2 -> [-CH2-CH2-]n. This is one of the most widely used plastics in the world."
  },
  {
    question: "Which of the following is a structural isomer of butane (C4H10)?",
    options: ["Ethane", "Propane", "Isobutane (2-methylpropane)", "Pentane"],
    correctIndex: 2,
    explanation: "Butane has two structural isomers: n-butane (straight chain) and isobutane/2-methylpropane (branched chain). Both have the molecular formula C4H10 but different structural arrangements."
  },
  {
    question: "In electrophilic addition of HBr to propene in the absence of peroxides, the major product follows:",
    options: ["Anti-Markovnikov's rule", "Markovnikov's rule", "Saytzeff's rule", "Kharasch effect"],
    correctIndex: 1,
    explanation: "Markovnikov's rule states that in the addition of HX to an alkene, the H adds to the carbon with more H atoms, and X adds to the carbon with fewer H atoms. This forms the more stable carbocation intermediate."
  },
  {
    question: "Which reagent is used to test for unsaturation (double bonds)?",
    options: ["Sodium metal", "Bromine water", "Sodium hydroxide", "Ammoniacal silver nitrate"],
    correctIndex: 1,
    explanation: "Bromine water (Br2) decolorizes when added to unsaturated compounds. The orange-brown bromine reacts across the double bond via electrophilic addition. This is a simple test for unsaturation."
  },
  {
    question: "The reaction of ethanol with acidified potassium dichromate produces:",
    options: ["Ethane", "Ethanoic acid (acetic acid)", "Ethene", "Diethyl ether"],
    correctIndex: 1,
    explanation: "Ethanol (primary alcohol) is oxidized by acidified K2Cr2O7 first to ethanal (aldehyde) and then to ethanoic acid (acetic acid) with excess oxidizer. The orange Cr2O7^2- turns green (Cr3+) indicating oxidation."
  },
  {
    question: "Which of the following is NOT a property of amino acids?",
    options: ["They contain both -NH2 and -COOH groups", "They form zwitterions in solution", "They are exclusively found in proteins", "They can exist as D and L enantiomers"],
    correctIndex: 2,
    explanation: "Amino acids exist freely in many biological contexts (free amino acid pools), not just in proteins. They are amphoteric (contain both amino and carboxyl groups), form zwitterions, and have chiral centers (except glycine)."
  },
  {
    question: "The IUPAC name of CH3-CH=CH-CH3 is:",
    options: ["1-butene", "2-butene", "Butane", "2-methyl-1-propene"],
    correctIndex: 1,
    explanation: "The longest chain containing the double bond has 4 carbons. The double bond starts at carbon 2, so the name is 2-butene (but-2-ene). It can exist as cis and trans isomers."
  },
  {
    question: "Which type of reaction does an alkene undergo?",
    options: ["Nucleophilic substitution", "Electrophilic addition", "Free radical substitution", "Nucleophilic addition"],
    correctIndex: 1,
    explanation: "Alkenes undergo electrophilic addition reactions because the electron-rich pi bond acts as a nucleophile and attacks electrophiles. Examples include addition of HBr, Br2, H2O, and H2 across the double bond."
  },
  {
    question: "The number of structural isomers possible for C3H8O (an alcohol) is:",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
    explanation: "C3H8O has two alcohol isomers: 1-propanol (CH3CH2CH2OH) and 2-propanol (CH3CH(OH)CH3). There is also an ether isomer (methoxyethane), but only 2 structural isomers exist as alcohols."
  },
  {
    question: "In the reaction of phenol with bromine water, the product formed is:",
    options: ["Bromobenzene", "2,4,6-tribromophenol (white precipitate)", "Benzyl bromide", "2-bromophenol"],
    correctIndex: 1,
    explanation: "Phenol reacts with bromine water to form 2,4,6-tribromophenol as a white precipitate. The -OH group is strongly activating and directs electrophilic substitution to ortho and para positions."
  },
  {
    question: "Which of the following amino acids has a nonpolar side chain?",
    options: ["Serine", "Lysine", "Leucine", "Aspartic acid"],
    correctIndex: 2,
    explanation: "Leucine has a nonpolar, hydrophobic isobutyl side chain (-CH2CH(CH3)2). Serine has a polar -OH group, lysine has a positively charged -NH2 group, and aspartic acid has a negatively charged -COOH group."
  },
  // ═══════════════════════════════════════════════════════════════
  // REDOX REACTIONS (6 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "In the reaction 2Na + Cl2 -> 2NaCl, which species is oxidized?",
    options: ["Cl2", "Na", "NaCl", "None - this is not a redox reaction"],
    correctIndex: 1,
    explanation: "Na loses an electron (Na -> Na+ + e-) and is oxidized. Its oxidation state changes from 0 to +1. Cl2 gains electrons (Cl2 + 2e- -> 2Cl-) and is reduced (oxidation state 0 to -1)."
  },
  {
    question: "What is the oxidation state of Mn in KMnO4?",
    options: ["+2", "+4", "+5", "+7"],
    correctIndex: 3,
    explanation: "In KMnO4: K is +1, O is -2 (x4 = -8). Let Mn = x. Then +1 + x + (-8) = 0, so x = +7. Manganese is in its highest oxidation state (+7) in permanganate."
  },
  {
    question: "In the disproportionation of hydrogen peroxide (H2O2 -> H2O + O2), the oxygen in H2O2 has an oxidation state of:",
    options: ["-2", "-1", "0", "+1"],
    correctIndex: 1,
    explanation: "In H2O2, H is +1 (x2 = +2). Each O must be -1 to balance: 2(+1) + 2(-1) = 0. In the products, O goes to -2 in H2O (reduction) and 0 in O2 (oxidation). This is a disproportionation reaction."
  },
  {
    question: "In the reaction MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 5Fe3+ + 4H2O, the number of electrons transferred is:",
    options: ["1", "3", "5", "8"],
    correctIndex: 2,
    explanation: "Mn goes from +7 to +2 (gain of 5 electrons). Each Fe goes from +2 to +3 (loss of 1 electron), and there are 5 Fe atoms. Total electrons transferred = 5. The equation is balanced for both charge and mass."
  },
  {
    question: "Which of the following is the strongest oxidizing agent?",
    options: ["Fe2+", "Cu2+", "MnO4- (in acidic solution)", "Cl-"],
    correctIndex: 2,
    explanation: "MnO4- in acidic solution has the highest standard reduction potential (+1.51 V) among these species, making it the strongest oxidizing agent. It can oxidize Fe2+, Cl-, and many other species."
  },
  {
    question: "The oxidation number of carbon in CH4, HCHO, HCOOH, and CO2 are respectively:",
    options: ["-4, 0, +2, +4", "-2, 0, +2, +4", "-4, -2, 0, +2", "0, +2, +4, +6"],
    correctIndex: 0,
    explanation: "CH4: C = -4 (H is +1 x4). HCHO: C = 0 (2H = +2, O = -2). HCOOH: C = +2 (H: +1+1=+2, O: -2x2=-4, so C = +2). CO2: C = +4 (O = -2 x2). Carbon is progressively oxidized."
  },
  // ═══════════════════════════════════════════════════════════════
  // PERIODIC TABLE (6 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "Which of the following elements has the highest electronegativity?",
    options: ["Sodium", "Silicon", "Sulfur", "Fluorine"],
    correctIndex: 3,
    explanation: "Fluorine has the highest electronegativity (3.98 on Pauling scale) of all elements. It is in the top-right of the periodic table (excluding noble gases). Electronegativity increases up and to the right."
  },
  {
    question: "Elements in the same group of the periodic table have the same number of:",
    options: ["Protons", "Neutrons", "Valence electrons", "Energy levels"],
    correctIndex: 2,
    explanation: "Elements in the same group have the same number of valence electrons, which gives them similar chemical properties. For example, Group 1 (alkali metals) all have 1 valence electron."
  },
  {
    question: "Which block of the periodic table contains the transition metals?",
    options: ["s-block", "p-block", "d-block", "f-block"],
    correctIndex: 2,
    explanation: "Transition metals occupy the d-block (Groups 3-12) where the d orbitals are being filled. The f-block contains the lanthanides and actinides. s-block has Groups 1-2, p-block has Groups 13-18."
  },
  {
    question: "The metallic character of elements generally:",
    options: ["Increases across a period and increases down a group", "Decreases across a period and increases down a group", "Increases across a period and decreases down a group", "Decreases across a period and decreases down a group"],
    correctIndex: 1,
    explanation: "Metallic character decreases across a period (left to right) because nuclear charge increases and atoms hold electrons more tightly. It increases down a group because atomic radius increases and outer electrons are more easily lost."
  },
  {
    question: "Which of the following has the largest atomic radius?",
    options: ["Li", "Na", "K", "Rb"],
    correctIndex: 3,
    explanation: "Atomic radius increases down a group because each successive element adds a new energy level. Rb (Period 5) has more electron shells than K (Period 4), Na (Period 3), or Li (Period 2)."
  },
  {
    question: "The first ionization energy of which element is anomalously high compared to its neighbors?",
    options: ["Na", "Mg", "N", "O"],
    correctIndex: 2,
    explanation: "Nitrogen has an anomalously high first ionization energy because its 2p subshell is exactly half-filled (2p3), which is particularly stable. Oxygen (2p4) has slightly lower IE because removing one electron relieves electron-electron repulsion in the doubly occupied orbital."
  },
  // ═══════════════════════════════════════════════════════════════
  // NUCLEAR CHEMISTRY (7 questions)
  // ═══════════════════════════════════════════════════════════════
  {
    question: "In beta (beta-) decay, a neutron is converted into:",
    options: ["A proton and an electron", "A proton and a positron", "Two protons", "An alpha particle"],
    correctIndex: 0,
    explanation: "In beta- decay, a neutron converts into a proton and an electron (beta particle): n -> p + e- + antineutrino. The atomic number increases by 1 while the mass number stays the same."
  },
  {
    question: "The half-life of a radioactive isotope is the time required for:",
    options: ["All atoms to decay", "Half of the atoms to decay", "90% of the atoms to decay", "The activity to double"],
    correctIndex: 1,
    explanation: "Half-life (t1/2) is the time for half the radioactive atoms in a sample to decay. After each half-life, the remaining activity is halved. This is an exponential decay process."
  },
  {
    question: "Nuclear fission differs from nuclear fusion in that fission involves:",
    options: ["Combining light nuclei", "Splitting heavy nuclei into lighter ones", "Annihilation of matter", "Radioactive decay of individual atoms"],
    correctIndex: 1,
    explanation: "Fission splits heavy nuclei (like U-235) into lighter fragments, releasing energy. Fusion combines light nuclei (like H isotopes) into heavier ones, also releasing energy. Both release enormous energy due to mass-energy equivalence."
  },
  {
    question: "In carbon-14 dating, carbon-14 decays by beta emission with a half-life of 5730 years. If a fossil has 25% of the original C-14, how old is it?",
    options: ["5730 years", "11460 years", "17190 years", "22920 years"],
    correctIndex: 1,
    explanation: "25% remaining = (1/2)^2, meaning 2 half-lives have passed. Age = 2 x 5730 = 11,460 years. After 1 half-life: 50% remains. After 2 half-lives: 25% remains. After 3 half-lives: 12.5% remains."
  },
  {
    question: "The mass defect in a nuclear reaction is converted to energy according to:",
    options: ["Ohm's law", "E = mc2", "PV = nRT", "F = ma"],
    correctIndex: 1,
    explanation: "Einstein's mass-energy equivalence E = mc2 states that a small amount of mass (mass defect) can be converted to a large amount of energy. This is the principle behind nuclear energy and explains the binding energy of nuclei."
  },
  {
    question: "Which type of radiation has the greatest penetrating power?",
    options: ["Alpha particles", "Beta particles", "Gamma rays", "Protons"],
    correctIndex: 2,
    explanation: "Gamma rays (high-energy photons) have the greatest penetrating power because they have no mass or charge. Alpha particles are stopped by paper, beta by aluminum, but gamma requires thick lead or concrete to attenuate."
  },
  {
    question: "The binding energy per nucleon of Fe-56 is among the highest of all nuclides. This means that:",
    options: ["Fe-56 is radioactive", "Both fusion of light elements and fission of heavy elements release energy", "Fe-56 is the heaviest stable element", "Iron cannot undergo nuclear reactions"],
    correctIndex: 1,
    explanation: "Fe-56 sits at the peak of the binding energy per nucleon curve (~8.8 MeV/nucleon). Elements lighter than Fe release energy through fusion (moving up the curve), while elements heavier than Fe release energy through fission (also moving toward the peak)."
  },
];
