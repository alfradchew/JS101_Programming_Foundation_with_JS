/*
Starting with the string:

let famousWords = "seven years ago...";

show two different ways to put the expected "Four score and " in front of it.
*/

let famousWords = "seven years ago...";

// Method 1
console.log('Four score and ' + famousWords);

// Method 2
console.log('Four score and '.concat(famousWords));