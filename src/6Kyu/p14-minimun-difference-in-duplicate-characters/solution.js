// Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters and the character itself.

// For example, in the string "aabcba", the minimum position difference of repeated characters will be equal to 1, since for the character "a", the position difference is 1.

// The output should be in the form of an array.

// If there are no duplicate characters in the string, it should return null.

// The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).

// If the difference between repeated characters is the same, return the first minimal difference encountered.

// Examples of outputs:

// "aa" => new Object[]{1, 'a'}

// "aabbca" => new Object[]{1, 'a'}

// "abka" => new Object[]{3, 'a'}

// "abcded" => new Object[]{2, 'd'}

// "abbbbbc" => new Object[]{1, 'b'}

// "abc" => null

// Problem URL: https://www.codewars.com/kata/6574d1bde7484b5a56ec8f29/train/javascript

function minRepeatingCharacterDifference(text) {
  const uniqueChars = [...new Set(text)];
  let duplicateChars = {},
    output = [];
  for (let i = 0; i < uniqueChars.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (uniqueChars[i] === text[j]) {
        if (!Object.keys(duplicateChars).length) {
          duplicateChars.char = text[j];
          duplicateChars.pos = j;
        } else {
          const diff = j - duplicateChars.pos;
          if (
            output.length === 0 ||
            (diff <= output[0] && (j < output[2] || output[0] !== text[j]))
          ) {
            output = [diff, text[j], j];
            duplicateChars.pos = j;
          } else if (duplicateChars.char === text[j]) {
            duplicateChars.pos = j;
          }
        }
      }
    }
    duplicateChars = {};
  }
  if (output.length === 0) return null;
  return [output[0], output[1]];
}
