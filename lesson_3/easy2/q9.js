/* Write two one-line expressions to count the number of 
lower-case t characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count1 = (statement1.match(/t/g) || []).length;
let count2 = (statement2.match(/t/g) || []).length;

console.log(count1);
console.log(count2);