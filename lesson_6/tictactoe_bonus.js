const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUM_WINS = 2;
const WINNING_LINES = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];
const START_OPTIONS = ['Player', 'Computer', 'Choose'];
let startOption = START_OPTIONS[2];

let prompt = message => {
  console.log(`=> ${message}`);
};

let displayBoard = boardObj => {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log(`     |     |     `);
  console.log(`  ${boardObj[1]}  |  ${boardObj[2]}  |  ${boardObj[3]}  `);
  console.log(`     |     |     `);
  console.log(`-----|-----|-----`);
  console.log(`     |     |     `);
  console.log(`  ${boardObj[4]}  |  ${boardObj[5]}  |  ${boardObj[6]}  `);
  console.log(`     |     |     `);
  console.log(`-----|-----|-----`);
  console.log(`     |     |     `);
  console.log(`  ${boardObj[7]}  |  ${boardObj[8]}  |  ${boardObj[9]}  `);
  console.log(`     |     |     `);
  console.log('');
};

let initializeBoard = () => {
  let board = {};
  for (let i = 1; i <= 9; i += 1) {
    board[String(i)] = INITIAL_MARKER;
  }
  return board;
};

let emptySquares = board => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
};

let joinOr = (arr, punctuation = ', ', conjunction = 'or') => {
  return arr.reduce(
    (accumulator, currentValue, currentIndex) => {
      switch (currentIndex) {
        case 0:
          return currentValue;
        case arr.length - 1:
          return accumulator + ` ${conjunction} ${currentValue}`;
        default:
          return accumulator + `${punctuation}${currentValue}`;
      }
    }, '')
};

let findAtRiskSquare = (line, board, marker) => {

  // Eg. line = [1,2,3], markersInLine = [X,O,'']
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
};

let playerChoosesSquare = board => {
  let square; // declare here so that we can use it outside the loop

  while (true) {

    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);

    square = readline.question().trim(); // input trimmed to allow spaces in input

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

let computerChoosesSquare = board => {
  let square;

  // offense
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index += 1) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  // pick #5
  if (board['5'] === INITIAL_MARKER) {
    square = '5';
  }

  // random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
};

let chooseSquare = (board, currentPlayer) => {
  return currentPlayer === 'player' ? playerChoosesSquare(board) : computerChoosesSquare(board);
};

let alternatePlayer = currentPlayer => {
  return currentPlayer === 'player' ? 'computer' : 'player';
};

let startPlayer = startOption => {
  if (['Player', 'Computer'].includes(startOption)) {
    return startOption.toLowerCase();
  } else {
    prompt("Enter 'Player' or 'Computer' to go first");
    let answer = readline.question().toLowerCase();
    while (answer !== 'player' && answer !== 'computer') {
      prompt('That is not a valid entry');
      answer = readline.question().toLowerCase();
    }
    return answer;
  }
};

let boardFull = board => {
  return emptySquares(board).length === 0;
};

let detectWinner = board => {
  for (line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line;

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

let someoneWon = board => {
  return !!detectWinner(board);
};

let matchOver = scoreBoard => {
  return Object.values(scoreBoard).includes(NUM_WINS);
};

let restart = str => {
  prompt(`Will you like to restart the ${str}? (y or n)`);
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
};

let displayScore = scoreBoard => {
  console.log(`Player Score: ${scoreBoard.Player}, Computer Score: ${scoreBoard.Computer}`);
};

let beginRound = scoreBoard => {
  console.clear();
  console.log(`First player to win ${NUM_WINS} games wins the overall match`);
  displayScore(scoreBoard);
  prompt('Press c to continue');
  let answer = readline.question().toLowerCase();
  while (answer !== 'c') {
    prompt('Press c to continue');
    answer = readline.question().toLowerCase();
  }
};

while (true) {

  let scoreBoard = {
    'Player': 0,
    'Computer': 0
  };

  while (true) {
    let currentPlayer = startPlayer(startOption);
    beginRound(scoreBoard);

    let board = initializeBoard();
  
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }
  
    displayBoard(board);
  
    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      scoreBoard[detectWinner(board)] += 1;
    } else {
      prompt("It's a tie!");
    }

    displayScore(scoreBoard);
    if (matchOver(scoreBoard)) {
      scoreBoard.Player === NUM_WINS ? console.log('Congratulations, you won!') : console.log('Computer Won!');
      break;
    }

    if (restart('game') !== 'y') break;
  }

  // Player stop playing the game before one of the player/computer score reaches 5
  if ((scoreBoard.Player !== NUM_WINS) && (scoreBoard.Computer !== NUM_WINS)) break;

  if (restart('match') !== 'y') break;
}