// We wrote a neutralize function that removes negative words from sentences. However, it fails to remove all of them. What exactly happens?

function neutralize(sentence) {
  let words = sentence.split(" ");

  /*
  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  */

  filteredWords = words.filter(word => {
    return !isNegative(word);
  })

  return filteredWords.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// The splice function mutates the array such that it removes the word from the array, hence it might mess up the index of the current word during
// the forEach method. Use filter instead of forEach.