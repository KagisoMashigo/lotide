const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// this function needs to take in a string
const countLetters = function(string) {
  let counter = {};
  for (let char of string) {
    if (char !== " ") {// it must ignore spaces " "
    if (counter[char]) { //if this character is already a key in object the next code block adds +1 to the value
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
