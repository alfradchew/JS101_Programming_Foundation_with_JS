/*
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.
*/

let crunch = str => {
  let finalStr = '';
  let currentChar = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== currentChar) {
      finalStr += str[i];
      currentChar = str[i];
    }
  }
  console.log(finalStr);
};

// Example
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// Bonus - Regex Solution
let crunch = str => {
  return string.replace(/[^\w\s]|(.)(?=\1)/g, "");
};