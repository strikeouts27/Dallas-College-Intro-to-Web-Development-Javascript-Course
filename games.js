const playBtn = document.querySelector(".playgame");

function playGame() {


  let questions = [
    ["Question 1?", correctAnswers[0], "GUIDO VAN ROSSUM" ]
  ]

  let correctAnswers = ["BRENDAN EICH", ]
  // Prompt the user for the answer
  const userAnswerOne = prompt("Who was the creator of JavaScript?");
  if (userAnswerOne.toUpperCase() === "BRENDAN EICH") {
    document.getElementById("prompt").innerHTML =
      "Yes that is correct! Brendan Eich created JavaScript in 1995! Let us take a moment and be thankful for his work! Here is a picture of Brendan, the Father of Javascript!";
    presentProgrammer("/images/BRENDANEICH.jpg");
  } else {
    document.getElementById("prompt").innerHTML =
      "Incorrect. The correct answer is Brendan Eich.";
    presentProgrammer("/images/anotherProgrammer.jpg");
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
