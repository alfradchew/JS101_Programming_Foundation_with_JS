/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word.
You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
*/

let swap = str => {
  let strArray = str.split(' ');
  let finalArr = [];
  let finalStr = '';
  strArray.forEach(word => {
    let reverseWord = (word.length !== 1) ? (word[word.length - 1] + word.slice(1, -1) + word[0]) : word;
    finalArr.push(reverseWord);
  });
  console.log(finalArr.join(' '));
};

// Examples:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

/*
Further Exploration

How can you refactor this problem using the Array.prototype.map method instead?
*/