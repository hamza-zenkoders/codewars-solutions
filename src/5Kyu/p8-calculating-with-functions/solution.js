// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// Problem URL: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript

function zero(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 0;
  if (sign === "+") return 0 + parseInt(value);
  else if (sign === "-") return 0 - parseInt(value);
  else if (sign === "*") return 0 * parseInt(value);
  else if (sign === "/") return Math.floor(0 / parseInt(value));
}
function one(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 1;
  if (sign === "+") return 1 + parseInt(value);
  else if (sign === "-") return 1 - parseInt(value);
  else if (sign === "*") return 1 * parseInt(value);
  else if (sign === "/") return Math.floor(1 / parseInt(value));
}
function two(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 2;
  if (sign === "+") return 2 + parseInt(value);
  else if (sign === "-") return 2 - parseInt(value);
  else if (sign === "*") return 2 * parseInt(value);
  else if (sign === "/") return Math.floor(2 / parseInt(value));
}
function three(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 3;
  if (sign === "+") return 3 + parseInt(value);
  else if (sign === "-") return 3 - parseInt(value);
  else if (sign === "*") return 3 * parseInt(value);
  else if (sign === "/") return Math.floor(3 / parseInt(value));
}
function four(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 4;
  if (sign === "+") return 4 + parseInt(value);
  else if (sign === "-") return 4 - parseInt(value);
  else if (sign === "*") return 4 * parseInt(value);
  else if (sign === "/") return Math.floor(4 / parseInt(value));
}
function five(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 5;
  if (sign === "+") return 5 + parseInt(value);
  else if (sign === "-") return 5 - parseInt(value);
  else if (sign === "*") return 5 * parseInt(value);
  else if (sign === "/") return Math.floor(5 / parseInt(value));
}
function six(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 6;
  if (sign === "+") return 6 + parseInt(value);
  else if (sign === "-") return 6 - parseInt(value);
  else if (sign === "*") return 6 * parseInt(value);
  else if (sign === "/") return Math.floor(6 / parseInt(value));
}
function seven(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 7;
  if (sign === "+") return 7 + parseInt(value);
  else if (sign === "-") return 7 - parseInt(value);
  else if (sign === "*") return 7 * parseInt(value);
  else if (sign === "/") return Math.floor(7 / parseInt(value));
}
function eight(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 8;
  if (sign === "+") return 8 + parseInt(value);
  else if (sign === "-") return 8 - parseInt(value);
  else if (sign === "*") return 8 * parseInt(value);
  else if (sign === "/") return Math.floor(8 / parseInt(value));
}
function nine(val = 0) {
  let sign = val[0];
  let value = val[1];
  if (!val) return 9;
  if (sign === "+") return 9 + parseInt(value);
  else if (sign === "-") return 9 - parseInt(value);
  else if (sign === "*") return 9 * parseInt(value);
  else if (sign === "/") return Math.floor(9 / parseInt(value));
}

function plus(val) {
  return "+" + val;
}
function minus(val) {
  return "-" + val;
}
function times(val) {
  return "*" + val;
}
function dividedBy(val) {
  return "/" + val;
}
