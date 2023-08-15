function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // Get a number from {0,1,2}
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  }
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let outcome = "";
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      outcome = 0;
    } else if (computerSelection === "Scissors") {
      outcome = 1;
    } else {
      outcome = 2;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      outcome = 0;
    } else if (computerSelection === "Rock") {
      outcome = 1;
    } else {
      outcome = 2;
    }
  } else {
    if (computerSelection === "Rock") {
      outcome = 0;
    } else if (computerSelection === "Paper") {
      outcome = 1;
    } else {
      outcome = 2;
    }
  }
  if (outcome == 0) {
    return `You lose! ${computerSelection} beats your ${playerSelection}.`;
  } else if (outcome == 1) {
    return `You won! Your ${playerSelection} beats ${computerSelection}.`;
  }
  return `You tied!`;
}

function game() {
  let wins = 0;
  let losses = 0;
  let compChoice = "";

  // Loop through game 5 times
  for (let i = 0; i < 5; i++) {
    compChoice = getComputerChoice();
    let playerChoice = "";

    // Keep looping until a valid choice is inputted
    while (
      playerChoice !== "Paper" &&
      playerChoice !== "Rock" &&
      playerChoice !== "Scissors"
    ) {
      playerChoice = prompt(
        "What's your choice? Type 'Rock', 'Paper', or 'Scissors'."
      );

      // Format the input into Rock, Paper, or Scissors (only first letter is capitalized)
      playerChoice = playerChoice.toLowerCase();
      playerChoice =
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }

    // Run the round

    let outcome = playRound(playerChoice, compChoice);
    console.log(`My choice: ${playerChoice}, Opponent: ${compChoice}`);
    // Output the result
    console.log(outcome);

    if (outcome === `You won! Your ${playerChoice} beats ${compChoice}.`) {
      wins++;
    } else if (
      outcome === `You lose! ${compChoice} beats your ${playerChoice}.`
    ) {
      losses++;
    }
  }
  if (wins > losses) {
    console.log("Congratulations, you won overall!");
  } else if (wins < losses) {
    console.log("Unfortunately you lost overall.");
  } else {
    console.log("Wow, you tied matches overall!");
  }
}

game();
