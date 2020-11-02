// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
  return true;
};

module.exports = eqObjects