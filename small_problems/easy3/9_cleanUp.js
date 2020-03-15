/*
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function
that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result (i.e., the result string should never
have consecutive spaces).
*/

let isLowerCase = char => {
  return char >= 'a' && char <= 'z';
};

let isUpperCase = char => {
  return char >= 'A' && char <= 'Z';
};

let cleanUp = str => {
  let finalStr = '';
  let previousIsAlphabetic = false;
  for (let i = 0; i < str.length; i += 1) {
    if (isLowerCase(str[i]) || isUpperCase(str[i])) {
      finalStr += str[i];
      previousIsAlphabetic = true;
    } else if (i === 0) {
      finalStr += ' ';
      previousIsAlphabetic = false;
    } else {
      finalStr = previousIsAlphabetic ? (finalStr + ' ') : finalStr;
      previousIsAlphabetic = previousIsAlphabetic ? false : previousIsAlphabetic;
    }
  }
  console.log(finalStr);
};

// Example:
cleanUp("---what's my +*& line?");    // " what s my line "

// ls solution
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// ls regex solution
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}