const playBtn = document.querySelector(".playgame");
let currentQuestionIndex = 0; // Variable to keep track of the current question index

function playGame() {
  playBtn.style.display = "none"; // Hide the play button once the game starts

  let correctAnswers = [
    "BRENDAN EICH",
    "GUIDO VAN ROSSUM OSCON",
    "JAMES GOSLING",
    "SCOTT WILTAMUTH",
  ];

  let questions = [
    [
      "Who is the inventor and father of the programming language Javascript?",
      correctAnswers[0],
      "GUIDO VAN ROSSUM",
      "JAMES_GOSLING",
      "SCOTT WILTAMUTH",
    ],
    [
      "Who is the inventor and father of the programming language Python?",
      correctAnswers[1],
      "BRENDAN EICH",
      "JAMES GOSLING",
      "SCOTT WILTAMUTH",
    ],
    [
      "Who is the inventor and father of the programming language Java?",
      correctAnswers[2],
      "GUIDO VAN ROSSUM",
      "JAMES GOSLING",
      "SCOTT WILTAMUTH",
    ],
    [
      "Who is the inventor and father of the programming language C#?",
      correctAnswers[3],
      "GUIDO VAN ROSSUM",
      "BRENDAN EICH",
      "JAMES GOSLING",
    ],
  ];

  loadQuestion(questions, correctAnswers);
}

function loadQuestion(questions, correctAnswers) {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("prompt").innerHTML = "You've completed the quiz!";
    return;
  }

  let currentQuestion = questions[currentQuestionIndex]; // Get the current question array

  // Post the current question to the HTML document
  document.getElementById("question").innerHTML = currentQuestion[0];

  // Create answer buttons
  const answersList = document.getElementById("answers");
  answersList.innerHTML = ""; // Clear any existing answers
  for (let i = 1; i < currentQuestion.length; i++) {
    let answerBtn = document.createElement("button");
    answerBtn.innerText = currentQuestion[i];
    answerBtn.addEventListener("click", function () {
      checkAnswer(
        currentQuestion[i],
        correctAnswers[currentQuestionIndex],
        questions,
        correctAnswers
      );
    });
    answersList.appendChild(answerBtn);
  }
}

function checkAnswer(userAnswer, correctAnswer, questions, correctAnswers) {
  if (userAnswer.toUpperCase() === correctAnswer) {
    document.getElementById("prompt").innerHTML =
      "Yes that is correct! Brendan Eich created JavaScript in 1995!";
    presentProgrammerImage("/images/BRENDANEICH.jpg");
  } else {
    document.getElementById("prompt").innerHTML =
      "Incorrect. The correct answer is Brendan Eich.";
  }

  // Increment the current question index and load the next question
  currentQuestionIndex++;
  loadQuestion(questions, correctAnswers);
}



function main() {
  playBtn.addEventListener("click", playGame);
}

main();
