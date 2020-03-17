/*
Write a function that takes a string consisting of zero or more space separated words, and
returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/

let wordSizes = str => {
  let wordObj = {};
  let strArray = str.split(' ');
  strArray.forEach(strWord => {
    let wordLength = String(strWord.length);
    if (Object.keys(wordObj).includes(wordLength)) {
      wordObj[wordLength] += 1;
    } else if (wordLength !== '0') {
      wordObj[wordLength] = 1;
    }
  });
  console.log(wordObj);
};

// Examples:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}