/*
Write a function that returns true if its integer argument is palindromic, or false otherwise.
A palindromic number reads the same forwards and backwards.
*/

let isPalindrome = str => {
  reversedString = str.split("").reverse().join("");
  console.log(str === reversedString);
};

let isPalindromicNumber = num => {
  isPalindrome(String(num));
};

// Examples:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

/*
Further Exploration

Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this?
*/