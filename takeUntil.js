const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const firstArray = ["Life", "is", "good", ",", "until", "bootcamp", "starts"]
const secondArray = [1, 2, 5, 7, 2, -1, 2, 4, 5]

const takeUntil = function(array, callback) {
  const results = [];
  for (element of array) {
   if (callback(element)) {
     results.push(element);
   } else {
     return results;
  }
 }
}

assertArraysEqual(takeUntil(firstArray, x => x !== ','), [ 'Life', 'is', 'good' ]); // if element is NOT ',' then keep adding to array else close loop
assertArraysEqual(takeUntil(secondArray, x => x > 0), [1, 2, 5, 7, 2]); // if element is bigger than '0' then keep adding to array else close loop