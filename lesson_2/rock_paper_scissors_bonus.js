/*
Here are a couple of bonus features for the Rock Paper Scissors program.

1) Lizard Spock - This game is a variation on the Rock Paper Scissors game that adds two more options -
Lizard and Spock. The full explanation and rules are here. There's also a hilarious Big Bang Theory video
about it here.

2) The goal of this bonus is to add Lizard and Spock to your game.

3) Shortened Input Typing the full word "rock" or "lizard" is tiring. Update the program so the user can
type "r" for "rock," "p" for "paper," and so on. Note that if you do bonus #1, you'll have two words that
start with "s." How do you resolve that?

4) Best of 5 Keep score of the player's and computer's wins. When either the player or computer reaches five wins,
the match is over, and the winning player becomes the grand winner. Don't add your incrementing logic to
displayResults. Keep your functions simple; they should perform one logical task — no more, no less.

5) ESLint complaints Run your program through ESLint to see what problems it identifies, and try to fix them.
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
const WINNING_SCORE = 5;
const WIN_CASES = {
  r: ['sc', 'l'],
  p: ['r', 'sp'],
  sc: ['l', 'p'],
  sp: ['r', 'sc'],
  l: ['p',' sp'],
};

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

let prompt = message => {
  console.log(`=> ${message}`);
};

// Function for displaying the result
let displayResults = (yourChoice, computerChoice) => {
  prompt(`You chose ${yourChoice}, computer chose ${computerChoice}`);
  if (WIN_CASES[yourChoice].includes(computerChoice)) {
    return 'You win!';
  } else if (WIN_CASES[computerChoice].includes(yourChoice)) {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
};

/*
Define a separate function to update the score as it is not a good practice
to do reassignment and return a value within the same function
*/
let updateScore = result => {
  switch (result) {
    case 'You win!':
      playerScore += 1;
      break;
    case 'Computer wins!':
      computerScore += 1;
      break;
    default:
      break;
  }
};

while (!gameOver) {
  console.log('##########################');
  // Choose rock, scissors or paper
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt('r: rock, p: paper, sc: scissors, sp: spook, l: lizzard');
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  // Computer's turn to choose
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // Determining the outcome
  let result = displayResults(choice, computerChoice);
  prompt(result);

  // Update the score
  updateScore(result);

  // Display the score
  prompt(`Results - Player: ${playerScore}, Computer: ${computerScore}`);

  // Introduce empty line so that the console will not be so cluttered
  console.log(' ');

  // Update whether the game is over
  gameOver = (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE);

  // Display the victor
  if (gameOver) {
    if (playerScore === WINNING_SCORE) {
      prompt('Game Over! Congratulations, you win!');
    } else {
      prompt('Gave Over! Computer wins!');
    }

    // Play again?
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    // Carry on the game
    if (answer[0] === 'y') {
      playerScore = 0;
      computerScore = 0;
      gameOver = false;

      // Clear the console
      console.clear();
    }
  }
}
