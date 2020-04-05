/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that
the argument will always be an odd integer.

Examples:
diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

 diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

let diamond = num => {

  for (let forwardIndex = 1; forwardIndex < num; forwardIndex += 2) {
    emptyPaddingLength = (num - forwardIndex) / 2;
    console.log(' '.repeat(emptyPaddingLength) + '*'.repeat(forwardIndex));
  }

  console.log('*'.repeat(num));

  for (let backwardIndex = num - 2; backwardIndex > 0; backwardIndex -= 2) {
    emptyPaddingLength = (num - backwardIndex) / 2;
    console.log(' '.repeat(emptyPaddingLength) + '*'.repeat(backwardIndex));
  }
}

diamond(3);
diamond(9);
diamond(15);

/*
Further Exploration

The current solution builds a solid diamond—refactor it to build a hollow diamond.
*/