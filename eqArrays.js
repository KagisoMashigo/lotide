const assertEqual = require('./assertEqual');

// the reason it didn't work at first is bc two different arrays (whilst having the same values)
// are not the same, they are two unique arrays with the same values
// thus the need to check each value inside then arises

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

module.exports = eqArrays;
