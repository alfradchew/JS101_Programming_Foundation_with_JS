/*
Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest
such star you need to handle is a 7x7 grid (i.e., when N is 7).

Examples:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

let star = num => {

  let startingPadding = 0;
  for (let betweenStarPadding = (num - 3) / 2; betweenStarPadding > 0; betweenStarPadding -= 1) {
    console.log(' '.repeat(startingPadding) + ('*' + ' '.repeat(betweenStarPadding)).repeat(2) + '*');
    startingPadding += 1;
  }

  console.log('*'.repeat(num));

  startingPadding = (num - 3) / 2;
  for (let betweenStarPadding = 0; betweenStarPadding <= (num - 3) / 2; betweenStarPadding += 1) {
    console.log(' '.repeat(startingPadding) + ('*' + ' '.repeat(betweenStarPadding)).repeat(2) + '*');
    startingPadding -= 1;
  }
};

star(7);
console.log(' ');
star(9);