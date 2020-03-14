/* 
The following function unnecessarily uses two return statements to 
return boolean values. How can you eliminate the unnecessary duplication?
*/

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Method 1
let isColorValid = color => {
  return color === 'blue' || color === 'green';
};

// Method 2
let isColorValid = color => {
  return ['blue', 'green'].includes(color);
};