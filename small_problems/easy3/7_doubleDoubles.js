/*
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits.
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a
double number; return double numbers as-is.
*/

let twice = num => {
  let numLength = String(num).length;
  if (numLength % 2 === 0) {
    let divisor = 10 ** (numLength / 2);
    let leftSide = parseInt(num / divisor, 11);
    let rightSide = num % divisor;
    if (leftSide === rightSide) {
      console.log(num);
    } else {
      console.log(num * 2);
    }
  } else {
    console.log(num * 2);
  }
};

// Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676