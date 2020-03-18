// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

let digitList = num => {
  let stringArray = String(num).split('');
  let numberArray = stringArray.map(element => parseInt(element));
  console.log(numberArray);
};

// Examples:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

/*
Further Exploration

A more concise approach would be to use the Array.prototype.map method.
Refactor the current solution to make use of this method, if you haven't already.
*/