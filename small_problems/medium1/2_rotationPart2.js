/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you
want to rotate to the end and shift the remaining digits to the left.
*/

let rotateRightmostDigits = (num, rotation) => {
  let numString = String(num);
  let referenceIndex = numString.length - rotation;
  let lastNDigits = numString.substring(referenceIndex);
  let rotatedNumString = numString.substring(referenceIndex, -1) + lastNDigits.substring(1) + lastNDigits.substring(1, - 1);
  console.log(Number(rotatedNumString));
};

// Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917