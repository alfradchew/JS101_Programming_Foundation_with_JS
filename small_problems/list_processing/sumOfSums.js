/*
Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence
for that array. You may assume that the array always contains at least one number.
*/

let sumOfSums = arr => {
  let finalSum = 0;
  let currentSum = 0;
  arr.forEach(element => {
    currentSum += element;
    finalSum += currentSum;
  })
  console.log(finalSum);
};

// Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35