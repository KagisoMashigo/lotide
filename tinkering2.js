const assert = require('assert')


const repeatNumbers = function(data) {
  //create empty string for values
  let str = '';
  //loop through the data array to identify values
  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      str += ', '
    }
    for (let j = 0; j < data[i][1]; j++){
      //console.log(data[i][1])
      str += data[i][0]
    }
  } return str
  //repeat the first value by second value number of times
  // return the repeated value as a string
};

try {
  assert.equal(repeatNumbers([[1, 10]]), '1111111111', 'actual should be equal to expected: 1111111111')
} catch (error) {
  console.log(error.message);
  console.log(`actual: ${error.actual}, expected: ${error.expected}`);
}
try {
  assert.equal(repeatNumbers([[1, 2], [2, 3]]), '11, 222', 'actual should be equal to expected: 11, 222')
} catch (error) {
  console.log(error.message);
  console.log(`actual: ${error.actual}, expected: ${error.expected}`);
}
try {
  assert.equal(repeatNumbers([[10, 4], [34, 6], [92, 2]]), '10101010, 343434343434, 9292', 'actual should be equal to expected: 10101010, 343434343434, 9292')
} catch (error) {
  console.log(error.message);
  console.log(`actual: ${error.actual}, expected: ${error.expected}`);
}

/*
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));