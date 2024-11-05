// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Problem URL: https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

function findOdd(A) {
    let uniqueArr = [...new Set(A)];
    let count = 0, curr = 0;
    for (let i = 0; i < uniqueArr.length; i++) {
        curr = uniqueArr[i]
        for (let j = 0; j < A.length; j++) {
            if (A[j] === uniqueArr[i]) count++;
        }
        if (count % 2 === 1) break;
        count = 0;
    }
    return curr;
}
