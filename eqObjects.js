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

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false