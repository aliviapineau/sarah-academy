// Traffic Law Study Guide #1 KEY — 60-Question Exam Bank & 32 Flashcards

const trafficLawQuestions = [
  // =========================================================================
  // PART 1: TRANSPORTATION ARTICLE, PAYOUT BOOK & TITLES 11–27 (19 QUESTIONS)
  // =========================================================================
  {
    id: 1,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA & Payout Book",
    q: "Which publication contains the Maryland Traffic Laws broken down by Articles?",
    options: [
      "The Transportation Article (TA)",
      "The DC-CR-090 District Court Fine Book",
      "The Maryland Criminal Law Article (CR)",
      "The COMAR Administrative Manual"
    ],
    correct: "The Transportation Article (TA)",
    explanation: "The Transportation Article contains the Maryland Traffic Laws broken down by Articles."
  },
  {
    id: 2,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA & Payout Book",
    q: "What is the DC-CR-090, and what information does it contain?",
    options: [
      "The Maryland District Court fine book (payout book) containing the fines and points assessed for traffic law violations",
      "The Maryland Vehicle Equipment Inspection Manual for Safety Equipment Repair Orders",
      "The BCoPD " + '"M"' + " Stop reporting form",
      "The MVA Driver Re-examination Request form"
    ],
    correct: "The Maryland District Court fine book (payout book) containing the fines and points assessed for traffic law violations",
    explanation: "The DC-CR-090 is the Maryland District Court fine book (payout book) and contains the fines and points assessed for traffic law violations."
  },
  {
    id: 3,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Breakdown",
    q: "In what hierarchical order is a law in the Maryland Transportation Article broken down (for example, TA 21-904 b 1)?",
    options: [
      "Title (21), Subtitle (9), Section (04), Subsection (b), and Paragraph (1)",
      "Article (21), Chapter (9), Clause (04), Paragraph (b), and Sub-clause (1)",
      "Section (21), Title (9), Subtitle (04), Paragraph (b), and Subsection (1)",
      "Volume (21), Part (9), Title (04), Section (b), and Rule (1)"
    ],
    correct: "Title (21), Subtitle (9), Section (04), Subsection (b), and Paragraph (1)",
    explanation: "The Transportation Article is broken down into: Title (21), Subtitle (9), Section (04), Subsection (b), and Paragraph (1) — e.g., TA 21-904 b 1."
  },
  {
    id: 4,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Breakdown",
    q: "In the citation 'TA 21-904 b 1', what does the '9' represent, and what does the '04' represent?",
    options: [
      "'9' is the Subtitle and '04' is the Section",
      "'9' is the Title and '04' is the Subtitle",
      "'9' is the Section and '04' is the Subsection",
      "'9' is the Paragraph and '04' is the Clause"
    ],
    correct: "'9' is the Subtitle and '04' is the Section",
    explanation: "In TA 21-904 b 1: Title = 21, Subtitle = 9, Section = 04, Subsection = (b), Paragraph = (1). Note: Not all laws have subsections and paragraphs."
  },
  {
    id: 5,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • Case Law (HW #2)",
    q: "What is 'case law'? (Homework #2)",
    options: [
      "Law that is based on judicial decisions rather than law based on constitutions, statutes, or regulations",
      "Law enacted directly by the Maryland General Assembly in the Transportation Article",
      "Administrative rules written by the Motor Vehicle Administration (MVA)",
      "Municipal parking ordinances enforced only on private property"
    ],
    correct: "Law that is based on judicial decisions rather than law based on constitutions, statutes, or regulations",
    explanation: "Case law is law that is based on judicial decisions rather than law based on constitutions, statutes, or regulations (Homework #2)."
  },
  {
    id: 6,
    topic: "ta-titles",
    starred: true,
    category: "Part 1 • Exam Key #9",
    q: "Most of Maryland's Traffic laws are classified as what level of offense? (Exam Key #9)",
    options: [
      "Misdemeanors",
      "Felonies",
      "Civil municipal infractions",
      "Administrative warnings"
    ],
    correct: "Misdemeanors",
    explanation: "Exam Key #9: Most of Maryland's Traffic laws are misdemeanors."
  },
  {
    id: 7,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Vehicle Laws — Definitions; General Provisions'?",
    options: ["Title 11", "Title 13", "Title 16", "Title 21"],
    correct: "Title 11",
    explanation: "Title 11 is Vehicle Laws — Definitions; General Provisions."
  },
  {
    id: 8,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Certificates of Title and Registration of Vehicles'?",
    options: ["Title 13", "Title 14", "Title 17", "Title 18"],
    correct: "Title 13",
    explanation: "Title 13 is Vehicle Laws — Certificates of Title and Registration of Vehicles."
  },
  {
    id: 9,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Anti-theft Laws'?",
    options: ["Title 14", "Title 13", "Title 20", "Title 22"],
    correct: "Title 14",
    explanation: "Title 14 is Vehicle Laws — Anti-theft Laws."
  },
  {
    id: 10,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Drivers' Licenses'?",
    options: ["Title 16", "Title 17", "Title 21", "Title 26"],
    correct: "Title 16",
    explanation: "Title 16 is Vehicle Laws — Drivers' Licenses."
  },
  {
    id: 11,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Required Security' (vehicle insurance requirements)?",
    options: ["Title 17", "Title 16", "Title 18", "Title 25"],
    correct: "Title 17",
    explanation: "Title 17 is Vehicle Laws — Required Security."
  },
  {
    id: 12,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'For-Rent Vehicles'?",
    options: ["Title 18", "Title 14", "Title 17", "Title 20"],
    correct: "Title 18",
    explanation: "Title 18 is Vehicle Laws — For-Rent Vehicles."
  },
  {
    id: 13,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Accidents & Accident Reporting'?",
    options: ["Title 20", "Title 21", "Title 22", "Title 26"],
    correct: "Title 20",
    explanation: "Title 20 is Vehicle Laws — Accidents & Accident Reporting."
  },
  {
    id: 14,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Rules of the Road' (moving violations, speed limits, right-of-way, DUI)?",
    options: ["Title 21", "Title 20", "Title 22", "Title 27"],
    correct: "Title 21",
    explanation: "Title 21 is Vehicle Laws — Rules of the Road."
  },
  {
    id: 15,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Equipment of Vehicles' (lights, brakes, windshields, exhaust, tires)?",
    options: ["Title 22", "Title 21", "Title 13", "Title 25"],
    correct: "Title 22",
    explanation: "Title 22 is Vehicle Laws — Equipment of Vehicles."
  },
  {
    id: 16,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Powers of State and Local Authorities'?",
    options: ["Title 25", "Title 26", "Title 27", "Title 11"],
    correct: "Title 25",
    explanation: "Title 25 is Vehicle Laws — Powers of State and Local Authorities."
  },
  {
    id: 17,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Parties and Procedure on Citation, Arrest, Trial, and Appeal'?",
    options: ["Title 26", "Title 25", "Title 27", "Title 21"],
    correct: "Title 26",
    explanation: "Title 26 is Vehicle Laws — Parties and Procedure on Citation, Arrest, Trial, and Appeal."
  },
  {
    id: 18,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which Transportation Article Title covers 'Penalties; Disposition of Fines and Forfeitures'?",
    options: ["Title 27", "Title 26", "Title 25", "Title 20"],
    correct: "Title 27",
    explanation: "Title 27 is Vehicle Laws — Penalties; Disposition of Fines and Forfeitures."
  },
  {
    id: 19,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Titles (HW #1)",
    q: "Which of the following Title numbers is NOT one of the 12 Transportation Article Titles listed as most applicable to law enforcement?",
    options: [
      "Title 15 (and Titles 12, 19, 23, 24)",
      "Title 14 (Anti-theft Laws)",
      "Title 18 (For-Rent Vehicles)",
      "Title 25 (Powers of State and Local Authorities)"
    ],
    correct: "Title 15 (and Titles 12, 19, 23, 24)",
    explanation: "The 12 applicable Titles are 11, 13, 14, 16, 17, 18, 20, 21, 22, 25, 26, and 27. Titles 12, 15, 19, 23, and 24 are omitted."
  },

  // =========================================================================
  // PART 2: WARRANTLESS TRAFFIC ARRESTS (11 QUESTIONS)
  // =========================================================================
  {
    id: 20,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "When a non-resident commits a traffic violation in Maryland, under what specific condition can an officer effect a warrantless arrest?",
    options: [
      "When the non-resident commits a violation AND it resulted in a crash",
      "Whenever any non-resident exceeds the speed limit by 5 mph",
      "Whenever a non-resident drives a rental vehicle from another state",
      "Never; non-residents are immune from physical traffic arrest"
    ],
    correct: "When the non-resident commits a violation AND it resulted in a crash",
    explanation: "One of the 16 warrantless traffic arrest circumstances is when a non-resident commits a violation and it resulted in a crash."
  },
  {
    id: 21,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "If a motorist is stopped for a minor traffic violation and refuses to sign the traffic citation, what enforcement action can the officer legally take?",
    options: [
      "Effect a warrantless arrest for refusal to sign a citation",
      "Confiscate the vehicle's license plates and let the driver go",
      "Issue a Safety Equipment Repair Order instead",
      "Nothing; signing a paper citation is completely optional"
    ],
    correct: "Effect a warrantless arrest for refusal to sign a citation",
    explanation: "'Refusal to sign a citation' and 'disregard a traffic citation' are both statutory circumstances permitting a warrantless traffic arrest."
  },
  {
    id: 22,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Which of the following license or identity situations authorizes an officer to make a warrantless arrest during a traffic stop?",
    options: [
      "Any of these: Driving w/o a license, Driving w/ a suspended or revoked license, OR failing to furnish satisfactory evidence of identity",
      "Only driving with a license that expired less than 24 hours ago",
      "Forgetting to wear corrective eyeglasses while driving",
      "Having an address change that has not yet been updated on the license card"
    ],
    correct: "Any of these: Driving w/o a license, Driving w/ a suspended or revoked license, OR failing to furnish satisfactory evidence of identity",
    explanation: "Driving w/o a license, driving w/ suspended or revoked license, and not furnishing satisfactory evidence of identity all authorize a warrantless arrest."
  },
  {
    id: 23,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Which two commercial / truck-related violations authorize an officer to make a warrantless traffic arrest?",
    options: [
      "Violations relating to vehicles transporting hazardous materials, AND refusing a Weighing Station or refusing to remove excess weight",
      "Parking a delivery van in a loading zone, AND driving with a dirty windshield",
      "Having a commercial radio in a passenger car, AND driving in the right lane",
      "Operating a rental box truck on a Sunday, AND failing to carry flares"
    ],
    correct: "Violations relating to vehicles transporting hazardous materials, AND refusing a Weighing Station or refusing to remove excess weight",
    explanation: "The first two warrantless arrest circumstances on the study guide are: (1) Relating to vehicles transporting hazardous materials, and (2) Weighing Station or to remove excess weight from it."
  },
  {
    id: 24,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Which Hit & Run and crash-related offenses authorize a warrantless traffic arrest?",
    options: [
      "Hit & Run (injury/death failure to render reasonable assistance), Hit & Run (property damage failure to notify), AND a violation causing a crash that resulted in bodily injury or death",
      "Only fatal crashes involving three or more commercial vehicles",
      "Only property-damage crashes exceeding $50,000 in damage",
      "Minor fender-benders where both drivers exchange information properly"
    ],
    correct: "Hit & Run (injury/death failure to render reasonable assistance), Hit & Run (property damage failure to notify), AND a violation causing a crash that resulted in bodily injury or death",
    explanation: "Warrantless arrests are authorized for: Hit & Run injury/death (failure to render reasonable assistance), Hit & Run property damage (failure to notify), and a crash that caused bodily injury or death."
  },
  {
    id: 25,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Which of the following MVA document offenses authorizes a warrantless traffic arrest?",
    options: [
      "Falsification of a title, registration card/plate, or any official MVA documents",
      "Having a crinkled paper registration card in the glovebox",
      "Losing a front license plate bolt in a car wash",
      "Applying for a duplicate title at an MVA branch"
    ],
    correct: "Falsification of a title, registration card/plate, or any official MVA documents",
    explanation: "Falsification of a title, registration card/plate, or any official MVA documents is one of the 16 warrantless arrest circumstances."
  },
  {
    id: 26,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Besides DUI Alcohol, DUI Drugs, Fleeing & Eluding, which high-risk driving behavior specifically authorizes a warrantless traffic arrest?",
    options: [
      "Race or speed contest",
      "Exceeding the posted speed limit by 10 mph on an interstate",
      "Failing to use a turn signal when changing lanes",
      "Rolling through a right turn on red with no crash"
    ],
    correct: "Race or speed contest",
    explanation: "Engaging in a 'Race or speed contest' is one of the 16 statutory warrantless traffic arrest circumstances."
  },
  {
    id: 27,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Can an officer make a warrantless arrest if a driver 'disregards a traffic citation'?",
    options: [
      "Yes — disregarding a traffic citation is one of the 16 warrantless arrest circumstances",
      "No — only a District Court judge can issue a civil summons after 90 days",
      "Only if the driver is a commercial hazmat driver",
      "Only if the citation was for a parking violation"
    ],
    correct: "Yes — disregarding a traffic citation is one of the 16 warrantless arrest circumstances",
    explanation: "Both 'disregard a traffic citation' and 'refusal to sign a citation' are on the warrantless arrest list."
  },
  {
    id: 28,
    topic: "warrantless",
    starred: false,
    category: "Part 2 • Warrantless Arrests",
    q: "Which of the following is NOT one of the 16 circumstances for a warrantless traffic arrest (assuming the driver is a MD resident, provides valid ID, has a valid license, no crash occurred, and signs the citation)?",
    options: [
      "Speeding 15 mph over the limit on a highway",
      "Fleeing and eluding",
      "DUI Alcohol or DUI Drugs",
      "Driving without a license"
    ],
    correct: "Speeding 15 mph over the limit on a highway",
    explanation: "Routine speeding (not a race/speed contest, no bodily injury crash, valid license/ID, and driver signs the citation) is handled by citation/warning, not a warrantless arrest."
  },

  // =========================================================================
  // PART 3: ENFORCEMENT PRINCIPLES, OPTIONS, PACING & COMPLAINTS (17 QUESTIONS)
  // =========================================================================
  {
    id: 29,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #11 (HW #1)",
    q: "When listing the 5 reasons 'Why We Enforce Traffic Laws', which reason is bolded on the Study Guide KEY as the 1st Priority? (Exam Key #11 / Homework #1)",
    options: [
      "Public Safety (1st Priority)",
      "Generating revenue for the District Court",
      "Testing new patrol vehicle equipment",
      "Meeting monthly precinct citation quotas"
    ],
    correct: "Public Safety (1st Priority)",
    explanation: "Exam Key #11: Why Enforce Traffic Laws — 1. PUBLIC SAFETY (1st Priority), 2. Change behavior/Deter aggressive driving, 3. Reduce crashes, 4. Educate motorists, 5. Deter and reduce criminal activity."
  },
  {
    id: 30,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #11 (HW #1)",
    q: "In addition to Public Safety (1st Priority), what are the other 4 reasons to enforce traffic laws? (Exam Key #11)",
    options: [
      "Change behavior/Deter aggressive driving, Reduce crashes, Educate motorists, and Deter & reduce criminal activity",
      "Impound vehicles, Suspend licenses, Collect fines, and Conduct roadblocks",
      "Write parking tickets, Issue SEROs, Testify in court, and Calibrate speedometers",
      "Enforce civil contracts, Settle insurance claims, Escort funerals, and Direct school traffic"
    ],
    correct: "Change behavior/Deter aggressive driving, Reduce crashes, Educate motorists, and Deter & reduce criminal activity",
    explanation: "The 5 reasons to enforce traffic laws (#11) are: Public Safety (1st Priority), Change behavior/Deter aggressive driving, Reduce crashes, Educate motorists, and Deter and reduce criminal activity."
  },
  {
    id: 31,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #8",
    q: "Which two items are specifically bolded on your Study Guide KEY under the 6 'Enforcement Objectives'? (Exam Key #8)",
    options: [
      "Identify problem drivers AND Remove improper/unsafe vehicles from the road",
      "Issue verbal warnings AND Request MVA re-examinations",
      "Obtain private property permission AND Complete Form #9",
      "Pace vehicles for 3/10 mile AND Check the DC-CR-090 book"
    ],
    correct: "Identify problem drivers AND Remove improper/unsafe vehicles from the road",
    explanation: "Exam Key #8 — The 6 Enforcement Objectives are: Be proactive, IDENTIFY PROBLEM DRIVERS (bolded), REMOVE IMPROPER/UNSAFE VEHICLES FROM THE ROAD (bolded), Reduce traffic-related crashes, Use problem-solving approach to traffic complaints, and Document all traffic enforcement action taken."
  },
  {
    id: 32,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #8",
    q: "Which of the following is one of the 6 'Enforcement Objectives' listed in Study Guide #1? (Exam Key #8)",
    options: [
      "Document all traffic enforcement action taken (along with being proactive, identifying problem drivers, removing unsafe vehicles, reducing crashes, and using a problem-solving approach to complaints)",
      "Only document traffic stops that result in a physical arrest",
      "Avoid reactive traffic complaints in order to focus solely on pacing",
      "Issue citations on every single traffic stop regardless of discretion"
    ],
    correct: "Document all traffic enforcement action taken (along with being proactive, identifying problem drivers, removing unsafe vehicles, reducing crashes, and using a problem-solving approach to complaints)",
    explanation: "All 6 Enforcement Objectives (#8): 1. Be proactive, 2. Identify problem drivers, 3. Remove improper/unsafe vehicles from the road, 4. Reduce traffic related crashes, 5. Use problem solving approach to traffic complaints, 6. Document all traffic enforcement action taken."
  },
  {
    id: 33,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #1",
    q: "What are the 2 Categories of Traffic Enforcement bolded on Study Guide #1 KEY? (Exam Key #1)",
    options: [
      "Proactive and Reactive",
      "Civil and Criminal",
      "Felony and Misdemeanor",
      "Moving and Non-Moving"
    ],
    correct: "Proactive and Reactive",
    explanation: "Exam Key #1: The 2 Categories of Enforcement are PROACTIVE (self-initiated enforcement) and REACTIVE (Traffic Complaints: citizen initiated, statistically generated, government agency initiated)."
  },
  {
    id: 34,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #1",
    q: "Under the 2 Categories of Enforcement (#1), what falls under 'Proactive' vs. 'Reactive (Traffic Complaints)'?",
    options: [
      "Proactive = Self-initiated enforcement; Reactive = Citizen initiated, Statistically generated, and Government Agency initiated",
      "Proactive = Citizen initiated; Reactive = Self-initiated enforcement",
      "Proactive = Parking citations; Reactive = Physical arrests",
      "Proactive = Court testimony; Reactive = Payout book research"
    ],
    correct: "Proactive = Self-initiated enforcement; Reactive = Citizen initiated, Statistically generated, and Government Agency initiated",
    explanation: "Proactive is self-initiated enforcement. Reactive (Traffic Complaints) includes citizen initiated, statistically generated, and government agency initiated."
  },
  {
    id: 35,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #14",
    q: "What are the 4 'Guidelines for Enforcement', and which one is bolded first on the Study Guide KEY? (Exam Key #14)",
    options: [
      "1. Identify that a violation has been committed (bolded), 2. Charge violator with most appropriate violation, 3. Take appropriate actions, 4. Enforce fairly/impartially",
      "1. Radio dispatch, 2. Request backup, 3. Write a SERO, 4. Tow the vehicle",
      "1. Check race/age, 2. Complete Form #9, 3. Pace for 1 mile, 4. Issue warning",
      "1. Ask complainant to testify, 2. Call shift commander, 3. Search vehicle, 4. Arrest driver"
    ],
    correct: "1. Identify that a violation has been committed (bolded), 2. Charge violator with most appropriate violation, 3. Take appropriate actions, 4. Enforce fairly/impartially",
    explanation: "Exam Key #14 — Guideline for Enforcement: (1) IDENTIFY THAT A VIOLATION HAS BEEN COMMITTED, (2) Charge violator with most appropriate violation, (3) Take appropriate actions, (4) Enforce fairly/impartially."
  },
  {
    id: 36,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #2 & #15",
    q: "What are the 3 bolded 'Discretionary Elements' on the Study Guide KEY? (Exam Key #2 & #15)",
    options: [
      "1. Charges must be based on violations either observed or investigated; 2. Charges should be based on seriousness of violation(s), observations by officer & evidence; 3. Enforcement action must be appropriate (Was your violation tolerance consistent?)",
      "1. Officer's personal mood; 2. Time remaining on shift; 3. Driver's economic status",
      "1. Always issue the maximum fine; 2. Never issue verbal warnings; 3. Argue with the violator until they agree",
      "1. Only charge felonies; 2. Ignore citizen complaints; 3. Use private property without permission"
    ],
    correct: "1. Charges must be based on violations either observed or investigated; 2. Charges should be based on seriousness of violation(s), observations by officer & evidence; 3. Enforcement action must be appropriate (Was your violation tolerance consistent?)",
    explanation: "Exam Key #2, #15 — Discretionary Elements: Charges must be based on violations either observed or investigated; Charges should be based on seriousness of violation(s), observations by officer & evidence; Enforcement action must be appropriate (Was your violation tolerance consistent?)."
  },
  {
    id: 37,
    topic: "enforcement",
    starred: false,
    category: "Part 3 • Professionalism",
    q: "Under 'Professionalism' in traffic enforcement, what two behaviors are required of officers?",
    options: [
      "Be consistent when enforcing traffic laws and during interactions with motorists, AND refrain from arguing with violators",
      "Debate traffic law statutes on the roadside, AND vary your tolerance for every driver",
      "Issue a Form #9 on every stop, AND never issue written warnings",
      "Only enforce traffic laws on interstate highways, AND avoid speaking to motorists"
    ],
    correct: "Be consistent when enforcing traffic laws and during interactions with motorists, AND refrain from arguing with violators",
    explanation: "Under Professionalism: (1) Be consistent when enforcing traffic laws and during interactions with motorists, and (2) Refrain from arguing with violators."
  },
  {
    id: 38,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #7",
    q: "What are the 6 'Enforcement Options' in order from LEAST punitive to MOST punitive? (Exam Key #7)",
    options: [
      "1. Verbal or written warnings (least punitive), 2. Request for Re-examination, 3. Issuance of Parking Citations, 4. Issuance of Safety Equipment Repair Orders (SEROs), 5. Issuance of Traffic Citations, 6. Physical Arrest (most punitive)",
      "1. Parking Citations, 2. Verbal warnings, 3. Traffic Citations, 4. SEROs, 5. Re-examination, 6. Physical Arrest",
      "1. SEROs, 2. Verbal warnings, 3. Parking Citations, 4. Re-examination, 5. Traffic Citations, 6. Impoundment",
      "1. Verbal warnings, 2. Traffic Citations, 3. SEROs, 4. Parking Citations, 5. Re-examination, 6. Physical Arrest"
    ],
    correct: "1. Verbal or written warnings (least punitive), 2. Request for Re-examination, 3. Issuance of Parking Citations, 4. Issuance of Safety Equipment Repair Orders (SEROs), 5. Issuance of Traffic Citations, 6. Physical Arrest (most punitive)",
    explanation: "Exam Key #7 — The 6 Enforcement Options are: (1) Verbal or written warnings [least punitive], (2) Request for Re-examination, (3) Issuance of Parking Citations, (4) Issuance of SEROs, (5) Issuance of Traffic Citations, (6) Physical Arrest [most punitive]."
  },
  {
    id: 39,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #7",
    q: "Among the 6 Enforcement Options (#7), which option is the LEAST punitive and which is the MOST punitive?",
    options: [
      "Least punitive: Verbal or written warnings; Most punitive: Physical Arrest",
      "Least punitive: Parking Citations; Most punitive: Traffic Citations",
      "Least punitive: SEROs; Most punitive: Request for Re-examination",
      "Least punitive: Request for Re-examination; Most punitive: Written warnings"
    ],
    correct: "Least punitive: Verbal or written warnings; Most punitive: Physical Arrest",
    explanation: "Verbal or written warnings (with 'written warnings' bolded on the key) is the least punitive option, and Physical Arrest is the most punitive option."
  },
  {
    id: 40,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #6 (Pacing)",
    q: "When pacing a speeding vehicle, what is the MINIMUM distance you must follow the violator while maintaining an exact distance and constant speed? (Exam Key #6)",
    options: [
      "At least 3/10 of a mile",
      "At least 1/10 of a mile",
      "At least 1/2 (5/10) of a mile",
      "At least 1 full mile"
    ],
    correct: "At least 3/10 of a mile",
    explanation: "Exam Key #6: When pacing a vehicle, you must follow for at least 3/10 mile, maintaining that exact distance between you and the violator at a constant speed."
  },
  {
    id: 41,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #6 (Pacing)",
    q: "What must an officer do if the speed varies while pacing a violator for 3/10 of a mile? (Exam Key #6)",
    options: [
      "You must start your pace over",
      "Average the highest and lowest speeds together and write the citation",
      "Add the remaining distance to the next block",
      "Estimate the speed visually and issue a citation anyway"
    ],
    correct: "You must start your pace over",
    explanation: "Step 4 of pacing (#6): Match your speed with the violator's — if speed varies, you MUST start your pace over."
  },
  {
    id: 42,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #6 (Pacing)",
    q: "What are the 5 steps to properly pace a vehicle in order? (Exam Key #6)",
    options: [
      "1. Observe vehicle appearing to exceed speed limit; 2. Position at safe distance behind violator; 3. Follow for at least 3/10 mile maintaining exact distance & constant speed; 4. Match speed with violator's (if speed varies, start over); 5. After at least 3/10 mile, effect stop & issue citation for speed paced",
      "1. Activate emergency lights; 2. Pull alongside the violator; 3. Match speed for 1 mile; 4. Radio dispatch; 5. Issue SERO",
      "1. Park on private property; 2. Estimate speed visually; 3. Follow for 1/10 mile; 4. Honk horn; 5. Effect arrest",
      "1. Observe vehicle; 2. Tailgate within 1 car length; 3. Accelerate for 2 miles; 4. Average the speeds; 5. Issue warning"
    ],
    correct: "1. Observe vehicle appearing to exceed speed limit; 2. Position at safe distance behind violator; 3. Follow for at least 3/10 mile maintaining exact distance & constant speed; 4. Match speed with violator's (if speed varies, start over); 5. After at least 3/10 mile, effect stop & issue citation for speed paced",
    explanation: "These are the exact 5 steps for pacing a vehicle (#6) from Study Guide #1 KEY."
  },
  {
    id: 43,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #17",
    q: "Can you write a traffic citation to someone after another citizen makes a traffic complaint to you, and what are the 5 considerations? (Exam Key #17)",
    options: [
      "Yes — consider: (1) Did a violation actually occur? (2) Can complainant describe/ID vehicle and DRIVER? (3) Does complainant desire prosecution? (4) Is complainant willing to testify in court? (5) Based on your interaction with the violator, is a citation appropriate?",
      "No — Maryland law strictly prohibits issuing a citation unless the officer personally paced the vehicle for 3/10 mile",
      "Yes — as long as the complainant knows the color of the car, even if they cannot identify the driver and refuse to come to court",
      "No — officers can only issue a Parking Citation or SERO on citizen complaints"
    ],
    correct: "Yes — consider: (1) Did a violation actually occur? (2) Can complainant describe/ID vehicle and DRIVER? (3) Does complainant desire prosecution? (4) Is complainant willing to testify in court? (5) Based on your interaction with the violator, is a citation appropriate?",
    explanation: "Exam Key #17: Yes, you can write a citation after a citizen traffic complaint, considering those 5 factors (note that 'driver' is underlined on the key!)."
  },
  {
    id: 44,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #17",
    q: "On a citizen traffic complaint (#17), in addition to describing/identifying the vehicle, who else MUST the complainant be able to describe/ID?",
    options: [
      "The driver (underlined on the Study Guide KEY)",
      "The registered lienholder of the vehicle",
      "The insurance agent for the vehicle",
      "The manufacturer of the tires"
    ],
    correct: "The driver (underlined on the Study Guide KEY)",
    explanation: "Consideration #2 under Exam Key #17: 'Can complainant describe/ID vehicle and driver?' ('driver' is underlined for emphasis on the key)."
  },

  // =========================================================================
  // PART 4: SELECTIVE ENFORCEMENT, PROFILING & FORM #9 (16 QUESTIONS)
  // =========================================================================
  {
    id: 45,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #3",
    q: "What are the 3 core elements that define Selective Traffic Law Enforcement? (Exam Key #3)",
    options: [
      "1. Designed to reduce accidents, 2. Time and place accidents frequently occur, and 3. Types of violations that contribute to those accidents",
      "1. Random patrol times, 2. Enforcing only equipment laws, and 3. Avoiding high-crash intersections",
      "1. Stopping only out-of-state drivers, 2. Issuing only physical arrests, and 3. Pacing for 1 mile",
      "1. Citizen complaints, 2. Court scheduling, and 3. MVA license re-examinations"
    ],
    correct: "1. Designed to reduce accidents, 2. Time and place accidents frequently occur, and 3. Types of violations that contribute to those accidents",
    explanation: "Exam Key #3 — Selective Traffic Law Enforcement is designed to reduce accidents by focusing enforcement at the time and place accidents frequently occur and on the types of violations that contribute to those accidents."
  },
  {
    id: 46,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #5",
    q: "What are the THREE (3) types of Selective Enforcement bolded on the Study Guide KEY? (Exam Key #5)",
    options: [
      "1. Self-initiated, 2. Complaint initiated, and 3. Statistically generated",
      "1. Proactive, 2. Punitive, and 3. Judicial",
      "1. Visibility, 2. Deterrence, and 3. Compliance",
      "1. Local, 2. State, and 3. Federal"
    ],
    correct: "1. Self-initiated, 2. Complaint initiated, and 3. Statistically generated",
    explanation: "Exam Key #5 — The 3 types of Selective Enforcement (all bolded on the key) are: Self-initiated, Complaint initiated, and Statistically generated."
  },
  {
    id: 47,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #4",
    q: "What are the 4 stages of the Selective Enforcement Cycle in order? (Exam Key #4)",
    options: [
      "1. Visibility, 2. Deterrence, 3. Compliance, 4. Non-Occurrence",
      "1. Identify, 2. Develop, 3. Implement, 4. Evaluate",
      "1. Observation, 2. Pacing, 3. Citation, 4. Court",
      "1. Warning, 2. SERO, 3. Citation, 4. Arrest"
    ],
    correct: "1. Visibility, 2. Deterrence, 3. Compliance, 4. Non-Occurrence",
    explanation: "Exam Key #4 — The 4 stages of the Selective Enforcement Cycle are: (1) Visibility, (2) Deterrence, (3) Compliance, and (4) Non-Occurrence."
  },
  {
    id: 48,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #4",
    q: "In the 4 stages of the Selective Enforcement Cycle (#4), which stage is bolded on the Study Guide KEY and means 'reinforced by enforcement action'?",
    options: [
      "Compliance — reinforced by enforcement action",
      "Visibility — saturation, omnipresence",
      "Deterrence — creating awareness",
      "Non-Occurrence — never 100%, out of sight out of mind"
    ],
    correct: "Compliance — reinforced by enforcement action",
    explanation: "Exam Key #4 bolds: 'Compliance - reinforced by enforcement action'."
  },
  {
    id: 49,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #4",
    q: "Match each of the 4 stages of the Selective Enforcement Cycle (#4) to its correct explanation:",
    options: [
      "Visibility = saturation/omnipresence; Deterrence = creating awareness; Compliance = reinforced by enforcement action; Non-Occurrence = never 100%, out of sight out of mind",
      "Visibility = reinforced by enforcement action; Deterrence = out of sight out of mind; Compliance = saturation; Non-Occurrence = 100% crash elimination",
      "Visibility = plainclothes patrol; Deterrence = issuing warnings only; Compliance = court fines; Non-Occurrence = permanent compliance",
      "Visibility = statistical analysis; Deterrence = citizen complaints; Compliance = MVA suspension; Non-Occurrence = road closures"
    ],
    correct: "Visibility = saturation/omnipresence; Deterrence = creating awareness; Compliance = reinforced by enforcement action; Non-Occurrence = never 100%, out of sight out of mind",
    explanation: "Stage 1: Visibility (saturation, omnipresence) → Stage 2: Deterrence (creating awareness) → Stage 3: Compliance (reinforced by enforcement action) → Stage 4: Non-Occurrence (never 100%, out of sight out of mind)."
  },
  {
    id: 50,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #4",
    q: "In the Selective Enforcement Cycle (#4), why is the 4th stage ('Non-Occurrence') described as 'never 100%, out of sight out of mind'?",
    options: [
      "Because once police presence/enforcement leaves the area ('out of sight, out of mind'), violations eventually resume and non-occurrence of violations is never 100%",
      "Because 100% of drivers permanently obey the speed limit after seeing a patrol car once",
      "Because officers are not allowed to return to the same location twice",
      "Because traffic crashes only occur at night"
    ],
    correct: "Because once police presence/enforcement leaves the area ('out of sight, out of mind'), violations eventually resume and non-occurrence of violations is never 100%",
    explanation: "Non-Occurrence is never 100% ('out of sight, out of mind'), which is why selective enforcement is a continuous cycle."
  },
  {
    id: 51,
    topic: "selective",
    starred: false,
    category: "Part 4 • Problem Solving Approach",
    q: "What is the 4-step Selective Traffic Enforcement problem-solving approach?",
    options: [
      "1. Identify/Define the problem, 2. Develop an enforcement strategy, 3. Implement enforcement strategy, 4. Evaluate/Follow up",
      "1. Visibility, 2. Deterrence, 3. Compliance, 4. Non-Occurrence",
      "1. Observe, 2. Position, 3. Pace for 3/10 mile, 4. Stop",
      "1. Identify violation, 2. Charge violator, 3. Take action, 4. Enforce fairly"
    ],
    correct: "1. Identify/Define the problem, 2. Develop an enforcement strategy, 3. Implement enforcement strategy, 4. Evaluate/Follow up",
    explanation: "The 4-step Selective Traffic Enforcement problem-solving approach is: (1) Identify/Define the problem, (2) Develop an enforcement strategy, (3) Implement enforcement strategy, (4) Evaluate/Follow up."
  },
  {
    id: 52,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #10",
    q: "Which two items are specifically bolded on the Study Guide KEY under the '5 Enforcement Strategies'? (Exam Key #10)",
    options: [
      "Location to stop: safe area to observe violations and safe locations to conduct the stops, AND Permission needed for private property",
      "Always sit in the exact same location at the exact same time, AND argue with violators",
      "Park on private property without asking, AND stop vehicles in blind curves",
      "Only conduct stops during daylight hours, AND issue citations to every driver"
    ],
    correct: "Location to stop: safe area to observe violations and safe locations to conduct the stops, AND Permission needed for private property",
    explanation: "Exam Key #10 — The 5 Enforcement Strategies are: (1) Location to stop - SAFE AREA TO OBSERVE VIOLATIONS AND SAFE LOCATIONS TO CONDUCT THE STOPS (bolded), (2) PERMISSION NEEDED FOR PRIVATE PROPERTY (bolded), (3) Random times & locations vs. Specific, (4) Remain consistent in enforcement actions & interactions, (5) Make it a positive interaction for the violator."
  },
  {
    id: 53,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #10",
    q: "What must an officer obtain before setting up stationary traffic enforcement on private property? (Exam Key #10)",
    options: [
      "Permission needed for private property",
      "A search warrant from the Circuit Court",
      "A Form #9 signed by the Shift Commander",
      "Nothing; officers never need permission to sit on private property"
    ],
    correct: "Permission needed for private property",
    explanation: "Under the 5 Enforcement Strategies (#10), 'Permission needed for private property' is bolded on the Study Guide KEY."
  },
  {
    id: 54,
    topic: "selective",
    starred: true,
    category: "Part 4 • Exam Key #10",
    q: "Which of the following lists all 5 Enforcement Strategies from Study Guide #1? (Exam Key #10)",
    options: [
      "1. Safe area to observe violations & safe locations to conduct stops; 2. Permission needed for private property; 3. Random times & locations vs. Specific; 4. Remain consistent in enforcement actions & interactions; 5. Make it a positive interaction for the violator",
      "1. Public safety; 2. Change behavior; 3. Reduce crashes; 4. Educate motorists; 5. Deter criminal activity",
      "1. Did violation occur; 2. ID vehicle & driver; 3. Desire prosecution; 4. Willing to testify; 5. Citation appropriate",
      "1. Warnings; 2. Re-examination; 3. Parking citations; 4. SEROs; 5. Traffic citations"
    ],
    correct: "1. Safe area to observe violations & safe locations to conduct stops; 2. Permission needed for private property; 3. Random times & locations vs. Specific; 4. Remain consistent in enforcement actions & interactions; 5. Make it a positive interaction for the violator",
    explanation: "Those are the exact 5 Enforcement Strategies (#10)."
  },
  {
    id: 55,
    topic: "selective",
    starred: false,
    category: "Part 4 • Bias-Based Profiling",
    q: "How does Study Guide #1 define 'Bias-Based Profiling'?",
    options: [
      "The selection of an individual for any police-initiated action based solely upon assumptions regarding a person's Race, Ethnicity, Age, Economic Status, Religion, or Cultural Group",
      "Deploying traffic officers to high-crash intersections based on statistical crash data",
      "Stopping a vehicle after observing it run a red light or pacing it for 3/10 of a mile",
      "Checking the DC-CR-090 fine book to determine points for a violation"
    ],
    correct: "The selection of an individual for any police-initiated action based solely upon assumptions regarding a person's Race, Ethnicity, Age, Economic Status, Religion, or Cultural Group",
    explanation: "Bias-Based Profiling is the selection of an individual for any police-initiated action based solely upon assumptions regarding a person's Race, Ethnicity, Age, Economic Status, Religion, or Cultural Group."
  },
  {
    id: 56,
    topic: "selective",
    starred: false,
    category: "Part 4 • Bias-Based Profiling",
    q: "What are the 6 personal characteristics listed under the definition of Bias-Based Profiling?",
    options: [
      "Race, Ethnicity, Age, Economic Status, Religion, and Cultural Group",
      "Speed, Following Distance, Equipment, Registration, License Status, and Insurance",
      "Height, Weight, Eye Color, Hair Color, Vehicle Make, and Vehicle Model",
      "Prior Citations, Crash History, Warrant Status, Probation Status, Points, and Residency"
    ],
    correct: "Race, Ethnicity, Age, Economic Status, Religion, and Cultural Group",
    explanation: "The 6 listed characteristics are: Race, Ethnicity, Age, Economic Status, Religion, and Cultural Group."
  },
  {
    id: 57,
    topic: "selective",
    starred: true,
    category: "Part 4 • Form #9",
    q: "What traffic stops require a Form #9?",
    options: [
      '"M" Stop',
      '"A" Stop',
      '"X" Stop',
      'Only felony fleeing & eluding stops'
    ],
    correct: '"M" Stop',
    explanation: 'On the Study Guide KEY: What traffic stops require a Form #9? Answer: "M" Stop (with the "M" bolded).'
  },
  {
    id: 58,
    topic: "ta-titles",
    starred: false,
    category: "Part 1 • TA Breakdown",
    q: "True or False: Every single traffic law in the Maryland Transportation Article has a Subsection and a Paragraph.",
    options: ["True", "False"],
    correct: "False",
    explanation: "As noted on Study Guide #1: '(Not all laws have subsections and paragraphs)'."
  },
  {
    id: 59,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #1",
    q: "Under the 2 Categories of Enforcement (#1), 'Citizen initiated', 'Statistically generated', and 'Government Agency initiated' are all examples of which category?",
    options: [
      "Reactive (Traffic Complaints)",
      "Proactive (Self-initiated)",
      "Appellate Case Law",
      "Pacing Enforcement"
    ],
    correct: "Reactive (Traffic Complaints)",
    explanation: "Reactive enforcement (Traffic Complaints) consists of Citizen initiated, Statistically generated, and Government Agency initiated enforcement."
  },
  {
    id: 60,
    topic: "enforcement",
    starred: true,
    category: "Part 3 • Exam Key #2 & #15",
    q: "Under Discretionary Elements (#2, #15), what question should an officer ask themselves to ensure their enforcement action was appropriate?",
    options: [
      "Was your violation tolerance consistent?",
      "Did the driver have an out-of-state tag?",
      "How many citations have I written this month?",
      "Is this violation listed in Title 18?"
    ],
    correct: "Was your violation tolerance consistent?",
    explanation: "Under 'Enforcement action must be appropriate', the Study Guide KEY specifically notes: 'Was your violation tolerance consistent?'"
  }
];

// ===========================================================================
// 32 QUICK-DRILL FLASHCARDS COVERING EVERY ITEM ON STUDY GUIDE #1 KEY
// ===========================================================================
const trafficLawFlashcards = [
  {
    badge: "Part 1 • Reference Books",
    front: "What does the Transportation Article (TA) contain?",
    back: "The Maryland Traffic Laws broken down by Articles."
  },
  {
    badge: "Part 1 • Reference Books",
    front: "What is the DC-CR-090?",
    back: "The Maryland District Court fine book (payout book) — contains the fines and points assessed for traffic law violations."
  },
  {
    badge: "Part 1 • TA Structure",
    front: "How is a Transportation Article citation broken down? (Example: TA 21-904 b 1)",
    back: "1. Title (21)\n2. Subtitle (9)\n3. Section (04)\n4. Subsection (b)\n5. Paragraph (1)\n*(Not all laws have subsections and paragraphs)*"
  },
  {
    badge: "Part 1 • Homework #1",
    front: "What are the 12 Transportation Article Titles most applicable to Law Enforcement?",
    back: "• Title 11: Definitions; General Provisions\n• Title 13: Certificates of Title & Registration\n• Title 14: Anti-theft Laws\n• Title 16: Drivers' Licenses\n• Title 17: Required Security\n• Title 18: For-Rent Vehicles\n• Title 20: Accidents & Accident Reporting\n• Title 21: Rules of the Road\n• Title 22: Equipment of Vehicles\n• Title 25: Powers of State & Local Authorities\n• Title 26: Parties & Procedure on Citation, Arrest, Trial, Appeal\n• Title 27: Penalties; Disposition of Fines & Forfeitures"
  },
  {
    badge: "Part 1 • Titles 11, 13, 14",
    front: "What are TA Titles 11, 13, and 14?",
    back: "• Title 11: Definitions; General Provisions\n• Title 13: Certificates of Title and Registration of Vehicles\n• Title 14: Anti-theft Laws"
  },
  {
    badge: "Part 1 • Titles 16, 17, 18",
    front: "What are TA Titles 16, 17, and 18?",
    back: "• Title 16: Drivers' Licenses\n• Title 17: Required Security (Insurance)\n• Title 18: For-Rent Vehicles"
  },
  {
    badge: "Part 1 • Titles 20, 21, 22",
    front: "What are TA Titles 20, 21, and 22?",
    back: "• Title 20: Accidents & Accident Reporting\n• Title 21: Rules of the Road\n• Title 22: Equipment of Vehicles"
  },
  {
    badge: "Part 1 • Titles 25, 26, 27",
    front: "What are TA Titles 25, 26, and 27?",
    back: "• Title 25: Powers of State and Local Authorities\n• Title 26: Parties and Procedure on Citation, Arrest, Trial, and Appeal\n• Title 27: Penalties; Disposition of Fines and Forfeitures"
  },
  {
    badge: "Part 1 • Homework #2",
    front: "What is Case Law?",
    back: "Case law is law that is based on judicial decisions rather than law based on constitutions, statutes, or regulations."
  },
  {
    badge: "★ Exam Key #9",
    front: "Most of Maryland's Traffic laws are what level of offense? (#9)",
    back: "MISDEMEANORS"
  },
  {
    badge: "Part 2 • Warrantless Arrests (1–8)",
    front: "Name the first 8 circumstances when an officer can effect a warrantless arrest for a traffic violation:",
    back: "1. Vehicles transporting hazardous materials\n2. Weighing Station / remove excess weight\n3. Does not furnish satisfactory evidence of identity\n4. Disregard a traffic citation\n5. DUI Alcohol\n6. DUI Drugs\n7. Hit & Run (Injury or death — failure to render reasonable assistance)\n8. Driving w/ suspended or revoked license"
  },
  {
    badge: "Part 2 • Warrantless Arrests (9–16)",
    front: "Name the remaining 8 circumstances when an officer can effect a warrantless arrest for a traffic violation:",
    back: "9. Hit & Run (property damage — failure to notify)\n10. Crash that caused bodily injury or death\n11. Fleeing and eluding\n12. Driving w/o a license\n13. Falsification of a title, registration card/plate, or any official MVA documents\n14. Race or speed contest\n15. Non-resident commits a violation and it resulted in a crash\n16. Refusal to sign a citation"
  },
  {
    badge: "★ Exam Key #11 (HW #1)",
    front: "Why Enforce Traffic Laws? (What are the 5 reasons, and which is 1st Priority?) (#11)",
    back: "1. ★ PUBLIC SAFETY (1st Priority) [Bolded on Key]\n2. Change behavior / Deter aggressive driving\n3. Reduce crashes\n4. Educate motorists\n5. Deter and reduce criminal activity"
  },
  {
    badge: "★ Exam Key #8",
    front: "What are the 6 Enforcement Objectives (and which 2 are bolded on the Key)? (#8)",
    back: "1. Be proactive in your enforcement\n2. ★ IDENTIFY PROBLEM DRIVERS [Bolded]\n3. ★ REMOVE IMPROPER/UNSAFE VEHICLES FROM THE ROAD [Bolded]\n4. Reduce traffic related crashes\n5. Use problem solving approach to traffic complaints\n6. Document all traffic enforcement action taken"
  },
  {
    badge: "★ Exam Key #1",
    front: "What are the 2 Categories of Enforcement and their sub-types? (#1)",
    back: "1. ★ PROACTIVE:\n   • Self-initiated enforcement\n2. ★ REACTIVE (Traffic Complaints):\n   • Citizen initiated\n   • Statistically generated\n   • Government Agency initiated"
  },
  {
    badge: "★ Exam Key #14",
    front: "What are the 4 Guidelines for Enforcement? (#14)",
    back: "1. ★ IDENTIFY THAT A VIOLATION HAS BEEN COMMITTED [Bolded]\n2. Charge violator with most appropriate violation\n3. Take appropriate actions\n4. Enforce fairly/impartially"
  },
  {
    badge: "★ Exam Key #2 & #15",
    front: "What are the Discretionary Elements & Professionalism rules? (#2, #15)",
    back: "• ★ Charges must be based on violations either observed or investigated\n• ★ Charges should be based on seriousness of violation(s), observations by officer & evidence\n• ★ Enforcement action must be appropriate (Was your violation tolerance consistent?)\n• Professionalism: Be consistent when enforcing traffic laws & during interactions; Refrain from arguing with violators"
  },
  {
    badge: "★ Exam Key #7",
    front: "List the 6 Enforcement Options from LEAST punitive to MOST punitive (#7):",
    back: "1. Verbal or ★ WRITTEN WARNINGS (least punitive)\n2. Request for Re-examination\n3. Issuance of Parking Citations\n4. Issuance of Safety Equipment Repair Orders (SEROs)\n5. Issuance of Traffic Citations\n6. Physical Arrest (most punitive)"
  },
  {
    badge: "★ Exam Key #6",
    front: "What are the 5 steps to PACE a vehicle? (#6)",
    back: "1. Observe a vehicle that appears to be exceeding the speed limit\n2. Position your vehicle at a safe distance behind the violator\n3. Follow for at least 3/10 mile, maintain exact distance & constant speed\n4. Match your speed with the violator's (if speed varies, must start pace over)\n5. After at least 3/10 mile, effect a traffic stop and issue citation for the speed paced"
  },
  {
    badge: "★ Exam Key #17",
    front: "Can you write a citation after a citizen makes a traffic complaint to you? What are the 5 considerations? (#17)",
    back: "Yes! Considerations:\n1. Did a violation actually occur?\n2. Can complainant describe/ID vehicle and DRIVER (underlined)?\n3. Does the complainant desire prosecution?\n4. Is the complainant willing to testify in court?\n5. Based on your interaction with the violator, do you feel a citation is the appropriate enforcement?"
  },
  {
    badge: "★ Exam Key #3",
    front: "Define Selective Enforcement and identify its 3 elements (#3):",
    back: "1. Designed to reduce accidents\n2. Time and place accidents frequently occur\n3. Types of violations that contribute to those accidents"
  },
  {
    badge: "★ Exam Key #5",
    front: "List the 3 types of Selective Enforcement (#5):",
    back: "1. ★ Self-initiated\n2. ★ Complaint initiated\n3. ★ Statistically generated"
  },
  {
    badge: "★ Exam Key #4",
    front: "List and explain the 4 stages of the Selective Enforcement Cycle (#4):",
    back: "1. Visibility — saturation, omnipresence\n2. Deterrence — creating awareness\n3. ★ Compliance — reinforced by enforcement action [Bolded]\n4. Non-Occurrence — never 100%, out of sight out of mind"
  },
  {
    badge: "Part 4 • Problem Solving",
    front: "What is the 4-step Selective Traffic Enforcement problem-solving approach?",
    back: "1. Identify / Define the problem\n2. Develop an enforcement strategy\n3. Implement enforcement strategy\n4. Evaluate / Follow up"
  },
  {
    badge: "★ Exam Key #10",
    front: "List the 5 Enforcement Strategies (#10):",
    back: "1. Location to stop — ★ safe area to observe violations and safe locations to conduct the stops\n2. ★ Permission needed for private property\n3. Random times & locations vs. Specific\n4. Remain consistent in enforcement actions and interactions with motorists\n5. Make it a positive interaction for the violator"
  },
  {
    badge: "Part 4 • Profiling",
    front: "Define Bias-Based Profiling and list the 6 protected characteristics:",
    back: "The selection of an individual for any police-initiated action based solely upon assumptions regarding a person's:\n1. Race\n2. Ethnicity\n3. Age\n4. Economic Status\n5. Religion\n6. Cultural Group"
  },
  {
    badge: "★ Key Item • Form #9",
    front: "What traffic stops require a Form #9?",
    back: '"M" Stop'
  },
  {
    badge: "Part 2 • Non-Resident Rule",
    front: "When can an officer make a warrantless traffic arrest of a NON-RESIDENT?",
    back: "When a non-resident commits a traffic violation AND it resulted in a crash."
  },
  {
    badge: "Part 2 • Citation Compliance",
    front: "What two citation-related actions by a motorist authorize a warrantless traffic arrest?",
    back: "1. Refusal to sign a citation\n2. Disregard a traffic citation"
  },
  {
    badge: "★ Exam Key #6 • Pacing Distance",
    front: "When pacing a speeding vehicle, what minimum distance must you follow, and what happens if your speed varies?",
    back: "• Minimum distance: At least 3/10 of a mile (maintaining exact distance & constant speed)\n• If speed varies: You MUST start your pace over!"
  },
  {
    badge: "★ Exam Key #4 • Cycle Stage 3",
    front: "In the 4 stages of the Selective Enforcement Cycle, which stage is bolded on the Key and what does it mean?",
    back: "COMPLIANCE — reinforced by enforcement action\n(Full cycle: 1. Visibility → 2. Deterrence → 3. Compliance → 4. Non-Occurrence)"
  },
  {
    badge: "★ Exam Key #7 • Punitive Scale",
    front: "Which traffic enforcement option is the LEAST punitive, and which is the MOST punitive?",
    back: "• Least Punitive: Verbal or WRITTEN WARNINGS\n• Most Punitive: PHYSICAL ARREST"
  }
];

let activeQuestions = [];
let currentQIndex = 0;
let score = 0;
let quizHistory = [];

// Flashcard state
let fcDeck = [...trafficLawFlashcards];
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
    fcBtn.className = "px-5 py-2.5 bg-amber-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-amber-900/30";
    examBtn.className = "px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl font-bold text-sm transition-colors";
    renderFlashcard();
  } else {
    fcContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    examBtn.className = "px-5 py-2.5 bg-amber-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-amber-900/30";
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

  let pool = trafficLawQuestions;
  if (selectedTopic === 'starred') {
    pool = trafficLawQuestions.filter(item => item.starred);
  } else if (selectedTopic !== 'all') {
    pool = trafficLawQuestions.filter(item => item.topic === selectedTopic);
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
    btn.className = "w-full text-left p-4 bg-slate-700/50 hover:bg-amber-600/80 rounded-xl border border-slate-600 font-medium transition-colors text-sm sm:text-base";
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
      b.classList.remove('bg-slate-700/50', 'hover:bg-amber-600/80');
      b.classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');
    } else if (b.textContent === selected && selected !== qObj.correct) {
      b.classList.remove('bg-slate-700/50', 'hover:bg-amber-600/80');
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
    messageEl.textContent = "Outstanding! 100% Mastery of Traffic Law Study Guide #1!";
    messageEl.className = "text-emerald-400 font-bold mb-8";
  } else if (pct >= 80) {
    messageEl.textContent = `Great job (${pct}%)! You're well prepared for tomorrow's test.`;
    messageEl.className = "text-amber-400 font-bold mb-8";
  } else if (pct >= 70) {
    messageEl.textContent = `Passing (${pct}%), but review your missed questions below to lock in a higher score.`;
    messageEl.className = "text-cyan-400 font-bold mb-8";
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
      filterAllBtn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-amber-600 text-white transition-colors";
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
            <span class="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">Question ${item.qNum}</span>
            <span class="text-xs font-medium text-slate-400">${escapeHtml(q.category)}</span>
          </div>
          ${statusBadge}
        </div>
        <p class="text-white font-bold text-base leading-snug">${escapeHtml(q.q)}</p>
        ${userAnswerBlock}
        ${q.explanation ? `
          <div class="p-3 rounded-lg bg-slate-900/70 border border-slate-700 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span class="font-bold text-amber-400">Explanation:</span> ${escapeHtml(q.explanation)}
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
    sideLabel.textContent = "QUESTION / STUDY GUIDE PROMPT";
    sideLabel.className = "text-amber-400 font-bold text-xs uppercase tracking-wider";
    contentEl.innerHTML = escapeHtml(card.front).replace(/\n/g, '<br>');
    contentEl.className = "my-6 text-center text-lg sm:text-xl font-bold text-white leading-relaxed";
    cardBox.className = "cursor-pointer min-h-[280px] rounded-2xl p-6 sm:p-8 bg-slate-800/90 border-2 border-slate-600 hover:border-amber-500/60 transition-all flex flex-col justify-between select-none";
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
  fcDeck = shuffleArray([...trafficLawFlashcards]);
  fcIndex = 0;
  fcFlipped = false;
  renderFlashcard();
}
