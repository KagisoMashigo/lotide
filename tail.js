const words = ["Yo Yo", "Lighthouse", "Labs"];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  return words.slice[1];
};

 
assertEqual(tail(words), (["Lighthouse", "Labs"]));