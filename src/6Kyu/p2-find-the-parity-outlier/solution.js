// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// Problem URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

function findOutlier(integers){
    let first = Math.abs(integers[0]) % 2
    let second = Math.abs(integers[1]) % 2
    let third = Math.abs(integers[2]) % 2

    const array = [first, second, third]

    const state = Array.from(new Set(array)).reduce((prev, curr) => array.filter(el => el === curr).length > array.filter(el => el === prev).length ? curr : prev);

    for (let i of integers) {
        console.log(i % 2)
        if (Math.abs(i) % 2 !== state) return i
    }
}