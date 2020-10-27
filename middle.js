const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let startIndex = 1;
  let endIndex = 0;
  if (arr.length > 2) {
    if (arr.length % 2 === 1) {
      startIndex = Math.floor(arr.length / 2);
      endIndex = Math.floor(arr.length / 2) + 1; 
    } else {
      startIndex = arr.length / 2 - 1;
      endIndex = arr.length / 2 + 1;
    }
  }

  const result = arr.slice(startIndex, endIndex);
  return result;
};

assertArraysEqual(middle([1, 2, 3]), [2]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

module.exports = middle;
