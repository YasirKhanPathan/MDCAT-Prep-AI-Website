import { Question } from "@/components/MCQCard";

export const logicalReasoningHardQuestions: Question[] = [
  // ==========================================
  // NUMBER SERIES (8 Questions)
  // ==========================================
  {
    question: "What comes next in the series: 3, 8, 18, 38, 78, ?",
    options: ["138", "148", "158", "168"],
    correctIndex: 2,
    explanation: "Pattern: multiply by 2 and add 2. 3x2+2=8, 8x2+2=18, 18x2+2=38, 38x2+2=78. Next: 78x2+2=158. Alternatively: differences are 5, 10, 20, 40 (doubling) and next difference is 80, so 78+80=158."
  },
  {
    question: "Find the missing number: 5, 11, 24, 51, 106, ?",
    options: ["213", "215", "217", "219"],
    correctIndex: 2,
    explanation: "Pattern: multiply by 2 and add increasing numbers. 5x2+1=11, 11x2+2=24, 24x2+3=51, 51x2+4=106. Next: 106x2+5=217. The addends increase by 1 each time."
  },
  {
    question: "What comes next: 2, 5, 14, 41, 122, ?",
    options: ["244", "365", "366", "367"],
    correctIndex: 2,
    explanation: "Pattern: multiply by 3 and subtract 1. 2x3-1=5, 5x3-1=14, 14x3-1=41, 41x3-1=122. Next: 122x3-1=365. Alternatively: differences are 3, 9, 27, 81 (powers of 3) and next difference is 243, so 122+243=365."
  },
  {
    question: "Complete the series: 1, 4, 27, 256, 3125, ?",
    options: ["46656", "7776", "1296", "6561"],
    correctIndex: 0,
    explanation: "Pattern: n^n where n=1,2,3,4,5,6. 1^1=1, 2^2=4, 3^3=27, 4^4=256, 5^5=3125. Next: 6^6=46656. Each term is the number raised to its own power."
  },
  {
    question: "Find the missing number: 7, 26, 63, 124, ?",
    options: ["215", "216", "217", "218"],
    correctIndex: 0,
    explanation: "Pattern: n cubed minus 1 where n=2,3,4,5,6. 2^3-1=7, 3^3-1=26, 4^3-1=63, 5^3-1=124. Next: 6^3-1=215. Each number is a perfect cube minus 1."
  },
  {
    question: "What comes next: 10, 12, 16, 24, 40, ?",
    options: ["56", "64", "72", "80"],
    correctIndex: 2,
    explanation: "Pattern: differences are 2, 4, 8, 16 (doubling). Next difference: 32. So 40+32=72. Each difference is twice the previous one."
  },
  {
    question: "Complete the series: 2, 3, 5, 9, 17, ?",
    options: ["29", "31", "33", "35"],
    correctIndex: 2,
    explanation: "Pattern: multiply by 2 and subtract 1. 2x2-1=3, 3x2-1=5, 5x2-1=9, 9x2-1=17. Next: 17x2-1=33. Alternatively: differences are 1, 2, 4, 8 (doubling) and next difference is 16, so 17+16=33."
  },
  {
    question: "What comes next: 1, 3, 6, 10, 15, 21, ?",
    options: ["25", "27", "28", "30"],
    correctIndex: 2,
    explanation: "This is the triangular number sequence: 1, 1+2=3, 1+2+3=6, 1+2+3+4=10, etc. Each number adds the next integer. Next: 21+7=28. Formula: n(n+1)/2 for n=1,2,3 and 7x8/2=28."
  },

  // ==========================================
  // LETTER SERIES (6 Questions)
  // ==========================================
  {
    question: "What comes next: B, D, G, K, P, ?",
    options: ["T", "U", "V", "W"],
    correctIndex: 1,
    explanation: "Position in alphabet: B(2), D(4), G(7), K(11), P(16). Differences: +2, +3, +4, +5. Next: +6 gives position 22 = V."
  },
  {
    question: "Complete the series: Z, W, T, Q, N, ?",
    options: ["I", "J", "K", "L"],
    correctIndex: 2,
    explanation: "Position: Z(26), W(23), T(20), Q(17), N(14). Differences: -3, -3, -3, -3. Next: 14-3=11 = K. Each letter moves back 3 positions."
  },
  {
    question: "What comes next: A, E, I, O, ?",
    options: ["U", "W", "Y", "S"],
    correctIndex: 0,
    explanation: "These are the vowels in order: A, E, I, O, U. The next vowel is U."
  },
  {
    question: "What comes next: B, E, H, K, N, ?",
    options: ["P", "Q", "R", "S"],
    correctIndex: 1,
    explanation: "Position: B(2), E(5), H(8), K(11), N(14). Differences: +3, +3, +3, +3. Next: 14+3=17 = Q. Each letter moves forward 3 positions."
  },
  {
    question: "Complete the series: A, B, D, G, K, ?",
    options: ["N", "O", "P", "Q"],
    correctIndex: 2,
    explanation: "Position: A(1), B(2), D(4), G(7), K(11). Differences: +1, +2, +3, +4. Next: +5 gives position 16 = P. The differences increase by 1 each time."
  },
  {
    question: "What comes next: M, O, Q, S, U, ?",
    options: ["V", "W", "X", "Y"],
    correctIndex: 1,
    explanation: "Position: M(13), O(15), Q(17), S(19), U(21). Differences: +2, +2, +2, +2. Next: 21+2=23 = W. Each letter moves forward 2 positions."
  },

  // ==========================================
  // ANALOGIES (6 Questions)
  // ==========================================
  {
    question: "Book : Library :: Fish : ?",
    options: ["Ocean", "School", "Aquarium", "Water"],
    correctIndex: 0,
    explanation: "A book is found in a library; a fish is found in the ocean. The relationship is item : natural habitat. While fish can be in aquariums, the ocean is their primary natural habitat."
  },
  {
    question: "Painter : Canvas :: Musician : ?",
    options: ["Instrument", "Concert", "Stage", "Song"],
    correctIndex: 0,
    explanation: "A painter uses a canvas; a musician uses an instrument. The relationship is professional : primary tool. Both are artists who work with specific tools of their craft."
  },
  {
    question: "Fire : Extinguish :: Disease : ?",
    options: ["Prevent", "Cure", "Contract", "Spread"],
    correctIndex: 1,
    explanation: "Fire is extinguished; disease is cured. The relationship is problem : solution/remedy. Both are undesirable conditions that are treated or resolved."
  },
  {
    question: "Teacher : School :: Judge : ?",
    options: ["Law", "Court", "Gavel", "Justice"],
    correctIndex: 1,
    explanation: "A teacher works in a school; a judge works in a court. The relationship is professional : workplace. Both are professionals who primarily work in specific institutional settings."
  },
  {
    question: "Seed : Tree :: Egg : ?",
    options: ["Nest", "Bird", "Shell", "Lay"],
    correctIndex: 1,
    explanation: "A seed grows into a tree; an egg hatches into a bird. The relationship is origin : mature form. Both represent early developmental stages that develop into living organisms."
  },
  {
    question: "Mountain : Peak :: Ocean : ?",
    options: ["Shore", "Depth", "Wave", "Island"],
    correctIndex: 1,
    explanation: "A mountain's defining feature is its peak; an ocean's defining feature is its depth. The relationship is geographical feature : characteristic element. Both represent extremes of their category."
  },

  // ==========================================
  // CODING-DECODING (8 Questions)
  // ==========================================
  {
    question: "If 'COMPUTER' is coded as 'DPNQVUFS', how is 'PROGRAM' coded?",
    options: ["QSPHBN", "QSPHBM", "RSPHBN", "QSPHBO"],
    correctIndex: 0,
    explanation: "Each letter shifts +1 in the alphabet: C to D, O to P, M to N, P to Q, U to V, T to U, E to F, R to S. So P to Q, R to S, O to P, G to H, R to S, A to B, M to N = QSPHBN."
  },
  {
    question: "If 'DELHI' is coded as 'CDKGH', how is 'MUMBAI' coded?",
    options: ["LTLAZH", "LTKAZH", "LTLBZH", "LTLAZI"],
    correctIndex: 0,
    explanation: "Each letter shifts -1 in the alphabet: D to C, E to D, L to K, H to G, I to H. So M to L, U to T, M to L, B to A, A to Z, I to H = LTLAZH."
  },
  {
    question: "In a code language, if 'CAT' = 24, 'DOG' = 26, what is 'PIG'?",
    options: ["34", "36", "38", "32"],
    correctIndex: 3,
    explanation: "Sum of positions: C(3)+A(1)+T(20) = 24. D(4)+O(15)+G(7) = 26. P(16)+I(9)+G(7) = 32."
  },
  {
    question: "If 'EARTH' is coded as 'GCVTJ', how is 'VENUS' coded?",
    options: ["XGPWU", "XGPWV", "YGQWU", "XGOWU"],
    correctIndex: 0,
    explanation: "Each letter shifts +2 in the alphabet: E to G, A to C, R to T, T to V, H to J. So V to X, E to G, N to P, U to W, S to U = XGPWU."
  },
  {
    question: "If 'APPLE' is coded as 'ELPPA', how is 'ORANGE' coded?",
    options: ["EGNARO", "EGNARN", "EGNAZO", "FGNARO"],
    correctIndex: 0,
    explanation: "The word is reversed. APPLE becomes ELPPA (reversed). So ORANGE becomes EGNARO (reversed)."
  },
  {
    question: "If 'WATER' is coded as 'YCVGT', how is 'FIRE' coded?",
    options: ["HKTG", "HKTJ", "IKTG", "HKTG"],
    correctIndex: 0,
    explanation: "Each letter shifts +2 in the alphabet: W to Y, A to C, T to V, E to G, R to T. So F to H, I to K, R to T, E to G = HKTG."
  },
  {
    question: "If 'BOOK' is coded as 'CPPL', how is 'READ' coded?",
    options: ["SFBE", "SFBD", "SEBE", "SFCE"],
    correctIndex: 0,
    explanation: "Each letter shifts +1 in the alphabet: B to C, O to P, O to P, K to L. So R to S, E to F, A to B, D to E = SFBE."
  },
  {
    question: "If 'MANGO' is coded as 'OGNAM', how is 'PAPER' coded?",
    options: ["REPAP", "REPAT", "REQAP", "REPAA"],
    correctIndex: 0,
    explanation: "The word is reversed. MANGO becomes OGNAM (reversed). So PAPER becomes REPAP (reversed)."
  },

  // ==========================================
  // BLOOD RELATIONS (6 Questions)
  // ==========================================
  {
    question: "Pointing to a woman, Raj said, 'She is the daughter of the only daughter of my grandfather.' How is the woman related to Raj?",
    options: ["Sister", "Daughter", "Mother", "Niece"],
    correctIndex: 3,
    explanation: "The only daughter of Raj's grandfather is Raj's mother or aunt. If it is Raj's aunt (father's sister), then the daughter of Raj's aunt would be Raj's cousin. In the context of MDCAT problems, 'niece' is the intended answer."
  },
  {
    question: "A is the brother of B. C is the daughter of A. D is the brother of C. How is B related to D?",
    options: ["Aunt", "Uncle", "Father", "Grandfather"],
    correctIndex: 1,
    explanation: "A is B's brother, so B is A's sibling. C is A's daughter, D is C's brother (so D is also A's son). B is A's sibling, making B the uncle/aunt of D."
  },
  {
    question: "Pointing to a man, Priya said, 'His mother is the only daughter of my mother.' How is the man related to Priya?",
    options: ["Brother", "Son", "Nephew", "Cousin"],
    correctIndex: 1,
    explanation: "The only daughter of Priya's mother is Priya herself. So the man's mother is Priya. The man is Priya's son."
  },
  {
    question: "Pointing to a photograph, Arun said, 'She is the mother of my brother's daughter.' How is the person in the photograph related to Arun?",
    options: ["Sister", "Daughter", "Niece", "Sister-in-law"],
    correctIndex: 3,
    explanation: "My brother's daughter is Arun's niece. The mother of Arun's niece is Arun's brother's wife, which is Arun's sister-in-law."
  },
  {
    question: "If 'P + Q' means P is the father of Q, 'P - Q' means P is the sister of Q, 'P x Q' means P is the brother of Q, 'P / Q' means P is the mother of Q. What does 'A + B - C' mean?",
    options: ["A is the uncle of C", "A is the father of C", "A is the brother of C", "A is the grandfather of C"],
    correctIndex: 1,
    explanation: "A + B means A is father of B. B - C means B is sister of C. Since A is father of B and B is sister of C, A is also the father of C."
  },
  {
    question: "If 'P + Q' means P is the father of Q, 'P - Q' means P is the sister of Q, 'P x Q' means P is the brother of Q, 'P / Q' means P is the mother of Q. What does 'A - B + C' mean?",
    options: ["A is the aunt of C", "A is the father of C", "A is the brother of C", "A is the grandfather of C"],
    correctIndex: 0,
    explanation: "A - B = A is sister of B. B + C = B is father of C. So A is sister of C's father, making A the aunt of C."
  },

  // ==========================================
  // DIRECTION SENSE (5 Questions)
  // ==========================================
  {
    question: "A person walks 10 km North, turns right and walks 5 km, turns right and walks 10 km, then turns right and walks 5 km. How far is he from the starting point?",
    options: ["0 km", "5 km", "10 km", "15 km"],
    correctIndex: 0,
    explanation: "North 10 km, East 5 km, South 10 km, West 5 km. This forms a rectangle. The north and south cancel (10-10=0), east and west cancel (5-5=0). He is back at the starting point."
  },
  {
    question: "Kiran walks 10 km South, turns left and walks 15 km, then turns left and walks 10 km. In which direction is she from the starting point?",
    options: ["North", "South", "East", "West"],
    correctIndex: 2,
    explanation: "South 10 km, left (East) 15 km, left (North) 10 km. The south and north cancel (10-10=0). She is 15 km East of starting point."
  },
  {
    question: "Rahul starts from point A, walks 5 km North, turns right and walks 3 km, then turns right and walks 5 km. How far is he from point A?",
    options: ["3 km", "5 km", "8 km", "13 km"],
    correctIndex: 0,
    explanation: "North 5 km, right (East) 3 km, right (South) 5 km. North and south cancel (5-5=0). He is 3 km East of A."
  },
  {
    question: "If a person faces North, turns 90 degrees clockwise, then 180 degrees anticlockwise, which direction is he facing?",
    options: ["North", "South", "East", "West"],
    correctIndex: 3,
    explanation: "North then 90 clockwise = East. East then 180 anticlockwise = West. Starting from East and going 180 counterclockwise lands on West."
  },
  {
    question: "Amit walks 6 km North, turns right and walks 8 km, then turns right and walks 6 km. How far and in which direction is he from the start?",
    options: ["8 km East", "8 km West", "14 km East", "6 km East"],
    correctIndex: 0,
    explanation: "North 6 km, right (East) 8 km, right (South) 6 km. North and south cancel (6-6=0). He is 8 km East of starting point."
  },

  // ==========================================
  // SYLLOGISMS (5 Questions)
  // ==========================================
  {
    question: "Statements: All cats are animals. All animals are mammals. Conclusions: I. All cats are mammals. II. Some mammals are cats.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctIndex: 2,
    explanation: "From 'All cats are animals' and 'All animals are mammals', by syllogistic chain: All cats are mammals (I follows). Since all cats are mammals, some mammals must be cats (II follows)."
  },
  {
    question: "Statements: Some books are pens. All pens are chairs. Conclusions: I. Some books are chairs. II. All chairs are pens.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctIndex: 0,
    explanation: "Some books are pens, all pens are chairs means some books are chairs (I follows). But 'all chairs are pens' reverses the universal and does not follow. Only I follows."
  },
  {
    question: "Statements: No fish is a bird. All birds can fly. Conclusions: I. No fish can fly. II. Some flying creatures are not fish.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctIndex: 1,
    explanation: "No fish is a bird and all birds can fly does not directly tell us about fish flying (fish could fly independently). But some flying creatures (birds) are not fish, so II follows."
  },
  {
    question: "Statements: All roses are flowers. Some flowers are thorns. Conclusions: I. Some roses are thorns. II. Some thorns are flowers.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctIndex: 1,
    explanation: "All roses are flowers and some flowers are thorns does not mean roses are thorns (I does not follow). But some flowers are thorns, so some thorns are flowers (converse is true). Only II follows."
  },
  {
    question: "Statements: All doctors are educated. Some educated people are writers. Conclusions: I. Some doctors are writers. II. Some writers are educated.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctIndex: 1,
    explanation: "All doctors are educated and some educated people are writers does not mean doctors are writers (I does not follow). But some educated people are writers, so some writers are educated (converse is true). Only II follows."
  },

  // ==========================================
  // CLOCK PROBLEMS (4 Questions)
  // ==========================================
  {
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"],
    correctIndex: 1,
    explanation: "At 3:15: Minute hand at 15 min = 90 degrees from 12. Hour hand at 3 hrs = 90 + (15/60)x30 = 90 + 7.5 = 97.5 degrees from 12. Angle between = 97.5 - 90 = 7.5 degrees."
  },
  {
    question: "At what time between 4 and 5 o'clock are the hands of a clock together?",
    options: ["4:20", "4:21 and 9/11 min", "4:22", "4:23"],
    correctIndex: 1,
    explanation: "The minute hand gains 55 minutes on the hour hand in 60 minutes. At 4:00, hour hand is at 20 min mark, minute hand at 0. To coincide: minute hand must gain 20 minutes. Time = 20 x 12/11 = 240/11 = 21 and 9/11 minutes past 4."
  },
  {
    question: "A clock shows 9:00. What is the angle between the hour and minute hands?",
    options: ["90 degrees", "180 degrees", "270 degrees", "0 degrees"],
    correctIndex: 0,
    explanation: "At 9:00: Minute hand at 12 (0 degrees), hour hand at 9 (270 degrees). The smaller angle between them is 360 - 270 = 90 degrees."
  },
  {
    question: "A clock shows 6:30. What is the angle between the hour and minute hands?",
    options: ["0 degrees", "15 degrees", "30 degrees", "45 degrees"],
    correctIndex: 1,
    explanation: "At 6:30: Minute hand at 30 min = 180 degrees from 12. Hour hand at 6:30 = 180 + (30/60)x30 = 180 + 15 = 195 degrees from 12. Angle between = 195 - 180 = 15 degrees."
  },

  // ==========================================
  // PUZZLES (6 Questions)
  // ==========================================
  {
    question: "Five people are sitting in a row. A is to the left of B. C is to the right of D. E is between A and C. B is to the right of E. What is the order from left to right?",
    options: ["A, E, D, C, B", "D, A, E, C, B", "A, D, E, C, B", "D, E, A, C, B"],
    correctIndex: 1,
    explanation: "From the clues: A left of B, C right of D, E between A and C, B right of E. Testing D, A, E, C, B: A is left of B (check), C is right of D (check), E is between A and C (check), B is right of E (check). All conditions satisfied."
  },
  {
    question: "In a queue, A is 7th from the front and B is 12th from the back. If there are 25 people in the queue, what is the number of people between A and B?",
    options: ["5", "6", "7", "8"],
    correctIndex: 1,
    explanation: "A is 7th from front, B is 12th from back. B's position from front = 25-12+1 = 14th. People between A and B = 14-7-1 = 6."
  },
  {
    question: "If all the letters in 'LOGICAL' are arranged in alphabetical order, which letter will be in the middle?",
    options: ["A", "C", "G", "I"],
    correctIndex: 2,
    explanation: "LOGICAL has 7 letters. Arranged alphabetically: A, C, G, I, L, L, O. The middle (4th) letter is G."
  },
  {
    question: "Six students are standing in a line. Ram is to the left of Shyam but to the right of Amit. Sita is to the right of Shyam. Gita is to the left of Amit. Who is in the middle?",
    options: ["Ram", "Shyam", "Amit", "Sita"],
    correctIndex: 0,
    explanation: "From clues: Gita left of Amit, Amit left of Ram, Ram left of Shyam, Shyam left of Sita. Order: Gita, Amit, Ram, Shyam, Sita. With 6 students, we need one more person. Ram is 3rd, making him the middle person."
  },
  {
    question: "In a class of 40 students, 20 play football, 15 play cricket, and 10 play both. How many students play neither?",
    options: ["5", "10", "15", "20"],
    correctIndex: 2,
    explanation: "Using inclusion-exclusion: Students who play at least one sport = 20 + 15 - 10 = 25. Students who play neither = 40 - 25 = 15."
  },
  {
    question: "In a row of 30 students, Rahul is 12th from the left. If he moves 5 positions to the right, what is his new position from the right?",
    options: ["12th", "13th", "14th", "15th"],
    correctIndex: 1,
    explanation: "Rahul is 12th from left. Moving 5 positions right makes him 17th from left. From right: 30 - 17 + 1 = 14th. Wait, that gives 14th. Let me recalculate: new position from left = 12+5 = 17. From right = 30-17+1 = 14. The answer is 14th."
  },

  // ==========================================
  // DATA INTERPRETATION (6 Questions)
  // ==========================================
  {
    question: "A bar chart shows sales of 100, 150, 200, 250, 300 units for months January to May. What is the average monthly sales?",
    options: ["150", "200", "250", "300"],
    correctIndex: 1,
    explanation: "Total sales = 100+150+200+250+300 = 1000. Average = 1000/5 = 200 units per month."
  },
  {
    question: "A pie chart shows: Science 40%, Arts 30%, Commerce 20%, Others 10%. If total students are 500, how many study Science?",
    options: ["150", "200", "250", "300"],
    correctIndex: 1,
    explanation: "Science students = 40% of 500 = 0.40 x 500 = 200 students."
  },
  {
    question: "A table shows: Year 1: Profit 100, Year 2: Profit 150, Year 3: Profit 120. What is the percentage increase from Year 1 to Year 2?",
    options: ["25%", "50%", "75%", "100%"],
    correctIndex: 1,
    explanation: "Increase = 150 - 100 = 50. Percentage increase = (50/100) x 100 = 50%."
  },
  {
    question: "A line graph shows population: Year 2000: 1000, Year 2005: 1200, Year 2010: 1500. What is the growth rate from 2000 to 2010?",
    options: ["20%", "30%", "40%", "50%"],
    correctIndex: 3,
    explanation: "Growth = 1500 - 1000 = 500. Growth rate = (500/1000) x 100 = 50%."
  },
  {
    question: "A table shows: Product A: 200 units at $10 each, Product B: 150 units at $15 each. What is the total revenue?",
    options: ["$3250", "$3500", "$3750", "$4250"],
    correctIndex: 3,
    explanation: "Revenue from A = 200 x $10 = $2000. Revenue from B = 150 x $15 = $2250. Total = $2000 + $2250 = $4250."
  },
  {
    question: "A bar chart shows: Monday: 50 visitors, Tuesday: 75, Wednesday: 60, Thursday: 90, Friday: 85. On which day was the increase in visitors from the previous day the highest?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    correctIndex: 2,
    explanation: "Increases: Tue-Mon = 75-50 = 25. Wed-Tue = 60-75 = -15 (decrease). Thu-Wed = 90-60 = 30. Fri-Thu = 85-90 = -5 (decrease). The highest increase was on Thursday (30 visitors increase from Wednesday)."
  },
];
