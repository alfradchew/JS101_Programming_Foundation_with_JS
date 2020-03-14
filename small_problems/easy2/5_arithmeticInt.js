/*
Write a program that prompts the user for two positive integers, and then prints the results of the
following operations on those two numbers: addition, subtraction, product, quotient, remainder, and
power. Do not worry about validating the input.

Example
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
*/

let readlineSync = require('readline-sync');

console.log('Enter the first number:');
let num1 = readlineSync.prompt();
console.log('Enter the second number:');
let num2 = readlineSync.prompt();

num1 = Number(num1);
num2 = Number(num2);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.round(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);