/*
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.
*/

let negative = num => {
  console.log(num < 0 ? num : -num);
};

// Examples:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

/*
Further Exploration

An alternative solution would be to use the ternary operator (e.g., a ? b : c). If you haven't already used it,
try refactoring the solution using the ternary operator.

Did you notice that negative(0) returns -0? What is this value, -0? Is it different from 0 in some way? Use Google
to look for an explanation of -0. In particular, see if you can learn how to differentiate between 0 and -0 in a program.
*/