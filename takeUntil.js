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

const firstArray = ["Life", "is", "good", ",", "until", "bootcamp", "starts"]
const secondArray = [1, 2, 5, 7, 2, -1, 2, 4, 5]

const takeUntil = function(array, callback) {
  //Utility function
  const results = [];
  for (element of array) {
   if (callback(element)) {
     results.push(element);
   } else {
     return results;
  }
 }
}

assertArraysEqual(takeUntil(firstArray, x => x !== ','), [ 'Life', 'is', 'good' ]);
assertArraysEqual(takeUntil(secondArray, x => x > 0), [1, 2, 5, 7, 2]);