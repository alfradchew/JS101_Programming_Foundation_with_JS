// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*
[1, 1, 1, 1, 1], the methods takes in 3 arguement (the return value, start index, end index (exclusive)) hence it replaces
the elements at index 1,2,3,4 with 1

The method is destructive.
*/