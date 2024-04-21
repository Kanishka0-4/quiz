document.addEventListener("DOMContentLoaded", function() {
  
        
      const questions = [
    {
        question: "In a p-type semiconductor, what type of charge carriers are dominant?",
        options: ["Electrons", "Holes", "Protons", "Neutrons"],
        correctAnswer: "Holes"
    },
    {
        question: "Which of the following statements is true regarding intrinsic semiconductors?",
        options: ["They have a high density of impurities.", "They conduct electricity due to the presence of impurities.", "They have an equal number of electrons and holes.", "They have a high electrical conductivity at room temperature."],
        correctAnswer: "They have an equal number of electrons and holes."
    },
    {
        question: "A particle moves along the x-axis with a velocity given by v = 5t - 3t^2 m/s. What is its acceleration at t = 2 seconds?",
        options: ["1 m/s²", "-7 m/s²", "-1 m/s²", "7 m/s²"],
        correctAnswer: "-7 m/s²"
    },
    {
        question: "A car accelerates uniformly from rest to a speed of 20 m/s in 5 seconds. What is the distance traveled by the car during this time?",
        options: ["50 m", "100 m", "125 m", "150 m"],
        correctAnswer: "125 m"
    },
    {
        question: "Which of the following is a characteristic of GOC (General Organic Chemistry)?",
        options: ["It studies the bonding patterns and molecular structures of organic compounds.", "It focuses on the reactivity and behavior of organic compounds.", "It deals with the classification and nomenclature of organic compounds.", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["6", "8", "12", "14"],
        correctAnswer: "6"
    },
    {
        question: "Which of the following elements is a noble gas?",
        options: ["Oxygen", "Neon", "Chlorine", "Sodium"],
        correctAnswer: "Neon"
    },
    {
        question: "Which of the following is a characteristic of the periodic table?",
        options: ["It arranges elements in order of increasing atomic number.", "It groups elements with similar properties into columns.", "It provides information about the atomic structure of elements.", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which structural level of organization in animals involves the arrangement of tissues to form organs?",
        options: ["Cellular level", "Tissue level", "Organ level", "Organ system level"],
        correctAnswer: "Organ level"
    },
    {
        question: "During breathing and exchange of gases, where does the exchange of oxygen and carbon dioxide primarily occur?",
        options: ["Bronchioles", "Alveoli", "Trachea", "Pharynx"],
        correctAnswer: "Alveoli"
    },
    {
        question: "Which of the following is considered the basic unit of life?",
        options: ["Cell", "Tissue", "Organ", "Organ system"],
        correctAnswer: "Cell"
    },
    {
        question: "Which molecule is responsible for the transmission of hereditary traits in organisms?",
        options: ["DNA", "RNA", "Protein", "Carbohydrate"],
        correctAnswer: "DNA"
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
