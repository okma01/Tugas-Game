const questions = [
    {
        image: "images/cat.jpg",
        answer: "a",
        educationPage: "educationPage",
        choices: ["Kucing", "Gajah", "Ayam", "Anjing"],
    },
    {
        image: "images/dog.jpg",
        answer: "d",
        educationPage: "educationPageDog",
        choices: ["Kucing", "Gajah", "Ayam", "Anjing"],
    },
    {
        image: "images/elephant.jpg",
        answer: "b",
        educationPage: "educationPageElephant",
        choices: ["Kucing", "Gajah", "Ayam", "Singa"],
    },
    {
        image: "images/lion.jpg",
        answer: "d",
        educationPage: "educationPageLion",
        choices: ["Kucing", "Gajah", "Ayam", "Singa"],
    },
];

let currentQuestionIndex = 0;

function startGame() {
    document.getElementById("mainMenu").classList.add("d-none");
    document.getElementById("gameContainer").classList.remove("d-none");
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector("#gameContainer img").src = question.image;
    document.querySelector("#gameContainer img").alt = question.choices[question.answer];
    const choicesList = document.querySelectorAll("#gameContainer .list-group-item button");
    choicesList.forEach((button, index) => {
        button.innerText = `${String.fromCharCode(97 + index)}. ${question.choices[index]}`;
        button.setAttribute("onclick", `checkAnswer('${String.fromCharCode(97 + index)}')`);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    if (choice === question.answer) {
        feedback.innerText = "Benar! 😊";
        feedback.style.color = "green";

        // Tampilkan halaman edukasi setelah 2 detik
        setTimeout(() => {
            document.getElementById("gameContainer").classList.add("d-none");
            document.getElementById(question.educationPage).classList.remove("d-none");
        }, 2000);
    } else {
        feedback.innerText = "Salah, coba lagi. 😔";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById(question.educationPage).classList.add("d-none");
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById("gameContainer").classList.remove("d-none");
        loadQuestion();
    } else {
        restartGame();
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    document.getElementById("educationPageLion").classList.add("d-none");
    document.getElementById("mainMenu").classList.remove("d-none");
    document.getElementById("feedback").innerText = "";
}
