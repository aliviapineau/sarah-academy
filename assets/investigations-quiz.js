const unitFQuestions = [
  // =========================================================================
  // LESSON 1: INTRODUCTION & PRELIMINARY INVESTIGATIONS (25 QUESTIONS)
  // =========================================================================
  {
    id: 1,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Unless otherwise directed, who is responsible for the preliminary investigation of all reported crimes and incidents in Baltimore County? (MPCTC 04.01.00)",
    options: ["The patrol officer / precincts", "Criminal Investigations Bureau (CIB)", "Investigative Services Team (IST)", "The Shift Commander"],
    correct: "The patrol officer / precincts",
    explanation: "Unless otherwise directed, precincts (patrol officers) are responsible for the preliminary investigation of all crimes in Baltimore County."
  },
  {
    id: 2,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "What is the PRIMARY responsibility of an officer investigating a crime?",
    options: [
      "Perform a thorough investigation to develop information leading to the arrest of the perpetrator",
      "Instruct the victim in crime prevention techniques to reduce future recurrence",
      "Refer the case immediately to the State's Attorney's Office",
      "Conduct a security survey of the surrounding neighborhood"
    ],
    correct: "Perform a thorough investigation to develop information leading to the arrest of the perpetrator",
    explanation: "Primary responsibility is developing info leading to the arrest of the perpetrator; secondary responsibility is instructing the victim in crime prevention techniques."
  },
  {
    id: 3,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "What is the SECONDARY responsibility of an officer investigating a crime?",
    options: [
      "Instruct the victim in crime prevention techniques to reduce the chance of a future recurrence",
      "Develop information leading to the arrest of the perpetrator",
      "Notify the Criminal Investigations Bureau Commander",
      "Package and submit all found property to EMU"
    ],
    correct: "Instruct the victim in crime prevention techniques to reduce the chance of a future recurrence",
    explanation: "Instructing the victim in crime prevention techniques is the secondary responsibility of the investigating officer."
  },
  {
    id: 4,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "When does a preliminary investigation begin, and how long does it continue?",
    options: [
      "Begins when officers arrive at the scene; continues until postponement or transfer of responsibility will not jeopardize successful completion",
      "Begins when the 911 call is placed; ends as soon as a supervisor arrives on scene",
      "Begins when the Incident Report is approved; continues for 96 hours",
      "Begins when detectives arrive; continues until the suspect is arraigned"
    ],
    correct: "Begins when officers arrive at the scene; continues until postponement or transfer of responsibility will not jeopardize successful completion",
    explanation: "Preliminary investigation begins upon arrival at the scene and continues until postponement or transfer of responsibility will not jeopardize the investigation."
  },
  {
    id: 5,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "When providing aid to the injured at a crime scene, what must always come FIRST?",
    options: ["Scene security first (and PPE / eliminating the threat)", "Photographing all evidence", "Interviewing witnesses before they leave", "Calling the State's Attorney"],
    correct: "Scene security first (and PPE / eliminating the threat)",
    explanation: "Scene security first! Use PPE, eliminate the threat, relocate victims, triage, and request medics."
  },
  {
    id: 6,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "How is the 'Crime Scene Perimeter' defined? (MPCTC 04.02.04)",
    options: [
      "The general area in and around the largest body of evidence",
      "A mandatory 500-foot radius around the reporting person",
      "Only the interior room where a weapon was recovered",
      "The entire precinct sector in which the crime occurred"
    ],
    correct: "The general area in and around the largest body of evidence",
    explanation: "MPCTC 04.02.04 defines the crime scene perimeter as the general area in and around the largest body of evidence."
  },
  {
    id: 7,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which of the following is NOT one of the standard techniques for containing and protecting a crime scene? (MPCTC 04.02.01)",
    options: [
      "Allowing all off-duty officers and media inside the tape to observe",
      "Blocking entry and exit points and using crime scene tape",
      "Delegating an officer to log everyone entering the scene",
      "Limiting access to essential personnel only"
    ],
    correct: "Allowing all off-duty officers and media inside the tape to observe",
    explanation: "Access must be strictly limited to essential personnel only, with an officer delegated to log everyone entering the scene."
  },
  {
    id: 8,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "According to MPCTC 04.20.03, what are the 5 methods identified for tracking a suspect from a crime scene?",
    options: [
      "K-9, blood trails, footprints, tire marks, and witnesses",
      "Polygraph, CVSA, NCIC, RAPID, and Delta Plus",
      "Forensic composites, lineups, photo arrays, show-ups, and BWC",
      "Security surveys, victim brochures, Form 15, Form 126, and Form 128"
    ],
    correct: "K-9, blood trails, footprints, tire marks, and witnesses",
    explanation: "The five methods for tracking a suspect from a crime scene are K-9, blood trails, footprints, tire marks, and witnesses."
  },
  {
    id: 9,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Why is it important to obtain complete identification of all victims and witnesses at the scene? (MPCTC 04.02.03)",
    options: [
      "Allows positive ID to locate/interview them later, allows them to be summonsed to court, and witnesses cannot leave while you hold their ID",
      "So their names can be entered into NCIC as wanted persons",
      "Because witnesses must sign Form 15 before leaving any crime scene",
      "To require all witnesses to submit to a polygraph examination"
    ],
    correct: "Allows positive ID to locate/interview them later, allows them to be summonsed to court, and witnesses cannot leave while you hold their ID",
    explanation: "Complete ID allows locating/interviewing witnesses later, summonsing them to court, and prevents them from leaving while you hold their ID."
  },
  {
    id: 10,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "When conducting a selective neighborhood check (canvass) during a crime scene investigation, where should you start? (MPCTC 04.06.02)",
    options: [
      "Start with buildings/residences that have a view of the crime scene, and document both who was interviewed and addresses attempted with no answer",
      "Start two miles away and work inward, documenting only residents who saw the crime happen",
      "Only check businesses that hold a Baltimore County liquor license",
      "Wait 96 hours before knocking on any residential doors"
    ],
    correct: "Start with buildings/residences that have a view of the crime scene, and document both who was interviewed and addresses attempted with no answer",
    explanation: "Start with buildings/residences with a view of the scene, and document both who you interviewed and addresses attempted with no answer for follow-up."
  },
  {
    id: 11,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "How is the term 'motive' defined in criminal investigations? (MPCTC 04.12.00)",
    options: [
      "Something that causes a person to act",
      "The physical evidence linking a suspect to a location",
      "The legal standard required to obtain a search warrant",
      "A formal written confession signed by the defendant"
    ],
    correct: "Something that causes a person to act",
    explanation: "MPCTC 04.12.00 defines motive as 'something that causes a person to act.'"
  },
  {
    id: 12,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "When an arrest is made, what must the investigating officer do PRIOR to charging the suspect?",
    options: [
      "Notify the supervisor of the unit having follow-up responsibility for the crime under investigation",
      "Administer a Computer Voice Stress Analysis (CVSA) test",
      "Have the Robbery Unit conduct a formal video lineup",
      "Destroy all field notes once the Incident Report is typed"
    ],
    correct: "Notify the supervisor of the unit having follow-up responsibility for the crime under investigation",
    explanation: "Prior to charging a suspect, the investigating officer must notify the supervisor of the unit having follow-up responsibility."
  },
  {
    id: 13,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "For investigations involving bribery or felony extortion, who must be notified to determine which CIB unit will have follow-up responsibility on a case-by-case basis?",
    options: ["The CIB Commander", "The Evidence Management Unit (EMU)", "The Regional Auto Theft Task Force", "The Forensic Artist"],
    correct: "The CIB Commander",
    explanation: "The CIB Commander is notified for bribery or felony extortion to determine which CIB unit will have follow-up responsibility."
  },
  {
    id: 14,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which burglaries are the precincts (rather than the Burglary Unit) responsible for following up on by default?",
    options: [
      "Attempted burglaries, and 3rd and 4th degree burglaries",
      "1st and 2nd degree burglaries",
      "Only commercial bank burglaries",
      "No burglaries; the Burglary Unit handles all degrees"
    ],
    correct: "Attempted burglaries, and 3rd and 4th degree burglaries",
    explanation: "The Burglary Unit handles 1st and 2nd degree burglaries; precincts handle attempted burglaries and 3rd and 4th degree burglaries."
  },
  {
    id: 15,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which unit investigates rapes involving victims 13 years of age or older (at the time of the offense) when no care/custody issues are involved?",
    options: ["Special Victims Team (SVU)", "Crimes Against Children Unit (CACU)", "Violent Crimes Unit (VCU)", "Homicide/Missing Persons Unit"],
    correct: "Special Victims Team (SVU)",
    explanation: "SVU investigates rapes involving victims 13 years of age or older (at the time of the offense)."
  },
  {
    id: 16,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "When does the Crimes Against Children Unit (CACU) investigate a rape case?",
    options: [
      "When the victim is under age 13, OR under age 18 (at the time of the offense) if care and custody issues are involved",
      "Only when the victim is under age 10",
      "Whenever the offense occurs on school property regardless of age",
      "All rapes involving victims 13 years of age or older"
    ],
    correct: "When the victim is under age 13, OR under age 18 (at the time of the offense) if care and custody issues are involved",
    explanation: "CACU handles child abuse and rapes involving victims under 13, or under 18 if care and custody issues are involved."
  },
  {
    id: 17,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "After how many hours does the Homicide/Missing Persons Unit (HMPU) conduct follow-up investigations on missing persons 18 years or older (unless critical)?",
    options: ["Beyond 96 hours", "Beyond 24 hours", "Beyond 48 hours", "Beyond 7 days"],
    correct: "Beyond 96 hours",
    explanation: "HMPU conducts follow-up investigations of cases open beyond 96 hours of missing persons 18 years or older (or critical cases)."
  },
  {
    id: 18,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "True or False: The Homicide/Missing Persons Unit investigates all juvenile deaths resulting from traffic collisions.",
    options: ["True", "False"],
    correct: "False",
    explanation: "HMPU investigates juvenile deaths resulting from violence, suicide, casualty, or occurring suddenly, and NOT as a result of traffic collisions."
  },
  {
    id: 19,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which unit investigates kidnappings (including children abducted by strangers) and armored truck or financial institution robberies?",
    options: ["Robbery Unit", "Violent Crimes Unit", "Special Victims Unit", "Criminal Intelligence Section"],
    correct: "Robbery Unit",
    explanation: "The Robbery Unit investigates financial institution robberies, armored truck robberies, commercial carrier hijackings, targeted home invasions, business deposit robberies, and kidnappings."
  },
  {
    id: 20,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "The Violent Crimes Unit (VCU) investigates non-fatal shootings EXCEPT in which of the following three instances?",
    options: [
      "Shootings during a commercial robbery (Robbery Unit), self-inflicted gunshot wounds, and accidental shootings",
      "Domestic-related shootings, drive-by shootings, and shootings in County parks",
      "Shootings involving juveniles, off-duty officers, or stolen handguns",
      "Shootings occurring at bars, hookah lounges, or medical marijuana dispensaries"
    ],
    correct: "Shootings during a commercial robbery (Robbery Unit), self-inflicted gunshot wounds, and accidental shootings",
    explanation: "VCU investigates non-fatal shootings except commercial robbery shootings (handled by Robbery Unit), self-inflicted gunshot wounds, and accidental shootings."
  },
  {
    id: 21,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "If a commissioned law enforcement officer from ANOTHER jurisdiction intentionally discharges a firearm in Baltimore County resulting in NO injury or death, which unit investigates?",
    options: ["Violent Crimes Unit (VCU)", "Homicide/Missing Persons Unit (HMPU)", "Firearms Interdiction Team (FIT)", "Arson Team"],
    correct: "Violent Crimes Unit (VCU)",
    explanation: "VCU handles intentional firearm discharges in Baltimore County by a commissioned LEO of another jurisdiction where no injury or death results (HMPU handles if injury/death results)."
  },
  {
    id: 22,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which unit assists the Hazardous Devices Team for bombings and attempted bombings, in addition to investigating 1st/2nd degree arson and fatal fires?",
    options: ["Arson Team", "Violent Crimes Unit", "Homeland Security Team", "Forensic Services Section"],
    correct: "Arson Team",
    explanation: "The Arson Team investigates 1st/2nd degree arson, unknown origin fires, malicious burning trends, fatal fires, and assists the Hazardous Devices Team with bombings."
  },
  {
    id: 23,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "True or False: For calls involving elder abuse, sexual assault, child abuse, domestic abuse, or animal abuse/cruelty/neglect, an Incident Report must be written ONLY if the allegation is founded.",
    options: ["True", "False"],
    correct: "False",
    explanation: "An Incident Report MUST be made on these calls WHETHER FOUNDED OR UNFOUNDED."
  },
  {
    id: 24,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which of the following businesses always requires an Incident Report for any call occurring on the premises or resulting from the operation of the business?",
    options: ["A hookah lounge/bar", "A grocery store", "A car dealership", "A dry cleaner"],
    correct: "A hookah lounge/bar",
    explanation: "An Incident Report is required on all calls occurring on the premises of a hookah lounge/bar, or resulting from the operation of the business."
  },
  {
    id: 25,
    lesson: "lesson1",
    category: "L.1 • Prelim Investigations",
    q: "Which of the following is NOT one of the 5 ways a criminal case is officially 'cleared'?",
    options: [
      "The case has been open for more than 30 days with no new leads",
      "Suspect is identified and there will be no prosecution by the victim",
      "Suspect is identified and the victim is instructed to obtain a warrant or summons",
      "Suspect is arrested, granted immunity, or the case is abated by death"
    ],
    correct: "The case has been open for more than 30 days with no new leads",
    explanation: "A case is cleared only when: (1) ID'd & no prosecution by victim, (2) ID'd & victim instructed to get warrant/summons, (3) Arrested, (4) Granted immunity, or (5) Abated by death."
  },

  // =========================================================================
  // LESSONS 2 & 3: FIELD NOTES & INVESTIGATIVE RESOURCES (25 QUESTIONS)
  // =========================================================================
  {
    id: 26,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What are the three stages of human memory through which information must pass for recollection?",
    options: [
      "Acquisition, Retention, and Retrieval",
      "Observation, Transcription, and Discovery",
      "Perception, Interrogation, and Testimony",
      "Encoding, Canvassing, and Archiving"
    ],
    correct: "Acquisition, Retention, and Retrieval",
    explanation: "Recollections depend on information passing through three stages: Acquisition, Retention, and Retrieval."
  },
  {
    id: 27,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "In order for your memory to work during the Acquisition stage, what deliberate process must your mind undertake at the time of occurrence?",
    options: [
      "Form a mental image",
      "Wait 24 hours before writing anything down",
      "Discuss the event with other witnesses first",
      "Rely solely on peripheral vision"
    ],
    correct: "Form a mental image",
    explanation: "In order for your memory to work, your mind must form a mental image—a deliberate process undertaken at the time of occurrence."
  },
  {
    id: 28,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "According to Baltimore County Field Manual Article 1, Section 3.1 (MPCTC 07.04.05), investigative notes ONLY need to be maintained for which cases?",
    options: [
      "Criminal cases and motor vehicle crashes when an ACRS report has been completed",
      "Only felony homicides and armed robberies",
      "Every single traffic stop and citizen contact",
      "Civil disputes and non-reportable parking complaints"
    ],
    correct: "Criminal cases and motor vehicle crashes when an ACRS report has been completed",
    explanation: "★ Starred Slide (07.04.05): Investigative notes only need to be maintained for criminal cases and motor vehicle crashes when an ACRS report has been completed."
  },
  {
    id: 29,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Per Baltimore County Field Manual Article 1, Section 3.1 (MPCTC 07.04.01), what three pieces of information MUST be written on EACH page of your investigative notes?",
    options: [
      "Your Name, ID#, and Case Number (CC#)",
      "Your Precinct, Shift Commander's Name, and Vehicle Number",
      "The Miranda Warning, Date of Birth, and Weather Forecast",
      "The State's Attorney's Name, Court Date, and Bail Amount"
    ],
    correct: "Your Name, ID#, and Case Number (CC#)",
    explanation: "★ Starred Slide (07.04.01): Each page of investigative notes must contain your Name, ID#, and Case Number."
  },
  {
    id: 30,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What must an officer do if NO investigative notes are taken on a case that normally requires them? (MPCTC 07.04.01)",
    options: [
      "Document why no investigative notes were taken in his/her police report",
      "Submit a Form 12L to the Chief of Police within 24 hours",
      "Recreate the notes from memory the day before court",
      "Have a witness officer sign a blank page in the notebook"
    ],
    correct: "Document why no investigative notes were taken in his/her police report",
    explanation: "★ Starred Slide (07.04.01): If no investigative notes are taken, the officer is to document why in his/her police report."
  },
  {
    id: 31,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "True or False: Once you transcribe your field notes onto the official Incident Report in PremierOne, you should shred your original field notes.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Each officer is responsible for safely and PERMANENTLY retaining investigative notes, and they may become evidence in court under Discovery."
  },
  {
    id: 32,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "In court, how can your field notes be requested by the defense and used during trial?",
    options: [
      "Notes may become evidence in court under 'Discovery', and officers may refer to them while testifying",
      "Field notes are privileged personal property and can never be viewed by defense attorneys",
      "Notes can only be used in traffic court, never in criminal court",
      "Notes automatically replace the need for the officer to appear in court"
    ],
    correct: "Notes may become evidence in court under 'Discovery', and officers may refer to them while testifying",
    explanation: "Notes may become evidence under Discovery, and referring to accurate notes on the stand eliminates 'I don't recall / I'm not sure.'"
  },
  {
    id: 33,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "When responding to a Domestic incident, whose names must specifically be listed in your field notes in addition to the primary parties?",
    options: ["Children's names", "All neighbors within three blocks", "The suspect's high school teachers", "The landlord's mortgage lender"],
    correct: "Children's names",
    explanation: "On domestic calls, children's names need to be listed in your field notes."
  },
  {
    id: 34,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which of the following is NOT one of the 4 note-taking techniques that won't discourage an interviewee from talking? (MPCTC 07.04.04)",
    options: [
      "Stare continuously at your notebook and interrupt whenever they speak too fast",
      "Tell the person that you will be taking notes",
      "Look up from your notebook",
      "Be patient, let them answer without interruption, and reassure them they are providing useful information"
    ],
    correct: "Stare continuously at your notebook and interrupt whenever they speak too fast",
    explanation: "★ Starred Slide (07.04.04): Tell the person you'll take notes, look up from your notebook, be patient without interrupting, and reassure them."
  },
  {
    id: 35,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What three tactics are used to take and verify information during a field interview?",
    options: [
      "Separate multiple witnesses/victims/suspects, compare information, and verify information with other sources",
      "Interview everyone together in a group, vote on the best story, and arrest the minority",
      "Require a polygraph on scene, seize all cell phones, and run RAPID",
      "Conduct a show-up with all witnesses in the same patrol car"
    ],
    correct: "Separate multiple witnesses/victims/suspects, compare information, and verify information with other sources",
    explanation: "Always separate multiple witnesses/victims/suspects, compare information, and verify information with other sources."
  },
  {
    id: 36,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which database contains all BCoPD police reports, related data and contacts (arrests, FIRs, etc.), and calls for service?",
    options: ["PremierOne", "RAPID", "Delta Plus", "Evidence.com"],
    correct: "PremierOne",
    explanation: "PremierOne holds all BCoPD police reports, related contacts (arrests, FIRs), and calls for service."
  },
  {
    id: 37,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which database is used to search all PAWNED property in Maryland?",
    options: ["RAPID", "LInX", "METERS", "Delta Plus"],
    correct: "RAPID",
    explanation: "RAPID is the database used to search all pawned property in Maryland."
  },
  {
    id: 38,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which database provides access to all REGIONAL police reports, contacts (arrests, FIRs), and calls for service across participating agencies?",
    options: ["LInX (NCRLInX)", "eBooking", "Delta Plus", "IBIS"],
    correct: "LInX (NCRLInX)",
    explanation: "LInX (NCRLInX) contains regional police reports, contacts, and calls for service across agencies."
  },
  {
    id: 39,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What information does the LPR (License Plate Reader) database provide when a plate is scanned by BCoPD or BPD vehicles?",
    options: [
      "An image of the vehicle and its GPS location",
      "The driver's juvenile arrest history and polygraph results",
      "All pawned property linked to the registered owner",
      "Audio recordings from inside the vehicle"
    ],
    correct: "An image of the vehicle and its GPS location",
    explanation: "The LPR database provides an image of the scanned vehicle and its GPS location."
  },
  {
    id: 40,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which system provides access to all Maryland traffic stop data?",
    options: ["Delta Plus", "Dashboard", "RAPID", "eBooking"],
    correct: "Delta Plus",
    explanation: "Delta Plus provides access to all Maryland traffic stop data."
  },
  {
    id: 41,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What is 'Dashboard' in the context of Maryland law enforcement databases?",
    options: [
      "MD METERS information accessed via the internet",
      "The in-car camera system used for recording traffic stops",
      "The pawn shop registry for Baltimore County",
      "A federal database for tracking commercial cargo"
    ],
    correct: "MD METERS information accessed via the internet",
    explanation: "Dashboard is MD METERS information (driver/vehicle info, criminal history, guns, wanted persons/vehicles) accessed via the internet."
  },
  {
    id: 42,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Which database contains all BCoPD arrest records for BOTH juveniles and adults?",
    options: ["eBooking", "Evidence.com", "RAPID", "Delta Plus"],
    correct: "eBooking",
    explanation: "eBooking contains all BCoPD arrest records for both juveniles and adults."
  },
  {
    id: 43,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "What are the two most common forms of truth verification devices used in investigations?",
    options: [
      "Polygraphs and Computer Voice Stress Analysis (CVSA)",
      "IBIS and AFIS scanners",
      "LPR and METERS terminals",
      "Preliminary Breath Tests (PBT) and DRE evaluations"
    ],
    correct: "Polygraphs and Computer Voice Stress Analysis (CVSA)",
    explanation: "The most common forms of truth verification devices are Polygraphs and Computer Voice Stress Analysis (CVSA)."
  },
  {
    id: 44,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "True or False: Truth verification systems actually detect lies directly.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Truth verification systems do NOT actually detect lies; they measure the stress caused by those lies."
  },
  {
    id: 45,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "According to MPCTC 04.08.00 (★ Starred Slide), what is the primary role and desired end result of a truth verification device in an investigation?",
    options: [
      "It provides a psychological advantage based on the subject's perception of the device, with the end result being 'A confession'",
      "Its chart printout is automatically conclusive proof of guilt in court without any testimony",
      "It replaces the need to conduct a preliminary investigation",
      "It is used to force victims of sexual offenses to testify"
    ],
    correct: "It provides a psychological advantage based on the subject's perception of the device, with the end result being 'A confession'",
    explanation: "★ Starred Slide (04.08.00): It uses the psychological advantage of the subject's perception of the device's ability to detect lies, aiming for 'A confession.'"
  },
  {
    id: 46,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "Per Field Manual 7-11.0, what are the 3 requirements before a polygraph examination can be given to a crime VICTIM?",
    options: [
      "1. Documented evidence the report may be false, 2. Approval of investigating shift/unit commander, 3. Prior consultation with the State's Attorney's Office",
      "1. Request from the suspect, 2. Approval of the patrol corporal, 3. Payment of a $50 fee",
      "1. A signed Form 15, 2. Approval of the Robbery Unit, 3. Video recording by Crime Lab",
      "1. A District Court subpoena, 2. Consent of the victim's employer, 3. Approval of EMU"
    ],
    correct: "1. Documented evidence the report may be false, 2. Approval of investigating shift/unit commander, 3. Prior consultation with the State's Attorney's Office",
    explanation: "Polygraphing a victim requires documented evidence of a possible false report, shift/unit commander approval, and prior consultation with the SAO."
  },
  {
    id: 47,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "★ Which crime victims may NEVER be required to submit to a polygraph examination as a condition for proceeding with the investigation?",
    options: [
      "Victims of 1st and 2nd degree rape and all degrees of sexual offenses",
      "Victims of 3rd and 4th degree burglary",
      "Victims of commercial shoplifting",
      "Victims of motor vehicle theft"
    ],
    correct: "Victims of 1st and 2nd degree rape and all degrees of sexual offenses",
    explanation: "★ Starred Slide: Victims of 1st and 2nd degree rape and all degrees of sexual offenses will NEVER be required to submit to a polygraph as a condition for proceeding."
  },
  {
    id: 48,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "According to MPCTC 04.08.01 (★ Starred Slide), what are the two possible pitfalls of using a truth verification device on crime victims?",
    options: [
      "Psychological effects on the truthful victim, and the Police Department is perceived as insensitive",
      "It costs too much money, and the machine frequently breaks down",
      "It violates NCIC rules, and it alerts the suspect",
      "It requires 4 copies of Form 15, and EMU must store the charts"
    ],
    correct: "Psychological effects on the truthful victim, and the Police Department is perceived as insensitive",
    explanation: "★ Starred Slide (04.08.01): Pitfalls on victims are (1) psychological effects on the truthful victim, and (2) the Police Department is perceived as insensitive."
  },
  {
    id: 49,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "According to MPCTC 04.08.02 (★ Starred Slide), what are the two limitations of using a truth verification device in an investigation?",
    options: [
      "Time consuming, and accuracy rates are less than 100%",
      "Only works on juveniles, and cannot be used at night",
      "Requires a federal search warrant, and takes 30 days to process",
      "Must be administered by the Robbery Unit, and requires 5 fill-ins"
    ],
    correct: "Time consuming, and accuracy rates are less than 100%",
    explanation: "★ Starred Slide (04.08.02): The limitations are that it is (1) time consuming, and (2) accuracy rates are less than 100%."
  },
  {
    id: 50,
    lesson: "lesson2-3",
    category: "L.2–3 • Field Notes & Resources",
    q: "When writing notes for a Controlled Buy operation, which of the following details should be documented?",
    options: [
      "Who searched the informant/car, currency involved, number called/what was said, where the meet occurred, when surveillance broke off, and who retrieved/packaged evidence",
      "Only the final weight of the narcotics after lab analysis",
      "Only the case number and the name of the judge",
      "Only the vehicle's color and license plate"
    ],
    correct: "Who searched the informant/car, currency involved, number called/what was said, where the meet occurred, when surveillance broke off, and who retrieved/packaged evidence",
    explanation: "Controlled buy notes must track every step: searching the informant/car, currency, call details, meet location, surveillance, informant handling, and evidence retrieval/packaging."
  },

  // =========================================================================
  // LESSON 6: IDENTIFICATION PROCEDURES (25 QUESTIONS)
  // =========================================================================
  {
    id: 51,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "True or False: Once a witness makes a positive eyewitness identification, the criminal investigation should be immediately concluded based solely on that ID.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Criminal investigations should NOT be concluded or otherwise ceased based solely on eyewitness identification."
  },
  {
    id: 52,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "What are investigating officers' restrictions regarding offering opinions or feedback before, during, or after an identification procedure?",
    options: [
      "Officers must NOT offer opinions/suggestive comments by word or gesture, and are prohibited from providing any feedback regarding the results",
      "Officers should congratulate the witness if they pick the primary suspect",
      "Officers may nod or point to help an unsure witness feel more confident",
      "Officers should tell the witness whether other witnesses picked the same person"
    ],
    correct: "Officers must NOT offer opinions/suggestive comments by word or gesture, and are prohibited from providing any feedback regarding the results",
    explanation: "Officers must never offer opinions or suggestive comments by word or gesture, and are strictly prohibited from giving feedback on the results."
  },
  {
    id: 53,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "What must an investigating officer record when a victim or witness views an identification procedure?",
    options: [
      "Any/all comments and relevant observations of the victim/witness, including their level of confidence, when making or not making an ID",
      "Only a 'Yes' or 'No' checkbox, ignoring any verbal comments",
      "Only positive identifications; non-identifications are never documented",
      "The officer's own opinion of whether the witness was guessing"
    ],
    correct: "Any/all comments and relevant observations of the victim/witness, including their level of confidence, when making or not making an ID",
    explanation: "Officers must record all comments and observations of the victim/witness, including their level of confidence, whether they make an ID or not."
  },
  {
    id: 54,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Which unit coordinates and executes ALL live lineups in Baltimore County?",
    options: ["Robbery Unit", "Homicide/Missing Persons Unit", "Violent Crimes Unit", "Forensic Services Section"],
    correct: "Robbery Unit",
    explanation: "All lineups are coordinated and executed by the Robbery Unit."
  },
  {
    id: 55,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Who has complete authority over a live lineup and can cancel, postpone, or make changes at any time to ensure participant safety and lineup integrity?",
    options: ["The assigned Robbery supervisor", "The arresting patrol officer", "The suspect's defense attorney", "The Crime Lab technician"],
    correct: "The assigned Robbery supervisor",
    explanation: "The assigned Robbery supervisor has complete authority over the lineup process."
  },
  {
    id: 56,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Who may be used as extras (fill-ins) in a BCoPD lineup, and what do BCDC prisoners receive if used?",
    options: [
      "Sworn members, Cadets, Recruits, or BCDC Prisoners (prisoners receive $4, a phone call, and refreshments)",
      "Only civilian volunteers from the neighborhood (who receive $50)",
      "Only detectives from the Homicide Unit",
      "Witnesses from other unrelated cases"
    ],
    correct: "Sworn members, Cadets, Recruits, or BCDC Prisoners (prisoners receive $4, a phone call, and refreshments)",
    explanation: "Extras can be sworn members, cadets, recruits, or BCDC prisoners ($4, a phone call, and refreshments), matching race, sex, age, stature, and attire."
  },
  {
    id: 57,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "How many suspects may be shown in each lineup, and who chooses the suspect's position in the lineup?",
    options: [
      "Only ONE suspect per lineup, and the suspect may choose whatever position they desire",
      "Up to three suspects per lineup, and the investigating officer assigns their positions",
      "Two suspects per lineup, positioned alphabetically",
      "Only one suspect, who must always stand in position #1"
    ],
    correct: "Only ONE suspect per lineup, and the suspect may choose whatever position they desire",
    explanation: "Only one suspect shall be shown in each lineup, and the suspect may choose whatever position they desire."
  },
  {
    id: 58,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "When showing a NEW suspect to the SAME witness in a second lineup, what must be done regarding the fill-ins (extras)?",
    options: [
      "New fill-ins must be used",
      "The exact same fill-ins must be kept so the witness isn't confused",
      "No fill-ins are needed for the second suspect",
      "Only 2 fill-ins are used instead of 5"
    ],
    correct: "New fill-ins must be used",
    explanation: "When showing a new suspect to the same witness, new fill-ins must be used."
  },
  {
    id: 59,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Which unit must be present to video record every live lineup?",
    options: ["Crime Lab (Forensic Services)", "Evidence Management Unit", "Technical Operations Team", "Public Information Office"],
    correct: "Crime Lab (Forensic Services)",
    explanation: "Crime Lab will be present and video record each lineup."
  },
  {
    id: 60,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "What is a 'Show-up' identification procedure? (MPCTC 04.10.01)",
    options: [
      "A 'one-on-one' identification procedure in which a victim/witness is presented with a suspect within a reasonable length of time and proximity following a crime",
      "Showing a witness 6 mugshots in a folder at the precinct",
      "Presenting a suspect on stage at the Robbery Unit with 5 fill-ins",
      "Having a forensic artist sketch a composite drawing"
    ],
    correct: "A 'one-on-one' identification procedure in which a victim/witness is presented with a suspect within a reasonable length of time and proximity following a crime",
    explanation: "A show-up is a one-on-one procedure where a victim/witness views a detained suspect within a reasonable length of time and proximity to the crime."
  },
  {
    id: 61,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "True or False: If a suspect held in custody has already been officially charged, officers may still conduct a show-up to bolster the case.",
    options: ["True", "False"],
    correct: "False",
    explanation: "If a suspect held in custody has been officially charged, a show-up will NOT be conducted."
  },
  {
    id: 62,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "How many victims/witnesses may be present at a time during a show-up, and how many times may the same suspect be presented to the same witness?",
    options: [
      "Only ONE victim/witness at a time, and the same suspect will NOT be presented to the same witness more than once",
      "Up to 3 witnesses at a time, and they can view the suspect twice",
      "All witnesses together so they can agree, viewed once",
      "One witness at a time, viewed up to three times from different distances"
    ],
    correct: "Only ONE victim/witness at a time, and the same suspect will NOT be presented to the same witness more than once",
    explanation: "Show-ups are never conducted with more than one witness at a time, and the same suspect is never shown to the same witness more than once."
  },
  {
    id: 63,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Prior to conducting a show-up, what must the victim/witness advise the officers, and how must the suspect be detained?",
    options: [
      "The witness must advise they will be able to recognize the perpetrator; the suspect is detained where located in the least restrictive manner possible",
      "The witness must guarantee 100% certainty; the suspect is transported to the precinct cellblock",
      "The witness must sign Form 15; the suspect is placed in a lineup room",
      "The witness must take a CVSA test; the suspect is driven to the crime scene"
    ],
    correct: "The witness must advise they will be able to recognize the perpetrator; the suspect is detained where located in the least restrictive manner possible",
    explanation: "The witness must advise prior to the show-up that they can recognize the perpetrator, and the suspect is detained where located in the least restrictive manner possible."
  },
  {
    id: 64,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Which form must be read by the officer, initialed, commented on, and signed by the victim/witness PRIOR to conducting a show-up or photo identification?",
    options: [
      "Form #126 (Witness Identification Admonition)",
      "Form #15 (Property Sheet)",
      "Form #128D (Disposition of Property/Evidence)",
      "Form #12L (Administrative Correspondence)"
    ],
    correct: "Form #126 (Witness Identification Admonition)",
    explanation: "Form #126 (Witness Identification Admonition) must be completed PRIOR to conducting a show-up or photo show."
  },
  {
    id: 65,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "During a show-up, who is transported to whom?",
    options: [
      "ALWAYS bring the witness to the suspect — DO NOT bring the suspect to the witness!",
      "Always bring the suspect back to the witness at the crime scene",
      "Bring both the suspect and witness to the Robbery Unit",
      "Have the suspect walk up to the witness's front door"
    ],
    correct: "ALWAYS bring the witness to the suspect — DO NOT bring the suspect to the witness!",
    explanation: "Always transport the victim/witness to the suspect's location (shielding the witness from being seen by the suspect). Never bring the suspect to the witness!"
  },
  {
    id: 66,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "What must an officer do if a detained subject is NOT identified during a show-up and officers lack any other probable cause for an arrest?",
    options: [
      "Release the subject and complete an Incident Supplement",
      "Transport the subject to the precinct for a live lineup",
      "Conduct a second show-up with the same witness 30 minutes later",
      "Hold the subject for 96 hours pending CIB review"
    ],
    correct: "Release the subject and complete an Incident Supplement",
    explanation: "If the detained subject is not identified and there is no other probable cause, release the subject and complete an Incident Supplement."
  },
  {
    id: 67,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Who is responsible for completing the Incident Supplement after a show-up, and when is it required?",
    options: [
      "The transporting officer will complete an Incident Supplement, whether or not a Statement of Charges is completed",
      "Only the detaining officer, and only if the suspect is arrested",
      "The Robbery Unit supervisor, only if the witness fails to make an ID",
      "The Crime Lab technician within 30 days"
    ],
    correct: "The transporting officer will complete an Incident Supplement, whether or not a Statement of Charges is completed",
    explanation: "The transporting officer must complete an Incident Supplement documenting the 6 required show-up details whether or not charges are filed."
  },
  {
    id: 68,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Which of the following is one of the 6 required items that must be documented in a Show-up Incident Supplement?",
    options: [
      "Name of the officer who transported the victim/witness and the type of transportation (e.g., marked, unmarked, nondescript)",
      "The serial number of the officer's service weapon",
      "Four copies of Form 15 signed by a witness officer",
      "The results of the IBIS test fire"
    ],
    correct: "Name of the officer who transported the victim/witness and the type of transportation (e.g., marked, unmarked, nondescript)",
    explanation: "The 6 items are: (1) Detaining officer(s), (2) Date/time/location of show-up, (3) Full info of detained subject, (4) Results & statements made, (5) Name of witness, (6) Transporting officer & type of transportation."
  },
  {
    id: 69,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "When is a Single Photo Identification acceptable, and how is the photo handled afterward?",
    options: [
      "Only in very limited circumstances (last resort) when the witness is already familiar with the suspect and you need to verify identity; witness signs the photo and it is packaged as evidence",
      "Whenever an officer wants to save time instead of building a 6-person photo array; the photo is discarded afterward",
      "On all stranger armed robberies; the suspect signs the photo",
      "Never; single photo identifications are prohibited in all circumstances"
    ],
    correct: "Only in very limited circumstances (last resort) when the witness is already familiar with the suspect and you need to verify identity; witness signs the photo and it is packaged as evidence",
    explanation: "Single photo IDs are a last resort used only when the witness is familiar with the suspect to verify identity. The witness signs the photo and it is packaged as evidence."
  },
  {
    id: 70,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "How does an investigating officer request a Forensic Artist Composite?",
    options: [
      "With supervisor approval, contact the Robbery Unit (only approved forensic artists or surrounding jurisdictions may create composites)",
      "Have any patrol officer sketch the suspect on the back of Form 15",
      "Contact the Evidence Management Unit directly without supervisor approval",
      "Submit a Form 128D to the Arson Team"
    ],
    correct: "With supervisor approval, contact the Robbery Unit (only approved forensic artists or surrounding jurisdictions may create composites)",
    explanation: "Forensic artist composites may be requested with supervisor approval by contacting the Robbery Unit."
  },
  {
    id: 71,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "In the 1995 Oklahoma City Bombing case study, what key piece of physical evidence led investigators to a Kansas body shop and a composite sketch of Timothy McVeigh?",
    options: [
      "The rear axle of a rented Ryder truck (with a traceable VIN)",
      "A latent fingerprint lifted from a hotel registration card",
      "A license plate reader (LPR) scan on Interstate 35",
      "A firearm test-fired through the IBIS database"
    ],
    correct: "The rear axle of a rented Ryder truck (with a traceable VIN)",
    explanation: "On April 20, 1995, the rear axle of the Ryder truck was located, its VIN was traced to a Kansas rental shop, and employees helped the FBI create the composite sketch of McVeigh."
  },
  {
    id: 72,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "For Robbery Unit cases, what must a patrol officer do before conducting any show-ups / one-on-ones?",
    options: [
      "Ask the Robbery Unit for permission first",
      "Have the suspect sign a polygraph waiver",
      "Wait 96 hours",
      "Transport the suspect to the witness's workplace"
    ],
    correct: "Ask the Robbery Unit for permission first",
    explanation: "On Robbery Unit cases, always ask permission first before doing any show-ups or one-on-ones!"
  },
  {
    id: 73,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Under Special Order #2017-03, in which of the following situations is Mobile Fingerprint Identification authorized?",
    options: [
      "When the subject is under arrest, gives consent, or via search warrant, OR to identify deceased, unconscious, or individuals incapable of giving consent",
      "On any pedestrian who refuses to answer questions during a neighborhood canvass",
      "As a complete replacement for routine fingerprinting during booking after an arrest",
      "By any untrained recruit without supervisor approval"
    ],
    correct: "When the subject is under arrest, gives consent, or via search warrant, OR to identify deceased, unconscious, or individuals incapable of giving consent",
    explanation: "Mobile Fingerprint ID must be used by a trained member when a subject is under arrest, gives consent, or via search warrant, or for deceased/unconscious/incapable individuals."
  },
  {
    id: 74,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Who must approve the use of a Mobile Fingerprint Identification scanner, and does it replace routine arrest fingerprinting?",
    options: [
      "Approved by a shift commander, documented in the report, and it is NOT a replacement for routine fingerprinting during arrest",
      "Approved by the Crime Lab, and it replaces all booking fingerprints",
      "Approved by the dispatcher, with no report documentation required",
      "Approved by the State's Attorney, and only used in homicide cases"
    ],
    correct: "Approved by a shift commander, documented in the report, and it is NOT a replacement for routine fingerprinting during arrest",
    explanation: "Per Special Order #2017-03, use of the mobile scanner must be approved by a shift commander, documented in the report, and does NOT replace routine arrest fingerprinting."
  },
  {
    id: 75,
    lesson: "lesson6",
    category: "L.6 • Identification Procedures",
    q: "Why must officers exercise caution when deciding whether to conduct an eyewitness identification procedure?",
    options: [
      "It can be used against the State's case in court, is risky if the witness is not confident, and may not be beneficial if you already have enough evidence identifying the suspect",
      "Because every identification procedure requires four copies of Form 15",
      "Because witnesses are legally required to pay $4 to view a lineup",
      "Because show-ups can only be conducted after a suspect is formally indicted"
    ],
    correct: "It can be used against the State's case in court, is risky if the witness is not confident, and may not be beneficial if you already have enough evidence identifying the suspect",
    explanation: "ID procedures can be used against the State's case if a shaky witness fails to ID, and may be unnecessary if strong independent evidence already identifies the suspect."
  },

  // =========================================================================
  // LESSON 10: FOUND PROPERTY & PROPERTY FORMS/TAGS (25 QUESTIONS)
  // =========================================================================
  {
    id: 76,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "What is Form #15, and how are its front and back sides used?",
    options: [
      "Property Sheet — always complete the front when taking property; complete the rear (back) to release property back to the owner",
      "Witness Identification Admonition — front for show-ups, back for photo arrays",
      "Disposition of Property/Evidence — front for EMU, back for District Court",
      "Vehicle Inventory Log — front for tow driver, back for shift commander"
    ],
    correct: "Property Sheet — always complete the front when taking property; complete the rear (back) to release property back to the owner",
    explanation: "Form #15 is the Property Sheet: always complete the front, and complete the rear section (signed by the owner) to release property back to the owner."
  },
  {
    id: 77,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "How many copies of Form #15 (Property Sheet) are required for standard Found Property calls, and which two categories require FOUR (4) copies?",
    options: [
      "3 copies for standard found property; 4 copies for Firearms and CDS (Narcotics)",
      "2 copies for standard found property; 4 copies for Bicycles and Alcohol",
      "4 copies for all found property; 6 copies for Firearms",
      "1 copy for standard found property; 3 copies for Vehicles and Boats"
    ],
    correct: "3 copies for standard found property; 4 copies for Firearms and CDS (Narcotics)",
    explanation: "All calls of Found Property require a total of 3 Form #15 Property Sheets EXCEPT Firearms and CDS, which require 4 Form #15 Property Sheets."
  },
  {
    id: 78,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "What four items of documentation are required on all calls of Found Property?",
    options: [
      "1. Incident Report (or Supplement), 2. Form #15 Property Sheets, 3. Form #128 Disposition of Property/Evidence, and 4. The appropriate tag",
      "1. Form #126, 2. Form #78, 3. Form #320, and 4. A Crime Lab video",
      "1. Traffic citation, 2. ACRS report, 3. Form #12L, and 4. Biohazard sticker",
      "1. Search warrant, 2. Polygraph chart, 3. NCIC hit confirmation, and 4. Certified mail receipt"
    ],
    correct: "1. Incident Report (or Supplement), 2. Form #15 Property Sheets, 3. Form #128 Disposition of Property/Evidence, and 4. The appropriate tag",
    explanation: "All Found Property calls require an Incident Report/Supplement, Form #15 Property Sheets, Form #128 Disposition of Property/Evidence, and the appropriate tag."
  },
  {
    id: 79,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "How are claims handled when Found Property is 'in dispute' (more than one person claims ownership)?",
    options: [
      "It will NOT be given to any claimant unless the other claimants renounce all claims in writing OR upon order by the Chief of Police",
      "It is given to whichever claimant arrived at the precinct front desk first",
      "It is immediately sold at auction after 7 days",
      "The patrol officer decides who looks more credible and releases it on Form #126"
    ],
    correct: "It will NOT be given to any claimant unless the other claimants renounce all claims in writing OR upon order by the Chief of Police",
    explanation: "Property in dispute will not be given to any claimant unless other claimants renounce all claims in writing or upon order by the Chief of Police."
  },
  {
    id: 80,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "If the owner of found property cannot be located, after how many days can the civilian finder claim eligible property? (MPCTC 06.05.09)",
    options: ["At the end of 30 days", "At the end of 90 days", "At the end of 10 days", "At the end of 1 year"],
    correct: "At the end of 30 days",
    explanation: "At the end of 30 days, if the owner cannot be located, the person who found the property can claim it (unless it is a prohibited type)."
  },
  {
    id: 81,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Which 5 types of property CANNOT be claimed by the finder after 30 days (and are instead sold at auction or destroyed)?",
    options: [
      "Guns, Motorized Vehicles, Boats, CDS or related contraband, and Weapons of any type",
      "Bicycles, Cell phones, Jewelry, Watches, and Cash under $100",
      "Clothing, Backpacks, Strollers, Umbrellas, and Books",
      "Tools, Lawn equipment, Sporting goods, Musical instruments, and Furniture"
    ],
    correct: "Guns, Motorized Vehicles, Boats, CDS or related contraband, and Weapons of any type",
    explanation: "Guns, motorized vehicles (title issues), boats (titling issues), CDS/contraband, and weapons of any type cannot be claimed by the finder."
  },
  {
    id: 82,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Which two types of property may NEVER be claimed by EITHER the owner OR the finder? (MPCTC 04.15.03)",
    options: [
      "CDS and Contraband",
      "Bicycles and Cell phones",
      "Motorized vehicles and Boats",
      "Cash and Jewelry"
    ],
    correct: "CDS and Contraband",
    explanation: "Per MPCTC 04.15.03, CDS and Contraband may NEVER be claimed by either the owner or the finder."
  },
  {
    id: 83,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "When found property is eligible to be claimed by the finder, you must document whether or not the finder wishes to claim it FOUR (4) times. What are those 4 places?",
    options: [
      "1. Incident Report narrative, 2. Form #15 Property Sheet, 3. Miscellaneous Property Tag, and 4. Form #128D",
      "1. Roll call book, 2. MDT broadcast, 3. Pocket notebook, and 4. Evidence.com",
      "1. Form #126, 2. Form #78, 3. NCIC entry, and 4. Witness statement",
      "1. Front of Form #15, 2. Back of Form #15, 3. Firearms tag, and 4. IBIS log"
    ],
    correct: "1. Incident Report narrative, 2. Form #15 Property Sheet, 3. Miscellaneous Property Tag, and 4. Form #128D",
    explanation: "Whether the finder wishes to claim the property must be documented 4 times: (1) Incident Report narrative, (2) Form #15, (3) Miscellaneous Property Tag, and (4) Form #128D."
  },
  {
    id: 84,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "By when must all found property be properly packaged and stored?",
    options: [
      "Prior to the end of your tour of duty",
      "Within 72 hours of recovery",
      "Before the next bi-weekly pay period",
      "Within 30 days"
    ],
    correct: "Prior to the end of your tour of duty",
    explanation: "All found property must be properly packaged and stored prior to the end of your tour of duty."
  },
  {
    id: 85,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "True or False: If a BCoPD officer finds unclaimed property in Baltimore County while OFF duty, the officer has the same right as a civilian to claim it after 30 days.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Members finding property in Baltimore County, ON OR OFF DUTY, have NO right to claim found property."
  },
  {
    id: 86,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "How should alcoholic beverage containers recovered as evidence or found property be handled and documented?",
    options: [
      "Photograph container first (upload via BWC to Evidence.com), empty contents into a precinct drain & discard container in trash, document basis of belief & manner of disposal in Incident Report, and notify supervisor",
      "Package the liquid in a cardboard box and ship it to the Evidence Management Unit for 30 days",
      "Have the finder drink or pour it out on the sidewalk without taking any photographs",
      "Complete 4 copies of Form #15 and send the bottle to the Firearms Interdiction Team"
    ],
    correct: "Photograph container first (upload via BWC to Evidence.com), empty contents into a precinct drain & discard container in trash, document basis of belief & manner of disposal in Incident Report, and notify supervisor",
    explanation: "Photograph the container first (photo becomes your evidence on Evidence.com), empty into a precinct drain, trash the container, document basis of belief + disposal in report, and notify supervisor."
  },
  {
    id: 87,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "What documentation and actions are required when handling Found Narcotics (CDS)?",
    options: [
      "An Incident Report, 4 Form #15 Property Sheets, seize/package per regulations and submit to EMU, and a Form #128D stating the property is to be destroyed",
      "Flush the narcotics down the precinct drain, take a BWC photo, and complete 1 Form #15",
      "Complete 3 Form #15s and hold the narcotics in your patrol car until the owner claims them",
      "Submit only a Miscellaneous Property Tag with no Incident Report"
    ],
    correct: "An Incident Report, 4 Form #15 Property Sheets, seize/package per regulations and submit to EMU, and a Form #128D stating the property is to be destroyed",
    explanation: "Found Narcotics require an Incident Report, 4 Form #15 Property Sheets, proper packaging/submission to EMU, and a Form #128D stating the property is to be destroyed."
  },
  {
    id: 88,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "When recovering a found firearm, what must you do if you are unsure how to unload it, and who must sign Form #15 once it is clear and safe?",
    options: [
      "Contact the Firearms Interdiction Team (FIT) or Forensic Services Section if unsure; once clear and safe, have a witness officer sign Form #15",
      "Leave the firearm loaded inside a plastic bag; have the finder sign Form #15",
      "Fire the weapon into the ground to clear it; have the dispatcher sign Form #126",
      "Submerge the weapon in water; no witness signature is required"
    ],
    correct: "Contact the Firearms Interdiction Team (FIT) or Forensic Services Section if unsure; once clear and safe, have a witness officer sign Form #15",
    explanation: "Contact FIT or Forensic Services if unsure how to unload; after the firearm is clear and safe, have a witness officer sign Form #15."
  },
  {
    id: 89,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Can multiple firearms and firearm-related evidence (magazines, casings, ammo) be listed on the same Form #15, and can other property (like a wallet or drugs) be on that same Form #15?",
    options: [
      "Multiple firearms and firearm-related items CAN be on the same Form #15, but they MUST be on a separate Form #15 from any other category of property/evidence",
      "Every single bullet must have its own separate Form #15",
      "Firearms, drugs, and cash should all be combined onto a single Form #15",
      "Firearms do not require a Form #15 if they have a tag attached"
    ],
    correct: "Multiple firearms and firearm-related items CAN be on the same Form #15, but they MUST be on a separate Form #15 from any other category of property/evidence",
    explanation: "Multiple firearms and firearm-related evidence can share a Form #15, but must be on a separate Form #15 from any other category of property or evidence."
  },
  {
    id: 90,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Where must the Firearms Evidence Tag be wired on ALL firearms (including relinquished or found firearms)?",
    options: [
      "Wired securely to the trigger guard or grip area to the rear of the trigger",
      "Taped over the muzzle of the barrel",
      "Tied directly around the trigger itself",
      "Placed inside the magazine well"
    ],
    correct: "Wired securely to the trigger guard or grip area to the rear of the trigger",
    explanation: "All firearms must have a Firearms Evidence Tag wired securely to the trigger guard or grip area to the rear of the trigger."
  },
  {
    id: 91,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "True or False: If the rightful owner of a found firearm comes to the precinct with a valid permit and receipt, the patrol officer may release the firearm to them at the front desk. (MPCTC 04.17.00)",
    options: ["True", "False"],
    correct: "False",
    explanation: "Officers may NEVER release any type of firearm back to the owner! All firearms are released exclusively by the Evidence Management Unit (EMU)."
  },
  {
    id: 92,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "What are the minimum age requirements for a claimant to have a handgun or a long gun released to them?",
    options: [
      "At least 21 for handguns and at least 18 for long guns",
      "At least 18 for handguns and at least 16 for long guns",
      "At least 25 for both handguns and long guns",
      "At least 21 for both handguns and long guns"
    ],
    correct: "At least 21 for handguns and at least 18 for long guns",
    explanation: "A firearm claimant must not be under the age of 21 for handguns or under 18 for long guns."
  },
  {
    id: 93,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Which of the following would DISQUALIFY a claimant from having a firearm released to them?",
    options: [
      "Any of these: convicted of a crime of violence or misdemeanor domestic violence, fugitive from justice, unlawful user/addicted to alcohol/drugs, or adjudicated mentally defective",
      "Having a parking ticket in another county",
      "Being 22 years old and claiming a handgun",
      "Providing positive proof of ownership"
    ],
    correct: "Any of these: convicted of a crime of violence or misdemeanor domestic violence, fugitive from justice, unlawful user/addicted to alcohol/drugs, or adjudicated mentally defective",
    explanation: "Disqualifiers include convictions for crimes of violence or misdemeanor domestic violence, fugitive status, unlawful substance use/addiction, mental adjudication, underage, or illegal/contraband firearm."
  },
  {
    id: 94,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "When an officer determines a firearm claimant IS qualified, what forms are completed, which unit conducts the in-depth background check, and how is the claimant notified?",
    options: [
      "Incident Supplement + Form #128D ('Property Released To') → forwarded to Firearms Interdiction Team (FIT) → EMU notifies claimant via certified mail to pick up at Public Safety Building",
      "Form #126 → forwarded to Robbery Unit → patrol officer delivers gun to claimant's home",
      "Form #15 back side only → Arson Team reviews → claimant picks up at precinct",
      "Form #12L → State's Attorney reviews → gun is mailed directly to claimant's house"
    ],
    correct: "Incident Supplement + Form #128D ('Property Released To') → forwarded to Firearms Interdiction Team (FIT) → EMU notifies claimant via certified mail to pick up at Public Safety Building",
    explanation: "The officer completes the Supplement + Form #128D ('Property Released To'), FIT conducts an in-depth background check, and EMU notifies the claimant via certified mail."
  },
  {
    id: 95,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Before a handgun (and most long guns) is released to its owner, what ballistic test is performed and how long does it take per gun?",
    options: [
      "Test fired and entered into IBIS (Integrated Ballistic Identification System) to assure it wasn't used in a crime; takes 1 to 1.5 hours per gun",
      "Melted down for metallurgical testing; takes 30 days",
      "Tested with a polygraph examiner; takes 15 minutes",
      "Scanned in RAPID and Delta Plus; takes 5 minutes"
    ],
    correct: "Test fired and entered into IBIS (Integrated Ballistic Identification System) to assure it wasn't used in a crime; takes 1 to 1.5 hours per gun",
    explanation: "All handguns and most long guns are test fired into IBIS prior to release (taking 1 to 1.5 hours per gun) to assure they weren't used in a crime."
  },
  {
    id: 96,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "If a firearm claimant is DENIED ownership, what block is checked on Form #128, and how many days does the claimant have to petition the District Court of Maryland after EMU notice?",
    options: [
      "Check 'Property May be Disposed of' on Form #128; claimant has 30 days to petition the District Court of Maryland",
      "Check 'Property Released To' on Form #128D; claimant has 96 hours to appeal to the Governor",
      "Check 'Hold for Auction'; claimant has 7 days to petition the Circuit Court",
      "No form is completed; claimant has 1 year to reapply"
    ],
    correct: "Check 'Property May be Disposed of' on Form #128; claimant has 30 days to petition the District Court of Maryland",
    explanation: "When denied, document reasons on the Incident Supplement and Form #128 ('Property May be Disposed of'). EMU notifies the claimant/attorney of their right to petition the District Court within 30 days."
  },
  {
    id: 97,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "How must contaminated property (suspected of body fluid contamination) and perishable property be handled?",
    options: [
      "Contaminated property must be distinctly labeled 'Biohazard'; perishable property must be promptly refrigerated/cared for and reported to the shift commander",
      "Both must be thrown in the precinct trash can after taking a BWC photo",
      "Contaminated property is left at the scene; perishable property is given to the finder",
      "Both are sent to the Robbery Unit without labels"
    ],
    correct: "Contaminated property must be distinctly labeled 'Biohazard'; perishable property must be promptly refrigerated/cared for and reported to the shift commander",
    explanation: "Property contaminated by body fluids is distinctly labeled 'Biohazard'; perishable property is promptly refrigerated/cared for and reported to the shift commander."
  },
  {
    id: 98,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "Who should an officer contact for direction when recovering large amounts of cash, CDS, high-value valuables, or volatile items?",
    options: [
      "Contact the Evidence Management Unit (EMU) for direction",
      "Contact the Regional Auto Theft Task Force",
      "Store them in your personal locker until trial",
      "Turn them over to the local bank branch"
    ],
    correct: "Contact the Evidence Management Unit (EMU) for direction",
    explanation: "For large amounts of cash, CDS, valuables, or volatile items, contact EMU for direction."
  },
  {
    id: 99,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "If a truck carrying valuable cargo is involved in an accident, who should be contacted ASAP?",
    options: [
      "The trucking and insurance companies",
      "The Crimes Against Children Unit",
      "The Forensic Artist",
      "The Department of Aging"
    ],
    correct: "The trucking and insurance companies",
    explanation: "If trucks with valuable cargo are involved in an accident, the trucking and insurance companies should be contacted ASAP."
  },
  {
    id: 100,
    lesson: "lesson10",
    category: "L.10 • Found Property",
    q: "During an EVICTION, if the owner cannot be located or refuses to take responsibility, which 5 categories of items must officers take into custody?",
    options: [
      "(a) Small loose valuables, (b) Dangerous items (guns/explosives/ammo), (c) Contraband/drugs (incl. prescriptions)/alcohol, (d) Medicines and poisons, and (e) Any hazardous items",
      "All living room furniture, mattresses, clothing, kitchen appliances, and televisions",
      "Only motorized vehicles and boats parked in the driveway",
      "Nothing; all items including firearms and drugs are left on the curb"
    ],
    correct: "(a) Small loose valuables, (b) Dangerous items (guns/explosives/ammo), (c) Contraband/drugs (incl. prescriptions)/alcohol, (d) Medicines and poisons, and (e) Any hazardous items",
    explanation: "During evictions, officers take custody of: (a) small loose valuables, (b) dangerous items, (c) contraband/drugs/prescription meds/alcohol, (d) medicines & poisons, and (e) any hazardous items."
  }
];

