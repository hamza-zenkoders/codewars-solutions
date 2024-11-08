// Welcome. In this kata, you are required to use what i call the "length factorial encryption" algorithm to decrypt the input message.

// A quick intro to the algorithm. In 2019, i bought some bitcoins for investment purposes to a paper wallet (wasn't printed). I then needed to store the access keys safely online so i made a program that takes the string containing my wallet details, adds some extra random characters and shuffle it. The key is a string that contains the details needed for decryption. "Length Factorial Encryption" because you'll have to brute force at most n! times to get the original message.

// Your goal is to create a function decrypt that would take 2 inputs: message and key. As stated earlier, message is a string of shuffled characters that contains the original message with some extra rubbish added at the end. The key is a string in the format pN[a-b-c-d-e] where N is the number of rubbish added to the message and a, b, .., e are the original positions of the characters in the message (non-zero indexed).

// An example for clearer understanding;

// We have a string

// message = "codewars" and want to encrypt it so we decided to add 10 extra

// rubbish at its end. Our new string becomes;

// "codewarsjrhj%@sens" (string length of 8 + rubbish of 10 = 18 characters).

// We then shuffle the string. For simplicity sake, in this example, we would simply reverse the string. Therefore the 1st character of the original message becomes the 18th, 2nd is 17th and so on. The encrypted string then becomes

// "snes@%jhrjsrawedoc".

// In this case the key becomes;

// p10[18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1] (meaning: padded with 10 rubbish characters at its end, 1st character in original message is the 18th character in the encrypted form, 2nd => index 17, 3rd => index 16 (non-zero indexed) and so on...

// I hope it's clear enough.

// Your function should return the original message.

// Constraints;

// length of original message, n: 0 <= n <= 100

// length of rubbish added to message, p: 0 <= p <= 200

// Problem URL: https://www.codewars.com/kata/5e9c773f33e83600146338d2/javascript

function decrypt(message, key) {
  const [sizeStr, indexStr] = key.split("[");
  const size = parseInt(sizeStr.slice(1, sizeStr.length));
  const index = indexStr.slice(0, indexStr.length - 1).split("-");

  if (message.length === size) return "";

  let newMessage = "";

  for (let i = 0; i < message.length - size; i++) {
    newMessage += message[index[i] - 1];
  }
  return newMessage;
}
