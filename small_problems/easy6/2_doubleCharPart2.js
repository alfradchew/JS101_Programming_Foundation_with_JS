/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

let doubleConsonants = str => {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let strArray = str.split('');
  console.log(strArray.reduce((accumulator, currentValue) => {
    return CONSONANTS.includes(currentValue.toLowerCase()) ? accumulator += currentValue + currentValue : accumulator += currentValue;
  }, ''));
};

// Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""