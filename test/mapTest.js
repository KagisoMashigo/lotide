const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  const array = ["g", "c", "t", "m", "t"];
  const words = ["ground", "control", "to", "major", "tom"];

  it("should return [1, 2, 3] after after mapping [1, 2, 3]", () => {
    assert.deepEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", "3"]);
  });

  it("should return [g, c, t, m, t] after mapping [ground, control, to, major, tom]", () => {
    assert.deepEqual(map(words, word => word[0]), array);
  });

});

// Will only work with strings