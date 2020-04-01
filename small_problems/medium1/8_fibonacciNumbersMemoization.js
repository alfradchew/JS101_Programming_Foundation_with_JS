/*
Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument
value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions)
is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch
every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2)
because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.
*/

let result = {};
let fibonacci = num => {
  if (num === 1 || num === 2) {
    return 1;
  } else if (result[num]) {
    return result[num];
  } else {
    result[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return result[num];
  }
};

// Examples:
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050