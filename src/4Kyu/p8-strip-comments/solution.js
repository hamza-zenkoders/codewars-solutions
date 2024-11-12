// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// Problem URL: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript

function solution(string, markers) {
  const sList = string.split("\n");
  const nList = [];

  for (let item of sList) {
    let s = "";
    let foundMarker = false;
    for (let char of item) {
      if (markers.includes(char)) {
        foundMarker = true;
        break; 
      } else {
        s += char;
      }
    }

    nList.push(s.replace(/\s+$/, ""));
  }

  return nList.join("\n");
}
