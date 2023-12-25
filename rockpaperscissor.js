let roundWinner = "";
let human = 0;
let comp = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const winner = document.getElementById("winner");
const humanScore = document.getElementById("human");
const computerScore = document.getElementById("computer");
const computerResult = document.getElementById("computer-selection");

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissor.addEventListener("click", () => play("scissor"));

const computerMove = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

const determineWinner = (p1, p2) => {
  if (p1 !== p2) {
    if (p1 === "rock") {
      if (p2 === "scissor") {
        comp++;
        return "Computer";
      } else {
        human++;
        return "Human";
      }
    } else if (p1 === "paper") {
      if (p2 === "scissor") {
        comp++;
        return "Computer";
      } else {
        human++;
        return "Human";
      }
    } else {
      if (p2 === "rock") {
        comp++;
        return "Computer";
      } else {
        human++;
        return "Human";
      }
    }
  } else {
    return "Draw";
  }
};

const play = (playerSelection) => {
  if (human === 6 || comp === 6) {
    alert(`${roundWinner} won!`);
    resetGame();
    updateGame(roundWinner, "");
    return;
  }
  let computerSelection = computerMove();
  roundWinner = determineWinner(playerSelection, computerSelection);
  updateGame(roundWinner, computerSelection);
};

const updateGame = (won, cS) => {
  winner.textContent = `Winner: ${won}`;
  humanScore.textContent = `You: ${human}`;
  computerScore.textContent = `Computer: ${comp}`;
  computerResult.textContent = `Computer choice: ${cS}`;
};

const resetGame = () => {
  roundWinner = "";
  human = 0;
  comp = 0;
};
