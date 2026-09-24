document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dashboard Logic (index.html) ---
    const daysCountEl = document.getElementById('days-count');
    if (daysCountEl) {
        // Countdown to April 27
        const gradDate = new Date('2027-04-27T00:00:00');
        const today = new Date();
        
        const diffTime = Math.abs(gradDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        daysCountEl.textContent = diffDays;
    }

    // Home Page Drill Widget
    const homeDrillDateEl = document.getElementById('home-next-drill-date');
    if (homeDrillDateEl) {
        const drills = [
            { dates: "17-18 October 2026", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2026-10-17T00:00:00") },
            { dates: "14-15 November 2026", type: "MUTA 4", loc: "CFMR", rawDate: new Date("2026-11-14T00:00:00") },
            { dates: "12-13 December 2026", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2026-12-12T00:00:00") },
            { dates: "23-24 January 2027", type: "MUTA 4", loc: "CFMR", rawDate: new Date("2027-01-23T00:00:00") },
            { dates: "20-21 February 2027", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2027-02-20T00:00:00") },
            { dates: "19-21 March 2027", type: "MUTA 2x2x2", loc: "CFMR", rawDate: new Date("2027-03-19T00:00:00") },
            { dates: "17-18 April 2027", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2027-04-17T00:00:00") },
            { dates: "14-16 May 2027", type: "MUTA 6", loc: "FT A.P. Hill", rawDate: new Date("2027-05-14T00:00:00") },
            { dates: "04-18 June 2027", type: "Annual Training", loc: "CFMR/LCMR", rawDate: new Date("2027-06-04T00:00:00") },
            { dates: "24-25 July 2027", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2027-07-24T00:00:00") },
            { dates: "21-22 August 2027", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2027-08-21T00:00:00") },
            { dates: "18-19 September 2027", type: "MUTA 2x2", loc: "CFMR", rawDate: new Date("2027-09-18T00:00:00") }
        ];
        
        const today = new Date();
        let nextDrill = null;
        
        drills.forEach(drill => {
            if (!nextDrill && drill.rawDate > today) {
                nextDrill = drill;
            }
        });

        if (nextDrill) {
            homeDrillDateEl.textContent = nextDrill.dates;
            document.getElementById('home-next-drill-details').textContent = `${nextDrill.type} @ ${nextDrill.loc}`;
            
            const diffTime = Math.abs(nextDrill.rawDate - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById('home-drill-countdown').textContent = diffDays;
        }
    }


    // --- 2. Module Logic (10-codes.html & alphabet.html) ---
    // Ensure data is loaded from data/codes.js
    if (typeof radioCodes !== 'undefined' && typeof phoneticAlphabet !== 'undefined') {
        
        let studyPool = [];
        let themeColorClass = 'bg-blue-600'; // Default for 10-codes
        
        // Determine which data pool to use based on the page title or URL
        if (document.title.includes('Phonetic')) {
            studyPool = [...phoneticAlphabet];
            themeColorClass = 'bg-indigo-600';
        } else if (document.title.includes('10-Code')) {
            studyPool = [...radioCodes];
        } else {
            return; // Not on a study module page
        }
        
        // --- Flashcard Logic ---
        const fcContainer = document.getElementById('flashcard-container');
        const fcFront = document.getElementById('fc-front');
        const fcBack = document.getElementById('fc-back');
        const fcProgress = document.getElementById('flashcard-progress');
        const fcCard = document.querySelector('.flip-card');
        
        let currentCardIndex = 0;
        // Shuffle the pool for flashcards
        let shuffledCards = [...studyPool].sort(() => 0.5 - Math.random());

        const loadFlashcard = (index) => {
            if(!fcFront) return; // Not on the right page
            const card = shuffledCards[index];
            fcFront.textContent = card.code;
            fcBack.textContent = card.meaning;
            fcProgress.textContent = `Card ${index + 1} of ${shuffledCards.length}`;
            // Ensure card is flipped front-side up when loading new card
            fcCard.classList.remove('flipped');
        };

        if (fcFront) loadFlashcard(currentCardIndex);

        document.getElementById('btn-next-card')?.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex + 1) % shuffledCards.length;
            loadFlashcard(currentCardIndex);
        });

        document.getElementById('btn-prev-card')?.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex - 1 + shuffledCards.length) % shuffledCards.length;
            loadFlashcard(currentCardIndex);
        });


        // --- Quiz Logic ---
        const quizContainer = document.getElementById('quiz-container');
        const quizQuestion = document.getElementById('quiz-question');
        const quizOptions = document.getElementById('quiz-options');
        const quizProgress = document.getElementById('quiz-progress');
        const quizScoreEl = document.getElementById('quiz-score');
        const quizResult = document.getElementById('quiz-result');
        const resultMessage = document.getElementById('result-message');
        const resultScoreText = document.getElementById('result-score-text');
        
        const TOTAL_QUESTIONS = 10;
        let currentQuestion = 0;
        let score = 0;
        let currentQuizCard = null;

        const startQuiz = () => {
            currentQuestion = 0;
            score = 0;
            quizResult.classList.add('hidden');
            quizQuestion.parentElement.classList.remove('hidden'); // Show question area
            loadNextQuestion();
        };

        const loadNextQuestion = () => {
            if (currentQuestion >= TOTAL_QUESTIONS) {
                showQuizResults();
                return;
            }

            // Pick a random code for the question
            currentQuizCard = studyPool[Math.floor(Math.random() * studyPool.length)];
            
            // Randomly decide if asking for meaning or asking for code
            let askForMeaning = Math.random() > 0.5;
            
            // For Phonetic Alphabet, always ask for the meaning (the word) so we can use distractors
            if (document.title.includes('Phonetic')) {
                askForMeaning = true;
                quizQuestion.textContent = `What is the phonetic word for "${currentQuizCard.code}"?`;
            } else {
                if (askForMeaning) {
                    quizQuestion.textContent = `What is the meaning of ${currentQuizCard.code}?`;
                } else {
                    quizQuestion.textContent = `What is the code for: "${currentQuizCard.meaning}"?`;
                }
            }

            // Generate options
            let optionsArray = [];
            
            if (document.title.includes('Phonetic')) {
                // Use tricky distractors that start with the same letter
                optionsArray.push(currentQuizCard);
                const shuffledDistractors = [...currentQuizCard.distractors].sort(() => 0.5 - Math.random());
                for (let i = 0; i < 3; i++) {
                    optionsArray.push({ code: currentQuizCard.code, meaning: shuffledDistractors[i] });
                }
            } else {
                // 10-Codes: Just pick random other codes as options
                const options = new Set();
                options.add(currentQuizCard);
                
                while(options.size < 4) {
                    const randomCard = studyPool[Math.floor(Math.random() * studyPool.length)];
                    options.add(randomCard);
                }
                optionsArray = Array.from(options);
            }

            // Shuffle options
            const shuffledOptions = optionsArray.sort(() => 0.5 - Math.random());

            quizOptions.innerHTML = ''; // Clear previous
            shuffledOptions.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'w-full text-left px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white transition-colors';
                btn.textContent = askForMeaning ? opt.meaning : opt.code;
                
                btn.addEventListener('click', () => handleAnswer(opt, btn));
                quizOptions.appendChild(btn);
            });

            currentQuestion++;
            quizProgress.textContent = `Question ${currentQuestion} of ${TOTAL_QUESTIONS}`;
            quizScoreEl.textContent = `Score: ${score}`;
        };

        const handleAnswer = (selectedOpt, btnElement) => {
            // Disable all buttons
            Array.from(quizOptions.children).forEach(b => b.disabled = true);
            
            // Check if both meaning and code match (important for alphabet distractors which share the same code)
            if (selectedOpt.code === currentQuizCard.code && selectedOpt.meaning === currentQuizCard.meaning) {
                // Correct
                btnElement.classList.replace('bg-slate-800', 'bg-green-600');
                btnElement.classList.replace('hover:bg-slate-700', 'bg-green-600');
                score++;
            } else {
                // Incorrect
                btnElement.classList.replace('bg-slate-800', 'bg-red-600');
                btnElement.classList.replace('hover:bg-slate-700', 'bg-red-600');
                
                // Highlight correct answer
                Array.from(quizOptions.children).forEach(b => {
                   if (b.textContent === currentQuizCard.meaning || b.textContent === currentQuizCard.code) {
                       b.classList.replace('bg-slate-800', 'bg-green-600');
                       b.classList.replace('border-slate-600', 'border-green-500');
                   }
                });
            }
            
            quizScoreEl.textContent = `Score: ${score}`;

            // Wait a moment then load next
            setTimeout(() => {
                loadNextQuestion();
            }, 1500);
        };

        const showQuizResults = () => {
            quizQuestion.parentElement.classList.add('hidden'); // Hide question area
            quizResult.classList.remove('hidden'); // Show results
            
            const percentage = (score / TOTAL_QUESTIONS) * 100;
            if (percentage === 100) {
                resultMessage.textContent = "Perfect Score! 🌟";
                resultMessage.className = "text-3xl font-bold text-green-400 mb-2";
            } else if (percentage >= 70) {
                resultMessage.textContent = "Good Job! 👍";
                resultMessage.className = "text-3xl font-bold text-blue-400 mb-2";
            } else {
                resultMessage.textContent = "Keep Studying! 📚";
                resultMessage.className = "text-3xl font-bold text-amber-400 mb-2";
            }
            
            resultScoreText.textContent = `You scored ${score} out of ${TOTAL_QUESTIONS} (${percentage}%).`;
        };

        // --- View Toggling ---
        const btnFlashcards = document.getElementById('btn-flashcards');
        const btnQuiz = document.getElementById('btn-quiz');

        btnFlashcards?.addEventListener('click', () => {
            fcContainer.classList.remove('hidden');
            quizContainer.classList.add('hidden');
            btnFlashcards.classList.replace('bg-slate-700', themeColorClass);
            btnQuiz.classList.replace(themeColorClass, 'bg-slate-700');
        });

        btnQuiz?.addEventListener('click', () => {
            fcContainer.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            btnQuiz.classList.replace('bg-slate-700', themeColorClass);
            btnFlashcards.classList.replace(themeColorClass, 'bg-slate-700');
            startQuiz(); // Reset quiz when opening
        });
        
        document.getElementById('btn-restart-quiz')?.addEventListener('click', startQuiz);

    }

});
