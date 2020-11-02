const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
const result2 = tail(["Yo"]);

describe("#tail", () => {
  it("returns length of 2 for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns Lighthouse for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(result[0], "Lighthouse"); 
  });

  it("returns Labs for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(result[1], "Labs"); 
  });

  it("returns Yo for [Yo]", () => {
    assert.strictEqual(result2.length, 0); 
  });

});
