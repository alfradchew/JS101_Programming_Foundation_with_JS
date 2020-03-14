/*
You'll need three pieces of information:

1) the loan amount
2) the Annual Percentage Rate (APR)
3) the loan duration

From the above, you'll need to calculate the following two things:

1) monthly interest rate
2) loan duration in months

Formula: m = p * (j / (1 - Math.pow((1 + j),(-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.
*/

const readline = require('readline-sync');

let prompt = message => {
  console.log(`=> ${message}`);
};

let invalidNumber = number => {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0;
};

prompt('Welcome to Mortgage Calculator!');

while (true) {
  // Ask the user for the loan amount.
  prompt("What's the loan amount? (Must be greater than 0)");
  let principal = readline.question();

  while (invalidNumber(principal)) {
    prompt("Hmm... that doesn't look like a valid number.");
    principal = readline.question();
  }

  // Ask the user for the Annual Percentage Rate (APR).
  prompt("What's the Annual Percentage Rate (%)? (Must be greater than 0)");
  let interest = readline.question();

  while (invalidNumber(interest)) {
    prompt("Hmm... that doesn't look like a valid number.");
    interest = readline.question();
  }

  // Ask the user for the loan duration in months.
  prompt("What's the loan duration (years)? (Must be greater than 0)");
  let duration = readline.question();

  while (invalidNumber(duration)) {
    prompt("Hmm... that doesn't look like a valid number.");
    duration = readline.question();
  }

  // Print the result to the terminal.
  prompt('Calculating Morgage....');
  principal = Number(principal);
  let monthlyInterest = Number(interest) / (12 * 100);
  let months = Number(duration) * 12;

  let mortgage = principal * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest),(-months))));
  prompt(`"The mortgage per month is: $${mortgage.toFixed(2)}"`);

  // Ask the user if he wants to carry on
  prompt('Do you want to perform another mortgage calculation? (Y/N)');
  let toPerform = readline.question();
  while (!['Y', 'N'].includes(toPerform)) {
    prompt('Must choose Y or N');
    toPerform = readline.question();
  }
  if (toPerform === "N") break;
}