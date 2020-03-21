// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let finalObj = {};
let charArray = statement.split('').filter(char => char !== ' ');;

charArray.forEach(element => {
  if (finalObj[element]) {
    finalObj[element] += 1;
  } else {
    finalObj[element] = 1;
  }
});

console.log(finalObj);