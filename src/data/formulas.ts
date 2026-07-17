export interface Formula {
  name: string;
  formula: string;
  description: string;
}

export interface FormulaSection {
  title: string;
  icon: string;
  formulas: Formula[];
}

export const physicsFormulas: FormulaSection[] = [
  {
    title: "Mechanics",
    icon: "Rocket",
    formulas: [
      { name: "Momentum", formula: "p = mv", description: "m = mass (kg), v = velocity (m/s)" },
      { name: "Newton's Second Law", formula: "F = ma", description: "F = force (N), m = mass (kg), a = acceleration (m/s²)" },
      { name: "Kinetic Friction", formula: "f_k = μ_k · N", description: "μ_k = coeff. of kinetic friction, N = normal force" },
      { name: "Centripetal Force", formula: "F_c = mv²/r", description: "r = radius of circular path" },
      { name: "Work Done", formula: "W = F · d · cos θ", description: "θ = angle between force and displacement" },
      { name: "Kinetic Energy", formula: "KE = ½mv²", description: "m = mass, v = speed" },
      { name: "Gravitational PE", formula: "PE = mgh", description: "g = 9.8 m/s², h = height" },
      { name: "Elastic PE", formula: "PE = ½kx²", description: "k = spring constant, x = extension" },
      { name: "Power", formula: "P = W/t = Fv", description: "W = work, t = time" },
      { name: "Torque", formula: "τ = rF sin θ", description: "r = lever arm, θ = angle" },
      { name: "Rotational KE", formula: "KE_rot = ½Iω²", description: "I = moment of inertia, ω = angular velocity" },
      { name: "Angular Momentum", formula: "L = Iω", description: "Conserved when no external torque" },
    ],
  },
  {
    title: "Waves & Oscillations",
    icon: "Waves",
    formulas: [
      { name: "Wave Speed", formula: "v = fλ", description: "f = frequency, λ = wavelength" },
      { name: "SHM Displacement", formula: "x = A cos(ωt + φ)", description: "A = amplitude, ω = angular frequency" },
      { name: "SHM Acceleration", formula: "a = -ω²x", description: "Always toward equilibrium" },
      { name: "Pendulum Period", formula: "T = 2π√(L/g)", description: "L = length, g = gravitational accel." },
      { name: "Spring-Mass Period", formula: "T = 2π√(m/k)", description: "m = mass, k = spring constant" },
      { name: "Doppler Effect", formula: "f' = f(v ± v_o)/(v ∓ v_s)", description: "v = wave speed, v_o = observer, v_s = source" },
      { name: "Beat Frequency", formula: "f_beat = |f₁ - f₂|", description: "Difference of two close frequencies" },
    ],
  },
  {
    title: "Electricity & Magnetism",
    icon: "Zap",
    formulas: [
      { name: "Coulomb's Law", formula: "F = kq₁q₂/r²", description: "k = 8.99 × 10⁹ N·m²/C²" },
      { name: "Electric Field", formula: "E = kq/r²", description: "E in N/C or V/m" },
      { name: "Electric Potential", formula: "V = kq/r", description: "V in volts" },
      { name: "Capacitance", formula: "C = Q/V", description: "C in farads, Q in coulombs" },
      { name: "Capacitor Energy", formula: "U = ½CV² = Q²/(2C)", description: "Energy stored in capacitor" },
      { name: "Ohm's Law", formula: "V = IR", description: "V = voltage, I = current, R = resistance" },
      { name: "Electrical Power", formula: "P = VI = I²R = V²/R", description: "P in watts" },
      { name: "Resistivity", formula: "R = ρL/A", description: "ρ = resistivity, L = length, A = area" },
      { name: "Series Resistance", formula: "R_eq = R₁ + R₂ + ...", description: "Resistors in series" },
      { name: "Parallel Resistance", formula: "1/R_eq = 1/R₁ + 1/R₂ + ...", description: "Resistors in parallel" },
      { name: "Faraday's Law", formula: "emf = -dΦ_B/dt", description: "Rate of change of magnetic flux" },
      { name: "Magnetic Flux", formula: "Φ_B = BA cos θ", description: "B = field, A = area, θ = angle" },
      { name: "Lorentz Force", formula: "F = q(E + v × B)", description: "Force on charge in E and B fields" },
    ],
  },
  {
    title: "Modern Physics",
    icon: "Atom",
    formulas: [
      { name: "Mass-Energy", formula: "E = mc²", description: "c = 3 × 10⁸ m/s" },
      { name: "Photon Energy", formula: "E = hf = hc/λ", description: "h = 6.626 × 10⁻³⁴ J·s" },
      { name: "de Broglie Wavelength", formula: "λ = h/(mv)", description: "Matter wave of particle" },
      { name: "Bohr Energy Levels", formula: "E_n = -13.6Z²/n² eV", description: "Z = atomic number, n = quantum number" },
      { name: "Rydberg Formula", formula: "1/λ = R_H(1/n₁² - 1/n₂²)", description: "R_H = 1.097 × 10⁷ m⁻¹" },
      { name: "Photoelectric Effect", formula: "KE_max = hf - φ", description: "φ = work function" },
      { name: "Radioactive Decay", formula: "N = N₀e^(-λt)", description: "t₁/₂ = 0.693/λ" },
    ],
  },
];

