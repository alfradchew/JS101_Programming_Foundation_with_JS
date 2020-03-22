/*
Perform the same transformation of sorting the subarrays we did in the previous exercise
with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(array => {
  if (typeof array[0] === 'number') {
    return array.slice().sort((a, b) => b - a);
  } else {
    return array.slice().sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
});

console.log(arr);
console.log(sortedArr);
