/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.

Examples:
=> Please enter an integer greater than 0: 5
=> Enter "s" to compute the sum, or "p" to compute the product. s

=> The sum of the integers between 1 and 5 is 15.

=> Please enter an integer greater than 0: 6
=> Enter "s" to compute the sum, or "p" to compute the product. p

=> The product of the integers between 1 and 6 is 720.
*/

let readlineSync = require('readline-sync');

// Wait for user's response.
let num = readlineSync.question('Please enter an integer greater than 0: ');
let operator = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
console.log('');

num = Number(num);


if (operator === 's') {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${total}`);
} else {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${total}`);
}