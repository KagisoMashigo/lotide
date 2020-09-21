const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  //console.log('input array:', arr);
  // We assume that array length is at most 2
  let startIndex = 1;
  let endIndex = 0;
  if (arr.length > 2) {
    //console.log('array length is more than 2');
    if (arr.length % 2 === 1) {
      // Array length is odd
      //console.log('array length is an odd number');
      startIndex = Math.floor(arr.length / 2);
      endIndex = Math.floor(arr.length / 2) + 1; // Could also be Math.ceil(arr.length / 2)
     // console.log('startIndex:', startIndex, 'endIndex:', endIndex);
    } else {
     // console.log('array length is an even number');
      // Assume length is even
      startIndex = arr.length / 2 - 1;
      endIndex = arr.length / 2 + 1;
    }
//  } else {// more debug info, not necessary
    //console.log('array length is not more than 2:', arr.length);
  }

  const result = arr.slice(startIndex, endIndex);
  // console.log('result for', arr, 'is:', result);
  return result;
};

module.exports = middle;
