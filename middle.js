const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let startIndex = 1;
  let endIndex = 0;
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      startIndex = Math.floor(array.length / 2);
      endIndex = Math.floor(array.length / 2) + 1; 
    } else {
      startIndex = array.length / 2 - 1;
      endIndex = array.length / 2 + 1;
    }
  }
  const result = array.slice(startIndex, endIndex);
  return result;
};

assertArraysEqual(middle([1, 2, 3]), [2]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

module.exports = middle;
