/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const readline = require('readline-sync');
const CARD = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT = ['H', 'S', 'D', 'C'];
const CUT_OFF = 21;
const DEALER_CUT_OFF = 17;
const NUM_WINS = 3;

let prompt = message => {
  console.log(`=> ${message}`);
};

let initialiseDeck = () => {
  let deck = [];
  for (let cardIdx = 0; cardIdx < CARD.length; cardIdx += 1) {
    let card = CARD[cardIdx];
    for (let suitIdx = 0; suitIdx < SUIT.length; suitIdx += 1) {
      let suit = SUIT[suitIdx];
      deck.push([suit, card]);
    }
  }
  return deck;
};

let shuffle = deck => {
  for (let idx = deck.length - 1; idx > 0; idx -= 1) {
    let otherIdx = Math.floor(Math.random() * (idx + 1)); // 0 to index
    [deck[idx], deck[otherIdx]] = [deck[otherIdx], deck[idx]]; // swap elements
  }
};

let total = cards => {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > CUT_OFF) sum -= 10;
  });

  return sum;
};

let dealCard = (deck, hand) => {
  hand.push(deck.splice(0, 1)[0]);
};

let initialiseHand = (deck, playerHand, dealerHand) => {
  let count = 0;
  do {
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
    count += 1;
  } while (count < 2);
};

let displayCurrentHand = (playerHand, dealerHand, displayFullDealerHand, playerScore, dealerScore) => {
  console.clear();
  prompt(`Your hand: ${playerHand.map(value => value[0] + value[1]).join(', ')}`);
  console.log(`Total sum of your cards: ${playerScore}`);
  console.log(' ');

  if (displayFullDealerHand) {
    prompt(`Dealer's hand: ${dealerHand.map(value => value[0] + value[1])}`);
    console.log(`Total sum dealer's card: ${dealerScore}`);
  } else {
    prompt(`Dealer's hand: ${dealerHand[0][0] + dealerHand[0][1]}, ?`);
    console.log(`Value of dealer's shown card: ${total([dealerHand[0]])}`);
  }

  console.log(' ');
};

let askPlayer = () => {
  prompt('Your turn. Hit or Stay?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'hit' && answer !== 'stay') {
    prompt('Invalid option. Hit or Stay?');
    answer = readline.question().toLowerCase();
  }
  return answer;
};

let busted = score => {
  return score > CUT_OFF;
};

let playerWin = (playerScore, dealerScore) => {
  return playerScore > dealerScore;
};

let draw = (playerScore, dealerScore) => {
  return playerScore === dealerScore;
};

let computeResults = (playerScore, dealerScore, scoreBoard) => {

  console.log(' ');
  prompt(`Total sum of your cards: ${playerScore}`);
  prompt(`Total sum of dealer's cards: ${dealerScore}`);

  if (playerWin(playerScore, dealerScore)) {
    scoreBoard.Player += 1
    prompt('Congratulations! You Won!');
  } else if (draw(playerScore, dealerScore)) {
    prompt("It's a tie!");
  } else {
    scoreBoard.Dealer += 1
    prompt('Computer Won. Please try again!');
  }
};

let displayDealerLost = dealerScore => {
  console.log(' ');
  console.log(`Total sum of dealer's cards: ${dealerScore}`);
  prompt("The total sum of dealer's cards exceeds 21. Congratulations, you won!");
  console.log(' ');
};

let wantContinue = () => {
  prompt('Will you like to continue the match? (y or n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
};

let displayScore = scoreBoard => {
  console.log(`Player Score: ${scoreBoard.Player}, Computer Score: ${scoreBoard.Dealer}`);
};

let beginRound = scoreBoard  => {
  console.clear();
  prompt(`First player to win ${NUM_WINS} games wins the overall match`);
  displayScore(scoreBoard);
  prompt('Press c to continue');
  let answer = readline.question().toLowerCase();
  while (answer !== 'c') {
    prompt('Press c to continue');
    answer = readline.question().toLowerCase();
  }
};

let matchOver = scoreBoard => {
  return Object.values(scoreBoard).includes(NUM_WINS);
};

while (true) {

  let scoreBoard = {
    Player: 0,
    Dealer: 0
  };

  while (!matchOver(scoreBoard)) {
  
    beginRound(scoreBoard);

    let deck = initialiseDeck();
    shuffle(deck);
  
    let playerHand = [];
    let dealerHand = [];
  
    initialiseHand(deck, playerHand, dealerHand);
    let playerScore = total(playerHand);
    let dealerScore = total(dealerHand);

    prompt('Game Begins!\n');

    while (!busted(playerScore)) {
  
      displayCurrentHand(playerHand, dealerHand, false, playerScore, dealerScore);
  
      let playerChoice = askPlayer();
  
      if (playerChoice === 'stay') break;
  
      playerScore += total([deck[0]]);
      dealCard(deck, playerHand);
    }
  
    displayCurrentHand(playerHand, dealerHand, true, playerScore, dealerScore);
  
    if (busted(playerScore)) {
      prompt('The total sum of your cards exceeds 21. Please try again!');
      scoreBoard.Dealer += 1;
      console.log(' ');
      displayScore(scoreBoard);
      
      if (matchOver(scoreBoard)) break;

      if (wantContinue() !== 'y') {
        break;
      } else {
        continue;
      }
    }

    prompt('You choose to stay.');
    console.log(' ');
    prompt("Dealer's turn");
  
    while (dealerScore < DEALER_CUT_OFF) {
      let topCard = deck[0][0] + deck[0][1];
      console.log(`Dealer draws ${topCard}`);
      dealerScore += total([deck[0]]);
      dealCard(deck, dealerHand);
    }
    console.log(`Dealer's hand: ${dealerHand.map(value => value[0] + value[1]).join(', ')}`);
  
    if (busted(dealerScore)) {
      scoreBoard.Player += 1;
      displayDealerLost(dealerScore);
      displayScore(scoreBoard);
      
      if (matchOver(scoreBoard)) break;

      if (wantContinue() !== 'y') {
        break;
      } else {
        continue;
      }
    }

    computeResults(playerScore, dealerScore, scoreBoard);
    console.log(' ');

    displayScore(scoreBoard);
    if (matchOver(scoreBoard)) break;
    if (wantContinue() !== 'y') break;
  }

  scoreBoard.Player === NUM_WINS ? console.log('Congratulations, you won!') : console.log('Computer Won. Please try again!');
  break;
}