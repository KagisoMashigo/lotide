const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE
assertEqual(eqArrays([1, 4, 5], [1, 4, 5]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);