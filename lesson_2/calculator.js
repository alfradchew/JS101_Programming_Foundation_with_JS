/*
Ask the user for two numbers.
Ask the user for the type of operation to perform: add, subtract, multiply or divide.
Perform the calculation and display the result.
*/

const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
const readline = require('readline-sync');

let prompt = message => {
  console.log(`=> ${message}`);
};

let invalidNumber = number => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

let messages = (message, lang = 'en') => {
  return MESSAGES[lang][message];
};

prompt(messages('welcome', LANGUAGE));
let name = readline.question();

while (name === '') {
  prompt(messages('validName', LANGUAGE));
  name = readline.question();
}

while (true) {
  // Ask the user for the first number.
  prompt(`"Hi ${name}! What's the first number?"`);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt('What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  prompt(`The result is: ${output}`);

  // Ask the user if he wants to carry on
  prompt('Do you want to perform another calculation? (Y/N)');
  let toPerform = readline.question();
  while (!['Y', 'N'].includes(toPerform)) {
    prompt('Must choose Y or N');
    toPerform = readline.question();
  }
  if (toPerform === "N") break;
}

