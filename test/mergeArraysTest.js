const assert = require('chai').assert;
const mergeArrays = require('../mergeArrays');

describe("#mergeArrays", () => {

  it("should return [1, 2, 3, 4, 4, 5, 6] after merging [4, 5, 6 ], [1, 2, 3, 4]", () => {
    assert.deepEqual(mergeArrays([4, 5, 6], [1, 2, 3, 4]), [1, 2, 3, 4, 4, 5, 6]);
  });

  it("should return [2, 4, 5, 8] after merging [4], [2, 5, 8]", () => {
    assert.deepEqual(mergeArrays([4], [2, 5, 8]), [2, 4, 5, 8]);
  });

  it("should return [1, 2, 6] after merging [1, 2, 6], []", () => {
    assert.deepEqual(mergeArrays([1, 2, 6 ], []), [1, 2, 6]);
  });

});