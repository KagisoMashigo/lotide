const assert = require('chai').assert;
//const {assert} = require('chai'); extract a key(assert) from require chai and giving it to the variable assert **research a bit more
const middle = require('../middle')

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.strictEqual(middle([1, 2]), []); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});

//middle needs to take in an array and count the number of elements
// if even it must extract the two middle values
// if odd it must take the single middle value

/*assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //=> 3
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]*/