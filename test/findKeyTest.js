const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const movies = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("should return 1 for the count of Jason", () => {
    assert.strictEqual(findKey(movies, x => x.stars === 2), "noma");
  });

  it("should return undefined for the count of Karima", () => {
    assert.strictEqual(findKey(movies, x => x.stars === 3), "Akaleri");
  });

  it("should return 2 for the count of Fang", () => {
    assert.strictEqual(findKey(movies, x => x.stars === 4), undefined);
  });

});