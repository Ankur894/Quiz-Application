const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Mark Language",
            "None of these"
        ],
        correct: 0
    },
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is NOT a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        correct: 3
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const progressEl = document.getElementById("progress");

loadQuestion();

function loadQuestion() {
    const q = quizData[current];
    questionEl.innerText = q.question;
    progressEl.innerText = (current + 1)+ "/"+ (quizData.length);

    optionsEl.forEach((btn, i) => {
        btn.innerText = q.options[i];
        btn.className = "option";
        btn.disabled = false;
    });
}

function selectAnswer(selected) {
    const correct = quizData[current].correct;

    optionsEl.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        optionsEl[selected].classList.add("correct");
        score++;
    } else {
        optionsEl[selected].classList.add("wrong");
        optionsEl[correct].classList.add("correct");
    }
}

function nextQuestion() {
    current++;

    if (current < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-card").innerHTML = `
            <h2>🎉 Quiz Completed!</h2>
            <p>Your Score</p>
            <h1>${score} / ${quizData.length}</h1>
            <button id="nextBtn" onclick="location.reload()">Restart</button>
        `;
    }
}