const questions = [
    {
        question: "which is largest animal im the world",
        answer: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "giraffe", correct: false }
        ]
    }, {
        question: "Which ic smallest country",
        answer: [
            { text: "vatican city", correct: true },
            { text: "bhutan", correct: false },
            { text: "nepal", correct: false },
            { text: "shri lanka", correct: false }
        ]
    }, {
        question: "Which is largest desert",
        answer: [
            { text: "kalahari", correct: false },
            { text: "gobi", correct: false },
            { text: "sahara", correct: false },
            { text: "antarctica", correct: true }
        ]
    }, {
        question: "Which is the smallest continent ",
        answer: [
            { text: "asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "afriaca", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question")
const answerBtn = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion()
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}
function resetState() {
    nextBtn.style.display = "none"
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}


startQuiz();
