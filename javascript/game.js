let currentQuestionIndex = 0; // Variable to keep track of the current question index

// Multi-dimensional array with the trivia questions
let questions = [
  [
    "Who is the inventor and father of the programming language Javascript?",
    0,
    "BRENDAN EICH",
    "GUIDO VAN ROSSUM",
    "JAMES GOSLING",
  ],
  [
    "Who is the inventor and father of the programming language Python?",
    1,
    "BRENDAN EICH",
    "GUIDO VAN ROSSUM",
    "JAMES GOSLING",
  ],
  [
    "Who is the inventor and father of the programming language Java?",
    2,
    "GUIDO VAN ROSSUM",
    "JAMES GOSLING",
    "SCOTT WILTAMUTH",
  ],
];

// Function to dynamically create the 'Play Game' button
function createPlayButton() {
  const promptDiv = document.getElementById("prompt");
  promptDiv.innerHTML =
    '<button class="playgame" onclick="playGame()">Let\'s Play the Game!</button>';
}

// Function to start the game
function playGame() {
  if (questions.length === 0) {
    document.getElementById("prompt").innerHTML = "You've completed the quiz!";
    return;
  }

  // Access the first question in the questions array
  let currentQuestion = questions.shift();

  // Post the question to the HTML document
  document.getElementById("question").innerHTML = currentQuestion[0];

  // Access the correct answer index
  let correctAnswerIndex = currentQuestion[1];

  // Remove the correct answer index from the array
  currentQuestion.splice(1, 1);

  // Create a list of answers
  const answersList = document.getElementById("answers");
  answersList.innerHTML = ""; // Clear any existing answers
  for (let i = 1; i < currentQuestion.length; i++) {
    let answerBtn = document.createElement("button");
    answerBtn.innerText = currentQuestion[i];
    answerBtn.setAttribute(
      "onclick",
      `checkAnswer(${i - 1}, ${correctAnswerIndex})`
    );
    answersList.appendChild(answerBtn);
  }

  // Add a prompt for the user to click the best answer
  document.getElementById("prompt").innerHTML = "Click the best answer.";
}

// Function to check the user's answer
function checkAnswer(userAnswerIndex, correctAnswerIndex) {
  if (userAnswerIndex === correctAnswerIndex) {
    document.getElementById("prompt").innerHTML = "Yes, that is correct!";
  } else {
    document.getElementById("prompt").innerHTML =
      "Incorrect. The correct answer is Brendan Eich.";
  }

  // Load the next question
  playGame();
}

// Initialize the game by creating the 'Play Game' button
createPlayButton();
