/*
We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When
only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs
without error and satisfies the requirements?
*/

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// The first range function is overridden. Hence, only the second range function is called. Since the second range function keeps calling itself,
// it will only stop when the stack size is exceeded.

function range(start, end = -1) {

  if (end == -1) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}