let activeQuestions = [];
let currentQIndex = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showStartScreen() {
  document.getElementById('start-screen').classList.remove('hidden');
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.add('hidden');
}

function startQuiz() {
  const selectedTopic = document.getElementById('topic-select').value;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  document.getElementById('results-screen').classList.add('hidden');

  let pool = unitFQuestions;
  if (selectedTopic !== 'all') {
    pool = unitFQuestions.filter(item => item.lesson === selectedTopic);
  }

  // Pick 10 random questions from the selected pool
  activeQuestions = shuffleArray([...pool]).slice(0, 10);
  currentQIndex = 0;
  score = 0;

  loadQuestion();
}

function loadQuestion() {
  const q = activeQuestions[currentQIndex];
  document.getElementById('question-counter').textContent = `Question ${currentQIndex + 1} of 10`;
  document.getElementById('question-category').textContent = q.category;
  document.getElementById('question-text').textContent = q.q;

  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.classList.add('hidden');
  feedbackBox.innerHTML = '';

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const isTrueFalse = q.options.length === 2 && q.options.includes("True") && q.options.includes("False");
  const displayOptions = isTrueFalse ? ["True", "False"] : shuffleArray([...q.options]);

  displayOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 bg-slate-700/50 hover:bg-cyan-600/80 rounded-xl border border-slate-600 font-medium transition-colors text-sm sm:text-base";
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
      b.classList.remove('bg-slate-700/50', 'hover:bg-cyan-600/80');
      b.classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');
    } else if (b.textContent === selected && selected !== qObj.correct) {
      b.classList.remove('bg-slate-700/50', 'hover:bg-cyan-600/80');
      b.classList.add('bg-rose-600', 'border-rose-400', 'text-white');
    }
  });

  if (selected === qObj.correct) {
    score++;
  }

  const feedbackBox = document.getElementById('feedback-box');
  if (qObj.explanation) {
    feedbackBox.innerHTML = `<span class="font-bold ${selected === qObj.correct ? 'text-emerald-400' : 'text-rose-400'}">${selected === qObj.correct ? '✓ Correct:' : '✗ Incorrect:'}</span> ${qObj.explanation}`;
    feedbackBox.classList.remove('hidden');
  }

  setTimeout(() => {
    currentQIndex++;
    if (currentQIndex < activeQuestions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 2400);
}

function showResults() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  document.getElementById('final-score').textContent = `${score} / 10`;

  const messageEl = document.getElementById('result-message');
  if (score === 10) {
    messageEl.textContent = "Outstanding! 100% Mastery of Unit F Investigations.";
    messageEl.className = "text-emerald-400 font-bold mb-8";
  } else if (score >= 8) {
    messageEl.textContent = "Great job! You're well above the passing standard.";
    messageEl.className = "text-cyan-400 font-bold mb-8";
  } else if (score >= 7) {
    messageEl.textContent = "Passing, but review the missed objectives to lock in a higher score.";
    messageEl.className = "text-amber-400 font-bold mb-8";
  } else {
    messageEl.textContent = "Keep studying the Unit F notes and retake the exam!";
    messageEl.className = "text-rose-400 font-bold mb-8";
  }
}
