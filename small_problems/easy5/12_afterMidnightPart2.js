/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight.
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight,
respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.
*/

let afterMidnight = str => {
  strArray = str.split(':');
  return (Number(strArray[0]) % 24) * 60 + Number(strArray[1]);
};

let beforeMidnight = str => {
  strArray = str.split(':');
  return (Number(strArray[0]) % 24) * 60 - Number(strArray[1]);  
};

// Examples
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.

// Further Exploration

// How would these methods change if you were allowed to use the Date class?