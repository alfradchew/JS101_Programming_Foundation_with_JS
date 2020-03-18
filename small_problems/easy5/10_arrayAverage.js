/* 
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, 
rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
*/

let average = arr => {
  
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
  }, 0);

  console.log(Math.floor(sum / arr.length));
};

// Examples:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

/*
Further Exploration

Try to solve this problem using Array.prototype.forEach method. Did you manage to do it? 
Was it difficult? Now try to to solve it using Array.prototype.reduce method.
*/