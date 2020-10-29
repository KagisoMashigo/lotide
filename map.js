const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const array = ["g", "c", "t", "m", "t"];

assertArraysEqual(map([1, 3, 5], word => word[0]), [1, 3, 5]);
assertArraysEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", "3"]);
assertArraysEqual(map(words, word => word[0]), array);
