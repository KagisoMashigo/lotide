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

const letterPositions = function(sentence) {
    const results = {};
    const lowerCase = sentence.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      if (lowerCase[i] !== " ") {
        if (results[lowerCase[i]]) {
          results[lowerCase[i]].push(i);
        } else {
          results[lowerCase[i]] = [i];
        }
      }
    }
    return results;
  };

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello"). l, [2, 3]);