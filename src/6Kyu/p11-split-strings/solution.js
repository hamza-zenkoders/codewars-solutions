// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Problem URL: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

function solution(str) {
  let temp = "",
    arr = [];
  if (str.length % 2 === 1) str += '_'
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if (i % 2 === 1) {
      arr.push(temp);
      temp = "";
    }
  }
  return arr;
}

solution('abc');