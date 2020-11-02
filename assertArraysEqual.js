const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 4, 5], [1, 3, 5]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
