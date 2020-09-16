const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
// the reason it didn't work at first is bc two different arrays (whilst having the same values)
// are not the same, they are two unique arrays with the same values
// thus the need to check each value inside then arises
const eqArrays = function(a, b){
    let isEqual = true;
    for ( let i in b){  //its going through the arrays and checking if each value is ===
      if (b[i] !== a[i]) {
        isEqual = false
    }
  }
  return isEqual
};

// we're checking to see if the valuels of the below arrays are =//


// we're creating a loop to loop through both arrays and see if they return the same vaules//

assertEqual(eqArrays([1, 4, 5], [1, 4, 5]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);