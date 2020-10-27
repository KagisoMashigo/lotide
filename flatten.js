const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = (array) => {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
    flatArray = [].concat(...array)
    }
  } return flatArray;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
