/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
The program must compute the tip, and then log both the tip and the total amount of the bill
to the console. You can ignore input validation and assume that the user will enter numbers.

Example:
=> What is the bill? 200
=> What is the tip percentage? 15

=> The tip is $30.00
=> The total is $230.00
*/

let readlineSync = require('readline-sync');

// Wait for user's response.
let bill = readlineSync.question('What is the bill? ');
let tipPercent = readlineSync.question('What is the tip percentage? ');

bill = Number(bill);
tipPercent = Number(tipPercent);

let tip = (tipPercent / 100) * bill;
let total = bill + tip;
tip = tip.toFixed(2);
total = total.toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);