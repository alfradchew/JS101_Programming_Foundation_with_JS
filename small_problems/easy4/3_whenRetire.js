/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
=> What is your age? 30
=> At what age would you like to retire? 70

=> It's 2017. You will retire in 2057.
=> You have only 40 years of work to go!
*/

let readline = require('readline-sync');

console.log('What is your age?');
let age = readline.prompt();

console.log('At what age would you like to retire?');
let retireAge = readline.prompt();

let today = new Date();
let thisYear = today.getFullYear();
let duration = retireAge - age;

console.log(`It's ${thisYear}. You will retire in ${thisYear + duration}.`);
console.log(`You have only ${duration} years of work to go!`);

/*
Further Exploration

What would happen if the new keyword wasn't used in defining the today variable?
*/