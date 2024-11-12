// The task is simply stated. Given an integer n (3 < n < 109), find the length of the smallest list of perfect squares which add up to n. Come up with the best algorithm you can; you'll need it!

// Examples:

// sum_of_squares(17) = 2
// 17 = 16 + 1 (16 and 1 are perfect squares).
// sum_of_squares(15) = 4
// 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.
// sum_of_squares(16) = 1
// 16 itself is a perfect square.
// Time constraints:

// 5 easy (sample) test cases: n < 20

// 5 harder test cases: 1000 < n < 15000

// 5 maximally hard test cases: 5e8 < n < 1e9

// 100 random maximally hard test cases: 1e8 < n < 1e9

// Problem URL: https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084/javascript

function sumOfSquares(n) {
  if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
    return 1;
  }

  let c1 = 0;
  while ((n & 3) === 0) {
    n >>= 2;
    c1++;
  }

  if ((n & 7) === 7) {
    return 4;
  }

  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (Math.sqrt(n - i * i) === Math.floor(Math.sqrt(n - i * i))) {
      return 2;
    }
  }

  return 3;
}
