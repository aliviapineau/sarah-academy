const manualTrueFalse = [
    {
        q: "Recruits must back into designated recruit parking starting nearest the tennis-court side.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        q: "You must call in late or absent at least 60 minutes before reporting.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "A smartwatch is permitted to be worn during PT.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "You must hold your salute to an officer until it is returned or acknowledged.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        q: "Recruits are permitted to eat candy and mints in the classroom as long as they do not distract others.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "Missing paragraphs or having 3+ spelling errors on a Form 12L results in 25 burpees.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        q: "Most units require an 80% average to pass.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "You must report any lost or stolen police equipment immediately to your Squad sergeant or officer.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        q: "Uniformed Fire personnel must be saluted when passed outside.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "A recruit is permitted to take their laptop home if they lock it in their vehicle.",
        options: ["True", "False"],
        correct: "False"
    }
];

const manualMultipleChoice = [
    {
        q: "What is the required arrival time for the first day, Monday, September 21?",
        options: ["0630", "0700", "0600", "0500"],
        correct: "0500"
    },
    {
        q: "What color ink must be used for completing Form 78 and official handwriting?",
        options: ["Blue", "Blue or Black", "Red", "Black"],
        correct: "Black"
    },
    {
        q: "What size water bottle is required for the PT bag?",
        options: ["At least 16 oz", "At least 64 oz", "1 Gallon", "At least 32 oz"],
        correct: "At least 32 oz"
    },
    {
        q: "When do the 'other listed demerits' officially start being enforced according to the manual?",
        options: ["Day 1", "Week 2", "Week 5", "Week 3"],
        correct: "Week 3"
    },
    {
        q: "What is the standard distance for a demerit run per infraction?",
        options: ["1 mile", "2 miles", "3 miles", "1.5 miles"],
        correct: "1.5 miles"
    },
    {
        q: "Which of the following is an immediate Honor Code violation?",
        options: ["Lateness", "Sleeping in class", "Missing a deadline", "Plagiarism"],
        correct: "Plagiarism"
    },
    {
        q: "What is the correct order for the first three levels of the chain of command?",
        options: ["Squad leader -> Squad officer -> Squad sergeant", "President -> Squad leader -> Squad officer", "Squad officer -> ELT lieutenant -> Training Commander", "Squad leader -> Vice president -> President"],
        correct: "Squad leader -> Vice president -> President"
    },
    {
        q: "When saluting an officer, within how many paces should the salute be initiated?",
        options: ["3 paces", "10 paces", "12 paces", "6 paces"],
        correct: "6 paces"
    },
    {
        q: "What is the required passing score for CEW/Taser?",
        options: ["70%", "80%", "90%", "100%"],
        correct: "100%"
    },
    {
        q: "What is the required passing score for CPR?",
        options: ["70%", "80%", "100%", "84%"],
        correct: "84%"
    },
    {
        q: "How long is the allotted time for lunch in the cafeteria?",
        options: ["20 minutes", "45 minutes", "60 minutes", "30 minutes"],
        correct: "30 minutes"
    },
    {
        q: "Which form is used for official written correspondence to Training Staff?",
        options: ["Form 78", "Form A", "Form 320", "Form 12L"],
        correct: "Form 12L"
    },
    {
        q: "What happens if a recruit's unit average falls below 75%?",
        options: ["Dismissal", "25 burpees", "Demerit run", "Probation"],
        correct: "Probation"
    },
    {
        q: "What must a recruit provide after any sick leave?",
        options: ["Note from Squad leader", "Negative COVID test", "Form 12L", "Doctor documentation and explanation"],
        correct: "Doctor documentation and explanation"
    },
    {
        q: "When must a recruit report a serious traffic violation?",
        options: ["Within 24 hours", "At next shift", "Within 48 hours", "Immediately on/off duty"],
        correct: "Immediately on/off duty"
    },
    {
        q: "Which of the following items is permitted to be stored in your vehicle according to the manual?",
        options: ["Laptop", "Edged weapons", "Department firearm", "Tobacco/nicotine"],
        correct: "Tobacco/nicotine"
    },
    {
        q: "What form is used as a laptop usage log during the specified first-week period?",
        options: ["Form 78", "Form A", "Form 12L", "Form 320"],
        correct: "Form 320"
    },
    {
        q: "In a bona fide emergency, how should an accidental off-duty radio transmission be handled?",
        options: ["Ignore it", "Call 911", "Turn off the radio immediately", "Tell dispatcher and email squad leadership"],
        correct: "Tell dispatcher and email squad leadership"
    },
    {
        q: "What should recruits bring on a ride-along?",
        options: ["Department firearm", "Personal laptop", "Civilian clothes", "Food requiring no heating"],
        correct: "Food requiring no heating"
    },
    {
        q: "Which radio code means 'Officer needs assistance'?",
        options: ["10-10", "10-31", "10-78", "Signal 13"],
        correct: "Signal 13"
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

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    
    // Pick exactly 2 T/F and exactly 8 MC
    const tfPool = shuffleArray([...manualTrueFalse]).slice(0, 2);
    const mcPool = shuffleArray([...manualMultipleChoice]).slice(0, 8);
    
    // Combine and shuffle the 10 questions
    activeQuestions = shuffleArray([...tfPool, ...mcPool]);
    
    currentQIndex = 0;
    score = 0;
    
    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQIndex];
    document.getElementById('question-counter').textContent = \`Question \${currentQIndex + 1} of 10\`;
    document.getElementById('question-text').textContent = q.q;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Shuffle options so correct answer isn't always in the same spot
    const shuffledOptions = shuffleArray([...q.options]);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 bg-slate-700/50 hover:bg-purple-600 rounded-xl border border-slate-600 font-medium transition-colors";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, q.correct, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnNode) {
    // Disable all buttons
    const buttons = document.getElementById('options-container').querySelectorAll('button');
    buttons.forEach(b => {
        b.disabled = true;
        if (b.textContent === correct) {
            b.classList.remove('bg-slate-700/50', 'hover:bg-purple-600');
            b.classList.add('bg-emerald-600', 'border-emerald-500'); // Highlight correct green
        } else if (b.textContent === selected && selected !== correct) {
            b.classList.remove('bg-slate-700/50', 'hover:bg-purple-600');
            b.classList.add('bg-rose-600', 'border-rose-500'); // Highlight wrong red
        }
    });

    if (selected === correct) score++;
    
    setTimeout(() => {
        currentQIndex++;
        if (currentQIndex < activeQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500); // 1.5 second delay before next question
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = \`\${score} / 10\`;
    
    const messageEl = document.getElementById('result-message');
    if (score === 10) {
        messageEl.textContent = "Perfect! You know the manual inside and out.";
        messageEl.className = "text-emerald-400 font-bold mt-4";
    } else if (score >= 7) {
        messageEl.textContent = "Good job! A quick review will get you to 100%.";
        messageEl.className = "text-purple-400 font-bold mt-4";
    } else {
        messageEl.textContent = "You need to review the Academy Handbook before Day 1!";
        messageEl.className = "text-rose-400 font-bold mt-4";
    }
}
