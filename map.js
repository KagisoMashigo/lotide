// map will take two args: array, callback func
// will return new array based on the callback results
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results; //test
}

const eqArrays = function(actual, expected){
  for (let i in actual){  
    if (actual[i] !== expected[i]) {
      return false
  }
}
return true
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual([1, 4, 5], [1, 3, 5]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(map(words, word => word[0]), results1);
