const questions = [

    {
        dialogue: "Don ko pakadna mushkil hi nahi, namumkin hai.",
        options: [
            "Don",
            "Sholay",
            "Dhoom",
            "Race"
        ],
        answer: "Don"
    },

    {
        dialogue: "Mere paas maa hai.",
        options: [
            "Deewaar",
            "Sholay",
            "Karan Arjun",
            "Agneepath"
        ],
        answer: "Deewaar"
    },

    {
        dialogue: "Kitne aadmi the?",
        options: [
            "Sholay",
            "Mr. India",
            "Don",
            "Lagaan"
        ],
        answer: "Sholay"
    },

    {
        dialogue: "Picture abhi baaki hai mere dost.",
        options: [
            "Om Shanti Om",
            "Main Hoon Na",
            "Kabhi Khushi Kabhie Gham",
            "Kal Ho Naa Ho"
        ],
        answer: "Om Shanti Om"
    },

    {
        dialogue: "Mogambo khush hua!",
        options: [
            "Mr. India",
            "Shahenshah",
            "Nayak",
            "Agneepath"
        ],
        answer: "Mr. India"
    },

    {
        dialogue: "Bade bade deshon mein aisi choti choti baatein hoti rehti hain.",
        options: [
            "Dilwale Dulhania Le Jayenge",
            "Kuch Kuch Hota Hai",
            "Kabhi Khushi Kabhie Gham",
            "Dil To Pagal Hai"
        ],
        answer: "Dilwale Dulhania Le Jayenge"
    },

    {
        dialogue: "All is well!",
        options: [
            "3 Idiots",
            "Munna Bhai M.B.B.S.",
            "PK",
            "Taare Zameen Par"
        ],
        answer: "3 Idiots"
    },

    {
        dialogue: "Rahul, naam toh suna hoga.",
        options: [
            "Kuch Kuch Hota Hai",
            "Dil To Pagal Hai",
            "Kabhi Khushi Kabhie Gham",
            "Yes Boss"
        ],
        answer: "Kuch Kuch Hota Hai"
    }

];

let currentQuestion = 0;
let score = 0;

const dialogue = document.getElementById("dialogue");
const options = document.getElementById("options");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const questionNumber = document.getElementById("question-number");
const nextButton = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");


function loadQuestion() {

    const question = questions[currentQuestion];

    dialogue.textContent = `"${question.dialogue}"`;

    questionNumber.textContent =
        "Question " + (currentQuestion + 1);

    scoreDisplay.textContent =
        "Score: " + score;

    result.textContent = "";

    options.innerHTML = "";

    nextButton.style.display = "none";

    question.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.onclick = function() {
            checkAnswer(button, option);
        };

        options.appendChild(button);
    });
}


function checkAnswer(button, selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    const allButtons = document.querySelectorAll(".option");

    allButtons.forEach(function(btn) {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        result.textContent = "🎉 Correct! Well done!";

        score++;

        scoreDisplay.textContent =
            "Score: " + score;

    } else {

        button.classList.add("wrong");

        result.textContent =
            "❌ Wrong! Correct answer: " + correctAnswer;

        allButtons.forEach(function(btn) {

            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            }

        });
    }

    nextButton.style.display = "inline-block";
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showFinalScore();
    }
}


function showFinalScore() {

    document.querySelector(".quiz-box").style.display = "none";

    finalScore.innerHTML =
        "🏆 Quiz Completed! 🏆<br><br>" +
        "Your Score: " + score + " / " + questions.length +
        "<br><br>" +
        '<button onclick="restartQuiz()">🔄 Play Again</button>';
}


function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.querySelector(".quiz-box").style.display = "block";

    finalScore.innerHTML = "";

    loadQuestion();
}


loadQuestion();
