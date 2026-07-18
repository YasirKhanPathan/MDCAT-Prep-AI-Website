import { Question } from "@/components/MCQCard";

export const englishHardQuestions: Question[] = [
  // ==========================================
  // VOCABULARY (15 Questions)
  // ==========================================
  {
    question: "Choose the word that best completes: 'The politician's _____ speech failed to convince the skeptical audience.'",
    options: ["Eloquent", "Vapid", "Cogent", "Raucous"],
    correctIndex: 1,
    explanation: "'Vapid' means dull, lifeless, or lacking wit/interest — describing a speech that fails to engage. 'Eloquent' (persuasive), 'cogent' (compelling), and 'raucous' (loud/harsh) don't fit the context of failing to convince."
  },
  {
    question: "Which word is the ANTONYM of 'pragmatic'?",
    options: ["Practical", "Idealistic", "Realistic", "Prudent"],
    correctIndex: 1,
    explanation: "'Pragmatic' means practical and focused on results. 'Idealistic' (pursuing ideals over practicality) is the direct antonym. 'Practical' and 'realistic' are synonyms, while 'prudent' means careful/practical."
  },
  {
    question: "The word 'perfunctory' most nearly means:",
    options: ["Thorough", "Done without care or interest", "Completed with enthusiasm", "Delayed unnecessarily"],
    correctIndex: 1,
    explanation: "'Perfunctory' means carried out with minimal effort or thought — a cursory, half-hearted action. Example: 'The inspector gave only a perfunctory glance at the documents.'"
  },
  {
    question: "Which word means 'the practice of making especially petty attacks'?",
    options: ["Adulation", "Quibbling", "Flattery", "Deference"],
    correctIndex: 1,
    explanation: "'Quibbling' means raising trivial objections or making petty criticisms. 'Adulation' and 'flattery' mean excessive praise, while 'deference' means humble respect."
  },
  {
    question: "Choose the correct meaning: 'The diplomat's _acumen_ proved invaluable during negotiations.'",
    options: ["Acoustics", "Keen mental sharpness", "Loud voice", "Academic knowledge"],
    correctIndex: 1,
    explanation: "'Acumen' means the ability to make good judgments and quick decisions — sharp insight and shrewdness. In diplomacy, this keen mental perception is crucial for successful negotiations."
  },
  {
    question: "Which word best describes a person who is 'irascible'?",
    options: ["Calm and patient", "Easily angered", "Extremely generous", "Deeply thoughtful"],
    correctIndex: 1,
    explanation: "'Irascible' means having or showing a tendency to be easily angered — short-tempered and quick to irritate. A person prone to frequent outbursts would be described as irascible."
  },
  {
    question: "The prefix 'mal-' in 'malfeasance' indicates:",
    options: ["Good", "Before", "Bad or wrong", "After"],
    correctIndex: 2,
    explanation: "'Mal-' is a Latin prefix meaning bad, wrong, or evil. 'Malfeasance' means wrongdoing, especially by a public official. Compare with 'bene-' (good), 'pre-' (before), 'post-' (after)."
  },
  {
    question: "Choose the word that best completes: 'Her _____ of the ancient text revealed hidden symbolism.'",
    options: ["Recitation", "Exegesis", "Memorization", "Dictation"],
    correctIndex: 1,
    explanation: "'Exegesis' means critical explanation or interpretation of a text, especially scripture or literary work. It involves deep analysis to uncover meaning and symbolism within the text."
  },
  {
    question: "Which word means 'existing in thought or as an idea but not having a physical existence'?",
    options: ["Empirical", "Tangible", "Intangible", "Inherent"],
    correctIndex: 2,
    explanation: "'Intangible' means unable to be touched or having no physical form; existing only in the mind. 'Empirical' means based on observation, 'tangible' means real/physical, and 'inherent' means existing as a natural part."
  },
  {
    question: "The word 'penchant' is closest in meaning to:",
    options: ["Aversion", "A strong habitual liking", "A legal restriction", "A temporary phase"],
    correctIndex: 1,
    explanation: "'Penchant' means a strong or habitual liking for something or tendency to do something. From French, it means a natural inclination. Example: 'She has a penchant for classical music.'"
  },
  {
    question: "Which word means 'the action of stopping or preventing a process'?",
    options: ["Facilitation", "Intervention", "Culmination", "Acceleration"],
    correctIndex: 1,
    explanation: "'Intervention' means the action of stopping or becoming involved in a situation to alter its course. 'Facilitation' means making easier, 'culmination' means climax/end, 'acceleration' means speeding up."
  },
  {
    question: "The suffix '-ology' indicates:",
    options: ["Love for something", "The study of something", "A tool for something", "The opposite of something"],
    correctIndex: 1,
    explanation: "'-ology' comes from Greek 'logos' meaning 'study' or 'science.' It appears in words like biology (study of life), psychology (study of the mind), and geology (study of earth)."
  },
  {
    question: "Which word best completes: 'The scientist's _____ research contradicted the established theory.'",
    options: ["Conventional", "Anomalous", "Redundant", "Trivial"],
    correctIndex: 1,
    explanation: "'Anomalous' means deviating from what is standard, normal, or expected. Research that contradicts established theory would be considered anomalous — it deviates from the expected norm."
  },
  {
    question: "Choose the word meaning 'a person who is excessively generous or giving'?",
    options: ["Miser", "Altruist", "Philanthropist", "Ascetic"],
    correctIndex: 2,
    explanation: "While 'altruist' and 'philanthropist' are similar, 'philanthropist' specifically means someone who seeks to promote human welfare through generous donations — implying wealth and deliberate generosity. 'Altruist' is more about selflessness."
  },
  {
    question: "The word 'ephemeral' is BEST defined as:",
    options: ["Eternal", "Brief and transitory", "Physically strong", "Extremely rare"],
    correctIndex: 1,
    explanation: "'Ephemeral' means lasting for a very short time; transitory and fleeting. Example: 'The ephemeral beauty of cherry blossoms makes them all the more precious.'"
  },

  // ==========================================
  // GRAMMAR (15 Questions)
  // ==========================================
  {
    question: "Choose the correct sentence: 'The data, which _____ collected last week, _____ been analyzed.'",
    options: ["was / has", "were / have", "was / have", "were / has"],
    correctIndex: 0,
    explanation: "'Data' can be treated as singular or plural, but in formal/academic writing, it's often singular. 'Which was collected' (singular verb for relative clause) and 'has been analyzed' (singular auxiliary) are grammatically consistent."
  },
  {
    question: "Identify the correct sentence: 'By the time the ambulance arrived, the patient _____.'",
    options: ["has died", "had died", "was dying", "died"],
    correctIndex: 1,
    explanation: "The past perfect tense ('had died') is used for an action completed before another past action (arrival of ambulance). This sequence of events requires the past perfect to show which happened first."
  },
  {
    question: "Which sentence demonstrates correct subject-verb agreement?",
    options: [
      "The committee have decided to postpone the meeting.",
      "Every one of the students have completed their assignment.",
      "The news are shocking to everyone in the room.",
      "Neither the principal nor the teachers were available."
    ],
    correctIndex: 3,
    explanation: "'Neither...nor' requires the verb to agree with the nearer subject ('teachers' = plural), so 'were available' is correct. 'The news' takes singular verb ('is shocking'), 'committee' acting as one unit takes singular verb, and 'every one' requires singular verb."
  },
  {
    question: "Choose the correct form: 'If I _____ about the traffic, I _____ earlier.'",
    options: ["knew / would leave", "had known / would have left", "knew / left", "have known / left"],
    correctIndex: 1,
    explanation: "This is a third conditional (past unreal condition). The structure is: 'If + past perfect, would have + past participle.' It describes a hypothetical situation in the past and its imagined result."
  },
  {
    question: "Which sentence contains a misplaced modifier?",
    options: [
      "Quickly opening the door, she ran outside.",
      "The professor explained the theory clearly to the students.",
      "Covered in mud, the boy's mother scolded him.",
      "After studying all night, the exam seemed easy."
    ],
    correctIndex: 3,
    explanation: "After studying all night' modifies 'the exam,' implying the exam studied all night. The sentence should read: 'After studying all night, he found the exam easy.' The modifier must clearly refer to the correct subject."
  },
  {
    question: "Choose the correct preposition: 'She is proficient _____ French and fluent _____ English.'",
    options: ["in / in", "at / at", "in / with", "with / in"],
    correctIndex: 0,
    explanation: "'Proficient in' and 'fluent in' are the correct prepositional collocations for describing language skills. Both require the preposition 'in' when discussing languages."
  },
  {
    question: "Which sentence uses the future perfect tense correctly?",
    options: [
      "By 2030, scientists will discover a cure.",
      "By next year, I will have graduated from university.",
      "Tomorrow, she will be studying all day.",
      "Next week, they will have been working here ten years."
    ],
    correctIndex: 1,
    explanation: "'Will have graduated' is future perfect: 'will + have + past participle.' It describes an action that will be completed before a specified future time (next year). Option D would be future perfect continuous."
  },
  {
    question: "Identify the correct sentence: 'The reason is _____ the project failed because of poor planning.'",
    options: ["because", "that", "since", "due to"],
    correctIndex: 1,
    explanation: "The correct construction is 'The reason is that...' not 'The reason is because...' — using 'because' after 'the reason is' creates redundancy. 'That' introduces the noun clause explaining the reason."
  },
  {
    question: "Choose the correct form: 'Hardly _____ the announcement _____ the audience erupted in applause.'",
    options: ["had / when", "did / than", "was / when", "has / when"],
    correctIndex: 0,
    explanation: "'Hardly had...when' is the correct correlative conjunction pair. It means 'as soon as' and requires inversion: 'Hardly had X happened when Y occurred.' 'Scarcely' and 'barely' follow the same pattern."
  },
  {
    question: "Which sentence demonstrates correct use of the subjunctive mood?",
    options: [
      "If she was here, she would help us.",
      "I suggest that he studies harder.",
      "The doctor recommended that she rest for a week.",
      "If I was you, I would take the offer."
    ],
    correctIndex: 2,
    explanation: "In formal English, the subjunctive uses the base form: 'that she rest' (not 'rests'). After verbs like recommend, suggest, insist, the subjunctive requires the base form regardless of the subject."
  },
  {
    question: "Choose the correct article: '_____ honesty is the best policy.'",
    options: ["A", "An", "The", "No article needed"],
    correctIndex: 3,
    explanation: "General statements about abstract qualities (honesty) don't require an article. 'Honesty is the best policy' is a general proverb — not referring to a specific instance of honesty but the quality in general."
  },
  {
    question: "Which sentence contains an error in parallel structure?",
    options: [
      "She likes swimming, cycling, and running.",
      "The manager wants to hire someone who is experienced, motivated, and works hard.",
      "He enjoys reading, writing, and drawing.",
      "They plan to build, renovate, and sell the property."
    ],
    correctIndex: 1,
    explanation: "Parallel structure requires consistent grammatical forms. 'Experienced, motivated' are adjectives, but 'works hard' is a clause. It should be 'who is experienced, motivated, and hardworking' or 'who is experienced, motivated, and works hard' → 'who is experienced, motivated, and diligent.'"
  },
  {
    question: "Choose the correct sentence: 'None of the information _____ accurate.'",
    options: ["are", "were", "is", "have been"],
    correctIndex: 2,
    explanation: "'None' can be singular or plural, but when referring to an uncountable noun ('information'), it takes a singular verb: 'is accurate.' In formal usage, 'none' meaning 'not one' is singular."
  },
  {
    question: "Identify the correct use of 'who' and 'whom': '_____ did you give the document to?'",
    options: ["Who", "Whom", "Whose", "Which"],
    correctIndex: 1,
    explanation: "'Whom' is the objective case, used when the pronoun is the object of a verb or preposition. 'To whom did you give the document?' — 'whom' is the object of the preposition 'to.' In informal speech, 'who' is often used, but 'whom' is grammatically correct here."
  },
  {
    question: "Choose the correct sentence: 'The team have decided _____ their strategy for the next match.'",
    options: ["to changing", "to change", "on changing", "for changing"],
    correctIndex: 1,
    explanation: "'Decide to + infinitive' is the correct structure. 'Decide on + gerund' is also possible but less common. 'Decide to change' means to make a decision about changing — the infinitive follows 'decide' directly."
  },

  // ==========================================
  // READING COMPREHENSION (10 Questions)
  // ==========================================
  {
    question: "Read the passage: 'The Industrial Revolution, beginning in the late 18th century, fundamentally transformed agrarian societies into industrial ones. While it brought unprecedented economic growth and technological innovation, it also created severe social problems including child labor, unsafe working conditions, and urban poverty.' What is the author's primary purpose?",
    options: [
      "To argue against industrialization",
      "To present both positive and negative aspects of the Industrial Revolution",
      "To explain how child labor began",
      "To compare agrarian and industrial societies"
    ],
    correctIndex: 1,
    explanation: "The author presents balanced information: economic growth and innovation (positive) alongside child labor, unsafe conditions, and poverty (negative). The purpose is to provide a comprehensive overview, not to argue one position."
  },
  {
    question: "Read: 'Many researchers believe that sleep is essential for memory consolidation. During REM sleep, the brain processes information gathered throughout the day, transferring short-term memories into long-term storage.' What can be inferred about people who are sleep-deprived?",
    options: [
      "They will forget everything they learned",
      "Their memory consolidation process may be impaired",
      "They will experience vivid dreams",
      "They will need more sleep the following night"
    ],
    correctIndex: 1,
    explanation: "If sleep is essential for memory consolidation and REM sleep transfers short-term to long-term memories, it logically follows that sleep deprivation would impair this process. The passage supports this inference without making absolute claims."
  },
  {
    question: "Read: 'The Amazon Rainforest, often called 'the lungs of the Earth,' produces approximately 20% of the world's oxygen. However, deforestation threatens this vital ecosystem, with an estimated 17% already destroyed.' Which detail best supports the main idea?",
    options: [
      "The rainforest's nickname 'lungs of the Earth'",
      "The 20% oxygen production statistic",
      "The 17% deforestation figure",
      "Both the oxygen production and deforestation statistics"
    ],
    correctIndex: 3,
    explanation: "Both statistics support the main idea: the rainforest is vital (20% oxygen) AND threatened (17% destroyed). Neither alone captures the full picture — the combination shows both importance and urgency."
  },
  {
    question: "Read: 'In recent years, remote work has become increasingly common. Studies show that employees report higher job satisfaction and better work-life balance when working from home. However, some managers worry about reduced collaboration and team cohesion.' What is the author's tone?",
    options: [
      "Strongly pro-remote work",
      "Objectively presenting multiple perspectives",
      "Critical of remote work",
      "Neutral but leaning against remote work"
    ],
    correctIndex: 1,
    explanation: "The author presents both benefits (satisfaction, work-life balance) and concerns (collaboration, cohesion) without expressing personal opinion. The word 'however' signals a balanced, objective approach to presenting multiple viewpoints."
  },
  {
    question: "Read: 'Marie Curie's groundbreaking research on radioactivity led to two Nobel Prizes. Her work not only advanced scientific understanding but also had practical applications in medicine, particularly in cancer treatment through radiation therapy.' What is the main idea of this passage?",
    options: [
      "Marie Curie was a successful scientist",
      "Radioactivity has medical applications",
      "Marie Curie's research had both scientific and practical significance",
      "Nobel Prizes recognize important research"
    ],
    correctIndex: 2,
    explanation: "The passage emphasizes two contributions: advancing scientific understanding AND practical medical applications. The main idea encompasses both aspects of her work's significance, not just one aspect."
  },
  {
    question: "Read: 'Climate change poses an existential threat to many island nations. Rising sea levels could submerge entire countries, displacing millions and destroying unique cultural heritage.' What does 'existential' mean in this context?",
    options: [
      "Related to philosophy",
      "Threatening the very existence or survival",
      "Existing in a particular state",
      "Extremely large"
    ],
    correctIndex: 1,
    explanation: "'Existential' in this context means threatening survival or existence. Climate change threatens the very existence of island nations — their physical survival as countries. The context clue 'submerge entire countries' confirms this meaning."
  },
  {
    question: "Read: 'The author argues that social media algorithms create 'echo chambers' where users only encounter viewpoints similar to their own. This polarization, the author contends, undermines democratic discourse by reducing exposure to diverse perspectives.' What is the author's main argument?",
    options: [
      "Social media is beneficial for democracy",
      "Algorithms create homogeneous information environments that harm democratic debate",
      "People prefer content that agrees with their views",
      "Democratic discourse has always been polarized"
    ],
    correctIndex: 1,
    explanation: "The author's central claim is that algorithms create echo chambers (homogeneous information) which leads to polarization that undermines democratic discourse. The argument connects cause (algorithms) to effect (harm to democracy)."
  },
  {
    question: "Read: 'Studies indicate that children who are read to regularly develop stronger vocabulary and comprehension skills. However, the benefits extend beyond academics — shared reading also strengthens the parent-child bond.' What transition word indicates the shift from academic benefits to emotional benefits?",
    options: ["However", "Furthermore", "Therefore", "Consequently"],
    correctIndex: 0,
    explanation: "'However' signals a shift or contrast — in this case, moving from academic benefits (vocabulary, comprehension) to emotional benefits (parent-child bond). It indicates the passage is adding a different type of benefit."
  },
  {
    question: "Read: 'The invention of the printing press in 1440 democratized knowledge by making books affordable and accessible. Before this innovation, books were handwritten and available only to the wealthy elite.' What does 'democratized' mean in this context?",
    options: [
      "Made political",
      "Made widely accessible to ordinary people",
      "Made expensive",
      "Made controversial"
    ],
    correctIndex: 1,
    explanation: "'Democratized' means making something available to all people, not just the privileged few. The contrast with 'available only to the wealthy elite' confirms that the printing press made knowledge accessible to everyone — a democratic distribution."
  },
  {
    question: "Read: 'Neuroscientists have discovered that the brain's plasticity — its ability to reorganize itself by forming new neural connections — continues throughout life. This challenges the long-held belief that the adult brain is fixed and unchangeable.' What does the passage suggest about previous scientific understanding?",
    options: [
      "The brain cannot change after childhood",
      "Adult brains have no neural connections",
      "Brain plasticity was previously underestimated",
      "Neuroscientists made no previous claims"
    ],
    correctIndex: 2,
    explanation: "The passage states that brain plasticity 'challenges the long-held belief' that adult brains are fixed. This implies scientists previously underestimated or misunderstood the brain's capacity for change throughout life."
  },

  // ==========================================
  // IDIOMS AND PHRASES (10 Questions)
  // ==========================================
  {
    question: "The idiom 'a piece of cake' means:",
    options: ["Something delicious", "Something very easy to do", "A generous gift", "A small portion"],
    correctIndex: 1,
    explanation: "'A piece of cake' is an idiom meaning something is very easy or effortless. Example: 'The exam was a piece of cake — I finished in 20 minutes.' It has nothing to do with actual cake or food."
  },
  {
    question: "What does the phrasal verb 'give up' mean?",
    options: ["To increase", "To surrender or stop trying", "To hand something over", "To raise someone"],
    correctIndex: 1,
    explanation: "'Give up' means to stop trying or to surrender. Example: 'Don't give up — you're almost there!' It can also mean to quit a habit: 'She gave up smoking.' The meaning depends on context."
  },
  {
    question: "The idiom 'hit the nail on the head' means:",
    options: ["To cause pain", "To describe exactly what is right or true", "To do something perfectly", "To be very precise"],
    correctIndex: 1,
    explanation: "'Hit the nail on the head' means to be exactly right about something; to pinpoint the truth or accurate description. Example: 'You hit the nail on the head when you said the problem was communication.'"
  },
  {
    question: "What does 'under the weather' mean?",
    options: ["Feeling ill or unwell", "Outdoors in bad weather", "Undergoing treatment", "Feeling depressed"],
    correctIndex: 0,
    explanation: "'Under the weather' means feeling sick or not well. Example: 'I'm feeling a bit under the weather today, so I'll stay home.' It has nothing to do with actual weather conditions."
  },
  {
    question: "The phrase 'break a leg' is used to:",
    options: ["Wish someone bad luck", "Encourage someone before a performance", "Warn about danger", "Describe an injury"],
    correctIndex: 1,
    explanation: "'Break a leg' is a way to wish someone good luck, especially before a performance or important event. It's a superstition in theater — saying 'good luck' is considered bad luck, so the opposite is used."
  },
  {
    question: "What does the idiom 'cost an arm and a leg' mean?",
    options: ["To be physically painful", "To be extremely expensive", "To require great effort", "To involve personal sacrifice"],
    correctIndex: 1,
    explanation: "'Cost an arm and a leg' means something is very expensive or overpriced. Example: 'That designer bag cost an arm and a leg.' It emphasizes the high price by suggesting one would have to give up body parts to afford it."
  },
  {
    question: "The phrasal verb 'put off' means:",
    options: ["To extinguish", "To postpone or delay", "To annoy", "To display"],
    correctIndex: 1,
    explanation: "'Put off' means to delay or postpone something. Example: 'Don't put off until tomorrow what you can do today.' It can also mean to be annoyed: 'The smell put me off my food.'"
  },
  {
    question: "What does 'barking up the wrong tree' mean?",
    options: ["Making a mistake in identification", "Working too hard", "Being in the wrong place", "Following wrong instructions"],
    correctIndex: 0,
    explanation: "'Barking up the wrong tree' means pursuing a mistaken or misguided course of action; to be on the wrong track. Example: 'If you think I did it, you're barking up the wrong tree.'"
  },
  {
    question: "The idiom 'the ball is in your court' means:",
    options: ["It's your turn to make a decision or take action", "You're playing a sport", "You're in a difficult position", "You have no options left"],
    correctIndex: 0,
    explanation: "'The ball is in your court' means it's your turn to act or decide. From tennis, where the ball being on your side means you must hit it. Example: 'I've made my offer — the ball is in your court now.'"
  },
  {
    question: "What does 'let the cat out of the bag' mean?",
    options: ["To release an animal", "To reveal a secret accidentally", "To cause trouble", "To free oneself from confinement"],
    correctIndex: 1,
    explanation: "'Let the cat out of the bag' means to accidentally reveal a secret. Example: 'She let the cat out of the bag about the surprise party.' The origin is debated, but the idiom universally means disclosing something meant to be kept secret."
  },

  // ==========================================
  // ANALOGIES (5 Questions)
  // ==========================================
  {
    question: "Doctor : Hospital :: Lawyer : ?",
    options: ["Court", "Client", "Office", "Law"],
    correctIndex: 0,
    explanation: "A doctor works in a hospital; a lawyer works in a court. The relationship is professional : workplace. Both are professionals who primarily work in specific institutional settings."
  },
  {
    question: "Composer : Symphony :: Author : ?",
    options: ["Pen", "Book", "Library", "Writing"],
    correctIndex: 1,
    explanation: "A composer creates a symphony; an author creates a book. The relationship is creator : creation. Both are artistic professionals who produce a body of work."
  },
  {
    question: "Scalpel : Surgeon :: Microscope : ?",
    options: ["Cell", "Scientist", "Laboratory", "Magnification"],
    correctIndex: 1,
    explanation: "A surgeon uses a scalpel; a scientist uses a microscope. The relationship is professional : essential tool. Both are professionals whose work depends on these specific instruments."
  },
  {
    question: "Chrysalis : Butterfly :: ? : Adult",
    options: ["Larva", "Egg", "Pupa", "Caterpillar"],
    correctIndex: 2,
    explanation: "A chrysalis is the transitional stage before becoming a butterfly; a pupa is the transitional stage before becoming an adult (in complete metamorphosis). The relationship is developmental stage : mature form."
  },
  {
    question: "Democracy : Freedom :: Tyranny : ?",
    options: ["Government", "Oppression", "Leadership", "Dictatorship"],
    correctIndex: 1,
    explanation: "Democracy is associated with freedom; tyranny is associated with oppression. The relationship is system of government : characteristic outcome. Both represent political systems with their defining qualities."
  },

  // ==========================================
  // SENTENCE CORRECTION (5 Questions)
  // ==========================================
  {
    question: "Choose the correct sentence: 'The professor, along with his students, _____ attending the conference.'",
    options: ["are", "were", "is", "have been"],
    correctIndex: 2,
    explanation: "'Along with' does not make the subject plural. The subject is 'the professor' (singular), so the verb must be singular: 'is attending.' Phrases like 'along with,' 'together with,' and 'as well as' don't affect subject-verb agreement."
  },
  {
    question: "Correct the error: 'Me and him went to the store yesterday.'",
    options: ["He and I went to the store yesterday", "Him and me went to the store yesterday", "Me and he went to the store yesterday", "He and me went to the store yesterday"],
    correctIndex: 0,
    explanation: "Subject pronouns ('I,' 'he') are required when they are the subject of a verb. Remove the other person: 'He went' (not 'Him went'). The correct order puts the other person first: 'He and I.'"
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "The amount of people attending was surprising.",
      "The number of students in the class are increasing.",
      "Neither the cat nor the dog has been fed.",
      "Each of the books have interesting stories."
    ],
    correctIndex: 2,
    explanation: "'Neither...nor' takes the verb agreeing with the nearer subject ('dog' = singular), so 'has been fed' is correct. 'The amount' (uncountable) takes singular verb, 'the number' (countable) takes singular verb, and 'each' is singular."
  },
  {
    question: "Choose the correct sentence: 'Having finished the assignment, _____.'",
    options: [
      "the TV was turned on by the student",
      "the student turned on the TV",
      "turning on the TV was the student",
      "the TV was turned on"
    ],
    correctIndex: 1,
    explanation: "A participial phrase ('Having finished the assignment') must modify the subject of the main clause. Only option B has the student (who finished the assignment) as the subject who then turned on the TV."
  },
  {
    question: "Identify the correct sentence: 'The reason why he left was _____ he was unhappy.'",
    options: ["because", "since", "that", "for"],
    correctIndex: 2,
    explanation: "'The reason why...was that' is the correct construction. Using 'because' after 'the reason why' creates redundancy: 'The reason is because' is considered grammatically incorrect in formal writing."
  },
];
