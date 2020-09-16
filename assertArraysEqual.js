function assertArraysEquals(actual, expected) {
  let isEqual = true;
  for (let i in actual){
    if (actual[i] !== expected[i]) {
      isEqual = false;
      console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual[i] !== expected[i]) {
      console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
    }
  };  
}

assertArraysEquals(([1, 4, 5], [1, 4, 5]), true);
assertArraysEquals((["1", "2", "3"], ["1", "2", 3]), false);