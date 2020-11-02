const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return 1 for the count of Jason", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("should return undefined for the count of Karima", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it("should return 2 for the count of Fang", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("should return undefined for the count of Agouhanna", () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });

});