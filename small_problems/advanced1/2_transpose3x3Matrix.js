/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each
contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original
matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the
matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input
matrix array unchanged.
*/

let transpose = mat => {
  let matFinal = JSON.parse(JSON.stringify(mat));
  for (let i = 0; i < matFinal.length; i += 1) {
    for (let j = 0; j < matFinal.length; j += 1) {
      if (i !== j) {
        matFinal[i][j] = mat[j][i];
      }
    }
  }
  return matFinal;
};

// Examples:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*
Further Exploration

Write a transposeInPlace method that transposes a 3x3 matrix in place. The obvious solution is to reuse
transpose from above, then copy the results back into the array specified by the argument. For this further
exploration, though, don't use this approach; write your method from scratch without creating a new matrix
or any new arrays.
*/

let transposeInPlace = mat => {
  for (let i = 0; i < mat.length; i += 1) {
    for (let j = i; j < mat.length; j += 1) {
      if (i !== j) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
  }
  return mat;
};

let newMatrixPlace = transposeInPlace(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]