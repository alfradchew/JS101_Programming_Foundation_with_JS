/*
Given the following data structure, return a new array with the same structure, but with the subarrays ordered --
(alphabetically or numerically as appropriate) -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(array => {
  if (typeof array[0] === 'string') {
    return array.slice().sort();
  } else {
    return array.slice().sort((a, b) => a - b);
  }
});

console.log(arr);
console.log(sortedArr);