/*
Write a function that counts the number of occurrences of each element in a given array. Once counted,
log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

let countOccurrences = arr => {
  
  let objCount = {};
  
  for (let i of arr) {
    if (!objCount[i]) {
      objCount[i] = 1;
    } else {
      objCount[i] += 1;
    }
  }

  for (let objArr of Object.entries(objCount)) {
    console.log(`${objArr[0]} => ${objArr[1]}`);
  }

};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);

/*
Further Exploration

Try to solve the problem when words are case insensitive, e.g. "suv" and "SUV" represent the same vehicle type.
*/