const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("should return [2, 3] after removing 1", () => {
    assert.deepEqual(without([1, 1, 2, 1, 3], [1]), [2, 3]);
  });

  it("should return [1, 2] after removing 3", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

});