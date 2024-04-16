document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "Half-lives of two radioactive substances A and B are respectively 20 min and 40 min. Initially the samples of A and B have equal number of nuclei. After 80 min the ratio of remaining number of A and B nuclei is: ",
            options: ["1:16", "4:1", "1:4", "1:1"],
            correctAnswer: "1:16"
        },
        {
            question: " Phenyl isocyanides are prepared from which of the following reaction?  ",
            options: ["Rosemund reaction", "Reimcr-Tiemann reaction", "carbylamine reaction", "wurtz reaction"],
            correctAnswer: "carbylamine reaction"
        },
        {
            question: "The RTF region enables the plasmid to:",
            options: ["be transmitted to other bacteria by conjugation", "undergo transformation", "replicate in the host cell", "code for enzymes that inactivate specific drugs"],
            correctAnswer: "be transmitted to other bacteria by conjugation"
        },
        {
            question: " Half-life of a radioactive substance is 12.5 h and its mass is 256 g. After what time, the amount of remaining substance is 1g?",
            options: ["75 h", "100 h", "125 h", "150 h"],
            correctAnswer: "75 h"
        },
         {
            question: "In plants, inulin and pectin are:",
            options: ["excretory material", "wastes", "reserve materials", "insect-attracting material"],
            correctAnswer: "reserve materials"
        }, {
            question: "Which of the following does not constitute habitat destruction?",
            options: ["Filling in wetlands", "logging", "Burning forests", "Fishing"],
            correctAnswer: "Fishing"
        },
         {
            question: "Modifications by germ line gene therapy are heritable as:",
            options: ["the functional gene is incorporated into their genome", "the functional gene is incorporated into one of the gene", "the functional gene is incorporated into somatic cells.", "All of the above"],
            correctAnswer: "the functional gene is incorporated into their genome"
        },
         {
            question: " The electrolytic reduction of nitrobenzene in strongly acidic medium produces:",
            options: ["azoxybenzene", "p-aminophenol", "azobenzene", "aniline"],
            correctAnswer: "p-aminophenol"
        },
         {
            question: "In the treatment of SCID, cDNA is introduced into a patient's cells using.............as a vector:",
            options: ["E coli", "Retrovirus", "Bacillus thuringiensis", "agrobacterium"],
            correctAnswer: "Retrovirus"
        },
         {
            question: "In microinjection method, the DNA is incorporated into host cell by using:",
            options: ["Micro-pipettes", "Micro-needles", "High voltage electric impulse", "Both [a] and [b]"],
            correctAnswer: "Both [a] and [b]"
        }, {
            question: "In terrestrial ecosystem, maximum energy is present in:",
            options: ["T3", "T2", "T1", "T4"],
            correctAnswer: "T1"
        },
        {
            question: "The binding energy per nucleon in deuterium and helium nuclei are 1.1 MeV and 7.0 MeV, respectively. When two deuterium nuclei fuse to form a helium nucleus the energy released in the fusion is   ",
            options: ["23.6 MeV", "2.2 MeV", "28.0 MeV", "30.2 MeV"],
            correctAnswer: "23.6 MeV"
        },{
            question: " Electrolytic reduction of nitrobenzene in weakly acidic medium gives",
            options: ["aniline", "nitrosobenzene", "N-phenylhydroxylamine", "p-hydroxyaniline"],
            correctAnswer: "nitrosobenzene"
        },{
            question: "Which among the following is likely to have the highest levels of DDT depositions in its body?",
            options: ["Eel", "Crab", "Seagull", "Phytoplankton"],
            correctAnswer: "Seagull"
        },{
            question: "Which was the first product contributed to human kind by science of biotechnology in early 1970's?",
            options: ["Somatotropin", "Erythropoietin", "Insulin", "Cytokines"],
            correctAnswer: "Somatotropin"
        },{
            question: "A T4 bacteriophage has a gene for the enzyme, lysozyme. The function of this enzyme is to digest",
            options: ["Golgi", "Cell membrane", "Cell Wall", "Plasmid"],
            correctAnswer: "Cell Wall"
        },{
            question: "When primary amine reacts with chloroform in ethanolic KOH then the product is",
            options: ["alcohol", "cyanide", "aldehyde", "isocyanide"],
            correctAnswer: "isocyanide"
        },{
            question: "In Bohr's model, if the radius of the first orbit is r0, what is the radius of the third orbit?",
            options: ["3r0", "9r0", "r0/9", "r0"],
            correctAnswer: "9r0"
        },{
            question: " Cellulose, the most important constituent of plant cell wall is made up of:",
            options: ["branched chain of glucose molecules linked by α, 1,6 glycosidic bond at the site of branching", "unbranched chain of glucose molecules linked by α, 1,4 glycosidic bond", "branched chain of glucose molecules linked by β, 1, 4 glycosidic bond in straight chain and α, 1, 6 glycosidic bond at the site of branching", "unbranched chain of glucose molecules linked by β, 1, 4 glycosidic bond"],
            correctAnswer: "unbranched chain of glucose molecules linked by β, 1, 4 glycosidic bond"
        },{
            question: " Which one of the following pairs is not correctly matched?",
            options: ["Vitamin B6  Loss of appetite", "Vitamin B1  Beri-beri", "Vitamin B2  Pellagra", "Vitamin B12 Pernicious anaemia"],
            correctAnswer: "Vitamin B2  Pellagra"
        },{
            question: "If in a nuclear fusion process, the masses of the fusing nuclei be m1and m2 and the mass of the resultant nucleus be m3, then",
            options: ["m3=m1+m2", "m3=|m1-m2|", "m3<(m1+m2)", "m3>(m1+m2)"],
            correctAnswer: "m3=m1+m2"
        },
        {
            question: "Polyploidy can result from:",
            options: ["Double fertilisation", "Polyspermy", "Diploid gametes", "All of these"],
            correctAnswer: "Diploid gametes"
        },{
            question: "Nucleotide are building blocks of nucleic acids, nucleotide is a composite molecule formed by:",
            options: ["(base-sugar-phosphate)", "base-sugar-phosphate", "base-sugar-OH", "sugar-phosphate"],
            correctAnswer: "base-sugar-phosphate"
        },{
            question: "Strains of Bacillus thuringiensis are used in producing:",
            options: ["Bioinsecticidal plants", "Biomineralisation", "Biometallurgical techniques", "Biofertilisers"],
            correctAnswer: "Bioinsecticidal plants"
        },{
            question: "A nucleic acid probe might be used to",
            options: ["insert genes into a host cell.", "splice pieces of DNA", "make DNA for gene cloning.", "identify complementary segments present in nucleic acid sequence."],
            correctAnswer: "identify complementary segments present in nucleic acid sequence."
        },{
            question: "A sample of radioactive elements contains 4×10^10 active nuclei. If half-life of element is 10 days, then the number of decayed nuclei after 30 days is:",
            options: ["0.5×10^10", " 3.5×10^10", " 2×10^10", "1×1010"],
            correctAnswer: "3.5×10^10"
        },{
            question: "A GM crop is transgenic. It can be harmful because it may cause:",
            options: ["allergies and toxicity.", "incorporation of antibiotic resistance in human beings.", "disturbance in metabolism due to enzyme for antibiotic resistance.", "All of the above"],
            correctAnswer: "All of the above"
        },{
            question: "The final product formed when Methyl  amine is treated with {NaNO_2} and {HCl} is",
            options: ["Diazomethane", "Methylalcohol", "Methylcyanide", "Nitromethane"],
            correctAnswer: "Methylalcohol"
        },{
            question: "Modifications by germ line gene therapy are heritable as",
            options: ["the functional gene is incorporated into their genome.", "the functional gene is incorporated into somatic cells.", "the functional gene is incorporated into one of the gene.", "All of the above"],
            correctAnswer: "the functional gene is incorporated into their genome."
        },{
            question: "Which one of the following pairs of terms/names means one and the same thing?",
            options: ["Cistron-triplet", "Codon-gene", "DNA fingerprinting-DNA profiling", "Gene pool of an organism-genome"],
            correctAnswer: "DNA fingerprinting-DNA profiling"
        },
    ];

    let currentQuestionIndex = 0;
    let score=0;

    function displayQuestion(questionObj) {
       
        const questionElement = document.getElementById("question");
        const answerButton = document.getElementById("answerButton");
        const questionNumber = currentQuestionIndex + 1;
        // Clear previous question and answer buttons
        questionElement.textContent = "Question " + questionNumber + ": " + questionObj.question;
        answerButton.innerHTML = "";

        // Add answer buttons for each option
        questionObj.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("btn");
            answerButton.appendChild(button);

            // Add event listener to check answer when button is clicked
            button.addEventListener("click", function() {
                checkAnswer(option, questionObj.correctAnswer, button);
            });
        });

        // Define answerButtons variable to capture all answer buttons
        const answerButtons = document.querySelectorAll(".btn");
    }

    function checkAnswer(selectedAnswer, correctAnswer, button) {
        // Disable all answer buttons after an answer is selected
        const answerButtons = document.querySelectorAll(".btn");
        answerButtons.forEach(btn => {
            btn.disabled = true;
        });

        if (selectedAnswer === correctAnswer) {
            button.style.backgroundColor = "green";// Correct answer
            score+=4;
        } else {
            button.style.backgroundColor = "red"; // Incorrect answer: 
            score=score-1;
            answerButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.style.backgroundColor = "green";
                }
            });
        }
    }

    function startQuiz() {
        console.log("Question")
        displayQuestion(questions[currentQuestionIndex]);
    }

    // Event listener for "Next" button click
    const nextButton = document.getElementById("next-btn");
    nextButton.addEventListener("click", function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {
           displayScore();
        }
    });

    function displayScore() {
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = ""; // Clear the quiz container

        const scoreElement = document.createElement("h2");
        scoreElement.textContent = "Your score is: " + score + "/120";
        quizContainer.appendChild(scoreElement);
    }

    startQuiz();
});
