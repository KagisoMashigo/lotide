const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "2", a: "5", c: "8" };
const da = { b: "2", a: "2" };

assertObjectsEqual(eqObjects(ab, ba), eqObjects(ba, ab));
assertObjectsEqual(eqObjects(ca, da), eqObjects(da, ca));