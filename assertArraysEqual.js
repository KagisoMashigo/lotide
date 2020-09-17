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


assertArraysEqual([1, 4, 5], [1, 3, 5]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);