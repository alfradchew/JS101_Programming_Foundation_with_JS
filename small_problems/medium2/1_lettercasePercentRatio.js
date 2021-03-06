/*
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

let letterPercentages = str => {
  let totalLength = str.length;
  let lowerCaseLength = str.match(/[a-z]/g) === null ? 0 : str.match(/[a-z]/g).length;
  let upperCaseLength = str.match(/[A-Z]/g) === null ? 0 : str.match(/[A-Z]/g).length;
  let neitherLength = str.match(/[^a-z]/gi) === null ? 0 : str.match(/[^a-z]/gi).length;
  return {
    lowercase: `${(lowerCaseLength / totalLength * 100).toFixed(2)}`,
    uppercase: `${(upperCaseLength / totalLength * 100).toFixed(2)}`,
    neither: `${(neitherLength / totalLength * 100).toFixed(2)}`
  }
};

// Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }