/*
Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two.
There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You
may assume that both arguments will always be arrays.
*/

let union = (arr1, arr2) => {
  let arr = arr1.concat(arr2);
  let finalArr = [];
  arr.forEach(number => {
    finalArr.includes(number) ? finalArr : finalArr.push(number);
  });
  finalArr.sort((a, b) => a - b);
  console.log(finalArr);
};

// Example:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

/*
ls solution

function union(array1, array2) {
  return [...new Set([...array1, ...array2])];
};
*/