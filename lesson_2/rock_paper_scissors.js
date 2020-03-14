/*
The game flow should go like this:

1. The user makes a choice.
2. The computer makes a choice.
3. The winner is displayed.
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let getResult = (yourChoice, computerChoice) => {
  if ((yourChoice === 'rock' && computerChoice === 'scissors') ||
      (yourChoice === 'paper' && computerChoice === 'rock') ||
      (yourChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else if ((yourChoice === 'rock' && computerChoice === 'paper') ||
             (yourChoice === 'paper' && computerChoice === 'scissors') ||
             (yourChoice === 'scissors' && computerChoice === 'rock')) {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
};

let prompt = message => {
  console.log(`=> ${message}`);
};

let continuePlaying = true;

while (continuePlaying) {
  // Choose rock, scissors or paper
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // Computer's turn to choose
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // Determining the outcome
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(getResult(choice, computerChoice));

  // Play again?
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  // Stop playing the game
  if (answer[0] !== 'y') {
    continuePlaying = false;
  }
}

