/*
Write a function that combines two arrays passed as arguments, and returns a new array that contains all
elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.
*/

let interleave = (arr1, arr2) => {
  let finalArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    finalArr.push(arr1[i], arr2[i]);
  }
  console.log(finalArr);
};

// Examples: 
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

/*
Further Exploration

Try to solve this problem using Array.prototype.forEach method.

Can you solve it using map or reduce?
*/