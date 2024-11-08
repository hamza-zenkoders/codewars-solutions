// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// Problem URL: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript

function firstNonRepeatingLetter(s) {
  let uniqueS = [...new Set(s)],
    count = 0;
  for (let i = 0; i < uniqueS.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (uniqueS[i].toLowerCase() === s[j].toLowerCase()) count++;
    }
    if (count === 1) return uniqueS[i];
    count = 0;
  }
  return "";
}
