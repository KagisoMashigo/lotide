const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let sorted1 = keys1.sort();
  let sorted2 = keys2.sort();
  if (sorted1.length !== sorted2.length) {
    return false;
  }
  for (let objectKey of sorted1) {
    if (sorted1[objectKey] !== sorted2[objectKey]) {
      return false;
    }
  }
  console.log(`${object1} and ${object2} are indeed equal`)
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

console.log(`Example label: ${inspect(actual)}`);