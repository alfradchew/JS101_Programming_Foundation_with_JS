/*
Write a function that takes a string argument, and returns true if all of the alphabetic characters inside
the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
*/

let isUppercase = str => {
  console.log(str === str.toUpperCase());
};

// Examples:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// ls solution using regex
function isUppercase(string) {
  return !/[a-z]/.test(string);
}