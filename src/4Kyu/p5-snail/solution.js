// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// Problem URL: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

snail = function (array) {
  var result;
  while (array.length) {
    result = result ? result.concat(array.shift()) : array.shift();

    for (var i = 0; i < array.length; i++) 
        result.push(array[i].pop());

    result = result.concat((array.pop() || []).reverse());

    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};
