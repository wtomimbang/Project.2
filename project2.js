/*
Project Standards:
Students will use conditional statements to control program flow.
Students will use functions to represent events in the game.
Students will use variables to store information needed by their application and keep track of their program’s state.
Students will use DOM manipulation to display game information to the user.
Students will use DOM click events to capture user input on buttons and execute the game.

Project Task:
You will be building a playable rock paper scissors game using HTML and JavaScript. Your program should do the following steps:
When your HTML loads, there should be:
A heading tag for the game's title
Tags showing the players wins, ties, and losses
Three buttons for the user to click on (rock, paper, scissors respectively)
After the user clicks on one of the buttons, the following should happen:
Whatever button the user clicks on should be the users' choice (ex if the user clicked on rock, they picked rock)
The computer should randomly pick rock, paper, or scissors.
Use conditional statements to compare the user’s choice to the computer.
If the user wins, increment a global wins variable, and show it on the screen.
If the computer wins, increment a global losses variable, and show it on the screen.
If it’s a tie, increment a global ties variable, and show it on the screen.
*/


let wins = 0;
let ties = 0;
let losses = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    ties++;
    updateScore();
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    wins++;
    updateScore();
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    losses++;
    updateScore();
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateScore() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("ties").textContent = ties;
  document.getElementById("losses").textContent = losses;
}

document.getElementById("rock").addEventListener("click", () => {
  const result = playRound("rock", computerPlay());
  console.log(result);
});

document.getElementById("paper").addEventListener("click", () => {
  const result = playRound("paper", computerPlay());
  console.log(result);
});

document.getElementById("scissors").addEventListener("click", () => {
  const result = playRound("scissors", computerPlay());
  console.log(result);
});


