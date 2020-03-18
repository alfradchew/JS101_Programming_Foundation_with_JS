/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
*/

repeater = str => {
  strArray = str.split('');
  console.log(strArray.reduce((accumulator, currentValue) => {
    return accumulator += currentValue + currentValue;
  }, ''));
};

// Examples:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// ls solution
function repeater(string) {
  return string.split("").map(char => char + char).join("");
}