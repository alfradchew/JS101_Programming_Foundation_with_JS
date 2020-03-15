/*
Write a function that takes a year as input and returns the century. The return value should be a string
that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
*/

let isSpecialNumber = str => {
  return (str === '1') || (str === '2') || (str === '3');
};

let isLastTwoSpecialNumber = str => {
  return (str === '11') || (str === '12') || (str === '13');
};

let century = num => {
  let centuryYear = Math.ceil(num / 100);
  let centuryYearString = String(centuryYear);

  // first check if last digit is not 1, 2 or 3
  // then check if the century number is a single digit or if it is not 11, 12 or 13

  if (!isSpecialNumber(centuryYearString[centuryYearString.length - 1])) {
    console.log(centuryYearString + 'th');
  } else if (centuryYearString.length === 1 || !isLastTwoSpecialNumber(centuryYearString.slice(-2))) {
    switch (centuryYearString[centuryYearString.length - 1]) {
      case '1':
        console.log(centuryYearString + 'st');
        break;
      case '2':
        console.log(centuryYearString + 'nd');
        break;
      case '3':
        console.log(centuryYearString + 'rd');
        break;
    } 
  } else {
    console.log(centuryYearString + 'th');
  }
};

// Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

/*
Spencer Brainard's solution

function century(year) {
  let century = Math.ceil(year / 100);
  return `${String(century)}${centurySuffix(century)}`;
}

function centurySuffix(century) {
  if ([11, 12, 13].includes(century % 100)) {
    return 'th';
  }
  let lastDigit = century % 10;

  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
*/