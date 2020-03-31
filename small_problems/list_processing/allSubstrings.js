/*
Write a function that returns a list of all substrings of a string. Order the returned list
by where in the string the substring begins. This means that all substrings that start at
position 0 should come first, then all substrings that start at position 1, and so on. Since
multiple substrings will occur at each position, return the substrings at a given position
from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:
*/

let substringsAtStart = str => {
  let finalArr = [];
  let finalStr = '';
  str.split('').forEach(element => {
    finalStr += element;
    finalArr.push(finalStr);
  })
  return finalArr;
};

let substrings = str => {
  let finalArr = [];
  let strArr = str.split('');
  strArr.forEach((_, currentIndex) => {
    // Note: From LS solution, can just use string.substring(currentIndex)
    finalArr = finalArr.concat(substringsAtStart(strArr.slice(currentIndex).join('')));
  });
  console.log(finalArr);
};

// Example
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]