// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // => false

// ls explanation
/*
NaN is not a number but a special numeric value that indicates that an operation that was 
intended to return a number failed. JavaScript doesn't let you use == and === to 
determine whether a value is NaN.

Use isNaN() instead to test whether the value is NaN
*/