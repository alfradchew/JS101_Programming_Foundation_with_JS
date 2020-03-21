// What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// 2
// 4
// 6
// true

/*
num = num * 2 is an assignment expression and hence returns the value at each iteration step.

Since all are truthy value, it also returns true after the iteration ends.
*/