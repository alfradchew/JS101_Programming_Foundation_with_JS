/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining
whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be
included in the return value; they just don't count when toggling the desired case.
*/

let staggeredCase = str => {
  let count = 0;
  let letterList = str.split('');
  return letterList.map(letter => {
    if (/[a-z]/gi.test(letter)) {
      count += 1;
      if (count % 2 == 1) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    } else {
      return letter;
    }
  }).join('');
};

// Example:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/*
Further Exploration

Modify this function so the caller can determine whether non-alphabetic characters should be counted
when determining the upper/lowercase state. That is, you want a function that can perform the same actions
that this function does, or operates like the previous version.
*/