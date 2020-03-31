/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring
must consist of a sequence of characters that reads the same forward and backward. The substrings in the
returned list should be sorted by their order of appearance in the input string. Duplicate substrings
should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is,
'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are
not palindromes.
*/

let palindromes = str => {
  let results = [];
  for (let initialIdx = 0; initialIdx < (str.length - 1); initialIdx += 1) {
    for (let finalIdx = (initialIdx + 2); finalIdx <= str.length; finalIdx += 1) {
      let strSelected = str.substring(initialIdx, finalIdx);
      let reverseStrSelected = strSelected.split('').reverse().join('');
      if (strSelected === reverseStrSelected) {
        results.push(strSelected);
      }
    }
  }
  console.log(results);
};

// Examples:
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]