const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  if (words.length === 1){
    return []
  } else {
    return words.slice(1);
  }
};



