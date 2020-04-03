/*
Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements
from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one
element at a time in the proper order.

Your solution should not mutate the input arrays.
*/

let merge = (arr1, arr2) => {

  let mergedArr = [];
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();

  while (arr1Copy.length !== 0 && arr2Copy.length !== 0) {
    mergedArr.push(arr1Copy[0] <= arr2Copy[0] ? arr1Copy.shift() : arr2Copy.shift());
  }

  mergedArr = arr1Copy.length === 0 ? mergedArr.concat(arr2Copy) : mergedArr.concat(arr1Copy);

  return mergedArr;
};

// Examples:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]