// Unit C2 Midterm Study Guide — 60-Question Exam Bank & 27 Flashcards

const c2MidtermQuestions = [
  // =========================================================================
  // PART 1: LANDMARK SUPREME COURT CASES & REP (16 QUESTIONS)
  // =========================================================================
  {
    id: 1,
    topic: "caselaw",
    category: "Part 1 • Item #8 (Katz v. US)",
    q: "What are the core principles established in Katz v. United States (1967)?",
    options: [
      "Reasonable Expectation of Privacy (REP) was established, a search warrant is needed to intrude where someone has REP, and 4th Amendment protection shifted from PLACE to PEOPLE",
      "The two-prong informant test of basis of knowledge and veracity was established",
      "Officers may automatically frisk anyone they approach in a public place",
      "Excessive force is evaluated by severity of the crime, evading, and danger to police or others"
    ],
    correct: "Reasonable Expectation of Privacy (REP) was established, a search warrant is needed to intrude where someone has REP, and 4th Amendment protection shifted from PLACE to PEOPLE",
    explanation: "Midterm Item #8: In Katz v. US, Reasonable Expectation of Privacy (REP) was established, you need a search warrant to go into somewhere someone has REP, and 4th Amendment analysis shifted from PLACE to PEOPLE ('the Fourth Amendment protects people, not places')."
  },
  {
    id: 2,
    topic: "caselaw",
    category: "Part 1 • Item #8 (Katz v. US)",
    q: "In Katz v. United States, the Supreme Court shifted Fourth Amendment protection from ______ to ______.",
    options: [
      "PLACE to PEOPLE",
      "PEOPLE to PLACE",
      "PROBABLE CAUSE to REASONABLE SUSPICION",
      "FELONIES to MISDEMEANORS"
    ],
    correct: "PLACE to PEOPLE",
    explanation: "Midterm Item #8: Katz v. US established REP and shifted Fourth Amendment protection from PLACE to PEOPLE."
  },
  {
    id: 3,
    topic: "caselaw",
    category: "Part 1 • Item #3 (Public REP)",
    q: "If two subjects are talking openly in a public place, do they have a Reasonable Expectation of Privacy (REP) in their conversation?",
    options: [
      "No — two subjects talking in a public place have NO Reasonable Expectation of Privacy (no REP)",
      "Yes — all verbal conversations in public require a wiretap search warrant",
      "Yes — unless both subjects sign a written consent waiver",
      "Only if they are talking about a felony"
    ],
    correct: "No — two subjects talking in a public place have NO Reasonable Expectation of Privacy (no REP)",
    explanation: "Midterm Item #3: Two subjects talking in a public place have NO REP (Reasonable Expectation of Privacy)."
  },
  {
    id: 4,
    topic: "caselaw",
    category: "Part 1 • Item #25 (Aguilar v. Texas)",
    q: "What are the two prongs of the test established in Aguilar v. Texas for evaluating an informant's tip?",
    options: [
      "Basis of knowledge AND Veracity",
      "Severity of the crime AND Imminent danger",
      "Intention to arrest AND Detention",
      "Hot pursuit AND Destruction of evidence"
    ],
    correct: "Basis of knowledge AND Veracity",
    explanation: "Midterm Item #25: Aguilar v. Texas established the two prongs: (1) Basis of knowledge and (2) Veracity (truthfulness/reliability)."
  },
  {
    id: 5,
    topic: "caselaw",
    category: "Part 1 • Item #11 (Illinois v. Gates)",
    q: "Which Supreme Court case replaced the rigid two-prong Aguilar test with the 'Totality of the Circumstances' test for Probable Cause?",
    options: [
      "Illinois v. Gates",
      "Florida v. Royer",
      "Graham v. Connor",
      "Terry v. Ohio"
    ],
    correct: "Illinois v. Gates",
    explanation: "Midterm Item #11: Illinois v. Gates replaced the rigid two-prong test from Aguilar with the 'Totality of the Circumstances' standard."
  },
  {
    id: 6,
    topic: "caselaw",
    category: "Part 1 • Items #11 & #25",
    q: "How do Aguilar v. Texas and Illinois v. Gates relate to each other when evaluating informant information for Probable Cause?",
    options: [
      "Aguilar created the strict two-prong test (basis of knowledge & veracity), and Illinois v. Gates replaced that rigid test with the Totality of the Circumstances approach",
      "Illinois v. Gates created the Exclusionary Rule, and Aguilar abolished search warrants",
      "Aguilar applies only to traffic stops, and Illinois v. Gates applies only to domestic violence",
      "Both cases deal exclusively with the use of deadly force on a fleeing felon"
    ],
    correct: "Aguilar created the strict two-prong test (basis of knowledge & veracity), and Illinois v. Gates replaced that rigid test with the Totality of the Circumstances approach",
    explanation: "Midterm Items #11 & #25: Aguilar v. Texas established the two-prong test (basis of knowledge and veracity); Illinois v. Gates moved to the Totality of the Circumstances."
  },
  {
    id: 7,
    topic: "caselaw",
    category: "Part 1 • Item #12 (Terry v. Ohio)",
    q: "According to Terry v. Ohio, is a subject under arrest as soon as you approach them to detain them?",
    options: [
      "No — they are NOT under arrest as soon as you approach them to detain them",
      "Yes — the moment an officer approaches and speaks to a subject, a full custodial arrest has occurred",
      "Yes — every investigative detention is legally identical to a felony arrest",
      "Only if the officer is wearing a uniform"
    ],
    correct: "No — they are NOT under arrest as soon as you approach them to detain them",
    explanation: "Midterm Item #12: Terry v. Ohio — they are NOT under arrest as soon as you approach them to detain them."
  },
  {
    id: 8,
    topic: "caselaw",
    category: "Part 1 • Item #24 (Florida v. Royer)",
    q: "In Florida v. Royer, what turned the investigative detention into an unlawful arrest?",
    options: [
      "He was held with no sense that he was free to go and officers seized his personal artifacts (airline ticket, driver's license, luggage)",
      "Officers read him his Miranda rights on a public sidewalk and let him walk away",
      "Two subjects were talking loudly in a public park where there was no REP",
      "Officers obtained a search warrant based on probable cause before approaching him"
    ],
    correct: "He was held with no sense that he was free to go and officers seized his personal artifacts (airline ticket, driver's license, luggage)",
    explanation: "Midterm Item #24: Florida v. Royer — the subject was held with no sense he was free to go and officers seized his personal artifacts (ticket, ID, luggage) and moved him to a small room, exceeding a lawful Terry detention."
  },
  {
    id: 9,
    topic: "caselaw",
    category: "Part 1 • Item #24 (Florida v. Royer)",
    q: "During an airport stop, detectives take a traveler's driver's license and boarding pass, retrieve his checked bags without consent, and bring him into a small room without telling him he is free to leave. Which case holds that this detention exceeded a Terry stop?",
    options: [
      "Florida v. Royer",
      "Katz v. United States",
      "Aguilar v. Texas",
      "Illinois v. Gates"
    ],
    correct: "Florida v. Royer",
    explanation: "Midterm Item #24: In Florida v. Royer, holding the suspect with no sense he was free to go and seizing his personal artifacts converted the stop into an illegal arrest without probable cause."
  },
  {
    id: 10,
    topic: "caselaw",
    category: "Part 1 • Item #22 (Graham v. Connor)",
    q: "Which Supreme Court case governs claims of excessive force by law enforcement, and what are its 3 key factors?",
    options: [
      "Graham v. Connor — (1) Severity of the crime, (2) Evading (actively resisting or attempting to evade by flight), and (3) Danger to police or others",
      "Katz v. US — (1) Place, (2) People, and (3) Standing",
      "Aguilar v. Texas — (1) Basis of knowledge, (2) Veracity, and (3) Totality",
      "Florida v. Royer — (1) Intention, (2) Communication, and (3) Detention"
    ],
    correct: "Graham v. Connor — (1) Severity of the crime, (2) Evading (actively resisting or attempting to evade by flight), and (3) Danger to police or others",
    explanation: "Midterm Item #22: Graham v. Connor evaluates excessive force by looking at: (1) Severity of the crime, (2) Evading/resisting, and (3) Danger to police or others."
  },
  {
    id: 11,
    topic: "caselaw",
    category: "Part 1 • Item #22 (Graham v. Connor)",
    q: "Which of the following is NOT one of the three excessive-force factors from Graham v. Connor?",
    options: [
      "Whether the officer had a search warrant signed by a magistrate",
      "Severity of the crime",
      "Evading (whether the suspect is actively resisting or attempting to evade arrest by flight)",
      "Danger to police or others"
    ],
    correct: "Whether the officer had a search warrant signed by a magistrate",
    explanation: "Midterm Item #22: The three Graham v. Connor excessive-force factors are: (1) Severity of the crime, (2) Evading, and (3) Danger to police or others."
  },
  {
    id: 12,
    topic: "caselaw",
    category: "Part 1 • Item #8 (Katz v. US)",
    q: "According to Katz v. United States, what does an officer generally need before entering or intruding into an area where a person has a Reasonable Expectation of Privacy (REP)?",
    options: [
      "A search warrant (unless a recognized warrant exception such as exigency applies)",
      "Only a hunch or mere suspicion",
      "Permission from the shift commander only",
      "A subpoena from the Discovery Process"
    ],
    correct: "A search warrant (unless a recognized warrant exception such as exigency applies)",
    explanation: "Midterm Item #8: Under Katz v. US, REP was established and you need a search warrant to go into somewhere someone has REP."
  },
  {
    id: 13,
    topic: "caselaw",
    category: "Part 1 • Item #25 (Aguilar v. Texas)",
    q: "In Aguilar v. Texas, what do the two prongs ('Basis of Knowledge' and 'Veracity') refer to?",
    options: [
      "How the informant obtained the information (Basis of Knowledge) AND the informant's truthfulness/reliability (Veracity)",
      "Whether the officer was in uniform (Basis) AND whether handcuffs were used (Veracity)",
      "Whether the suspect was married (Basis) AND whether 48 hours elapsed (Veracity)",
      "Whether the crime was a felony (Basis) AND whether the suspect fled (Veracity)"
    ],
    correct: "How the informant obtained the information (Basis of Knowledge) AND the informant's truthfulness/reliability (Veracity)",
    explanation: "Midterm Item #25: Aguilar v. Texas's two prongs are Basis of Knowledge (how the informant knows) and Veracity (truthfulness/reliability)."
  },
  {
    id: 14,
    topic: "caselaw",
    category: "Part 1 • Item #3 (Public REP)",
    q: "An officer standing on a public sidewalk overhears two suspects discussing a burglary at normal conversational volume. Can the officer use what they overheard without a warrant?",
    options: [
      "Yes — two subjects talking in a public place have NO Reasonable Expectation of Privacy (REP)",
      "No — overhearing a conversation on a sidewalk violates Katz v. United States",
      "No — it must be thrown out under the Exclusionary Rule",
      "Only if the officer first read both suspects their Miranda warnings"
    ],
    correct: "Yes — two subjects talking in a public place have NO Reasonable Expectation of Privacy (REP)",
    explanation: "Midterm Item #3: Two subjects talking in a public place have no REP."
  },
  {
    id: 15,
    topic: "caselaw",
    category: "Part 1 • Case Law Review",
    q: "Which case established that 'they're not under arrest as soon as you approach them to detain them'?",
    options: [
      "Terry v. Ohio",
      "Aguilar v. Texas",
      "Katz v. United States",
      "Graham v. Connor"
    ],
    correct: "Terry v. Ohio",
    explanation: "Midterm Item #12: Terry v. Ohio — they are not under arrest as soon as you approach them to detain them."
  },
  {
    id: 16,
    topic: "caselaw",
    category: "Part 1 • Case Law Review",
    q: "Which case replaced Aguilar's two-prong test with the 'Totality of the Circumstances'?",
    options: [
      "Illinois v. Gates",
      "Florida v. Royer",
      "Terry v. Ohio",
      "Graham v. Connor"
    ],
    correct: "Illinois v. Gates",
    explanation: "Midterm Item #11: Illinois v. Gates established the Totality of the Circumstances test."
  },

  // =========================================================================
  // PART 2: PROBABLE CAUSE, STANDING, EXCLUSIONARY RULE & DISCOVERY (14 QUESTIONS)
  // =========================================================================
  {
    id: 17,
    topic: "pc",
    category: "Part 2 • Item #5 (Probable Cause)",
    q: "What is the definition of Probable Cause for an arrest?",
    options: [
      "Facts and circumstances within the officer's knowledge (and reasonably trustworthy information) sufficient to warrant a person of reasonable caution to believe that an offense has been or is being committed",
      "Proof beyond all reasonable doubt that a suspect is guilty of a felony",
      "An unparticularized hunch or gut feeling that someone looks suspicious",
      "A standardized mathematical formula requiring at least 90% certainty"
    ],
    correct: "Facts and circumstances within the officer's knowledge (and reasonably trustworthy information) sufficient to warrant a person of reasonable caution to believe that an offense has been or is being committed",
    explanation: "Midterm Item #5: Probable cause is facts and circumstances sufficient to warrant a reasonable person to believe a crime has been or is being committed (for arrest) or that evidence of a crime will be found in a particular place (for a search)."
  },
  {
    id: 18,
    topic: "pc",
    category: "Part 2 • Item #6 (Search Warrant)",
    q: "What level of proof is constitutionally required to obtain a Search Warrant?",
    options: [
      "Probable Cause",
      "Reasonable Articulable Suspicion (RAS)",
      "Mere Suspicion",
      "Proof Beyond a Reasonable Doubt"
    ],
    correct: "Probable Cause",
    explanation: "Midterm Item #6: A search warrant needs Probable Cause."
  },
  {
    id: 19,
    topic: "pc",
    category: "Part 2 • Item #18 (Building PC)",
    q: "True or False: One single minor observation by itself might not establish Probable Cause, but multiple factors/observations combined together can establish Probable Cause.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Midterm Item #18: 'One thing can't make probable cause, but multiple things can' (under the Totality of the Circumstances)."
  },
  {
    id: 20,
    topic: "pc",
    category: "Part 2 • Item #23 (Nature of PC)",
    q: "Is Probable Cause a rigid, standardized system?",
    options: [
      "No — Probable Cause is NOT a standardized system (it is a fluid, practical, common-sense concept based on the totality of the circumstances)",
      "Yes — Probable Cause is a strict standardized numerical point checklist",
      "Yes — Probable Cause always requires exactly four eyewitnesses",
      "Yes — Probable Cause only exists when a suspect confesses in writing"
    ],
    correct: "No — Probable Cause is NOT a standardized system (it is a fluid, practical, common-sense concept based on the totality of the circumstances)",
    explanation: "Midterm Item #23: Probable cause is NOT a standardized system."
  },
  {
    id: 21,
    topic: "pc",
    category: "Part 2 • Item #9 (Standing)",
    q: "What is the legal term for having a 'personal stake in something' (a personal Reasonable Expectation of Privacy) required to challenge the legality of a search or seizure in court?",
    options: [
      "Standing",
      "Discovery",
      "Veracity",
      "Exigency"
    ],
    correct: "Standing",
    explanation: "Midterm Item #9: Personal stake in something = Standing."
  },
  {
    id: 22,
    topic: "pc",
    category: "Part 2 • Item #9 (Standing)",
    q: "If police illegally search Suspect A's house and find evidence incriminating Suspect B (who does not live there, was not present, and had no personal expectation of privacy in Suspect A's house), why can't Suspect B get the evidence suppressed?",
    options: [
      "Because Suspect B lacks 'Standing' (no personal stake or REP in Suspect A's house)",
      "Because of the Aguilar v. Texas two-prong test",
      "Because of Graham v. Connor",
      "Because every seizure is an arrest"
    ],
    correct: "Because Suspect B lacks 'Standing' (no personal stake or REP in Suspect A's house)",
    explanation: "Midterm Item #9: Standing requires a personal stake (personal REP) in the place searched or item seized."
  },
  {
    id: 23,
    topic: "pc",
    category: "Part 2 • Item #10 (Exclusionary Rule)",
    q: "What rule applies when illegally obtained evidence 'gets thrown out of court'?",
    options: [
      "The Exclusionary Rule",
      "The Discovery Rule",
      "The Totality of the Circumstances Rule",
      "The Fresh Pursuit Rule"
    ],
    correct: "The Exclusionary Rule",
    explanation: "Midterm Item #10: When something gets thrown out of court = Exclusionary Rule."
  },
  {
    id: 24,
    topic: "pc",
    category: "Part 2 • Item #13 (Discovery Process)",
    q: "Which pre-trial legal process 'can handle all documents relevant to your case' (requiring police reports, notes, and relevant case materials to be disclosed)?",
    options: [
      "The Discovery Process",
      "The Exclusionary Rule",
      "Standing",
      "Exigent Circumstances"
    ],
    correct: "The Discovery Process",
    explanation: "Midterm Item #13: Discovery process — can handle all documents relevant to your case."
  },
  {
    id: 25,
    topic: "pc",
    category: "Part 2 • Item #18 (Building PC)",
    q: "Which statement accurately reflects how Probable Cause is developed during an investigation?",
    options: [
      "One thing can't make probable cause, but multiple things can",
      "If the very first fact observed doesn't establish probable cause by itself, you must ignore all other facts",
      "Probable cause is a standardized numerical system",
      "You only need Reasonable Articulable Suspicion to get a search warrant"
    ],
    correct: "One thing can't make probable cause, but multiple things can",
    explanation: "Midterm Item #18: One thing can't make probable cause, but multiple things can."
  },
  {
    id: 26,
    topic: "pc",
    category: "Part 2 • Item #10 (Exclusionary Rule)",
    q: "If an officer searches a suspect's home without a search warrant, without consent, and without any exigent circumstances, what happens to the evidence found inside?",
    options: [
      "It gets thrown out of court under the Exclusionary Rule",
      "It is automatically admitted under the Discovery Process",
      "It converts into Probable Cause under Aguilar v. Texas",
      "It is kept in court as long as the suspect is not married"
    ],
    correct: "It gets thrown out of court under the Exclusionary Rule",
    explanation: "Midterm Item #10: When evidence obtained in violation of the 4th Amendment gets thrown out of court, that is the Exclusionary Rule."
  },
  {
    id: 27,
    topic: "pc",
    category: "Part 2 • Item #9 (Standing)",
    q: "What does 'Standing' mean in Fourth Amendment search and seizure law?",
    options: [
      "Having a personal stake in something (a personal Reasonable Expectation of Privacy in the place searched or item seized)",
      "Remaining on your feet during a Terry frisk",
      "Having Probable Cause to chase a fleeing suspect into a house",
      "Filing a domestic abuse report within 48 hours"
    ],
    correct: "Having a personal stake in something (a personal Reasonable Expectation of Privacy in the place searched or item seized)",
    explanation: "Midterm Item #9: Personal stake in something = Standing."
  },
  {
    id: 28,
    topic: "pc",
    category: "Part 2 • Item #23 (Nature of PC)",
    q: "True or False: Probable Cause is a standardized system with fixed mathematical rules.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Midterm Item #23: Probable cause is NOT a standardized system."
  },
  {
    id: 29,
    topic: "pc",
    category: "Part 2 • Item #13 (Discovery)",
    q: "Why must officers be thorough, accurate, and professional in every notebook entry, supplement, and document related to an investigation?",
    options: [
      "Because the Discovery Process can handle all documents relevant to your case",
      "Because the Exclusionary Rule requires officers to destroy their field notes",
      "Because two subjects talking in public have a REP",
      "Because child abuse is classified as a domestic"
    ],
    correct: "Because the Discovery Process can handle all documents relevant to your case",
    explanation: "Midterm Item #13: Discovery process — can handle all documents relevant to your case."
  },
  {
    id: 30,
    topic: "pc",
    category: "Part 2 • Item #6 (Search Warrant)",
    q: "Can an officer obtain a search warrant based solely on Reasonable Articulable Suspicion (RAS)?",
    options: [
      "No — a search warrant needs Probable Cause",
      "Yes — RAS is enough for both a Terry stop and a search warrant",
      "Yes — as long as the crime is a misdemeanor",
      "Only if the suspect is in a public place"
    ],
    correct: "No — a search warrant needs Probable Cause",
    explanation: "Midterm Item #6: A search warrant needs Probable Cause."
  },

  // =========================================================================
  // PART 3: SEIZURES VS. ARRESTS, TERRY DETENTIONS, 4 ELEMENTS & FORCE (16 QUESTIONS)
  // =========================================================================
  {
    id: 31,
    topic: "detention-arrest",
    category: "Part 3 • Item #1 (Seizure vs. Arrest)",
    q: "Is every seizure under the Fourth Amendment an arrest?",
    options: [
      "No — every arrest is a seizure, but NOT every seizure is an arrest (e.g., an investigative Terry detention is a seizure, not an arrest)",
      "Yes — every time an officer detains someone for any reason, it is a full custodial arrest",
      "Yes — unless the person is seated in handcuffs",
      "No — because arrests are not seizures under the 4th Amendment"
    ],
    correct: "No — every arrest is a seizure, but NOT every seizure is an arrest (e.g., an investigative Terry detention is a seizure, not an arrest)",
    explanation: "Midterm Item #1: Is every seizure an arrest? NO."
  },
  {
    id: 32,
    topic: "detention-arrest",
    category: "Part 3 • Item #2 (Arrest as 4th Amendment Seizure)",
    q: "Under the U.S. Constitution, an arrest is classified as what?",
    options: [
      "A seizure under the 4th Amendment",
      "A conviction under the 8th Amendment",
      "An administrative subpoena under the 1st Amendment",
      "A civil forfeiture under the 14th Amendment"
    ],
    correct: "A seizure under the 4th Amendment",
    explanation: "Midterm Item #2: An arrest is a seizure under the 4th Amendment."
  },
  {
    id: 33,
    topic: "detention-arrest",
    category: "Part 3 • Item #15 (4 Elements of Arrest)",
    q: "What are the FOUR (4) Elements of an Arrest in Maryland?",
    options: [
      "1. Intention to arrest, 2. Communication, 3. Real or pretend authority, and 4. Detention",
      "1. Visibility, 2. Deterrence, 3. Compliance, and 4. Non-Occurrence",
      "1. Handcuffs, 2. Miranda warnings, 3. Transport to station, and 4. Booking photo",
      "1. Severity of crime, 2. Evading, 3. Danger to others, and 4. Search warrant"
    ],
    correct: "1. Intention to arrest, 2. Communication, 3. Real or pretend authority, and 4. Detention",
    explanation: "Midterm Item #15: The 4 elements of arrest are: (1) Intention to arrest, (2) Communication, (3) Real or pretend authority, and (4) Detention."
  },
  {
    id: 34,
    topic: "detention-arrest",
    category: "Part 3 • Item #15 (4 Elements of Arrest)",
    q: "Which of the following is ONE of the 4 Elements of an Arrest (#15)?",
    options: [
      "Real or pretend authority (along with intention to arrest, communication, and detention)",
      "Reading Miranda rights immediately upon approach",
      "Knowing the exact title and section of the statute before detaining",
      "Obtaining a search warrant from a judge"
    ],
    correct: "Real or pretend authority (along with intention to arrest, communication, and detention)",
    explanation: "Midterm Item #15: 4 elements of arrest — intention to arrest, communication, real or pretend authority, detention."
  },
  {
    id: 35,
    topic: "detention-arrest",
    category: "Part 3 • Item #7 (Handcuffs / Seated in Detention)",
    q: "Can an officer place a subject in handcuffs and/or have them seated while they are being detained on an investigative stop (without it automatically becoming an arrest)?",
    options: [
      "Yes — you CAN place a subject in handcuffs and/or seated if they are detained",
      "No — the moment handcuffs touch a subject's wrists, it is always a full arrest requiring Probable Cause",
      "No — detained subjects must always remain standing and unrestrained",
      "Only after a judge signs an arrest warrant"
    ],
    correct: "Yes — you CAN place a subject in handcuffs and/or seated if they are detained",
    explanation: "Midterm Item #7: Can place subject in handcuffs and/or seated if they are detained."
  },
  {
    id: 36,
    topic: "detention-arrest",
    category: "Part 3 • Item #14 (RAS to Detain vs. Frisk)",
    q: "If an officer has Reasonable Articulable Suspicion (RAS) ONLY that 'criminal activity is afoot' (with no indication that the person is armed and dangerous), what can the officer do?",
    options: [
      "Detain them — NOT frisk them",
      "Immediately frisk (pat down) their outer clothing and search their pockets",
      "Conduct a full Search Incident to Arrest",
      "Nothing; you need Probable Cause to detain someone"
    ],
    correct: "Detain them — NOT frisk them",
    explanation: "Midterm Item #14: If RAS that criminal activity is afoot, detain them — NOT frisk! (A frisk requires separate RAS that the person is armed and dangerous.)"
  },
  {
    id: 37,
    topic: "detention-arrest",
    category: "Part 3 • Item #27 (Investigative Detention Crime)",
    q: "For an investigative detention (Terry) stop, do you need to know the exact, specific crime that is being committed?",
    options: [
      "No — for an investigative detention stop, you do NOT need to know the specific crime",
      "Yes — you must be able to cite the exact section number before detaining anyone",
      "Yes — investigative detentions are only allowed for first-degree felonies",
      "Yes — unless the suspect is talking in a public place"
    ],
    correct: "No — for an investigative detention stop, you do NOT need to know the specific crime",
    explanation: "Midterm Item #27: For an investigative detention stop, you do NOT need to know the specific crime (only RAS that criminal activity is afoot)."
  },
  {
    id: 38,
    topic: "detention-arrest",
    category: "Part 3 • Item #17 (Deadly Force on Fleeing Subject)",
    q: "What level of justification is needed to use deadly force upon a fleeing subject (when they pose a significant threat of death or serious physical injury to the officer or others)?",
    options: [
      "Probable Cause is needed",
      "Mere suspicion is enough for any fleeing suspect",
      "Reasonable Articulable Suspicion (RAS) that they committed a misdemeanor",
      "Deadly force is permitted on any fleeing shoplifter"
    ],
    correct: "Probable Cause is needed",
    explanation: "Midterm Item #17: Deadly force upon a fleeing subject — Probable Cause needed (Tennessee v. Garner)."
  },
  {
    id: 39,
    topic: "detention-arrest",
    category: "Part 3 • Item #20 (Felony Gun Pointed at Head)",
    q: "If a subject points a gun at your head, what level of crime is that, and what actions are you authorized to take?",
    options: [
      "It is a felony (1st Degree Assault) — you may make an immediate warrantless arrest AND conduct a Search Incident to Arrest (SILA)",
      "It is a civil infraction — issue a citation and release them",
      "It is a misdemeanor requiring a 48-hour waiting period before arrest",
      "You may detain them, but you cannot search their person without a search warrant"
    ],
    correct: "It is a felony (1st Degree Assault) — you may make an immediate warrantless arrest AND conduct a Search Incident to Arrest (SILA)",
    explanation: "Midterm Item #20: Points a gun to your head = a felony; arrest and search incident to arrest."
  },
  {
    id: 40,
    topic: "detention-arrest",
    category: "Part 3 • Item #14 (RAS to Detain vs. Frisk)",
    q: "True or False: Having Reasonable Articulable Suspicion (RAS) that criminal activity is afoot automatically gives an officer the right to frisk every person they detain.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Midterm Item #14: False! If you have RAS that criminal activity is afoot, you may DETAIN them — NOT frisk them. A frisk requires separate RAS that the suspect is armed and dangerous."
  },
  {
    id: 41,
    topic: "detention-arrest",
    category: "Part 3 • Item #7 (Detention Restraint)",
    q: "True or False: An officer is permitted to place a detained subject in handcuffs and/or seat them on the curb during an investigative detention.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Midterm Item #7: True — you can place a subject in handcuffs and/or seated if they are detained."
  },
  {
    id: 42,
    topic: "detention-arrest",
    category: "Part 3 • Item #27 (Investigative Detention)",
    q: "An officer at 2:30 AM observes two individuals repeatedly peering into closed business windows and ducking into an alley when a car passes. The officer isn't sure whether they are planning a burglary, theft, or malicious destruction. Can the officer conduct an investigative detention?",
    options: [
      "Yes — for an investigative detention stop, you do NOT need to know the specific crime, only RAS that criminal activity is afoot",
      "No — the officer must wait until they know the exact statutory charge",
      "No — two people in public have a Reasonable Expectation of Privacy",
      "Yes — and the officer must immediately arrest them for stalking"
    ],
    correct: "Yes — for an investigative detention stop, you do NOT need to know the specific crime, only RAS that criminal activity is afoot",
    explanation: "Midterm Item #27: For an investigative detention stop, you do not need to know the specific crime."
  },
  {
    id: 43,
    topic: "detention-arrest",
    category: "Part 3 • Item #1 (Seizure vs. Arrest)",
    q: "True or False: Every arrest is a 4th Amendment seizure, and every 4th Amendment seizure is an arrest.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Midterm Items #1 & #2: An arrest IS a seizure under the 4th Amendment (#2), but NOT every seizure is an arrest (#1)."
  },
  {
    id: 44,
    topic: "detention-arrest",
    category: "Part 3 • Item #20 (Search Incident to Arrest)",
    q: "Which exception to the search warrant requirement allows an officer to immediately search a suspect after arresting them for pointing a gun at the officer's head?",
    options: [
      "Search Incident to Arrest (SILA)",
      "The Aguilar-Spinelli two-prong test",
      "The Discovery Process",
      "Domestic Abuse 48-hour rule"
    ],
    correct: "Search Incident to Arrest (SILA)",
    explanation: "Midterm Item #20: Points a gun to your head → a felony → arrest and Search Incident to Arrest."
  },
  {
    id: 45,
    topic: "detention-arrest",
    category: "Part 3 • Item #17 (Deadly Force)",
    q: "True or False: Reasonable Articulable Suspicion (RAS) alone is sufficient to use deadly force upon a fleeing subject.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Midterm Item #17: False — Probable Cause is needed to use deadly force upon a fleeing subject."
  },
  {
    id: 46,
    topic: "detention-arrest",
    category: "Part 3 • Item #15 (4 Elements of Arrest)",
    q: "If an officer intends to arrest a suspect, has real authority, and communicates 'You are under arrest,' what 4th element is required to complete the arrest?",
    options: [
      "Detention (actual physical restraint or voluntary submission of the subject)",
      "A search warrant",
      "A polygraph examination",
      "48 hours of observation"
    ],
    correct: "Detention (actual physical restraint or voluntary submission of the subject)",
    explanation: "Midterm Item #15: The 4 elements of arrest are Intention to arrest, Communication, Real or pretend authority, and Detention."
  },

  // =========================================================================
  // PART 4: EXIGENCY, DOMESTIC ABUSE, STALKING & "EVIDENCE OR" (14 QUESTIONS)
  // =========================================================================
  {
    id: 47,
    topic: "warrantless",
    category: "Part 4 • Item #4 (Home Exigency)",
    q: "What are the THREE (3) Exigent Circumstances listed on your C2 Midterm Study Guide that justify warrantless entry into a house?",
    options: [
      "1. Hot / fresh pursuit, 2. Protection of police or others, and 3. Destruction of evidence",
      "1. Routine neighborhood canvass, 2. Serving a parking ticket, and 3. Checking utility meters",
      "1. Basis of knowledge, 2. Veracity, and 3. Standing",
      "1. Intention to arrest, 2. Communication, and 3. Pretend authority"
    ],
    correct: "1. Hot / fresh pursuit, 2. Protection of police or others, and 3. Destruction of evidence",
    explanation: "Midterm Item #4: Exigency in entering a house — (1) hot/fresh pursuit, (2) protection of police or others, and (3) destruction of evidence."
  },
  {
    id: 48,
    topic: "warrantless",
    category: "Part 4 • Item #16 ('Evidence Or')",
    q: "Under Maryland's conditional warrantless arrest rules ('Evidence Or'), if the only exigency for locking up a suspect is that they might tamper with, dispose of, or destroy evidence, what happens if the suspect GIVES YOU THE EVIDENCE BACK?",
    options: [
      "You CANNOT lock them up if they give you the evidence back (because there is no longer evidence for them to destroy/dispose of)",
      "You must still lock them up on a mandatory felony hold",
      "You can enter their house without a warrant 48 hours later",
      "It automatically becomes a domestic abuse arrest"
    ],
    correct: "You CANNOT lock them up if they give you the evidence back (because there is no longer evidence for them to destroy/dispose of)",
    explanation: "Midterm Item #16: Can't lock them up if they give you the evidence back ('Evidence Or')."
  },
  {
    id: 49,
    topic: "warrantless",
    category: "Part 4 • Item #19 (Stalking Warrantless Arrest)",
    q: "What are the THREE (3) statutory criteria needed to make a warrantless arrest for Stalking in Maryland (CP § 2-205)?",
    options: [
      "1. Probable cause to believe the person engaged in stalking, 2. Credible evidence OTHER than the statements of the alleged victim, AND 3. Reason to believe the victim/another is in danger of imminent bodily harm OR the suspect will not be apprehended unless immediately arrested",
      "1. Report within 48 hours, 2. Suspect and victim are married, AND 3. Visible physical injury",
      "1. Two subjects talking in public, 2. Handcuffs applied, AND 3. Search warrant signed",
      "1. Severity of the crime, 2. Evading by flight, AND 3. Seizure of personal artifacts"
    ],
    correct: "1. Probable cause to believe the person engaged in stalking, 2. Credible evidence OTHER than the statements of the alleged victim, AND 3. Reason to believe the victim/another is in danger of imminent bodily harm OR the suspect will not be apprehended unless immediately arrested",
    explanation: "Midterm Item #19: The 3 criteria for a warrantless stalking arrest (MD CP § 2-205) are: (1) PC of stalking, (2) Credible evidence other than the victim's statements, and (3) Danger of imminent bodily harm OR suspect won't be apprehended unless immediately arrested."
  },
  {
    id: 50,
    topic: "warrantless",
    category: "Part 4 • Item #19 (Stalking Warrantless Arrest)",
    q: "Can an officer make a warrantless arrest for Stalking based SOLELY on the uncorroborated verbal statement of the alleged victim?",
    options: [
      "No — one of the 3 required criteria is that there must be credible evidence OTHER than the statements of the alleged stalking victim",
      "Yes — the victim's word alone is always enough for a warrantless stalking arrest",
      "Yes — as long as the victim is married to the suspect",
      "Only if the incident occurred more than 48 hours ago"
    ],
    correct: "No — one of the 3 required criteria is that there must be credible evidence OTHER than the statements of the alleged stalking victim",
    explanation: "Midterm Item #19: A warrantless arrest for stalking requires credible evidence OTHER than the statements of the alleged stalking victim (e.g., text messages, voicemails, videos, third-party witnesses, officer observations)."
  },
  {
    id: 51,
    topic: "warrantless",
    category: "Part 4 • Item #26 (Domestic Abuse Requirements)",
    q: "What are the requirements listed on your C2 Midterm Study Guide to make a warrantless arrest for Domestic Abuse?",
    options: [
      "Reported within 48 hours, parties are married OR living together (cohabiting), and there is visible physical injury (evidence of physical injury)",
      "Reported within 30 days, parties are casual acquaintances, and no physical injury is required",
      "Reported within 72 hours, involves parent-child discipline, and requires a search warrant",
      "Occurs in a public place between two strangers with no REP"
    ],
    correct: "Reported within 48 hours, parties are married OR living together (cohabiting), and there is visible physical injury (evidence of physical injury)",
    explanation: "Midterm Item #26: For domestic abuse: has to be within 48 hours, married or living together, and visible physical injury."
  },
  {
    id: 52,
    topic: "warrantless",
    category: "Part 4 • Item #26 (Domestic Abuse Time Limit)",
    q: "Within how many hours must an incident be reported for an officer to make a warrantless arrest under the Domestic Abuse statute (CP § 2-204)?",
    options: [
      "Within 48 hours",
      "Within 12 hours",
      "Within 24 hours",
      "Within 96 hours"
    ],
    correct: "Within 48 hours",
    explanation: "Midterm Item #26: For domestic abuse, the report must be within 48 hours."
  },
  {
    id: 53,
    topic: "warrantless",
    category: "Part 4 • Item #21 (Child Abuse vs. Domestic)",
    q: "True or False: Under the Maryland warrantless domestic abuse arrest statute, 'Child abuse is NOT a domestic.'",
    options: ["True", "False"],
    correct: "True",
    explanation: "Midterm Item #21: True — 'Child abuse is not a domestic.' The domestic abuse warrantless arrest statute covers spouses (married) or persons living together (cohabiting), not child abuse."
  },
  {
    id: 54,
    topic: "warrantless",
    category: "Part 4 • Item #21 & #26 (Domestic Relationships)",
    q: "Which relationships qualify for a warrantless Domestic Abuse arrest (#26), and which one is explicitly excluded (#21)?",
    options: [
      "Qualifies: Married or living together (cohabiting); Excluded: Child abuse is NOT a domestic",
      "Qualifies: Child abuse and neighbors; Excluded: Married spouses",
      "Qualifies: Co-workers and classmates; Excluded: People living together",
      "Qualifies: Any two people talking in a public place; Excluded: Married couples"
    ],
    correct: "Qualifies: Married or living together (cohabiting); Excluded: Child abuse is NOT a domestic",
    explanation: "Midterm Items #21 & #26: Domestic abuse warrantless arrest applies to married or living together (within 48 hours, visible physical injury); Child abuse is NOT a domestic."
  },
  {
    id: 55,
    topic: "warrantless",
    category: "Part 4 • Item #4 (Home Exigency)",
    q: "Officers have Probable Cause that a suspect inside a house is actively flushing bags of heroin down the toilet after hearing police knock and announce. Which exigency allows warrantless entry?",
    options: [
      "Destruction of evidence (one of the 3 exigencies alongside hot/fresh pursuit and protection of police or others)",
      "The Discovery Process",
      "Standing",
      "Florida v. Royer"
    ],
    correct: "Destruction of evidence (one of the 3 exigencies alongside hot/fresh pursuit and protection of police or others)",
    explanation: "Midterm Item #4: The 3 exigencies in entering a house are: hot/fresh pursuit, protection of police or others, and destruction of evidence."
  },
  {
    id: 56,
    topic: "warrantless",
    category: "Part 4 • Item #4 (Home Exigency)",
    q: "An armed robbery suspect flees directly from the crime scene with officers chasing right behind him and runs into a house. Which exigency allows officers to enter the house without a warrant?",
    options: [
      "Hot / fresh pursuit (and protection of police or others)",
      "Aguilar v. Texas",
      "The Exclusionary Rule",
      "The 48-hour domestic rule"
    ],
    correct: "Hot / fresh pursuit (and protection of police or others)",
    explanation: "Midterm Item #4: Exigency in entering a house — hot/fresh pursuit, protection of police or others, destruction of evidence."
  },
  {
    id: 57,
    topic: "warrantless",
    category: "Part 4 • Item #26 (Domestic Abuse Scenario)",
    q: "An officer responds to a home where a wife reports her husband struck her 10 hours ago. They live together, and the officer observes a bruised, swollen eye (visible physical injury) and believes the husband will cause further injury unless arrested. Can the officer make a warrantless arrest?",
    options: [
      "Yes — it is within 48 hours, they are married/living together, there is visible physical injury, and an exigency exists",
      "No — domestic abuse arrests are only allowed if reported within 2 hours",
      "No — married couples cannot be arrested without a warrant",
      "Only if the wife signs a Form #9"
    ],
    correct: "Yes — it is within 48 hours, they are married/living together, there is visible physical injury, and an exigency exists",
    explanation: "Midterm Item #26: Domestic abuse warrantless arrest requires: within 48 hours, married or living together, and visible physical injury (plus statutory exigency)."
  },
  {
    id: 58,
    topic: "warrantless",
    category: "Part 4 • Item #26 (Domestic Abuse Scenario)",
    q: "What if a spouse reports a domestic battery 4 days (96 hours) after it happened, or there is NO visible physical injury?",
    options: [
      "You CANNOT make a warrantless arrest under the Domestic Abuse statute (because it must be within 48 hours and have visible physical injury)",
      "You can still make a warrantless Domestic Abuse arrest up to 30 days later with no injury",
      "You can arrest them under Terry v. Ohio",
      "You can enter their house under Aguilar v. Texas"
    ],
    correct: "You CANNOT make a warrantless arrest under the Domestic Abuse statute (because it must be within 48 hours and have visible physical injury)",
    explanation: "Midterm Item #26: For domestic abuse warrantless arrest, it HAS to be within 48 hours, married/living together, and visible physical injury."
  },
  {
    id: 59,
    topic: "warrantless",
    category: "Part 4 • Item #16 ('Evidence Or')",
    q: "True or False: Under the 'Evidence Or' rule (#16), if a misdemeanor suspect hands the stolen item/evidence back to you (and no other arrest exigency exists), you cannot lock them up without a warrant.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Midterm Item #16: True — Can't lock them up if they give you the evidence back ('Evidence Or')."
  },
  {
    id: 60,
    topic: "warrantless",
    category: "Part 4 • Item #19 (Stalking Criteria)",
    q: "In addition to Probable Cause of stalking and credible evidence other than the victim's statements, what is the 3rd criterion required for a warrantless Stalking arrest?",
    options: [
      "Reason to believe the victim (or another person) is in danger of imminent bodily harm OR that the stalker will not be apprehended unless immediately arrested",
      "The stalker and the victim must be legally married",
      "The stalking must have occurred inside a police station",
      "The officer must pace the stalker's vehicle for 3/10 of a mile"
    ],
    correct: "Reason to believe the victim (or another person) is in danger of imminent bodily harm OR that the stalker will not be apprehended unless immediately arrested",
    explanation: "Midterm Item #19: Criterion 3 of a warrantless stalking arrest (CP § 2-205) is reason to believe the victim/another is in danger of imminent bodily harm OR that the suspect will not be apprehended unless immediately arrested."
  }
];

