// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Profile URL: https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

function toCamelCase(str) {
  if (str === "") return str;
  let splitStr = str.split(/[-_]+/);
  let newStr = "";
  for (let s in splitStr) {
    if (s == 0) {
      newStr += splitStr[s];
      continue;
    }
    newStr += splitStr[s][0].toUpperCase() + splitStr[s].substring(1);
  }
  return newStr;
}
