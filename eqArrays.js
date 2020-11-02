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

//TEST CODE
// assertEqual(eqArrays([1, 4, 5], [1, 4, 5]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
