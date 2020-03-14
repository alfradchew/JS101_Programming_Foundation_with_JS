/*
The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the
elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort
for the second.

Bonus 1: Can you do it using the Array.prototype.forEach() method?

Bonus 2: Can you do it using the Array.prototype.reduce() method?
*/

// Method 1: Using splice
numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse()); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [1, 2, 3, 4, 5]

// Method 2: Using spread operator
numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1)); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [1, 2, 3, 4, 5]

// Bonus Method 1: Use forEach
numbers = [1, 2, 3, 4, 5];
let arr = [];
numbers.forEach(element => {
  arr.unshift(element);
});
console.log(arr); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [1, 2, 3, 4, 5]

// Bonus Method 2: Use reduce
numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((accumulator, element) => ([element, ...accumulator]), [])); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [1, 2, 3, 4, 5]