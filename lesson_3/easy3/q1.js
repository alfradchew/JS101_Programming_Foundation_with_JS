// Write four different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

// Method 1
numbers.length = 0;

// Method 2
numbers = [];

// Method 3
let totalLength = numbers.length;
for (let i = 0; i < totalLength; i += 1) {
  numbers.pop();
}

// Method 4
numbers.splice(0);