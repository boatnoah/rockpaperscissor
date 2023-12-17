const computerMove = () => {
  return Math.floor(Math.random() * 3);
};

const play = () => {
  let human = 0;
  let comp = 0;
  const convert = { 0: "rock", 1: "paper", 2: "scissor" };
  userInput = parseInt(prompt("Enter 0 for rock, 1 for paper, 2 for scissor"));
  while (human !== 3 || comp !== 3) {
    let p1 = convert[userInput];
    let p2 = convert[computerMove()];

    if (p1 === p2) {
      if (p1 === "rock") {
        if (p2 === "scissor") {
          comp++;
          console.log("Computer wins");
        } else {
          human++;
          console.log("Human wins");
        }
      } else if (p1 === "paper") {
        if (p2 === "scissor") {
          comp++;
          console.log("Computer wins");
        } else {
          human++;
          console.log("Human wins");
        }
      } else {
        if (p2 === "rock") {
          comp++;
          console.log("Computer wins");
        } else {
          human++;
          console.log("Human wins");
        }
      }
    } else {
      human++;
      comp++;
      console.log("Draw");
    }
  }
};

play();