// ===========================================================================
// 27 FLASHCARDS MATCHING THE EXACT 27 ITEMS ON C2 MIDTERM STUDY GUIDE
// ===========================================================================
const c2MidtermFlashcards = [
  {
    badge: "Midterm Item #1",
    front: "Is every seizure an arrest?",
    back: "NO!\nEvery arrest is a 4th Amendment seizure, but NOT every seizure is an arrest (for example, a Terry investigative detention is a temporary seizure, not an arrest)."
  },
  {
    badge: "Midterm Item #2",
    front: "What is an arrest under the U.S. Constitution?",
    back: "A SEIZURE under the 4th Amendment (requiring Probable Cause)."
  },
  {
    badge: "Midterm Item #3",
    front: "Two subjects talking in a public place — do they have a Reasonable Expectation of Privacy (REP)?",
    back: "NO REP (No Reasonable Expectation of Privacy)!\nWhat a person knowingly exposes to the public is not protected by the 4th Amendment."
  },
  {
    badge: "Midterm Item #4",
    front: "What are the 3 Exigencies in entering a house without a warrant?",
    back: "1. Hot / fresh pursuit\n2. Protection of police or others\n3. Destruction of evidence"
  },
  {
    badge: "Midterm Item #5",
    front: "What is the definition of Probable Cause?",
    back: "Facts and circumstances within the officer's knowledge (and reasonably trustworthy information) sufficient to warrant a person of reasonable caution to believe that:\n• Arrest: An offense has been or is being committed\n• Search: Evidence or contraband of a crime will be found in a particular place"
  },
  {
    badge: "Midterm Item #6",
    front: "What level of proof does a Search Warrant need?",
    back: "PROBABLE CAUSE"
  },
  {
    badge: "Midterm Item #7",
    front: "Can you place a subject in handcuffs and/or seated if they are detained?",
    back: "YES — you CAN place a subject in handcuffs and/or seated if they are detained (for officer safety or to prevent flight) without automatically turning the detention into an arrest."
  },
  {
    badge: "Midterm Item #8",
    front: "What are the principles of Katz v. United States?",
    back: "1. Reasonable Expectation of Privacy (REP) was established\n2. Need a search warrant to go into somewhere someone has REP\n3. Shifted 4th Amendment protection from PLACE to PEOPLE"
  },
  {
    badge: "Midterm Item #9",
    front: "What is the legal term for having a 'personal stake in something' to challenge a search or seizure?",
    back: "STANDING\n(Requires a personal Reasonable Expectation of Privacy in the place searched or item seized.)"
  },
  {
    badge: "Midterm Item #10",
    front: "What rule applies when illegally obtained evidence gets thrown out of court?",
    back: "THE EXCLUSIONARY RULE"
  },
  {
    badge: "Midterm Item #11",
    front: "What test did Illinois v. Gates establish (replacing Aguilar's rigid two-prong test)?",
    back: "TOTALITY OF THE CIRCUMSTANCES"
  },
  {
    badge: "Midterm Item #12",
    front: "Terry v. Ohio — Are they under arrest as soon as you approach them to detain them?",
    back: "NO — they are NOT under arrest as soon as you approach them to detain them."
  },
  {
    badge: "Midterm Item #13",
    front: "What pre-trial process 'can handle all documents relevant to your case'?",
    back: "THE DISCOVERY PROCESS"
  },
  {
    badge: "Midterm Item #14",
    front: "If you have RAS (Reasonable Articulable Suspicion) that criminal activity is afoot, what can you do?",
    back: "DETAIN them — NOT frisk!\n(To frisk, you need separate RAS that the subject is ARMED AND DANGEROUS.)"
  },
  {
    badge: "Midterm Item #15",
    front: "What are the 4 Elements of an Arrest?",
    back: "1. Intention to arrest\n2. Communication\n3. Real or pretend authority\n4. Detention"
  },
  {
    badge: "Midterm Item #16",
    front: "What is the 'Evidence Or' rule when a suspect gives you the evidence back?",
    back: "Can't lock them up if they give you the evidence back ('Evidence Or').\nIf the only exigency for a warrantless misdemeanor arrest is preventing destruction/disposal of evidence, and they give the evidence back, that exigency no longer exists."
  },
  {
    badge: "Midterm Item #17",
    front: "What level of proof is needed to use Deadly Force upon a fleeing subject?",
    back: "PROBABLE CAUSE needed\n(Probable cause to believe the suspect poses a significant threat of death or serious physical injury to the officer or others — Tennessee v. Garner.)"
  },
  {
    badge: "Midterm Item #18",
    front: "Can one thing make Probable Cause, or do multiple things?",
    back: "One thing can't make probable cause, but MULTIPLE things can (under the Totality of the Circumstances)."
  },
  {
    badge: "Midterm Item #19",
    front: "What are the 3 criteria of Stalking needed to make a warrantless arrest (MD CP § 2-205)?",
    back: "1. Probable cause to believe the person has engaged in stalking\n2. Credible evidence OTHER than the statements of the alleged stalking victim\n3. Reason to believe the victim/another is in danger of imminent bodily harm OR the suspect will not be apprehended unless immediately arrested"
  },
  {
    badge: "Midterm Item #20",
    front: "Someone points a gun at your head — what crime classification is it and what do you do?",
    back: "A FELONY (1st Degree Assault) → ARREST and SEARCH INCIDENT TO ARREST (SILA)."
  },
  {
    badge: "Midterm Item #21",
    front: "Is child abuse considered a 'domestic' under the domestic abuse warrantless arrest statute?",
    back: "NO — Child abuse is NOT a domestic!"
  },
  {
    badge: "Midterm Item #22",
    front: "Graham v. Connor — What are the 3 factors for evaluating Excessive Force?",
    back: "1. Severity of the crime\n2. Evading (actively resisting or attempting to evade by flight)\n3. Danger to police or others"
  },
  {
    badge: "Midterm Item #23",
    front: "Is Probable Cause a standardized system?",
    back: "NO — Probable cause is NOT a standardized system (it is a fluid, common-sense concept)."
  },
  {
    badge: "Midterm Item #24",
    front: "What happened in Florida v. Royer?",
    back: "Held with NO sense he was free to go and officers SEIZED his personal artifacts (airline ticket, driver's license, luggage) — turning an investigative stop into an illegal arrest."
  },
  {
    badge: "Midterm Item #25",
    front: "Aguilar v. Texas — What are the two prongs?",
    back: "1. Basis of knowledge\n2. Veracity (truthfulness/reliability)"
  },
  {
    badge: "Midterm Item #26",
    front: "What are the requirements for a warrantless arrest for Domestic Abuse?",
    back: "1. Has to be within 48 HOURS\n2. MARRIED or LIVING TOGETHER (cohabiting)\n3. VISIBLE PHYSICAL INJURY\n(Plus statutory exigency)"
  },
  {
    badge: "Midterm Item #27",
    front: "For an investigative detention (Terry) stop, do you need to know the specific crime?",
    back: "NO — for an investigative detention stop, you do NOT need to know the specific crime (only RAS that criminal activity is afoot)."
  }
];

