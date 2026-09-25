document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // EAGLE EYE OBSERVATION GAME LOGIC
    // =========================================================================
    if (document.title.includes('Observation') || document.title.includes('Eagle Eye')) {
        const startScreen = document.getElementById('obs-start');
        const viewScreen = document.getElementById('obs-view');
        const quizScreen = document.getElementById('obs-quiz');
        const resultScreen = document.getElementById('obs-result');
        
        const btnStart = document.getElementById('btn-start-obs');
        const btnNext = document.getElementById('btn-next-obs');
        
        const timerEl = document.getElementById('obs-timer');
        const contentEl = document.getElementById('obs-content');
        const titleEl = document.getElementById('obs-scene-title');
        
        const questionEl = document.getElementById('obs-question');
        const optionsEl = document.getElementById('obs-options');
        const resultMsg = document.getElementById('obs-result-msg');
        const resultDesc = document.getElementById('obs-result-desc');

        const scenes = [
            {
                title: "Scene 1: Suspect Description",
                content: `
                    <div class="flex justify-center items-center w-full h-full max-h-80 overflow-hidden rounded-xl border border-slate-600 shadow-inner">
                        <img src="assets/suspect1.png" alt="Suspect" class="object-cover max-h-full">
                    </div>
                `,
                question: "Which wrist was the suspect wearing the watch on?",
                correct: "Right wrist",
                options: ["Left wrist", "Right wrist", "Neither", "Both wrists"]
            },
            {
                title: "Scene 2: Traffic Stop",
                content: `
                    <div class="text-center bg-slate-800 p-6 rounded-xl border border-slate-600 w-full max-w-sm mx-auto shadow-inner">
                        <div class="text-6xl mb-4">🚗</div>
                        <p class="text-slate-300 font-bold mb-2">Vehicle Details</p>
                        <p class="text-xl text-teal-400 font-mono tracking-widest bg-slate-900 py-2 rounded">JXP-9482</p>
                        <p class="mt-4 text-slate-400 text-sm">2018 Blue Honda Civic. Bumper sticker on the bottom left.</p>
                    </div>
                `,
                question: "What was the license plate number?",
                correct: "JXP-9482",
                options: ["JXP-8492", "JPX-9482", "JXP-9482", "KXP-9482"]
            },
            {
                title: "Scene 3: Desk Contraband",
                content: `
                    <div class="flex justify-center gap-6 bg-slate-800 p-8 rounded-xl border border-slate-600 w-full max-w-md mx-auto shadow-inner text-5xl">
                        <span>📱</span>
                        <span>🔪</span>
                        <span>🍬</span>
                        <span>💊</span>
                    </div>
                    <p class="mt-4 text-slate-400 text-sm">Contraband confiscated from locker #42.</p>
                `,
                question: "Which item was NOT on the desk?",
                correct: "Cigarettes",
                options: ["Cell phone", "Candy", "Cigarettes", "Pills"]
            }
        ];

        let currentSceneIndex = 0;
        let viewInterval;

        const startObservation = () => {
            startScreen.classList.add('hidden');
            resultScreen.classList.add('hidden');
            quizScreen.classList.add('hidden');
            viewScreen.classList.remove('hidden');
            viewScreen.classList.add('flex');

            const scene = scenes[currentSceneIndex];
            titleEl.textContent = scene.title;
            contentEl.innerHTML = scene.content;

            let timeLeft = 10;
            timerEl.textContent = timeLeft;

            viewInterval = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(viewInterval);
                    showQuiz();
                }
            }, 1000);
        };

        const showQuiz = () => {
            viewScreen.classList.add('hidden');
            viewScreen.classList.remove('flex');
            quizScreen.classList.remove('hidden');
            quizScreen.classList.add('flex');

            const scene = scenes[currentSceneIndex];
            questionEl.textContent = scene.question;
            optionsEl.innerHTML = '';

            const shuffledOptions = [...scene.options].sort(() => 0.5 - Math.random());

            shuffledOptions.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'w-full text-left px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white transition-colors';
                btn.textContent = opt;
                
                btn.addEventListener('click', () => handleObsAnswer(opt, btn, scene.correct));
                optionsEl.appendChild(btn);
            });
        };

        const handleObsAnswer = (selected, btn, correct) => {
            Array.from(optionsEl.children).forEach(b => b.disabled = true);

            if (selected === correct) {
                btn.classList.replace('bg-slate-800', 'bg-green-600');
                btn.classList.replace('hover:bg-slate-700', 'bg-green-600');
                showResult(true);
            } else {
                btn.classList.replace('bg-slate-800', 'bg-red-600');
                btn.classList.replace('hover:bg-slate-700', 'bg-red-600');
                
                Array.from(optionsEl.children).forEach(b => {
                    if (b.textContent === correct) {
                        b.classList.replace('bg-slate-800', 'bg-green-600');
                        b.classList.replace('border-slate-600', 'border-green-500');
                    }
                });
                showResult(false);
            }
        };

        const showResult = (passed) => {
            setTimeout(() => {
                quizScreen.classList.add('hidden');
                quizScreen.classList.remove('flex');
                resultScreen.classList.remove('hidden');

                if (passed) {
                    resultMsg.textContent = "Sharp Eye! 🦅";
                    resultMsg.className = "text-3xl font-bold text-teal-400 mb-2";
                    resultDesc.textContent = "You remembered the details perfectly.";
                } else {
                    resultMsg.textContent = "Detail Missed! ❌";
                    resultMsg.className = "text-3xl font-bold text-rose-400 mb-2";
                    resultDesc.textContent = "In the field, details matter. Stay sharp.";
                }

                currentSceneIndex++;
                if (currentSceneIndex >= scenes.length) {
                    currentSceneIndex = 0; // Reset for infinite play loop
                    btnNext.textContent = "Play Again";
                } else {
                    btnNext.textContent = "Next Challenge";
                }
            }, 1500);
        };

        btnStart?.addEventListener('click', startObservation);
        btnNext?.addEventListener('click', startObservation);
    }


    // =========================================================================
    // SPLIT-SECOND SALUTE GAME LOGIC
    // =========================================================================
    if (document.title.includes('Salute')) {
        const startScreen = document.getElementById('salute-start');
        const gameScreen = document.getElementById('salute-game');
        const gameoverScreen = document.getElementById('salute-gameover');
        
        const btnStart = document.getElementById('btn-start-salute');
        const btnRestart = document.getElementById('btn-restart-salute');
        
        const btnDoSalute = document.getElementById('btn-do-salute');
        const btnNoSalute = document.getElementById('btn-no-salute');
        
        const emojiEl = document.getElementById('salute-emoji');
        const scenarioEl = document.getElementById('salute-scenario');
        const scoreEl = document.getElementById('salute-score');
        const timerBar = document.getElementById('salute-timer-bar');
        const feedbackEl = document.getElementById('salute-feedback');
        
        const goScenarioEl = document.getElementById('gameover-scenario');
        const goRuleEl = document.getElementById('gameover-rule');
        const goScoreEl = document.getElementById('gameover-score');

        // Based directly on handbook rules
        const scenarios = [
            { text: "Uniformed Lieutenant walking towards you outside.", emoji: "👮‍♂️", salute: true, rule: "Required uniformed salute: initiate within six paces." },
            { text: "Training Commander in PT gear (shorts and t-shirt).", emoji: "🏃‍♂️", salute: false, rule: "Out-of-uniform staff and PT attire: appropriate greeting. No salute." },
            { text: "Uniformed Fire Chief in the hallway.", emoji: "🚒", salute: false, rule: "Uniformed Fire personnel: yield/greet; no brace/salute." },
            { text: "Squad Sergeant standing inside a locker room.", emoji: "🗄️", salute: false, rule: "No salute in bathrooms/locker rooms." },
            { text: "An officer you saluted 5 minutes ago who said 'carry on'.", emoji: "⏱️", salute: false, rule: "After 'carry on', no repeated bracing/saluting of same instructor in same vicinity." },
            { text: "Uniformed Captain passing you in the hall.", emoji: "👩‍✈️", salute: true, rule: "Required uniformed salute: face officer; eye contact." },
            { text: "Department Staff member in business casual clothes.", emoji: "👔", salute: false, rule: "Out-of-uniform staff: appropriate greeting. No salute." }
        ];

        let score = 0;
        let currentScenario;
        let gameTimer;
        const TIME_LIMIT = 3000; // 3 seconds
        let startTime;

        const startGame = () => {
            score = 0;
            scoreEl.textContent = score;
            startScreen.classList.add('hidden');
            gameoverScreen.classList.add('hidden');
            gameoverScreen.classList.remove('flex');
            gameScreen.classList.remove('hidden');
            gameScreen.classList.add('flex');
            nextRound();
        };

        const nextRound = () => {
            // Enable buttons
            btnDoSalute.disabled = false;
            btnNoSalute.disabled = false;

            // Pick random scenario
            currentScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
            emojiEl.textContent = currentScenario.emoji;
            scenarioEl.textContent = currentScenario.text;

            // Reset UI
            timerBar.style.width = '100%';
            timerBar.style.transition = 'none';
            timerBar.classList.replace('bg-red-500', 'bg-rose-500');
            
            // Force reflow
            void timerBar.offsetWidth;
            
            // Start shrinking animation
            timerBar.style.transition = `width ${TIME_LIMIT}ms linear`;
            timerBar.style.width = '0%';

            startTime = Date.now();
            
            clearTimeout(gameTimer);
            gameTimer = setTimeout(() => {
                handleSaluteTimeout();
            }, TIME_LIMIT);
        };

        const showFeedback = (isCorrect) => {
            feedbackEl.classList.remove('opacity-0');
            if (isCorrect) {
                feedbackEl.textContent = "CORRECT!";
                feedbackEl.className = "absolute inset-0 rounded-2xl flex items-center justify-center text-4xl font-bold transition-opacity duration-300 pointer-events-none z-10 bg-green-500/80 text-white opacity-100";
            } else {
                feedbackEl.textContent = "WRONG!";
                feedbackEl.className = "absolute inset-0 rounded-2xl flex items-center justify-center text-4xl font-bold transition-opacity duration-300 pointer-events-none z-10 bg-red-600/90 text-white opacity-100";
            }

            setTimeout(() => {
                feedbackEl.classList.add('opacity-0');
                feedbackEl.classList.remove('opacity-100');
            }, 500);
        };

        const handleSaluteAnswer = (didSalute) => {
            clearTimeout(gameTimer);
            btnDoSalute.disabled = true;
            btnNoSalute.disabled = true;
            
            // Stop timer animation
            const elapsed = Date.now() - startTime;
            const remainingPct = Math.max(0, 100 - (elapsed / TIME_LIMIT) * 100);
            timerBar.style.transition = 'none';
            timerBar.style.width = `${remainingPct}%`;

            if (didSalute === currentScenario.salute) {
                // Correct!
                score += 100;
                scoreEl.textContent = score;
                showFeedback(true);
                setTimeout(nextRound, 800);
            } else {
                // Wrong! Game Over.
                showFeedback(false);
                setTimeout(() => endGame("wrong"), 800);
            }
        };

        const handleSaluteTimeout = () => {
            btnDoSalute.disabled = true;
            btnNoSalute.disabled = true;
            timerBar.classList.replace('bg-rose-500', 'bg-red-500');
            showFeedback(false);
            setTimeout(() => endGame("timeout"), 800);
        };

        const endGame = (reason) => {
            gameScreen.classList.add('hidden');
            gameScreen.classList.remove('flex');
            gameoverScreen.classList.remove('hidden');
            gameoverScreen.classList.add('flex');

            goScoreEl.textContent = score;
            goScenarioEl.textContent = currentScenario.text;
            
            if (reason === "timeout") {
                goRuleEl.textContent = "You hesitated too long! " + currentScenario.rule;
            } else {
                goRuleEl.textContent = currentScenario.rule;
            }
        };

        btnStart?.addEventListener('click', startGame);
        btnRestart?.addEventListener('click', startGame);
        btnDoSalute?.addEventListener('click', () => handleSaluteAnswer(true));
        btnNoSalute?.addEventListener('click', () => handleSaluteAnswer(false));
    }

});
