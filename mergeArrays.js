const assertArraysEqual = require('./assertArraysEqual');
// const assertArraysEqual = require('./index')


const merge = (array1, array2) => {
  array1.sort();
  array2.sort();
  const sorted = array1.concat(array2);
  return sorted.sort()
}

module.exports = merge;


console.log(merge([ 9, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

assertArraysEqual(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), [ 1, 2, 3, 4, 4, 5, 6 ])