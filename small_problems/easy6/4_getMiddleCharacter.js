/*
Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. If the string has an even length, 
you should return exactly two characters.
*/

let centerOf = str => {
  let strLength = str.length;
  let middleIndex = strLength / 2;
  let middleChar = (strLength % 2 === 0) ? str[middleIndex - 1] + str[middleIndex] : str[Math.floor(middleIndex)];
  console.log(middleChar);
};

// Example:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"