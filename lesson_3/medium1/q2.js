// Starting with the string:
let munstersDescription = 'The Munsters are creepy and spooky.';

// Return a new string that swaps the case of all of the letters:
// => `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let munstersDescriptionNew = '';
for (i = 0; i < munstersDescription.length; i += 1) {
  switch (munstersDescription[i]) {
    case munstersDescription[i].toLowerCase():
      munstersDescriptionNew += munstersDescription[i].toUpperCase();
      break;
    case munstersDescription[i].toUpperCase():
      munstersDescriptionNew += munstersDescription[i].toLowerCase();
      break;
    default:
      munstersDescriptionNew += munstersDescription[i];
      break;
  }
}

// ls solution
/*
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
*/