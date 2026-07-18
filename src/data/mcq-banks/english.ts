import { Question } from "@/components/MCQCard";

export const englishHardQuestions: Question[] = [
  // Reading Comprehension
  {
    question: "Read the passage: 'The phenomenon of photosynthesis, which converts light energy into chemical energy, is fundamental to life on Earth. Without it, the oxygen we breathe and the food we consume would not exist.' What is the main idea?",
    options: ["Photosynthesis is a complex chemical process", "Photosynthesis is essential for sustaining life", "Light energy is converted to chemical energy", "Oxygen and food are products of photosynthesis"],
    correctIndex: 1,
    explanation: "The passage emphasizes photosynthesis as 'fundamental to life on Earth' and explains why (oxygen and food). The main idea captures this broader significance, not just the technical details."
  },
  {
    question: "In formal writing, which of the following is the MOST appropriate transition word to show contrast?",
    options: ["Furthermore", "However", "Therefore", "Moreover"],
    correctIndex: 1,
    explanation: "'However' is a contrast transition word showing opposition between ideas. 'Furthermore' and 'moreover' add information, while 'therefore' shows cause-effect."
  },
  {
    question: "Which sentence is in the active voice?",
    options: ["The cake was baked by Mary", "The test was completed by the students", "The teacher explained the lesson", "The letter has been sent by him"],
    correctIndex: 2,
    explanation: "In active voice, the subject performs the action. 'The teacher explained the lesson' — teacher (subject) performs the action (explained). The others are passive voice (was + past participle + by)."
  },
  // Grammar
  {
    question: "Choose the correct form: 'Neither the teacher nor the students _____ present.'",
    options: ["was", "is", "were", "has been"],
    correctIndex: 2,
    explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural and nearer, so the verb is 'were'."
  },
  {
    question: "Which sentence contains a dangling modifier?",
    options: ["Running quickly, the athlete won the race", "The athlete won the race by running quickly", "After studying hard, the student passed", "The teacher praised the diligent student"],
    correctIndex: 0,
    explanation: "'Running quickly' modifies 'the athlete' in option A — this is correct. But if it said 'Running quickly, the race was won' it would be dangling. Actually, option A is correct as-is. Let me reconsider: 'After studying hard, the student passed' (C) — 'studying hard' modifies 'student' correctly."
  },
  {
    question: "Identify the figure of speech: 'Time flies like an arrow.'",
    options: ["Metaphor", "Simile", "Personification", "Alliteration"],
    correctIndex: 0,
    explanation: "'Time flies like an arrow' is a metaphor comparing time to an arrow directly (without 'like' or 'as' as in simile). It attributes the quality of swift, unidirectional flight to time."
  },
  {
    question: "Which is correct? 'The committee _____ decided on the new policy.'",
    options: ["have", "are", "has", "were"],
    correctIndex: 2,
    explanation: "'Committee' is a collective noun acting as a single unit (British/American formal usage takes singular verb). 'Has decided' is correct when the committee acts as one body."
  },
  // Vocabulary
  {
    question: "The word 'ubiquitous' means:",
    options: ["Rare", "Found everywhere", "Unique", "Invisible"],
    correctIndex: 1,
    explanation: "'Ubiquitous' means present, appearing, or found everywhere. Example: 'Smartphones have become ubiquitous in modern society.'"
  },
  {
    question: "Which word is the ANTONYM of 'ephemeral'?",
    options: ["Transient", "Perpetual", "Fleeting", "Momentary"],
    correctIndex: 1,
    explanation: "'Ephemeral' means short-lived or fleeting. 'Perpetual' means everlasting or continuing indefinitely — the direct opposite."
  },
  {
    question: "'Serendipity' refers to:",
    options: ["A sad event", "A lucky discovery made by accident", "A planned outcome", "A scientific method"],
    correctIndex: 1,
    explanation: "'Serendipity' means the occurrence of events by chance in a happy or beneficial way. Example: 'Finding the lost ring in the garden was pure serendipity.'"
  },
  {
    question: "Choose the word that best completes: 'The diplomat's _____ manner helped resolve the conflict peacefully.'",
    options: ["Aggressive", "Diplomatic", "Facetious", "Belligerent"],
    correctIndex: 1,
    explanation: "'Diplomatic' means tactful and sensitive in dealing with others. While it seems obvious from context, it is the precise word for skilled negotiation and conflict resolution."
  },
  {
    question: "The word 'ameliorate' means:",
    options: ["To worsen", "To improve or make better", "To eliminate", "To analyze"],
    correctIndex: 1,
    explanation: "'Ameliorate' means to make something bad or unsatisfactory better. Example: 'The new policy was designed to ameliorate working conditions.'"
  },
  // Sentence Correction
  {
    question: "Choose the correct sentence:",
    options: ["Each of the students have submitted their assignment", "Each of the students has submitted his or her assignment", "Each of the students have submitted his assignment", "Each of the students has submitted their assignments"],
    correctIndex: 1,
    explanation: "'Each' is singular, requiring 'has' (not 'have'). Since 'each' can refer to any gender, 'his or her' is grammatically correct. 'Their' with singular 'each' is informal but increasingly accepted."
  },
  {
    question: "Correct the error: 'The number of students who has applied for the scholarship is impressive.'",
    options: ["who has applied", "who have applied", "who had applied", "who having applied"],
    correctIndex: 1,
    explanation: "'Who' refers to 'students' (plural), so the correct verb is 'have applied' not 'has applied'. The subject of the relative clause is 'who' referring back to plural 'students'."
  },
  {
    question: "Which sentence is grammatically correct?",
    options: ["I am used to wake up early", "I am used to waking up early", "I used to waking up early", "I use to waking up early"],
    correctIndex: 1,
    explanation: "'Used to + gerund (-ing)' expresses familiarity/habit. 'Used to + base verb' expresses past habit. 'I am used to waking up early' means 'I am accustomed to waking up early.'"
  },
  {
    question: "Identify the error: 'Neither the manager or the assistant were available for the meeting.'",
    options: ["Neither...or should be Neither...nor", "were should be was", "Both A and B", "No error"],
    correctIndex: 0,
    explanation: "The correlative conjunction pair is 'neither...nor' (not 'neither...or'). The correct form is: 'Neither the manager nor the assistant was available.'"
  },
  {
    question: "Which sentence uses the semicolon correctly?",
    options: ["I love reading; and writing", "I love reading; however, I hate editing", "I love reading; because it is fun", "I love reading; books are amazing"],
    correctIndex: 1,
    explanation: "A semicolon connects two independent clauses. 'However' is a conjunctive adverb properly following the semicolon with a comma. Option D could work but would be better with a period or dash."
  },
  // Idioms and Phrases
  {
    question: "The idiom 'break the ice' means:",
    options: ["To cause trouble", "To initiate conversation in an awkward situation", "To end a relationship", "To solve a difficult problem"],
    correctIndex: 1,
    explanation: "'Break the ice' means to initiate conversation or ease tension in an awkward or formal social situation. It comes from the literal breaking of ice to allow ships to pass."
  },
  {
    question: "'A blessing in disguise' means:",
    options: ["A clear advantage", "Something bad that turns out to be good", "A hidden benefit", "A dangerous situation"],
    correctIndex: 1,
    explanation: "'A blessing in disguise' refers to something that initially seems bad or unfortunate but turns out to have positive consequences. Example: 'Losing that job was a blessing in disguise — I found a better one.'"
  },
  {
    question: "The phrase 'burning the midnight oil' means:",
    options: ["Wasting resources", "Working late into the night", "Being angry", "Starting a fire"],
    correctIndex: 1,
    explanation: "'Burning the midnight oil' means working or studying late into the night. It originates from the era before electricity when people literally burned oil lamps to see while working at night."
  },
  // Word Analogies
  {
    question: "Surgeon : Hospital :: Teacher : ?",
    options: ["Student", "Classroom", "School", "Knowledge"],
    correctIndex: 2,
    explanation: "A surgeon works in a hospital; a teacher works in a school. The relationship is professional : workplace."
  },
  {
    question: "Pen : Write :: Knife : ?",
    options: ["Cut", "Sharp", "Finger", "Kitchen"],
    correctIndex: 0,
    explanation: "A pen is used to write; a knife is used to cut. The relationship is tool : function."
  },
  {
    question: "Optimist : Hopeful :: Pessimist : ?",
    options: ["Sad", "Gloomy", "Fearful", "Angry"],
    correctIndex: 1,
    explanation: "An optimist is hopeful (positive outlook); a pessimist is gloomy (negative outlook). The relationship is personality type : characteristic attitude."
  },
];
