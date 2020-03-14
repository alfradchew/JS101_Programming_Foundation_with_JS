/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. In this
exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and
Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/

let integerToString = num => {
  if (num === 0) {
    return '0';
  } else {
    let finalString = '';
    let remainder;
    while (num !== 0) {
      remainder = num % 10;
      num = Math.floor(num / 10);
      finalString = remainder + finalString;
    }
    return finalString;
  }
};

let signedIntegerToString = num => {
  switch (Math.sign(num)) {
    case 1:
      return "+" + integerToString(num);
    case -1:
      return "-" + integerToString(-num);
    default:
      return integerToString(num);
  }
};

// Examples:
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");