let activeQuestions = [];
let currentQIndex = 0;
let score = 0;
let quizHistory = [];

// Flashcard state
let fcDeck = [...c2MidtermFlashcards];
let fcIndex = 0;
let fcFlipped = false;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function switchMode(mode) {
  const examContainer = document.getElementById('exam-mode-container');
  const fcContainer = document.getElementById('flashcards-mode-container');
  const examBtn = document.getElementById('mode-exam-btn');
  const fcBtn = document.getElementById('mode-flashcards-btn');

  if (mode === 'flashcards') {
    examContainer.classList.add('hidden');
    fcContainer.classList.remove('hidden');
    fcBtn.className = "px-5 py-2.5 bg-rose-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-rose-900/30";
    examBtn.className = "px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl font-bold text-sm transition-colors";
    renderFlashcard();
  } else {
    fcContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    examBtn.className = "px-5 py-2.5 bg-rose-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-rose-900/30";
    fcBtn.className = "px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl font-bold text-sm transition-colors";
  }
}

function showStartScreen() {
  document.getElementById('start-screen').classList.remove('hidden');
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.add('hidden');
}

function startQuiz() {
  const selectedTopic = document.getElementById('topic-select').value;
  const selectedLength = document.getElementById('length-select').value;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  document.getElementById('results-screen').classList.add('hidden');

  let pool = c2MidtermQuestions;
  if (selectedTopic !== 'all') {
    pool = c2MidtermQuestions.filter(item => item.topic === selectedTopic);
  }

  const shuffled = shuffleArray([...pool]);
  if (selectedLength === 'all') {
    activeQuestions = shuffled;
  } else {
    const count = parseInt(selectedLength, 10) || 10;
    activeQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
  }

  currentQIndex = 0;
  score = 0;
  quizHistory = [];

  loadQuestion();
}