export const chemistryFormulas: FormulaSection[] = [
  {
    title: "Stoichiometry & Mole Concept",
    icon: "Scale",
    formulas: [
      { name: "Moles", formula: "n = m/M", description: "m = mass (g), M = molar mass (g/mol)" },
      { name: "Molarity", formula: "M = n/V", description: "n = moles of solute, V = liters" },
      { name: "Dilution", formula: "M₁V₁ = M₂V₂", description: "Conservation of moles" },
      { name: "Molality", formula: "m = n_solute/kg_solvent", description: "mol/kg" },
      { name: "Mass Percent", formula: "% = (mass_solute/mass_solution) × 100", description: "" },
    ],
  },
  {
    title: "Gas Laws",
    icon: "Wind",
    formulas: [
      { name: "Ideal Gas Law", formula: "PV = nRT", description: "R = 0.0821 L·atm/(mol·K)" },
      { name: "Boyle's Law", formula: "P₁V₁ = P₂V₂", description: "At constant T" },
      { name: "Charles's Law", formula: "V₁/T₁ = V₂/T₂", description: "At constant P" },
      { name: "Combined Gas Law", formula: "P₁V₁/T₁ = P₂V₂/T₂", description: "" },
      { name: "Dalton's Law", formula: "P_total = P₁ + P₂ + ...", description: "Partial pressures" },
      { name: "Graham's Law", formula: "rate₁/rate₂ = √(M₂/M₁)", description: "Effusion rate" },
    ],
  },
  {
    title: "Equilibrium, Acids & Bases",
    icon: "FlaskConical",
    formulas: [
      { name: "Equilibrium Constant", formula: "K_c = [products]^coeff/[reactants]^coeff", description: "" },
      { name: "Kp to Kc", formula: "Kp = Kc(RT)^Δn", description: "Δn = moles gas products - reactants" },
      { name: "pH", formula: "pH = -log[H⁺]", description: "<7 acidic, =7 neutral, >7 basic" },
      { name: "pH + pOH", formula: "pH + pOH = 14", description: "At 25°C" },
      { name: "Ion Product of Water", formula: "K_w = [H⁺][OH⁻] = 10⁻¹⁴", description: "At 25°C" },
      { name: "Henderson-Hasselbalch", formula: "pH = pK_a + log([A⁻]/[HA])", description: "Buffer solutions" },
      { name: "Ka × Kb", formula: "Ka × Kb = K_w", description: "For conjugate acid-base pairs" },
      { name: "Solubility Product", formula: "K_sp = [cation]^m[anion]^n", description: "At saturation" },
    ],
  },
  {
    title: "Chemical Kinetics & Electrochemistry",
    icon: "Zap",
    formulas: [
      { name: "Arrhenius Equation", formula: "k = Ae^(-Ea/RT)", description: "Ea = activation energy" },
      { name: "1st Order Half-Life", formula: "t₁/₂ = 0.693/k", description: "" },
      { name: "Nernst Equation", formula: "E = E° - (0.0592/n)log Q", description: "At 25°C" },
      { name: "Gibbs Free Energy", formula: "ΔG = -nFE", description: "F = 96485 C/mol" },
      { name: "ΔG and K", formula: "ΔG° = -RT ln K", description: "" },
      { name: "Faraday's Law", formula: "m = MIt/(nF)", description: "Mass deposited in electrolysis" },
    ],
  },
  {
    title: "Organic Chemistry",
    icon: "Hexagon",
    formulas: [
      { name: "Degree of Unsaturation", formula: "DU = (2C + 2 + N - H - X)/2", description: "Rings + π bonds" },
      { name: "Alkane General Formula", formula: "CₙH₂ₙ₊₂", description: "Saturated hydrocarbons" },
      { name: "Alkene General Formula", formula: "CₙH₂ₙ", description: "One double bond" },
      { name: "Alkyne General Formula", formula: "CₙH₂ₙ₋₂", description: "One triple bond" },
    ],
  },
];
