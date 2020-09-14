const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("Bootcamp", "Bootcamp");
  assertEqual(2, 1);

function head (array){
    return array[0];
  };

  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");