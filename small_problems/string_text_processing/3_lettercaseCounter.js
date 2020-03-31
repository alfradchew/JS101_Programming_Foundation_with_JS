/*
Write a function that takes a string and returns an object containing three properties: one representing the
number of characters in the string that are lowercase letters, one representing the number of characters that
are uppercase letters, and one representing the number of characters that are neither.
*/

let letterCaseCount = str => {
  let strArray = str.split('');
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  strArray.forEach(letter => {
    lowercaseLetter = letter.toLowerCase();
    if (!(lowercaseLetter >= 'a' && lowercaseLetter <= 'z')) {
      obj.neither += 1;
    } else if (letter === lowercaseLetter) {
      obj.lowercase += 1;
    } else {
      obj.uppercase += 1;
    }
  });
  console.log(obj);
};

// Examples:
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }