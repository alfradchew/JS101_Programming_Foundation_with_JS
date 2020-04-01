/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the
sum of the squares of the first count positive integers.
*/

let sumSquareDifference = num => {
  let squareSum = 0;
  let sumSquare = 0;
  for (let i = 1; i <= num; i += 1) {
    squareSum += i;
    sumSquare += i ** 2;
  }
  console.log(squareSum ** 2 - sumSquare);
};

// Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150