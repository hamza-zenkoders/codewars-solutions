// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Problem URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

function accum(s) {
  let newStr = "", len = s.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) newStr += s[i].toUpperCase();
      else newStr += s[i].toLowerCase();
    }
    if (i+1 !== len) newStr += "-";
  }
  return newStr;
}