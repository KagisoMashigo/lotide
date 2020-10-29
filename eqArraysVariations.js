const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i in actual) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const eqArrays = function(actual, expected){
  for (let i in actual){  
    if (actual[i] !== expected[i]) {
      return false
  }
}
return true
};

let eqArrays = function(arr1, arr2){
  let testCorrect = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      testCorrect = false
    }
  } 
  return testCorrect
} 