/*
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, 
always starting with a '1'. The length of the string should match the given integer.
*/

let stringy = num => {
  finalStr = '';
  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      finalStr += '1';
    } else {
      finalStr += '0';
    }
  }
  console.log(finalStr);
};

// Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"