// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // =>  { first: [1, 2] } since numArray reference to the array of the original object