function loadQuestion() {
  const q = activeQuestions[currentQIndex];
  document.getElementById('question-counter').textContent = `Question ${currentQIndex + 1} of ${activeQuestions.length}`;
  document.getElementById('question-category').textContent = q.category;
  document.getElementById('question-text').textContent = q.q;

  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.classList.add('hidden');
  feedbackBox.innerHTML = '';

  const nextBtn = document.getElementById('next-question-btn');
  if (nextBtn) {
    nextBtn.classList.add('hidden');
  }

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const isTrueFalse = q.options.length === 2 && q.options.includes("True") && q.options.includes("False");
  const displayOptions = isTrueFalse ? ["True", "False"] : shuffleArray([...q.options]);

  displayOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 bg-slate-700/50 hover:bg-rose-600/80 rounded-xl border border-slate-600 font-medium transition-colors text-sm sm:text-base";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q, btn);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected, qObj, btnNode) {
  const buttons = document.getElementById('options-container').querySelectorAll('button');
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === qObj.correct) {
      b.classList.remove('bg-slate-700/50', 'hover:bg-rose-600/80');
      b.classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');
    } else if (b.textContent === selected && selected !== qObj.correct) {
      b.classList.remove('bg-slate-700/50', 'hover:bg-rose-600/80');
      b.classList.add('bg-rose-600', 'border-rose-400', 'text-white');
    }
  });

  const isCorrect = selected === qObj.correct;
  if (isCorrect) {
    score++;
  }

  quizHistory.push({
    qNum: currentQIndex + 1,
    question: qObj,
    selected: selected,
    isCorrect: isCorrect
  });

  const feedbackBox = document.getElementById('feedback-box');
  if (qObj.explanation) {
    feedbackBox.innerHTML = `<span class="font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}">${isCorrect ? '✓ Correct:' : '✗ Incorrect:'}</span> ${escapeHtml(qObj.explanation)}`;
    feedbackBox.classList.remove('hidden');
  }

  const nextBtn = document.getElementById('next-question-btn');
  const nextBtnText = document.getElementById('next-question-btn-text');
  if (nextBtn && nextBtnText) {
    const isLastQuestion = currentQIndex + 1 >= activeQuestions.length;
    nextBtnText.textContent = isLastQuestion ? 'Finish & View Score' : 'Next Question';
    nextBtn.classList.remove('hidden');
  }
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex < activeQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  const total = activeQuestions.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById('final-score').textContent = `${score} / ${total}`;

  const messageEl = document.getElementById('result-message');
  if (pct === 100) {
    messageEl.textContent = "Outstanding! 100% Mastery of the Unit C2 Midterm!";
    messageEl.className = "text-emerald-400 font-bold mb-8";
  } else if (pct >= 80) {
    messageEl.textContent = `Great job (${pct}%)! You're well prepared for the C2 Midterm.`;
    messageEl.className = "text-rose-400 font-bold mb-8";
  } else if (pct >= 70) {
    messageEl.textContent = `Passing (${pct}%), but review your missed questions below to lock in a higher score.`;
    messageEl.className = "text-amber-400 font-bold mb-8";
  } else {
    messageEl.textContent = `Scored ${pct}% — click 'View Test & Answers' below to review the missed items!`;
    messageEl.className = "text-rose-400 font-bold mb-8";
  }

  const reviewContainer = document.getElementById('test-review-container');
  const toggleBtnText = document.getElementById('toggle-review-btn-text');
  if (reviewContainer) {
    reviewContainer.classList.add('hidden');
  }
  if (toggleBtnText) {
    toggleBtnText.textContent = 'View Test & Answers';
  }

  const missedCount = quizHistory.filter(item => !item.isCorrect).length;
  const filterAllBtn = document.getElementById('filter-all-btn');
  const filterMissedBtn = document.getElementById('filter-missed-btn');
  if (filterAllBtn) {
    filterAllBtn.textContent = `All (${quizHistory.length})`;
  }
  if (filterMissedBtn) {
    filterMissedBtn.textContent = `Missed Only (${missedCount})`;
  }

  renderTestReview('all');
}

