const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  const firstArray = ["Life", "is", "good", ",", "until", "bootcamp", "starts"]
  const secondArray = [1, 2, 5, 7, 2, -1, 2, 4, 5]

  it("should return ['Life', 'is', 'good'] after taking until ,", () => {
    assert.deepEqual(takeUntil(firstArray, x => x !== ','), [ 'Life', 'is', 'good' ]);
  });

  it("should return [1, 2, 5, 7, 2] after taking until 2", () => {
    assert.deepEqual(takeUntil(secondArray, x => x > 0), [1, 2, 5, 7, 2]);
  });

});