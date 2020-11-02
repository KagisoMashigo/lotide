const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(2, 1);
