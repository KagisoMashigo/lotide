const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function(string) {
  let counter = {};
  for (let char of string) {
    if (char !== " ") {
    if (counter[char]) { 
      counter[char] += 1; 
    } else {
      counter[char] = 1;
    }
   }
  } return counter;// it must then return the object
}

assertArraysEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
