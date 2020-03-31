/*
Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/

let swapCase = str => {
  let wordList = str.split(' ');
  console.log(wordList.map(word => {
    let letterList = word.split('');
    return letterList.map(letter => {
      if (letter === letter.toLowerCase()) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    }).join('');
  }).join(' '));
};

// Examples:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"