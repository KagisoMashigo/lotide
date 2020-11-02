const assertEqual = require('./assertEqual');

const tail = function(words) {
  if (words.length === 1) {
    return [];
  } else {
    return words.slice(1);
  }
};

// TEST CASES:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

module.exports = tail;



