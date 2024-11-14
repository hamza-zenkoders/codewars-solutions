// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

// Problem URL: https://www.codewars.com/kata/55de9c184bb732a87f000055/javascript

function reverse(arr) {
  let temp,
    len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
}
