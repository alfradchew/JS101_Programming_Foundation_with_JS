/*
Write a program that solicits six numbers from the user, then logs a message that
describes whether or not the sixth number appears amongst the first five numbers.

Examples:
=> Enter the 1st number: 25
=> Enter the 2nd number: 15
=> Enter the 3rd number: 20
=> Enter the 4th number: 17
=> Enter the 5th number: 23
=> Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

=> Enter the 1st number: 25
=> Enter the 2nd number: 15
=> Enter the 3rd number: 20
=> Enter the 4th number: 17
=> Enter the 5th number: 23
=> Enter the last number: 18

=> The number 18 does not appear in 25,15,20,17,23.
*/

let readline = require('readline-sync');

console.log('Enter the 1st number:');
let firstNumber = readline.prompt();

console.log('Enter the 2nd number:');
let secondNumber = readline.prompt();

console.log('Enter the 3rd number:');
let thirdNumber = readline.prompt();

console.log('Enter the 4th number:');
let fourthNumber = readline.prompt();

console.log('Enter the 5th number:');
let fifthNumber = readline.prompt();

console.log('Enter the last number:');
let lastNumber = readline.prompt();

let numArray = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
if (numArray.includes(String(lastNumber))) {
  console.log(`The number ${lastNumber} appears in ${String(numArray)}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${String(numArray)}.`);
}

/*
Further Exploration
What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25),
instead of a specific number? Would the current solution still work? Why or why not? Think about this first before scrolling down.

Possible Solution:
function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}

Explore the Array.prototype.some method, and see if you can change the possible solution shown above to make use of that method instead.
*/