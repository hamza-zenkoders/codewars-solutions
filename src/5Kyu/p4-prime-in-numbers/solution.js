// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// Problem URL: https://www.codewars.com/kata/54d512e62a5e54c96200019e/javascript

function primeFactors(n) {
  let num = 2,
    arr = [],
    output = "(";
  while (true) {
    if (n === num) {
      arr.push(num);
      break;
    }
    if (n % num === 0) {
      n /= num;
      arr.push(num);
    } else {
      num++;
    }
  }

  let prev = arr[0],
    count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (prev === arr[i]) {
      count++;
    } else {
      output += prev + "**" + count + ")(";
      prev = arr[i];
      count = 1;
    }
  }
  output = output.split("**1").join("");
  return output.slice(0, output.length - 1);
}
