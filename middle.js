const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i in actual) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const middle = function(arr) {
  console.log('input array:', arr);
  // We assume that array length is at most 2
  let startIndex = 1;
  let endIndex = 0;
  if (arr.length > 2) {
    console.log('array length is more than 2');
    if (arr.length % 2 === 1) {
      // Array length is odd
      console.log('array length is an odd number');
      startIndex = Math.floor(arr.length / 2);
      endIndex = Math.floor(arr.length / 2) + 1; // Could also be Math.ceil(arr.length / 2)
      console.log('startIndex:', startIndex, 'endIndex:', endIndex);
    } else {
      console.log('array length is an even number');
      // Assume length is even
      startIndex = arr.length / 2 - 1;
      endIndex = arr.length / 2 + 1;
    }
  } else {// more debug info, not necessary
    console.log('array length is not more than 2:', arr.length);
  }

  const result = arr.slice(startIndex, endIndex);
  // console.log('result for', arr, 'is:', result);
  return result;
};



assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //=> 3
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]

//middle needs to take in an array and count the number of elements
// if even it must extract the two middle values
// if odd it must take the single middle value