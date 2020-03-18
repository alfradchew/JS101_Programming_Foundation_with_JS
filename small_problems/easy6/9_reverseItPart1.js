// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

let reverseSentence = str => {
  console.log(str.split(' ').reverse().join(' '));
};

// Examples:
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"