/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs 
the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.

Example:
=> Enter the length of the room in meters:
=> 10
=> Enter the width of the room in meters:
=> 7
=> The area of the room is 70.00 square meters (753.47 square feet).
*/

let readlineSync = require('readline-sync');

// Wait for user's response.
console.log('Enter the length of the room in meters:');
let length = readlineSync.prompt();
console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();

let area = Number(length) * Number(width);
let squareFeet = (area * 10.7639).toFixed(2);
area = area.toFixed(2);

console.log(`The area of the room is ${area} square meters (${squareFeet} square feet).`);
