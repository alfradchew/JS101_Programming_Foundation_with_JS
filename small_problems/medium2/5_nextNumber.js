/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits
occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a
multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer.
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

let unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

let isFeatured = num => {
  let numArray = String(num).split('');
  let uniqueNumArray = numArray.filter(unique);
  let isUnique = numArray.length === uniqueNumArray.length;
  let isOdd = num % 2 === 1;
  let isMultiple7 = num % 7 === 0;
  return isUnique && isOdd && isMultiple7;
};

let featured = num => {
  let quotient = Math.floor(num / 7);
  let featuredNum = quotient * 7;

  do {
    featuredNum += 7;
  } while (!isFeatured(featuredNum) && featuredNum <= 9876543201);

  if (isFeatured(featuredNum)) {
    console.log(featuredNum);
  } else {
    console.log('There is no possible number that fulfills those requirements.');
  }
};

// Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."