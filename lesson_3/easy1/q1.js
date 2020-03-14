// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5; // => It will not raise an error. numbers = [1, 2, 3, missing, missing, missing, 5]

// bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return? It will output undefined, but itself is a missing value