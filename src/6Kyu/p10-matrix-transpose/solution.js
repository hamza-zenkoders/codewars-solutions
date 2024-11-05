// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

// Problem URL: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/javascript

function transpose(matrix) {
  let transpose = [];

  const rows = matrix[0].length;
  const columns = matrix.length;

  for (let i = 0; i < rows; i++) {
    transpose[i] = [];
    for (let j = 0; j < columns; j++) {
      transpose[i][j] = j;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }
  return transpose;
}
