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

const middle = function(array) {
  let newArray = [];
  for (let ele of array){
  if(array.length %2 === 0){
    newArray = (array[(array.length/2) - 1] + array[array.length/2]) /2
    console.log(newArray)
  }
}
  return newArray
}

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

//middle needs to take in an array and count the number of elements
// if even it must extract the two middle values
// if odd it must take the single middle value