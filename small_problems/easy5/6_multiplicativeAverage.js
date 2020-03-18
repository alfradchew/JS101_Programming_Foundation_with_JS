/*
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result
by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
*/

let roundToThree = num => {    
  return +(Math.round(num + "e+3")  + "e-3");
};

let multiplicativeAverage = arr => {
  let product = arr.reduce((accumulator, currentValue) => {
    return accumulator *= currentValue
  }, 1);
  console.log(roundToThree(product / arr.length).toFixed(3));
};

// Examples:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"