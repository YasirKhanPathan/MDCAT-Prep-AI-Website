import { Question } from "@/components/MCQCard";

export const physicsHardQuestions: Question[] = [
  // Vectors
  {
    question: "The resultant of two vectors A and B is perpendicular to A. The angle between A and B is:",
    options: ["90°", "120°", "150°", "60°"],
    correctIndex: 1,
    explanation: "If R = A + B is perpendicular to A, then A·R = 0. So A·(A + B) = 0 → |A|² + A·B = 0 → |A|² + |A||B|cosθ = 0 → cosθ = -|A|/|B|. For |A| = |B|, cosθ = -1/2, θ = 120°."
  },
  {
    question: "A vector of magnitude 5 makes an angle of 37° with the x-axis. Its y-component is: (sin 37° ≈ 0.6)",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "y-component = |A|sinθ = 5 × sin 37° = 5 × 0.6 = 3."
  },
  {
    question: "The cross product of two parallel vectors is:",
    options: ["Maximum", "Zero", "Equal to the product of magnitudes", "Undefined"],
    correctIndex: 1,
    explanation: "A × B = |A||B|sinθ n̂. For parallel vectors, θ = 0° or 180°, so sinθ = 0, and the cross product is zero."
  },
  // Newton's Laws
  {
    question: "A 5 kg block is pushed with a force of 20 N on a frictionless surface. The acceleration is:",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "100 m/s²"],
    correctIndex: 1,
    explanation: "By Newton's second law: F = ma → a = F/m = 20/5 = 4 m/s²."
  },
  {
    question: "According to Newton's third law, when a hammer strikes a nail:",
    options: ["The hammer exerts more force on the nail", "The nail exerts more force on the hammer", "Both exert equal and opposite forces", "The nail exerts no force on the hammer"],
    correctIndex: 2,
    explanation: "Newton's third law: for every action, there is an equal and opposite reaction. The force the hammer exerts on the nail equals the force the nail exerts on the hammer (in magnitude, opposite direction)."
  },
  {
    question: "A body is moving in a circle of radius 4 m at 10 m/s. The centripetal acceleration is:",
    options: ["10 m/s²", "20 m/s²", "25 m/s²", "40 m/s²"],
    correctIndex: 2,
    explanation: "a_c = v²/r = (10)²/4 = 100/4 = 25 m/s². Centripetal acceleration always points toward the center of the circular path."
  },
  // Work, Energy & Power
  {
    question: "A 2 kg ball is thrown vertically upward with an initial velocity of 20 m/s. The maximum height reached is: (g = 10 m/s²)",
    options: ["10 m", "20 m", "30 m", "40 m"],
    correctIndex: 1,
    explanation: "At max height, v = 0. Using v² = u² - 2gh: 0 = (20)² - 2(10)h → h = 400/20 = 20 m."
  },
  {
    question: "Work done by a force is zero when:",
    options: ["Force is maximum", "Displacement is zero", "Force and displacement are parallel", "Acceleration is zero"],
    correctIndex: 1,
    explanation: "Work W = F·d·cosθ. When displacement d = 0, W = 0 regardless of the force. Also W = 0 when θ = 90° (force perpendicular to displacement)."
  },
  {
    question: "A 1000 kg car moving at 36 km/h is brought to rest in 4 seconds. The average braking force is:",
    options: ["2500 N", "5000 N", "9000 N", "36000 N"],
    correctIndex: 0,
    explanation: "v = 36 km/h = 10 m/s. a = (0-10)/4 = -2.5 m/s². F = ma = 1000 × (-2.5) = -2500 N. The braking force magnitude is 2500 N."
  },
  // Rotational Motion
  {
    question: "A solid sphere and a hollow sphere of the same mass and radius roll down an incline. Which reaches the bottom first?",
    options: ["Solid sphere", "Hollow sphere", "Both reach at the same time", "Depends on the angle"],
    correctIndex: 0,
    explanation: "The solid sphere has a smaller moment of inertia (I = 2/5 mr²) compared to the hollow sphere (I = 2/3 mr²). Less rotational inertia means more energy goes to translational kinetic energy, so the solid sphere accelerates faster."
  },
  {
    question: "Torque is the rotational equivalent of:",
    options: ["Mass", "Force", "Momentum", "Kinetic energy"],
    correctIndex: 1,
    explanation: "Torque (τ = r × F) is the rotational analog of force. Just as force causes linear acceleration, torque causes angular acceleration (τ = Iα)."
  },
  {
    question: "The moment of inertia of a uniform rod of mass M and length L about an axis through its center and perpendicular to its length is:",
    options: ["ML²/12", "ML²/3", "ML²/2", "ML²/6"],
    correctIndex: 0,
    explanation: "For a thin rod rotating about its center: I = ML²/12. About one end: I = ML²/3. The center axis has less inertia because mass is distributed closer to the axis."
  },
  // Waves & Oscillations
  {
    question: "A sound wave has frequency 440 Hz and speed 340 m/s. Its wavelength is approximately:",
    options: ["0.77 m", "1.30 m", "77 m", "150000 m"],
    correctIndex: 0,
    explanation: "v = fλ → λ = v/f = 340/440 ≈ 0.773 m ≈ 0.77 m."
  },
  {
    question: "In a standing wave on a string fixed at both ends, the distance between two adjacent nodes is:",
    options: ["λ", "λ/2", "λ/4", "2λ"],
    correctIndex: 1,
    explanation: "In a standing wave, adjacent nodes are separated by λ/2. The distance between a node and the adjacent antinode is λ/4."
  },
  {
    question: "The Doppler effect causes the pitch of a sound to appear HIGHER when:",
    options: ["Source and observer move apart", "Source and observer move toward each other", "Source is stationary", "Observer moves perpendicular to source"],
    correctIndex: 1,
    explanation: "When source and observer approach each other, the observed frequency increases (f' = f(v + vo)/(v - vs)), making the pitch appear higher. This is why an ambulance siren sounds higher pitched as it approaches."
  },
  {
    question: "The period of a simple pendulum depends on:",
    options: ["The mass of the bob", "The amplitude of oscillation", "The length of the pendulum and g", "The material of the string"],
    correctIndex: 2,
    explanation: "T = 2π√(L/g). The period depends only on the length L and gravitational acceleration g. It is independent of mass and amplitude (for small angles)."
  },
  // Electrostatics
  {
    question: "Two point charges +4μC and -9μC are placed 20 cm apart. The force between them is:",
    options: ["Attractive, 8.1 N", "Repulsive, 8.1 N", "Attractive, 0.081 N", "Zero"],
    correctIndex: 0,
    explanation: "F = k|q₁||q₂|/r² = (9×10⁹)(4×10⁻⁶)(9×10⁻⁶)/(0.2)² = 324×10⁻³/0.04 = 8.1 N. Unlike charges attract."
  },
  {
    question: "The electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Maximum at the center", "Uniform throughout", "Zero", "Proportional to distance from center"],
    correctIndex: 2,
    explanation: "In electrostatic equilibrium, free charges in a conductor redistribute until the internal electric field is exactly zero everywhere inside the conductor."
  },
  {
    question: "Capacitance of a parallel plate capacitor is doubled when:",
    options: ["Both plates are doubled in area", "Distance between plates is doubled", "A dielectric of K=2 is removed", "Voltage is doubled"],
    correctIndex: 0,
    explanation: "C = ε₀KA/d. Doubling area (A) doubles C. Doubling distance (d) halves C. Removing K=2 halves C. Changing voltage doesn't change C (C is geometric)."
  },
  // Current Electricity
  {
    question: "Three resistors of 6Ω each are connected in parallel. The equivalent resistance is:",
    options: ["2Ω", "6Ω", "18Ω", "0.5Ω"],
    correctIndex: 0,
    explanation: "For parallel resistors: 1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. So R = 2Ω."
  },
  {
    question: "A 12V battery is connected to a 4Ω resistor. The power dissipated is:",
    options: ["3 W", "12 W", "36 W", "48 W"],
    correctIndex: 2,
    explanation: "P = V²/R = (12)²/4 = 144/4 = 36 W. Alternatively, I = V/R = 12/4 = 3 A, P = I²R = 9×4 = 36 W."
  },
  {
    question: "Kirchhoff's first law (junction rule) is based on conservation of:",
    options: ["Energy", "Charge", "Momentum", "Mass"],
    correctIndex: 1,
    explanation: "Kirchhoff's junction rule (ΣI in = ΣI out) is based on conservation of charge. Charge cannot accumulate at a junction, so the total current entering must equal the total current leaving."
  },
  // Electromagnetism
  {
    question: "A charged particle moves parallel to a magnetic field. The magnetic force on it is:",
    options: ["Maximum", "Zero", "F = qvB", "F = qvB sin 90°"],
    correctIndex: 1,
    explanation: "F = qvBsinθ. When velocity is parallel to the field, θ = 0°, so sinθ = 0 and F = 0. Magnetic force only acts on charges moving perpendicular (or at an angle) to the field."
  },
  {
    question: "Faraday's law of electromagnetic induction states that the induced EMF is proportional to:",
    options: ["The magnetic field strength", "The rate of change of magnetic flux", "The area of the coil", "The current in the coil"],
    correctIndex: 1,
    explanation: "Faraday's law: EMF = -dΦ/dt. The induced EMF is proportional to the rate of change of magnetic flux (Φ = BAcosθ) through the circuit."
  },
  {
    question: "Lenz's law determines:",
    options: ["The magnitude of induced EMF", "The direction of induced current", "The frequency of alternating current", "The resistance of the circuit"],
    correctIndex: 1,
    explanation: "Lenz's law states that the direction of induced current is such that it opposes the change in magnetic flux that produced it. This is consistent with conservation of energy."
  },
  // Modern Physics
  {
    question: "The photoelectric effect cannot be explained by:",
    options: ["Wave theory of light", "Particle theory of light", "Quantum theory", "Einstein's photon concept"],
    correctIndex: 0,
    explanation: "Wave theory predicts that light of any frequency should eject electrons if intensity is high enough. However, photoelectric effect shows a threshold frequency below which no electrons are emitted, regardless of intensity. This can only be explained by particle/quantum theory."
  },
  {
    question: "In the photoelectric effect, increasing the intensity of light increases:",
    options: ["The kinetic energy of photoelectrons", "The number of photoelectrons emitted", "The threshold frequency", "The stopping potential"],
    correctIndex: 1,
    explanation: "Increasing intensity means more photons per second, which ejects more photoelectrons (higher photocurrent). The kinetic energy of individual photoelectrons depends only on frequency, not intensity."
  },
  {
    question: "Bohr's model successfully explains the spectrum of:",
    options: ["All atoms", "Hydrogen and hydrogen-like atoms only", "Molecules only", "Solids only"],
    correctIndex: 1,
    explanation: "Bohr's model works for hydrogen and hydrogen-like ions (He⁺, Li²⁺) but fails for multi-electron atoms due to electron-electron interactions not accounted for in the model."
  },
  {
    question: "The de Broglie wavelength of an electron increases when:",
    options: ["Its velocity increases", "Its mass increases", "Its momentum decreases", "Its energy increases"],
    correctIndex: 2,
    explanation: "λ = h/p = h/(mv). The de Broglie wavelength is inversely proportional to momentum. When momentum decreases (lower velocity or mass), the wavelength increases."
  },
  {
    question: "In E = mc², the 'm' represents:",
    options: ["Rest mass only", "Relativistic mass", "Reduced mass", "Molar mass"],
    correctIndex: 1,
    explanation: "In Einstein's mass-energy equivalence, m is the relativistic mass (m = m₀/√(1-v²/c²)). The equation shows that mass and energy are interchangeable, and even a small mass contains enormous energy."
  },
  {
    question: "Radioactive decay is an example of:",
    options: ["First-order kinetics", "Second-order kinetics", "Zero-order kinetics", "Third-order kinetics"],
    correctIndex: 0,
    explanation: "Radioactive decay follows first-order kinetics: N = N₀e^(-λt). The rate of decay is proportional to the number of radioactive atoms present, and the half-life is constant regardless of amount."
  },
  // Gravitation
  {
    question: "If the distance between two masses is doubled, the gravitational force between them becomes:",
    options: ["Double", "Half", "One-fourth", "Four times"],
    correctIndex: 2,
    explanation: "F = Gm₁m₂/r². If r is doubled, F becomes Gm₁m₂/(2r)² = Gm₁m₂/4r² = F/4. Gravitational force is inversely proportional to the square of the distance."
  },
  {
    question: "The orbital velocity of a satellite orbiting close to Earth's surface is approximately:",
    options: ["3.4 km/s", "7.9 km/s", "11.2 km/s", "15.3 km/s"],
    correctIndex: 1,
    explanation: "v = √(gR) = √(9.8 × 6.4×10⁶) ≈ 7900 m/s ≈ 7.9 km/s. This is the first cosmic velocity (orbital velocity). 11.2 km/s is the escape velocity."
  },
  {
    question: "A geostationary satellite orbits Earth at a height of approximately:",
    options: ["200 km", "1000 km", "36,000 km", "100,000 km"],
    correctIndex: 2,
    explanation: "A geostationary satellite orbits at ~35,786 km above Earth's surface (≈36,000 km) with a period of 24 hours, remaining fixed above the same point on the equator."
  },
  {
    question: "The escape velocity from Earth is independent of:",
    options: ["The mass of Earth", "The gravitational constant G", "The mass of the object", "The radius of Earth"],
    correctIndex: 2,
    explanation: "v_esc = √(2gR) = √(2GM/R). The escape velocity depends on the planet's mass (M) and radius (R), but NOT on the mass of the escaping object. Both a feather and a boulder need the same escape velocity."
  },
  // Properties of Matter
  {
    question: "Young's modulus is the ratio of:",
    options: ["Stress to strain", "Force to area", "Pressure to volume change", "Shear stress to shear strain"],
    correctIndex: 0,
    explanation: "Young's modulus (Y) = tensile stress / tensile strain = (F/A)/(ΔL/L). It measures the stiffness of a material in tension. Higher Y means stiffer material."
  },
  {
    question: "A wire of length L and radius r is stretched to twice its length. Its new radius is:",
    options: ["r/2", "r/√2", "r/4", "r"],
    correctIndex: 1,
    explanation: "Volume is conserved: πr²L = πr'²(2L) → r² = 2r'² → r' = r/√2. When stretched to double the length, the radius decreases by factor of √2."
  },
  {
    question: "Surface tension has the same dimension as:",
    options: ["Force", "Energy", "Force per unit length", "Energy per unit area"],
    correctIndex: 2,
    explanation: "Surface tension (γ) = F/L = [MLT⁻²]/[L] = [MT⁻²]. Its SI unit is N/m. It represents the force per unit length along the surface."
  },
];
