/*
Write a function that takes a string as an argument, and returns that string with a staggered capitalization
scheme. Every other character, starting from the first, should be capitalized and should be followed by a
lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted
as characters for determining when to switch between upper and lower case.
*/

let staggeredCase = str => {
  let count = 0;
  let letterList = str.split('');
  console.log(letterList.map(letter => {
    count += 1;
    if (count % 2 == 1) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join(''));
};

// Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"