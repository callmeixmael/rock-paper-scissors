// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert to lowercase to make it case-insensitive
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Main game function to play multiple rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {  // Play 5 rounds
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update the score based on the result
        if (result.includes("You win")) {
            playerScore++;
        } else if (result.includes("You lose")) {
            computerScore++;
        }
        console.log(`Round ${i + 1}: Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }

    // Final winner
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
game();
