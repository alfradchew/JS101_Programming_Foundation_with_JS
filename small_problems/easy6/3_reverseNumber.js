// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

let reverseNumber = num => {
  let strArray = String(num).split('');
  let reverseNumberString = strArray.reduce((accumulator, currentValue) => {
    return accumulator = currentValue + accumulator;
  }, '');
  console.log(Number(reverseNumberString));
};

// Examples:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

// ls solution
function reverseNumber(number) {
  let numberStringArray = String(number).split('');
  let reversedStringedNum = numberStringArray.reverse().join('');
  return parseInt(reversedStringedNum, 10);
}