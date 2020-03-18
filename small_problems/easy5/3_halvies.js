/*
Write a function that takes an array as an argument, and returns an array that contains two elements,
each of which is an array. Put the first half of the original array elements in the first element of
the return value, and put the second half in the second element. If the original array contains an odd
number of elements, place the middle element in the first half array.
*/

let getArray = (length, arrFull, leftSide) => {
  if (length === 0) {
    return [];
  } else if (leftSide) {
    return arrFull.slice(0, length);
  } else {
    return arrFull.slice(-length);
  }
};

let halvsies = arr => {
  let leftLength = Math.ceil(arr.length / 2);
  let rightLength = Math.floor(arr.length / 2);
  console.log([getArray(leftLength, arr, true), getArray(rightLength, arr, false)]);
};

// Examples:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]