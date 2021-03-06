/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition,
and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the
100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just
to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by
the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.
*/

let findFibonacciIndexByLength = num => {
  if (num === 1) {
    console.log(1);
  } else {
    let index = 7;
    let arr = [8, 13];
    let referenceNumber = arr[1];
    while (referenceNumber.toString().length !== num) {
      arr.push(arr[0] + arr[1]);
      arr.shift();
      referenceNumber = arr[1];
      index += 1;
    }
    console.log(index);
  }
};

// Examples:
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution discussion

/*
Further Exploration

Add some error handling to your program to issue an error message when the computed result stops changing.
Base your solution on the computed values, not the number 16.
*/