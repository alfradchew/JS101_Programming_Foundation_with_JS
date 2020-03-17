/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.
*/

let wordSizes = str => {
  let wordObj = {};
  let strArray = str.split(' ');
  strArray.forEach(strWord => {
    strWord = strWord.replace(/[^a-z]/gi, '')
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
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}