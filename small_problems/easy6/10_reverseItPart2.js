/*
Write a function that takes a string argument containing one or more words, and returns a new string containing the words
from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument
will consist of only letters and spaces. Words will be separated by a single space.
*/

let reverseWords = str => {
  let wordsArray = str.split(' ');
  console.log(wordsArray.map(element => {
    return element.length < 5 ? element : element.split('').reverse().join('');
  }).join(' '))
};

// Examples:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

// Further Exploration
// Did you solve this problem in different way? Try to solve it using map() method.