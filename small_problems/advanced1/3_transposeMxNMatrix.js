/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed
simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least
one row and one column.
*/

let transpose = mat => {
  
  let transposedMat = [];

  for (let i = 0; i < mat[0].length; i += 1) {
    transposedMat.push([]);
  }

  for (let rowIndex = 0; rowIndex < mat.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < transposedMat.length; colIndex += 1) {
      transposedMat[colIndex].push(mat[rowIndex][colIndex]);
    }
  }

  return transposedMat;
};

// Examples:
const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]