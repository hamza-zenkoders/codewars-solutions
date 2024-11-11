// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// Problem URL: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript

function alphanumeric(string) {
  if (
    !string.trim().length ||
    string.split(" ").length > 1 ||
    string.match(/[^a-zA-Z0-9\s]/g)
  )
    return false;

  return true;
}
