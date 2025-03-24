const playBtn = document.querySelector(".playgame");

function playGame() {
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
      correctAnswers[4],
      "GUIDO VAN ROSSUM",
      "BRENDAN EICH",
      "JAMES GOSLING",
    ],

    // Questions //
  ];
    let firstQuestion = questions[0][0]; 

    // Post the first question to the HTML document 
    document.getElementById("question").innerHTML = firstQuestion

    // Prompt the first question to the HTML document 
    const userAnswerOne = prompt(firstQuestion); 
    if (userAnswerOne.toUpperCase() === "BRENDAN EICH"){
      document.getElementById("prompt").innerHTML =
        "Yes that is correct! Brendan Eich created JavaScript in 1995! Let us take a moment and be thankful for his work! Here is a picture of Brendan, the Father of Javascript!";
      presentProgrammerImage("/images/BRENDAN_EICH.jpg"); 
    } else {
      document.getElementById("prompt").innerHTML = "Incorrect. The correct answer is Brendan Eich."; 
      presentProgrammerImage("/images/BRENDAN_EICH.jpg");
    }
 
}

function presentProgrammerImage(imageSrc) {
  const imgElement = document.getElementById("programmerImage");
  imgElement.src = imageSrc;
  imgElement.style.display = "block";
}

function main() {
  playBtn.addEventListener("click", playGame);
}

main();
