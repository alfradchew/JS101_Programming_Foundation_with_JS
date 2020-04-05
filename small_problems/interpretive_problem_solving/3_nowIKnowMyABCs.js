/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each
block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.
*/

let isBlockWord = word => {

  const SPELLING_BLOCK = {
    B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
    G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
    V: 'I', L: 'Y', Z: 'M'
  };

  let checkBlock = {
    B: false, X: false, D: false, C: false, N: false,
    G: false, R: false, F: false, J: false, H: false,
    V: false, L: false, Z: false
  }; 

  let result = true;

  for (let char of word) {
    let upperCaseChar = char.toUpperCase();
    if (Object.keys(SPELLING_BLOCK).includes(upperCaseChar) || Object.values(SPELLING_BLOCK).includes(upperCaseChar)) {

      let isKey = Object.keys(SPELLING_BLOCK).indexOf(upperCaseChar);
      let index =  isKey === -1 ? Object.values(SPELLING_BLOCK).indexOf(upperCaseChar) : Object.keys(SPELLING_BLOCK).indexOf(upperCaseChar);
      let key = Object.keys(checkBlock)[index]

      if (!checkBlock[key]) {
        checkBlock[key] = true;
      } else {
        result = false;
        break;
      }
    } else {
      result = false;
      break;
    }
  }

  return result;
};

// Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false

// ls solution
/*
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1;
    })[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

function isBlockWord(word) {
  let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi,
                /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi,
                /V|I/gi, /L|Y/gi, /Z|M/gi];

  return blocks.every(regExp => {
    return (word.match(regExp) || []).length < 2;
  });
}
*/