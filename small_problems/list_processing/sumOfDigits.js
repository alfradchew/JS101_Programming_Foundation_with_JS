/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits.
Do this using list processing techniques.
*/

let sum = num => {
  let strArray = String(num).split("");
  let finalSum = strArray.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue);
  }, 0);
  console.log(finalSum);    
};

// Examples:
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45