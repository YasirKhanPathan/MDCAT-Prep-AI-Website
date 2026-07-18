import { Question } from "@/components/MCQCard";

export const physicsHardQuestions: Question[] = [
  // FORCES AND MOTION (15 questions)
  {
    question: "A body of mass 5 kg is acted on by 6 N east and 8 N north. The magnitude and direction of acceleration are:",
    options: ["2 m/s² at 53.1° from east", "2 m/s² at 36.9° from east", "2.83 m/s² at 45° from east", "10 m/s² at 53.1° from east"],
    correctIndex: 0,
    explanation: "F = √(6²+8²) = 10 N. tan θ = 8/6, θ = 53.1°. a = F/m = 10/5 = 2 m/s² at 53.1° from east."
  },
  {
    question: "A 2 kg block on a rough surface is pulled by 20 N horizontally and accelerates at 6 m/s². The coefficient of kinetic friction is: (g = 10 m/s²)",
    options: ["0.2", "0.4", "0.6", "0.8"],
    correctIndex: 1,
    explanation: "F - μmg = ma → 20 - μ(20) = 12 → μ = 8/20 = 0.4."
  },
  {
    question: "A projectile is launched at 60° to horizontal with v₀ = 30 m/s. Time of flight: (g = 10 m/s²)",
    options: ["3√3 s", "6√3 s", "3 s", "6 s"],
    correctIndex: 0,
    explanation: "T = 2v₀sinθ/g = 2(30)(sin60°)/10 = 60(√3/2)/10 = 3√3 s ≈ 5.2 s."
  },
  {
    question: "A ball is thrown upward at 20 m/s from a 45 m building. Time to reach the ground: (g = 10 m/s²)",
    options: ["3 s", "4 s", "5 s", "6 s"],
    correctIndex: 2,
    explanation: "s = ut + ½at² → 45 = -20t + 5t² → t² - 4t - 9 = 0 → t = (4+√52)/2. Taking t = 5 s (positive root)."
  },
  {
    question: "A 1500 kg car at 72 km/h stops in 4 s. The impulse delivered is:",
    options: ["-30,000 N·s", "-60,000 N·s", "-120,000 N·s", "-240,000 N·s"],
    correctIndex: 0,
    explanation: "v = 20 m/s. Impulse = Δp = 1500(0-20) = -30,000 N·s."
  },
  {
    question: "4 kg at 5 m/s collides head-on with 6 kg at 3 m/s (opposite). They stick. Velocity after:",
    options: ["0.2 m/s (4 kg direction)", "0.2 m/s (6 kg direction)", "1 m/s (4 kg direction)", "4 m/s (4 kg direction"],
    correctIndex: 0,
    explanation: "Conservation of momentum: (4)(5)+(6)(-3) = 10v → 20-18 = 10v → v = 0.2 m/s in 4 kg direction."
  },
  {
    question: "A 2 kg body at rest explodes into 0.5 kg (6 m/s), 0.5 kg (8 m/s at right angle), and 1 kg piece. Speed of 1 kg piece:",
    options: ["5 m/s", "10 m/s", "√52 m/s", "√100 m/s"],
    correctIndex: 0,
    explanation: "p₁=3, p₂=4 at right angles. Resultant = √(9+16) = 5 kg·m/s. Third piece: v = 5/1 = 5 m/s to conserve zero total momentum."
  },
  {
    question: "A cyclist at 10 m/s brakes with deceleration 2 m/s². Stopping distance:",
    options: ["10 m", "25 m", "50 m", "100 m"],
    correctIndex: 1,
    explanation: "v²=u²+2as → 0=100-4s → s = 25 m."
  },
  {
    question: "A block slides down a 30° incline with μₖ = 0.2. Acceleration: (g = 10 m/s²)",
    options: ["2.27 m/s²", "3.27 m/s²", "5 m/s²", "8.66 m/s²"],
    correctIndex: 1,
    explanation: "a = g(sin30° - 0.2cos30°) = 10(0.5 - 0.173) = 3.27 m/s²."
  },
  {
    question: "A 0.5 kg ball hits a wall at 10 m/s and rebounds at 8 m/s. Impulse on ball:",
    options: ["1 N·s", "9 N·s", "5 N·s", "4 N·s"],
    correctIndex: 1,
    explanation: "Δp = m(v₂-v₁) = 0.5(8-(-10)) = 9 N·s."
  },
  {
    question: "A satellite at orbital radius R has speed v. At radius 2R its speed is:",
    options: ["v", "v/√2", "v/2", "v/√3"],
    correctIndex: 1,
    explanation: "v = √(GM/r). At 2R: v′ = √(GM/2R) = v/√2."
  },
  {
    question: "A rope (max tension 1000 N) lifts a 50 kg block. Maximum upward acceleration: (g = 10 m/s²)",
    options: ["5 m/s²", "10 m/s²", "15 m/s²", "20 m/s²"],
    correctIndex: 1,
    explanation: "T - mg = ma → 1000 - 500 = 50a → a = 10 m/s²."
  },
  {
    question: "A 5 kg body has forces 3 N and 4 N at right angles. Acceleration:",
    options: ["0.5 m/s²", "1 m/s²", "1.4 m/s²", "7 m/s²"],
    correctIndex: 1,
    explanation: "F = √(3²+4²) = 5 N. a = 5/5 = 1 m/s²."
  },
  {
    question: "A ball is projected horizontally at 15 m/s from height 20 m. Horizontal range: (g = 10 m/s²)",
    options: ["15 m", "20 m", "30 m", "45 m"],
    correctIndex: 2,
    explanation: "t = √(2h/g) = √(40/10) = 2 s. x = vt = 15 × 2 = 30 m."
  },
  {
    question: "μₛ = 0.5 for a block on a surface. Minimum horizontal force to move 10 kg: (g = 10 m/s²)",
    options: ["5 N", "10 N", "50 N", "100 N"],
    correctIndex: 2,
    explanation: "fₛ(max) = μₛN = μₛmg = 0.5(10)(10) = 50 N."
  },

  // ENERGY, POWER AND EFFICIENCY (10 questions)
  {
    question: "A 1000 kg car at 20 m/s brakes to rest. Work done by friction:",
    options: ["-200 kJ", "-400 kJ", "-20 kJ", "-2000 kJ"],
    correctIndex: 0,
    explanation: "W = ΔKE = 0 - ½(1000)(20²) = -200,000 J = -200 kJ."
  },
  {
    question: "A spring (k = 500 N/m) is compressed 0.1 m. Elastic PE stored:",
    options: ["0.5 J", "2.5 J", "5 J", "50 J"],
    correctIndex: 1,
    explanation: "E = ½kx² = ½(500)(0.01) = 2.5 J."
  },
  {
    question: "A motor lifts 50 kg to 10 m in 5 s. Power output: (g = 10 m/s²)",
    options: ["100 W", "500 W", "1000 W", "5000 W"],
    correctIndex: 2,
    explanation: "P = mgh/t = (50)(10)(10)/5 = 1000 W."
  },
  {
    question: "A 2 kg body falls from 45 m. Speed at ground: (g = 10 m/s²)",
    options: ["20 m/s", "25 m/s", "30 m/s", "45 m/s"],
    correctIndex: 2,
    explanation: "mgh = ½mv² → v = √(2gh) = √(900) = 30 m/s."
  },
  {
    question: "An engine absorbs 500 J and rejects 300 J. Efficiency:",
    options: ["20%", "40%", "60%", "67%"],
    correctIndex: 1,
    explanation: "η = (Q_in - Q_out)/Q_in = (500-300)/500 = 0.4 = 40%."
  },
  {
    question: "KE of a body is 48 J. If speed doubles, new KE:",
    options: ["96 J", "192 J", "24 J", "48 J"],
    correctIndex: 1,
    explanation: "KE ∝ v². Doubled speed → KE becomes 4× = 192 J."
  },
  {
    question: "A ball dropped from 10 m rebounds to 6.4 m. Coefficient of restitution:",
    options: ["0.4", "0.64", "0.8", "0.5"],
    correctIndex: 2,
    explanation: "e = √(h₂/h₁) = √(6.4/10) = √0.64 = 0.8."
  },
  {
    question: "A pump raises water at 0.5 kg/s to 20 m height. Power: (g = 10 m/s²)",
    options: ["50 W", "100 W", "200 W", "500 W"],
    correctIndex: 1,
    explanation: "P = (dm/dt)gh = 0.5 × 10 × 20 = 100 W."
  },
  {
    question: "A pendulum bob released from 5 m height. Speed at lowest point: (g = 10 m/s²)",
    options: ["5 m/s", "10 m/s", "20 m/s", "50 m/s"],
    correctIndex: 1,
    explanation: "mgh = ½mv² → v = √(2gh) = √(100) = 10 m/s."
  },
  {
    question: "A car engine does 60 kJ work from 200 kJ fuel energy. Efficiency:",
    options: ["15%", "30%", "35%", "70%"],
    correctIndex: 1,
    explanation: "η = W/Q_in = 60,000/200,000 = 0.3 = 30%."
  },

  // TURNING EFFECTS OF FORCES (8 questions)
  {
    question: "A uniform rod 2 m long, mass 3 kg, is pivoted at one end. Moment of inertia about pivot:",
    options: ["2 kg·m²", "4 kg·m²", "6 kg·m²", "12 kg·m²"],
    correctIndex: 1,
    explanation: "I = ML²/3 = (3)(2²)/3 = 12/3 = 4 kg·m²."
  },
  {
    question: "The moment of inertia of a solid disc (mass M, radius R) about its central axis is:",
    options: ["MR²/2", "MR²/4", "MR²", "2MR²/5"],
    correctIndex: 0,
    explanation: "For a solid disc: I = ½MR². For solid sphere: 2/5 MR². For hollow sphere: 2/3 MR²."
  },
  {
    question: "A wheel of radius 0.5 m rolls without slipping at 4 m/s. Angular velocity:",
    options: ["2 rad/s", "4 rad/s", "8 rad/s", "16 rad/s"],
    correctIndex: 2,
    explanation: "v = ωr → ω = v/r = 4/0.5 = 8 rad/s."
  },
  {
    question: "A flywheel with I = 4 kg·m² rotates at 10 rad/s. Rotational KE:",
    options: ["200 J", "400 J", "800 J", "1600 J"],
    correctIndex: 0,
    explanation: "KE = ½Iω² = ½(4)(100) = 200 J."
  },
  {
    question: "Two forces of 10 N and 20 N act at 3 m and 1.5 m from a pivot on opposite sides. For rotational equilibrium, the angle of the 20 N force with its lever arm must be:",
    options: ["0°", "30°", "60°", "90°"],
    correctIndex: 3,
    explanation: "Torques: τ₁ = 10×3 = 30 N·m. τ₂ = 20×1.5×sinθ = 30sinθ. For equilibrium: 30 = 30sinθ → sinθ = 1 → θ = 90°."
  },
  {
    question: "The center of mass of a uniform triangular lamina is at:",
    options: ["Midpoint of base", "One-third height from base", "Halfway up the height", "At a vertex"],
    correctIndex: 1,
    explanation: "The centroid of a uniform triangle is at one-third of the height from the base."
  },
  {
    question: "A uniform rod of mass 3 kg and length 2 m is pivoted at one end. Moment of inertia about pivot:",
    options: ["2 kg·m²", "4 kg·m²", "6 kg·m²", "1 kg·m²"],
    correctIndex: 1,
    explanation: "I = ML²/3 = (3)(2²)/3 = 12/3 = 4 kg·m²."
  },
  {
    question: "A couple consists of two equal and opposite forces. The torque of a couple is:",
    options: ["Zero", "Depends on the choice of pivot", "F × perpendicular distance between forces", "F × distance from pivot to one force"],
    correctIndex: 2,
    explanation: "The torque of a couple is the same about any point and equals F × d (force times perpendicular separation). This is why a couple is a free vector."
  },

  // WAVES (12 questions)
  {
    question: "A sound wave has frequency 440 Hz and speed 340 m/s. Wavelength:",
    options: ["0.77 m", "1.30 m", "77 m", "150000 m"],
    correctIndex: 0,
    explanation: "λ = v/f = 340/440 ≈ 0.77 m."
  },
  {
    question: "In a standing wave on a string, distance between adjacent nodes is:",
    options: ["λ", "λ/2", "λ/4", "2λ"],
    correctIndex: 1,
    explanation: "Adjacent nodes are separated by λ/2."
  },
  {
    question: "The Doppler effect makes pitch appear HIGHER when:",
    options: ["Source and observer move apart", "Source and observer approach", "Source is stationary", "Observer moves perpendicular to source"],
    correctIndex: 1,
    explanation: "Approaching source and observer increases observed frequency → higher pitch."
  },
  {
    question: "The period of a simple pendulum depends on:",
    options: ["Mass of bob", "Amplitude", "Length and g", "String material"],
    correctIndex: 2,
    explanation: "T = 2π√(L/g). Depends only on L and g for small oscillations."
  },
  {
    question: "Two tuning forks at 256 Hz and 258 Hz sound together. Beat frequency:",
    options: ["2 Hz", "514 Hz", "257 Hz", "1 Hz"],
    correctIndex: 0,
    explanation: "Beat freq = |f₁-f₂| = |256-258| = 2 Hz."
  },
  {
    question: "A tuning fork of 512 Hz resonates in an air column at first resonance length 16.5 cm. Speed of sound:",
    options: ["327 m/s", "337 m/s", "344 m/s", "360 m/s"],
    correctIndex: 1,
    explanation: "λ = 4L = 4×0.165 = 0.66 m. v = fλ = 512×0.66 ≈ 337 m/s."
  },
  {
    question: "Wave equation y = 0.05 sin(2π(200t - 10x)). Wavelength:",
    options: ["0.05 m", "0.1 m", "0.2 m", "200 m"],
    correctIndex: 1,
    explanation: "k = 2π/λ = 20π → λ = 2π/20π = 0.1 m."
  },
  {
    question: "A closed-end air column resonates at 200 Hz. Next resonant frequency:",
    options: ["400 Hz", "600 Hz", "800 Hz", "1000 Hz"],
    correctIndex: 1,
    explanation: "Closed tube: only odd harmonics (f, 3f, 5f...). Next = 3×200 = 600 Hz."
  },
  {
    question: "Sound intensity is proportional to:",
    options: ["Amplitude only", "Frequency only", "A²f²", "Amplitude squared (for same f)"],
    correctIndex: 3,
    explanation: "I ∝ A²ω². For same frequency, I ∝ A²."
  },
  {
    question: "A wave has v = 30 m/s, λ = 0.6 m. Frequency:",
    options: ["18 Hz", "50 Hz", "180 Hz", "300 Hz"],
    correctIndex: 1,
    explanation: "f = v/λ = 30/0.6 = 50 Hz."
  },
  {
    question: "When sound passes from air into water, which quantity stays constant?",
    options: ["Speed", "Frequency", "Wavelength", "Amplitude"],
    correctIndex: 1,
    explanation: "Frequency remains constant when a wave crosses media. Speed and wavelength change."
  },
  {
    question: "A 10-fold increase in sound intensity corresponds to:",
    options: ["1 dB", "3 dB", "10 dB", "20 dB"],
    correctIndex: 2,
    explanation: "Δβ = 10 log₁₀(10) = 10 dB."
  },

  // LIGHT (12 questions)
  {
    question: "Critical angle for glass (n=1.5) in air:",
    options: ["30°", "41.8°", "45°", "60°"],
    correctIndex: 1,
    explanation: "sin θc = 1/n = 1/1.5 = 0.667 → θc = 41.8°."
  },
  {
    question: "A convex lens (f=20 cm) forms real image at 60 cm. Object distance:",
    options: ["15 cm", "30 cm", "40 cm", "80 cm"],
    correctIndex: 1,
    explanation: "1/f = 1/v + 1/u → 1/20 = 1/60 + 1/u → 1/u = 3/60-1/60 = 2/60 → u = 30 cm."
  },
  {
    question: "A plane mirror forms an image that is:",
    options: ["Real and inverted", "Virtual, erect, same size", "Virtual and diminished", "Real and same size"],
    correctIndex: 1,
    explanation: "Plane mirror always forms virtual, erect, same-size image at equal distance behind mirror."
  },
  {
    question: "Light enters from air (n=1) to glass (n=1.5) at 60°. Angle of refraction:",
    options: ["30°", "35.3°", "41.8°", "45°"],
    correctIndex: 1,
    explanation: "sin60° = 1.5 sin r → 0.866 = 1.5 sin r → sin r = 0.577 → r ≈ 35.3°."
  },
  {
    question: "In Young's double slit experiment, fringe width is proportional to:",
    options: ["Slit separation", "1/wavelength", "Wavelength", "1/screen distance"],
    correctIndex: 2,
    explanation: "β = λD/d. Fringe width ∝ λ."
  },
  {
    question: "Total internal reflection requires light to travel:",
    options: ["Denser→rarer, angle > critical", "Rarer→denser", "Any medium at 90°", "Denser→rarer at any angle"],
    correctIndex: 0,
    explanation: "TIR requires: (1) denser to rarer medium, (2) incidence angle > critical angle."
  },
  {
    question: "A concave mirror (f=20 cm) forms a virtual image at 30 cm. Object distance:",
    options: ["12 cm", "15 cm", "25 cm", "60 cm"],
    correctIndex: 0,
    explanation: "1/f = 1/v + 1/u. Virtual image: v = -30 cm. 1/20 = 1/(-30) + 1/u → 1/u = 1/20+1/30 = 5/60 → u = 12 cm."
  },
  {
    question: "The power of a lens of focal length 25 cm is:",
    options: ["0.25 D", "4 D", "25 D", "0.04 D"],
    correctIndex: 1,
    explanation: "P = 1/f(m) = 1/0.25 = 4 D."
  },
  {
    question: "A thin film appears bright in reflected light when optical path difference equals:",
    options: ["nλ", "(n+½)λ", "(2n+1)λ/2", "nλ/2"],
    correctIndex: 0,
    explanation: "Constructive interference (bright): 2nt = nλ where n is the refractive index and t is film thickness. Path difference = nλ for constructive interference."
  },
  {
    question: "A converging lens of f = 10 cm has a diverging lens of f = -20 cm placed in contact. Combined focal length:",
    options: ["20 cm", "-20 cm", "10 cm", "-10 cm"],
    correctIndex: 0,
    explanation: "1/F = 1/f₁ + 1/f₂ = 1/10 + 1/(-20) = 2/20 - 1/20 = 1/20 → F = 20 cm."
  },
  {
    question: "Diffraction is most pronounced when the slit width is comparable to:",
    options: ["The wavelength of light", "The amplitude of the wave", "The speed of light", "The frequency of light"],
    correctIndex: 0,
    explanation: "Significant diffraction occurs when the obstacle or slit size is comparable to the wavelength of the wave."
  },
  {
    question: "In a double slit experiment with d = 0.5 mm and D = 1 m, fringe width for λ = 600 nm is:",
    options: ["0.6 mm", "1.2 mm", "1.5 mm", "3.0 mm"],
    correctIndex: 1,
    explanation: "β = λD/d = (600×10⁻⁹)(1)/(0.5×10⁻³) = 1.2×10⁻³ m = 1.2 mm."
  },

  // ELECTRICITY (15 questions)
  {
    question: "Three 6Ω resistors in parallel have equivalent resistance:",
    options: ["2Ω", "6Ω", "18Ω", "0.5Ω"],
    correctIndex: 0,
    explanation: "1/R = 1/6+1/6+1/6 = 3/6 → R = 2Ω."
  },
  {
    question: "A 12V battery across a 4Ω resistor. Power dissipated:",
    options: ["3 W", "12 W", "36 W", "48 W"],
    correctIndex: 2,
    explanation: "P = V²/R = 144/4 = 36 W."
  },
  {
    question: "Kirchhoff's junction rule is based on conservation of:",
    options: ["Energy", "Charge", "Momentum", "Mass"],
    correctIndex: 1,
    explanation: "ΣI_in = ΣI_out at a junction — conservation of charge."
  },
  {
    question: "A wire of resistance R is stretched to double its length. New resistance:",
    options: ["R/2", "R", "2R", "4R"],
    correctIndex: 3,
    explanation: "R = ρL/A. Doubling length halves area (volume conserved): R′ = ρ(2L)/(A/2) = 4R."
  },
  {
    question: "In a series RC circuit with R = 10 kΩ and C = 10 μF, the time constant is:",
    options: ["0.01 s", "0.1 s", "1 s", "10 s"],
    correctIndex: 1,
    explanation: "τ = RC = (10×10³)(10×10⁻⁶) = 0.1 s."
  },
  {
    question: "A 100 μF capacitor is charged to 10 V. Energy stored:",
    options: ["0.005 J", "0.01 J", "0.05 J", "1 J"],
    correctIndex: 0,
    explanation: "E = ½CV² = ½(100×10⁻⁶)(100) = 0.005 J."
  },
  {
    question: "Two resistors of 3Ω and 6Ω are in parallel. A 9V battery is connected. Current through 3Ω resistor:",
    options: ["1 A", "2 A", "3 A", "4.5 A"],
    correctIndex: 2,
    explanation: "In parallel, voltage across each = 9V. I = V/R = 9/3 = 3 A."
  },
  {
    question: "A voltmeter of resistance 3 kΩ reads 6 V across a resistor. The actual voltage (without voltmeter) would be:",
    options: ["6 V", "Greater than 6 V", "Less than 6 V", "Zero"],
    correctIndex: 1,
    explanation: "The voltmeter draws current, reducing voltage across the resistor. Without it, the voltage would be higher."
  },
  {
    question: "In a Wheatstone bridge, the bridge is balanced when:",
    options: ["P/Q = R/S", "P×Q = R×S", "P+R = Q+S", "P/S = Q/R"],
    correctIndex: 0,
    explanation: "At balance: P/Q = R/S (or equivalently P×S = Q×R). No current flows through the galvanometer."
  },
  {
    question: "The internal resistance of a cell is 1Ω and emf is 6V. Maximum current through external R = 2Ω:",
    options: ["2 A", "3 A", "6 A", "1 A"],
    correctIndex: 0,
    explanation: "I = ε/(R+r) = 6/(2+1) = 2 A."
  },
  {
    question: "A capacitor C charged to V is connected to an uncharged capacitor of same C. Final voltage:",
    options: ["V", "V/2", "V/4", "2V"],
    correctIndex: 1,
    explanation: "Charge conservation: CV = (C+C)V′ → V′ = V/2. Charge redistributes equally."
  },
  {
    question: "Kirchhoff's loop rule is based on conservation of:",
    options: ["Charge", "Energy", "Momentum", "Mass"],
    correctIndex: 1,
    explanation: "ΣV = 0 around a loop — conservation of energy. The total work done by electric forces around a closed path is zero."
  },
  {
    question: "A 12V battery with internal resistance 0.5Ω delivers maximum power to a load when load resistance is:",
    options: ["0.25Ω", "0.5Ω", "1Ω", "6Ω"],
    correctIndex: 1,
    explanation: "Maximum power transfer: R_load = r_internal = 0.5Ω."
  },
  {
    question: "A galvanometer with full-scale deflection at 1 mA and resistance 100Ω is converted to a 1A ammeter. Shunt resistance:",
    options: ["0.1Ω", "0.01Ω", "0.001Ω", "1Ω"],
    correctIndex: 0,
    explanation: "I_g×R_g = (I-I_g)×S → 0.001×100 = (1-0.001)S → S = 0.1/0.999 ≈ 0.1Ω."
  },
  {
    question: "Energy stored per unit volume in an electric field is:",
    options: ["½ε₀E", "½ε₀E²", "ε₀E²", "½ε₀V"],
    correctIndex: 1,
    explanation: "Energy density u = ½ε₀E². This represents energy stored per unit volume in the electric field."
  },

  // ELECTROMAGNETISM (10 questions)
  {
    question: "A charged particle moves parallel to a magnetic field. Force on it is:",
    options: ["Maximum", "Zero", "F = qvB", "F = qvB sin90°"],
    correctIndex: 1,
    explanation: "F = qvBsinθ. Parallel motion: θ=0°, sin0°=0, F=0."
  },
  {
    question: "Faraday's law states induced EMF is proportional to:",
    options: ["Magnetic field", "Rate of change of flux", "Coil area", "Coil current"],
    correctIndex: 1,
    explanation: "EMF = -dΦ/dt. Induced EMF is proportional to the rate of change of magnetic flux."
  },
  {
    question: "Lenz's law determines:",
    options: ["Magnitude of EMF", "Direction of induced current", "AC frequency", "Circuit resistance"],
    correctIndex: 1,
    explanation: "Lenz's law gives the direction of induced current — it opposes the change in flux causing it."
  },
  {
    question: "A transformer has 100 primary turns and 400 secondary turns. Input 120V. Secondary voltage (ideal):",
    options: ["30 V", "480 V", "120 V", "240 V"],
    correctIndex: 1,
    explanation: "V₂/V₁ = N₂/N₁ → V₂ = 120×400/100 = 480 V."
  },
  {
    question: "A proton moves at 10⁶ m/s perpendicular to a 0.1 T field. Force on proton:",
    options: ["1.6×10⁻¹⁴ N", "1.6×10⁻¹³ N", "1.6×10⁻²⁰ N", "1.6×10⁻²³ N"],
    correctIndex: 0,
    explanation: "F = qvB = (1.6×10⁻¹⁹)(10⁶)(0.1) = 1.6×10⁻¹⁴ N."
  },
  {
    question: "An electron moving perpendicular to a uniform magnetic field follows a:",
    options: ["Straight line", "Parabolic path", "Circular path", "Helical path"],
    correctIndex: 2,
    explanation: "F = qvBsin90° provides centripetal force. Velocity is always perpendicular to B, producing uniform circular motion."
  },
  {
    question: "The SI unit of magnetic flux is:",
    options: ["Tesla", "Weber", "Henry", "Ampere"],
    correctIndex: 1,
    explanation: "Magnetic flux Φ = BA has units of Weber (Wb) = T·m²."
  },
  {
    question: "A coil of 200 turns, area 0.02 m², has flux changing at 5 Wb/s. Induced EMF:",
    options: ["10 V", "20 V", "200 V", "1000 V"],
    correctIndex: 3,
    explanation: "EMF = N(dΦ/dt) = 200×5 = 1000 V."
  },
  {
    question: "A solenoid has 500 turns and length 0.5 m carrying 2 A. Magnetic field inside:",
    options: ["2π×10⁻³ T", "4π×10⁻³ T", "8π×10⁻⁴ T", "2π×10⁻⁴ T"],
    correctIndex: 2,
    explanation: "B = μ₀nI = μ₀(N/l)I = (4π×10⁻⁷)(500/0.5)(2) = (4π×10⁻⁷)(2000) = 8π×10⁻⁴ T ≈ 2.5×10⁻³ T."
  },
  {
    question: "The back EMF in a motor is maximum when:",
    options: ["Motor is starting", "Motor is running at full speed", "Motor is stalled", "Motor is off"],
    correctIndex: 1,
    explanation: "Back EMF = Blv ∝ speed. Maximum when motor runs at full (no-load) speed. At start, back EMF = 0."
  },

  // MODERN PHYSICS (10 questions)
  {
    question: "The photoelectric effect cannot be explained by:",
    options: ["Wave theory of light", "Particle theory", "Quantum theory", "Einstein's photon concept"],
    correctIndex: 0,
    explanation: "Wave theory predicts any frequency should eject electrons at sufficient intensity. The threshold frequency requirement can only be explained by particle/quantum theory."
  },
  {
    question: "In photoelectric effect, increasing light intensity increases:",
    options: ["KE of photoelectrons", "Number of photoelectrons", "Threshold frequency", "Stopping potential"],
    correctIndex: 1,
    explanation: "More intensity = more photons = more photoelectrons emitted per second (higher photocurrent). KE depends only on frequency."
  },
  {
    question: "Bohr's model successfully explains the spectrum of:",
    options: ["All atoms", "H and H-like atoms only", "Molecules only", "Solids only"],
    correctIndex: 1,
    explanation: "Bohr model works for hydrogen and hydrogen-like ions (He⁺, Li²⁺) but fails for multi-electron atoms."
  },
  {
    question: "The de Broglie wavelength increases when:",
    options: ["Velocity increases", "Mass increases", "Momentum decreases", "Energy increases"],
    correctIndex: 2,
    explanation: "λ = h/p. Wavelength inversely proportional to momentum. Lower momentum → longer wavelength."
  },
  {
    question: "In E = mc², the 'm' represents:",
    options: ["Rest mass only", "Relativistic mass", "Reduced mass", "Molar mass"],
    correctIndex: 1,
    explanation: "m is the relativistic mass m = m₀/√(1-v²/c²). Mass-energy equivalence shows mass and energy are interconvertible."
  },
  {
    question: "The work function of a metal is 2 eV. The maximum KE of emitted electrons with 4 eV photons:",
    options: ["2 eV", "4 eV", "6 eV", "8 eV"],
    correctIndex: 0,
    explanation: "KE_max = hf - φ = 4 - 2 = 2 eV."
  },
  {
    question: "The stopping potential for a photocell with light of frequency 10¹⁵ Hz (threshold 6×10¹⁴ Hz) is approximately: (h = 6.6×10⁻³⁴ J·s, e = 1.6×10⁻¹⁹ C)",
    options: ["1.65 V", "2.48 V", "3.30 V", "4.13 V"],
    correctIndex: 0,
    explanation: "KE_max = h(f-f₀) = 6.6×10⁻³⁴×(4×10¹⁴)/1.6×10⁻¹⁹ = 2.64×10⁻¹⁹/1.6×10⁻¹⁹ = 1.65 V."
  },
  {
    question: "An electron in the n=3 level of hydrogen can emit how many spectral lines?",
    options: ["1", "2", "3", "6"],
    correctIndex: 2,
    explanation: "Transitions: 3→2, 3→1, 2→1 = 3 lines. Number of lines = n(n-1)/2 = 3(2)/2 = 3."
  },
  {
    question: "The ratio of the shortest wavelength of Lyman and Balmer series of hydrogen is:",
    options: ["5:27", "27:5", "2:3", "3:2"],
    correctIndex: 0,
    explanation: "Shortest Lyman: 1/λ₁ = R(1-1/4) = 3R/4. Shortest Balmer: 1/λ₂ = R(1/4-1/9) = 5R/36. λ₁/λ₂ = (4/3R)/(36/5R) = (4×5)/(3×36) = 20/108 = 5/27."
  },
  {
    question: "The kinetic energy of an electron accelerated through potential difference V is:",
    options: ["eV²", "eV", "2eV", "e/V"],
    correctIndex: 1,
    explanation: "KE = Work done = qV = eV electron-volts. For V volts, KE = eV joules."
  },

  // NUCLEAR PHYSICS (8 questions)
  {
    question: "Radioactive decay is an example of:",
    options: ["First-order kinetics", "Second-order kinetics", "Zero-order kinetics", "Third-order kinetics"],
    correctIndex: 0,
    explanation: "N = N₀e^(-λt). Rate is proportional to number of atoms present — first-order with constant half-life."
  },
  {
    question: "The half-life of a radioactive substance is 5 years. After 20 years, what fraction remains?",
    options: ["1/4", "1/8", "1/16", "1/32"],
    correctIndex: 2,
    explanation: "Number of half-lives = 20/5 = 4. Remaining fraction = (1/2)⁴ = 1/16."
  },
  {
    question: "In nuclear fission of U-235, the products include:",
    options: ["Protons and electrons", "Smaller nuclei, neutrons, and energy", "Alpha particles only", "Gamma rays only"],
    correctIndex: 1,
    explanation: "Fission splits a heavy nucleus into lighter nuclei, releases neutrons (typically 2-3), and energy (~200 MeV per fission)."
  },
  {
    question: "The mass defect of a nucleus is 0.003 u. Binding energy is approximately:",
    options: ["0.94 MeV", "2.8 MeV", "9.4 MeV", "28 MeV"],
    correctIndex: 1,
    explanation: "1 u = 931.5 MeV. E = 0.003 × 931.5 = 2.79 ≈ 2.8 MeV."
  },
  {
    question: "In nuclear fusion, light nuclei combine to form:",
    options: ["Heavier nuclei with more binding energy per nucleon", "Lighter nuclei", "The same nucleus", "Neutrons only"],
    correctIndex: 0,
    explanation: "Fusion of light nuclei produces a heavier nucleus with higher binding energy per nucleon, releasing the energy difference."
  },
  {
    question: "The activity of a radioactive source is 800 Bq. After 3 half-lives the activity is:",
    options: ["100 Bq", "200 Bq", "400 Bq", "267 Bq"],
    correctIndex: 0,
    explanation: "A = A₀(1/2)³ = 800/8 = 100 Bq."
  },
  {
    question: "The process where a neutron converts to a proton, electron and antineutrino is:",
    options: ["Alpha decay", "Beta-minus decay", "Gamma emission", "Positron emission"],
    correctIndex: 1,
    explanation: "β⁻ decay: n → p + e⁻ + ν̄ₑ. A neutron inside the nucleus converts to a proton, emitting an electron and antineutrino."
  },
  {
    question: "The energy released when 1 g of matter is completely converted to energy is approximately:",
    options: ["9 × 10⁹ J", "9 × 10¹³ J", "9 × 10¹⁶ J", "9 × 10²⁰ J"],
    correctIndex: 1,
    explanation: "E = mc² = 10⁻³ × (3×10⁸)² = 10⁻³ × 9×10¹⁶ = 9×10¹³ J. This is the energy of a large nuclear weapon."
  },

  // GRAVITATION (8 questions)
  {
    question: "If distance between two masses is doubled, gravitational force becomes:",
    options: ["Double", "Half", "One-fourth", "Four times"],
    correctIndex: 2,
    explanation: "F = Gm₁m₂/r². Double r → F′ = F/4. Inverse square law."
  },
  {
    question: "Orbital velocity of a satellite close to Earth's surface is approximately:",
    options: ["3.4 km/s", "7.9 km/s", "11.2 km/s", "15.3 km/s"],
    correctIndex: 1,
    explanation: "v = √(gR) = √(9.8×6.4×10⁶) ≈ 7.9 km/s. This is the first cosmic velocity."
  },
  {
    question: "A geostationary satellite orbits at approximately:",
    options: ["200 km", "1000 km", "36,000 km", "100,000 km"],
    correctIndex: 2,
    explanation: "Geostationary orbit is ~35,786 km above Earth's surface (≈36,000 km) with 24-hour period."
  },
  {
    question: "Escape velocity from Earth is independent of:",
    options: ["Mass of Earth", "Gravitational constant G", "Mass of object", "Radius of Earth"],
    correctIndex: 2,
    explanation: "v_esc = √(2GM/R). Depends on planet M and R, not on the mass of the escaping object."
  },
  {
    question: "At what height above Earth's surface is g reduced to g/4? (R = 6400 km)",
    options: ["6400 km", "12800 km", "19200 km", "25600 km"],
    correctIndex: 0,
    explanation: "g′ = GM/(R+h)². g/4 = GM/(R+h)² → (R+h)² = 4R² → R+h = 2R → h = R = 6400 km."
  },
  {
    question: "Kepler's third law: T² ∝ r^n. The correct value of n is:",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
    explanation: "Kepler's third law: T² ∝ r³, so n = 3. Period squared is proportional to the cube of the orbital radius."
  },
  {
    question: "The time period of a satellite at height 3R from Earth's surface is T. At height R from the surface, the period is:",
    options: ["T/4", "T/2", "T/√8", "T/2√2"],
    correctIndex: 2,
    explanation: "T² ∝ r³. At h=3R: r₁=4R. At h=R: r₂=2R. (T₂/T₁)² = (r₂/r₁)³ = (2R/4R)³ = (1/2)³ = 1/8. T₂ = T₁/√8."
  },
  {
    question: "The gravitational PE of a satellite of mass m at height R above Earth's surface (radius R) is:",
    options: ["-GMm/2R", "-GMm/R", "-GMm/4R", "GMm/2R"],
    correctIndex: 0,
    explanation: "U = -GMm/r where r = R + R = 2R. So U = -GMm/2R. The gravitational PE is negative because we define zero PE at infinity."
  },

  // PROPERTIES OF MATTER (6 questions)
  {
    question: "Young's modulus is the ratio of:",
    options: ["Stress to strain", "Force to area", "Pressure to volume", "Shear stress to shear strain"],
    correctIndex: 0,
    explanation: "Y = tensile stress / tensile strain = (F/A)/(ΔL/L). It measures stiffness in tension."
  },
  {
    question: "A wire of length L and radius r is stretched to twice its length. New radius:",
    options: ["r/2", "r/√2", "r/4", "r"],
    correctIndex: 1,
    explanation: "Volume conserved: πr²L = πr′²(2L) → r′² = r²/2 → r′ = r/√2."
  },
  {
    question: "Surface tension has the same dimensions as:",
    options: ["Force", "Energy", "Force per unit length", "Energy per unit area"],
    correctIndex: 2,
    explanation: "Surface tension γ = F/L has dimensions [MT⁻²] and SI unit N/m."
  },
  {
    question: "A 10 m long wire stretches by 1 mm under load. Strain is:",
    options: ["10⁻²", "10⁻³", "10⁻⁴", "10⁻⁵"],
    correctIndex: 2,
    explanation: "Strain = ΔL/L = 10⁻³/10 = 10⁻⁴. Strain is dimensionless."
  },
  {
    question: "The viscosity of a fluid is measured in:",
    options: ["N/m", "Pa·s", "N·s²/m", "J/m³"],
    correctIndex: 1,
    explanation: "Viscosity η has SI units Pa·s (Pascal-seconds) = N·s/m² = kg/(m·s)."
  },
  {
    question: "Poisson's ratio for an ideal incompressible material is:",
    options: ["0", "0.25", "0.5", "1.0"],
    correctIndex: 2,
    explanation: "Poisson's ratio ν = -lateral strain/longitudinal strain. For incompressible materials (volume unchanged), ν = 0.5. Theoretical range is -1 to 0.5."
  },

  // THERMODYNAMICS (6 questions)
  {
    question: "In an isothermal expansion of an ideal gas, the internal energy:",
    options: ["Increases", "Decreases", "Remains constant", "Doubles"],
    correctIndex: 2,
    explanation: "For an ideal gas, U depends only on temperature. Isothermal (ΔT=0) means ΔU = 0."
  },
  {
    question: "First law of thermodynamics is a statement of conservation of:",
    options: ["Momentum", "Mass", "Energy", "Charge"],
    correctIndex: 2,
    explanation: "ΔU = Q - W. Energy is conserved: internal energy change = heat added minus work done."
  },
  {
    question: "The efficiency of a Carnot engine operating between 600 K and 300 K is:",
    options: ["25%", "50%", "75%", "100%"],
    correctIndex: 1,
    explanation: "η = 1 - T₂/T₁ = 1 - 300/600 = 0.5 = 50%."
  },
  {
    question: "In an adiabatic process:",
    options: ["Q = 0", "W = 0", "ΔU = 0", "T = constant"],
    correctIndex: 0,
    explanation: "Adiabatic = no heat exchange (Q=0). Work is done at the expense of internal energy."
  },
  {
    question: "Entropy of an isolated system:",
    options: ["Always decreases", "Always increases", "Remains constant", "Can increase or decrease"],
    correctIndex: 1,
    explanation: "Second law: entropy of an isolated system never decreases (ΔS ≥ 0). It increases for irreversible processes."
  },
  {
    question: "A heat engine absorbs 1000 J and rejects 600 J. Work output and efficiency are:",
    options: ["400 J, 40%", "600 J, 60%", "1600 J, 160%", "400 J, 60%"],
    correctIndex: 0,
    explanation: "W = Q_in - Q_out = 1000-600 = 400 J. η = W/Q_in = 400/1000 = 40%."
  },
];
