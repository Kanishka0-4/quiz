document.addEventListener("DOMContentLoaded", function() {
  
        
      const questions = [
       {
        question: "What is the band gap of a semiconductor material?",
        options: ["The energy difference between the valence band and the conduction band.", "The energy difference between the Fermi level and the valence band.", "The energy difference between the Fermi level and the conduction band.", "The energy difference between the top of the valence band and the bottom of the conduction band."],
        correctAnswer: "The energy difference between the top of the valence band and the bottom of the conduction band."
    },
{
        question: "A body moves along a straight line with a uniform acceleration. Which of the following statements is true?",
        options: ["Its velocity increases at a constant rate.", "Its velocity decreases at a constant rate.", "Its velocity increases with time.", "Its velocity decreases with time."],
        correctAnswer: "Its velocity increases with time."
    },
    {
        question: "What is the energy gap between the valence band and the conduction band in an insulator?",
        options: ["Zero", "Small", "Large", "Depends on temperature"],
        correctAnswer: "Large"
    },
    {
        question: "An object is moving with uniform circular motion. What is the direction of its acceleration?",
        options: ["In the direction of motion", "Opposite to the direction of motion", "Tangential to the motion", "Towards the center of the circle"],
        correctAnswer: "Towards the center of the circle"
    },
    {
        question: "What happens to the resistance of a conductor when its temperature increases?",
        options: ["Increases", "Decreases", "Remains constant", "Depends on the material"],
        correctAnswer: "Increases"
    }
],
{
        question: "What is hyperconjugation in organic chemistry?",
        options: ["The interaction of σ electrons with π electrons", "The interaction of π electrons with σ electrons", "The overlap of atomic orbitals", "The rearrangement of σ and π bonds"],
        correctAnswer: "The interaction of σ electrons with π electrons"
    },
    {
        question: "Which element has the highest electronegativity?",
        options: ["Lithium (Li)", "Carbon (C)", "Fluorine (F)", "Potassium (K)"],
        correctAnswer: "Fluorine (F)"
    },
    {
        question: "What is the general trend of electronegativity across a period in the periodic table?",
        options: ["Increases", "Decreases", "Remains constant", "No specific trend"],
        correctAnswer: "Increases"
    },
    {
        question: "What is the hybridization of carbon in methane (CH4)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp3"
    },
    {
        question: "Which of the following is a Lewis acid?",
        options: ["NH3", "H2O", "BF3", "CH4"],
        correctAnswer: "BF3"
    }
],
{
        question: "What is the function of the alveoli in the respiratory system?",
        options: ["To filter out dust and particles from the air.", "To warm and humidify the air.", "To exchange oxygen and carbon dioxide with the blood.", "To produce mucus to trap pathogens."],
        correctAnswer: "To exchange oxygen and carbon dioxide with the blood."
    },
    {
        question: "What is the function of hemoglobin in the blood?",
        options: ["To transport oxygen from the lungs to the tissues.", "To transport carbon dioxide from the tissues to the lungs.", "To regulate the pH of the blood.", "To fight off pathogens and infections."],
        correctAnswer: "To transport oxygen from the lungs to the tissues."
    },
    {
        question: "Describe the structure and function of nephrons in the mammalian kidney.",
        options: ["Nephrons are the functional units of the kidney responsible for filtering blood and producing urine.", "Each nephron consists of a renal corpuscle and renal tubule.", "The renal corpuscle filters blood to form filtrate, which is then processed along the renal tubule.", "Nephrons regulate water and electrolyte balance in the body."],
        correctAnswer: "Each nephron consists of a renal corpuscle and renal tubule."
    },
    {
        question: "Explain the mechanism of gas exchange in fish gills and compare it with that in mammalian lungs.",
        options: ["Gas exchange in fish gills occurs through countercurrent flow, maximizing oxygen uptake from water.", "Mammalian lungs rely on tidal ventilation, where air is drawn in and out of the lungs through breathing movements.", "Both fish gills and mammalian lungs utilize diffusion to exchange gases across respiratory surfaces.", "Fish gills have a higher surface area for gas exchange compared to mammalian lungs."],
        correctAnswer: "Gas exchange in fish gills occurs through countercurrent flow, maximizing oxygen uptake from water."
    },
    {
        question: "What is the role of DNA polymerase in DNA replication?",
        options: ["To unwind the DNA double helix.", "To synthesize new DNA strands by adding nucleotides to the growing chain.", "To proofread and repair errors in the newly synthesized DNA strands.", "To stabilize the DNA strands during replication."],
        correctAnswer: "To synthesize new DNA strands by adding nucleotides to the growing chain."
    },
    {
        question: "What is the function of the cell wall in plant cells?",
        options: ["To regulate the movement of substances into and out of the cell.", "To provide structural support and protection for the cell.", "To store water, nutrients, and other essential molecules.", "To produce energy through photosynthesis."],
        correctAnswer: "To provide structural support and protection for the cell."
    },

{
        question: "What is the function of the alveoli in the respiratory system?",
        options: ["To filter out dust and particles from the air.", "To warm and humidify the air.", "To exchange oxygen and carbon dioxide with the blood.", "To produce mucus to trap pathogens."],
        correctAnswer: "To exchange oxygen and carbon dioxide with the blood."
    },
    {
        question: "What is the function of hemoglobin in the blood?",
        options: ["To transport oxygen from the lungs to the tissues.", "To transport carbon dioxide from the tissues to the lungs.", "To regulate the pH of the blood.", "To fight off pathogens and infections."],
        correctAnswer: "To transport oxygen from the lungs to the tissues."
    },
    {
        question: "Describe the structure and function of nephrons in the mammalian kidney.",
        options: ["Nephrons are the functional units of the kidney responsible for filtering blood and producing urine.", "Each nephron consists of a renal corpuscle and renal tubule.", "The renal corpuscle filters blood to form filtrate, which is then processed along the renal tubule.", "Nephrons regulate water and electrolyte balance in the body."],
        correctAnswer: "Each nephron consists of a renal corpuscle and renal tubule."
    },
    {
        question: "Explain the mechanism of gas exchange in fish gills and compare it with that in mammalian lungs.",
        options: ["Gas exchange in fish gills occurs through countercurrent flow, maximizing oxygen uptake from water.", "Mammalian lungs rely on tidal ventilation, where air is drawn in and out of the lungs through breathing movements.", "Both fish gills and mammalian lungs utilize diffusion to exchange gases across respiratory surfaces.", "Fish gills have a higher surface area for gas exchange compared to mammalian lungs."],
        correctAnswer: "Gas exchange in fish gills occurs through countercurrent flow, maximizing oxygen uptake from water."
    },
    {
        question: "What is the role of DNA polymerase in DNA replication?",
        options: ["To unwind the DNA double helix.", "To synthesize new DNA strands by adding nucleotides to the growing chain.", "To proofread and repair errors in the newly synthesized DNA strands.", "To stabilize the DNA strands during replication."],
        correctAnswer: "To synthesize new DNA strands by adding nucleotides to the growing chain."
    },

{
        question: "What is the band gap of a semiconductor material?",
        options: ["The energy difference between the valence band and the conduction band.", "The energy difference between the Fermi level and the valence band.", "The energy difference between the Fermi level and the conduction band.", "The energy difference between the top of the valence band and the bottom of the conduction band."],
        correctAnswer: "The energy difference between the top of the valence band and the bottom of the conduction band."
    },
    {
        question: "A body moves along a straight line with a uniform acceleration. Which of the following statements is true?",
        options: ["Its velocity increases at a constant rate.", "Its velocity decreases at a constant rate.", "Its velocity increases with time.", "Its velocity decreases with time."],
        correctAnswer: "Its velocity increases with time."
    },
    {
        question: "What is the energy gap between the valence band and the conduction band in an insulator?",
        options: ["Zero", "Small", "Large", "Depends on temperature"],
        correctAnswer: "Large"
    },
    {
        question: "An object is moving with uniform circular motion. What is the direction of its acceleration?",
        options: ["In the direction of motion", "Opposite to the direction of motion", "Tangential to the motion", "Towards the center of the circle"],
        correctAnswer: "Towards the center of the circle"
    },
    {
        question: "What happens to the resistance of a conductor when its temperature increases?",
        options: ["Increases", "Decreases", "Remains constant", "Depends on the material"],
        correctAnswer: "Increases"
    },

{
        question: "What is the function of a catalyst in a chemical reaction?",
        options: ["To increase the activation energy of the reaction.", "To decrease the activation energy of the reaction.", "To increase the concentration of reactants.", "To decrease the concentration of products."],
        correctAnswer: "To decrease the activation energy of the reaction."
    },
    {
        question: "Which of the following elements has the highest electronegativity?",
        options: ["Lithium (Li)", "Carbon (C)", "Fluorine (F)", "Potassium (K)"],
        correctAnswer: "Fluorine (F)"
    },
    {
        question: "What is the pH of a solution with a hydroxide ion concentration of 1 x 10^-9 M?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "5"
    },
    {
        question: "What is the molecular geometry of a molecule with the AX2E2 electron geometry?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
        correctAnswer: "Bent"
    },
    {
        question: "What is the product of the reaction between sodium hydroxide (NaOH) and hydrochloric acid (HCl)?",
        options: ["Sodium chloride (NaCl) and water (H2O)", "Sodium hydroxide (NaOH) and hydrochloric acid (HCl)", "Sodium chloride (NaCl) and hydrogen gas (H2)", "Sodium hydroxide (NaOH) and chlorine gas (Cl2)"],
        correctAnswer: "Sodium chloride (NaCl) and water (H2O)"
    },

{
        question: "What is the function of mitochondria in a cell?",
        options: ["Photosynthesis", "Cellular respiration", "Protein synthesis", "DNA replication"],
        correctAnswer: "Cellular respiration"
    },
    {
        question: "What is the role of ribosomes in protein synthesis?",
        options: ["Transcription", "Translation", "Replication", "Mutation"],
        correctAnswer: "Translation"
    },
    {
        question: "Which organelle is responsible for detoxification and metabolism of drugs in liver cells?",
        options: ["Golgi apparatus", "Lysosomes", "Endoplasmic reticulum", "Vacuoles"],
        correctAnswer: "Endoplasmic reticulum"
    },
    {
        question: "What is the function of the Golgi apparatus?",
        options: ["Protein synthesis", "Lipid synthesis", "Cellular respiration", "Modification and packaging of proteins"],
        correctAnswer: "Modification and packaging of proteins"
    },
    {
        question: "What is the primary function of the chloroplast?",
        options: ["Cellular respiration", "Photosynthesis", "Cell division", "DNA replication"],
        correctAnswer: "Photosynthesis"
    }

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
