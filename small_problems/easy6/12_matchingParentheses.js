// Write a function that takes a string as argument, and returns true if all parentheses in the string are properly 
// balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

let isBalanced = str => {
  // + 1 if left bracket, - 1 if right bracket
  // count should never approach negative in value
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (count < 0) {
      return false;
    } else if (str[i] === '(') {
      count += 1;
    } else if (str[i] === ')') {
      count -= 1;
    }
  }
  return count === 0;
};

// Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).

/*
Further Exploration

There are a few other characters that should be matching as well. Square brackets and curly brackets
normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be
balanced. Can you expand this function to take into account those characters?
*/