/*
Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and
a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal
to its quantity.
*/

let buyFruit = arr => {
  let finalArr = [];
  arr.forEach(fruitArr => {
    finalArr = finalArr.concat(Array(fruitArr[1]).fill(fruitArr[0]));
  })
  console.log(finalArr);
};

// Example:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// LS solution
function buyFruit(list) {
  const mergedResult = list.map(subarray =>
    Array(subarray[1]).fill(subarray[0])
  );
  return [].concat(...mergedResult);
}