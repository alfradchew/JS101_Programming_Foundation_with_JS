// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

// Note: can just put VOWELS = 'aeiouAEIOU'
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let removeVowels = arr => {
  let finalArr = arr.map(str => {
    let strArr = str.split('');
    return strArr.filter(currentLetter => {
      return !VOWELS.includes(currentLetter);
    }).join('');
  });
  console.log(finalArr);
};

// Example:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// ls solution using regex
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
};