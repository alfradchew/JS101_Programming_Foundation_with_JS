/*
In the previous exercise, you developed a function that converts simple numeric strings to integers. In this
exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string
may have a leading + or - sign; if the first character is a +, your function should return a positive number;
if it is a -, your function should return a negative number. If no sign is given, you should return a positive
number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number().
You may, however, use the stringToInteger() function from the previous lesson.
*/

let stringToInteger = str => {
  let multiple = 1;
  let finalNumber = 0;
  for (let i = (str.length - 1); i >= 0; i--) {
    finalNumber += str[i] * multiple;
    multiple *= 10;
  }
  return finalNumber;
};

let stringToSignedInteger = str => {
  let sign = str[0];
  switch (sign) {
    case "+":
      return stringToInteger(str.substr(1));
    case "-":
      return -stringToInteger(str.substr(1));
    default:
      return stringToInteger(str);
  }
};

// Examples:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true