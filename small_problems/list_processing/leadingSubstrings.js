/*
Write a function that takes a string argument, and returns a list of all substrings that start
from the beginning of the string, ordered from shortest to longest.
*/

let substringsAtStart = str => {
  let finalArr = [];
  let finalStr = '';
  str.split('').forEach(element => {
    finalStr += element;
    finalArr.push(finalStr);
  })
  console.log(finalArr);
};

// Examples:
substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// ls solution using map
function substringsAtStart(string) {
  return string
    .split("")
    .map((_, idx, stringArray) => stringArray.slice(0, idx + 1).join(""));
};