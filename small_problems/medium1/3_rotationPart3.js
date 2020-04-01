/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits
to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get
321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum
rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.
*/

let rotateRightmostDigits = (num, rotation) => {
  let numString = String(num);
  let referenceIndex = numString.length - rotation;
  let lastNDigits = numString.substring(referenceIndex);
  let rotatedNumString = numString.substring(referenceIndex, -1) + lastNDigits.substring(1) + lastNDigits.substring(1, - 1);
  return Number(rotatedNumString);
};

let maxRotation = num => {
  let numLength = String(num).length;
  for (let r = numLength; r > 0; r -= 1) {
    num = rotateRightmostDigits(num, r);
  }
  console.log(num);
};

// Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845