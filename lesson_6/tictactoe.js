const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

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

let playerChoosesSquare = board => {
  let square; // declare here so that we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

let computerChoosesSquare = board => {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
};

let boardFull = board => {
  return emptySquares(board).length === 0;
};

let detectWinner = board => {
  let winningLines = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
  ];

  for (line of winningLines) {
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

while (true) {
  
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}