function toggleTestReview() {
  const reviewContainer = document.getElementById('test-review-container');
  const toggleBtnText = document.getElementById('toggle-review-btn-text');
  if (!reviewContainer) return;

  const isHidden = reviewContainer.classList.contains('hidden');
  if (isHidden) {
    reviewContainer.classList.remove('hidden');
    if (toggleBtnText) toggleBtnText.textContent = 'Hide Test Review';
    reviewContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    reviewContainer.classList.add('hidden');
    if (toggleBtnText) toggleBtnText.textContent = 'View Test & Answers';
  }
}

function renderTestReview(filterMode) {
  const listEl = document.getElementById('test-review-list');
  const filterAllBtn = document.getElementById('filter-all-btn');
  const filterMissedBtn = document.getElementById('filter-missed-btn');
  if (!listEl) return;

  if (filterAllBtn && filterMissedBtn) {
    if (filterMode === 'missed') {
      filterMissedBtn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-rose-600 text-white transition-colors";
      filterAllBtn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600 transition-colors";
    } else {
      filterAllBtn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-rose-600 text-white transition-colors";
      filterMissedBtn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600 transition-colors";
    }
  }

  const items = filterMode === 'missed'
    ? quizHistory.filter(item => !item.isCorrect)
    : quizHistory;

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-300 font-medium">
        🎉 Perfect score! You didn't miss any questions in this round.
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map(item => {
    const q = item.question;
    const statusBadge = item.isCorrect
      ? `<span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ Correct</span>`
      : `<span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">✗ Incorrect</span>`;

    const borderClass = item.isCorrect ? 'border-emerald-500/30' : 'border-rose-500/40';

    const userAnswerBlock = item.isCorrect
      ? `<div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm">
           <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Your Answer (Correct):</span>
           <span class="text-white font-medium">${escapeHtml(item.selected)}</span>
         </div>`
      : `<div class="space-y-2">
           <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-sm">
             <span class="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-0.5">Your Answer:</span>
             <span class="text-rose-200 font-medium">${escapeHtml(item.selected)}</span>
           </div>
           <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm">
             <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Correct Answer:</span>
             <span class="text-white font-medium">${escapeHtml(q.correct)}</span>
           </div>
         </div>`;

    return `
      <div class="p-5 rounded-xl bg-slate-800/80 border ${borderClass} space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">Question ${item.qNum}</span>
            <span class="text-xs font-medium text-slate-400">${escapeHtml(q.category)}</span>
          </div>
          ${statusBadge}
        </div>
        <p class="text-white font-bold text-base leading-snug">${escapeHtml(q.q)}</p>
        ${userAnswerBlock}
        ${q.explanation ? `
          <div class="p-3 rounded-lg bg-slate-900/70 border border-slate-700 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span class="font-bold text-rose-400">Explanation:</span> ${escapeHtml(q.explanation)}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// ===========================================================================
// FLASHCARD FUNCTIONS
// ===========================================================================
function renderFlashcard() {
  const card = fcDeck[fcIndex];
  document.getElementById('fc-counter').textContent = `Card ${fcIndex + 1} of ${fcDeck.length}`;
  document.getElementById('fc-badge').textContent = card.badge;

  const sideLabel = document.getElementById('fc-side-label');
  const contentEl = document.getElementById('fc-content');
  const cardBox = document.getElementById('fc-card');

  if (!fcFlipped) {
    sideLabel.textContent = "C2 MIDTERM PROMPT";
    sideLabel.className = "text-rose-400 font-bold text-xs uppercase tracking-wider";
    contentEl.innerHTML = escapeHtml(card.front).replace(/\n/g, '<br>');
    contentEl.className = "my-6 text-center text-lg sm:text-xl font-bold text-white leading-relaxed";
    cardBox.className = "cursor-pointer min-h-[280px] rounded-2xl p-6 sm:p-8 bg-slate-800/90 border-2 border-slate-600 hover:border-rose-500/60 transition-all flex flex-col justify-between select-none";
  } else {
    sideLabel.textContent = "ANSWER KEY";
    sideLabel.className = "text-emerald-400 font-bold text-xs uppercase tracking-wider";
    contentEl.innerHTML = escapeHtml(card.back).replace(/\n/g, '<br>');
    contentEl.className = "my-6 text-left text-base sm:text-lg font-semibold text-emerald-100 leading-relaxed whitespace-pre-line";
    cardBox.className = "cursor-pointer min-h-[280px] rounded-2xl p-6 sm:p-8 bg-emerald-950/40 border-2 border-emerald-500/60 transition-all flex flex-col justify-between select-none";
  }
}

function flipFlashcard() {
  fcFlipped = !fcFlipped;
  renderFlashcard();
}

function nextFlashcard() {
  fcFlipped = false;
  fcIndex = (fcIndex + 1) % fcDeck.length;
  renderFlashcard();
}

function prevFlashcard() {
  fcFlipped = false;
  fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
  renderFlashcard();
}

function shuffleFlashcards() {
  fcDeck = shuffleArray([...c2MidtermFlashcards]);
  fcIndex = 0;
  fcFlipped = false;
  renderFlashcard();
}
