const assertEqual = require('./assertEqual');

const tail = function(words) {
  if (words.length === 1){
    return []
  } else {
    return words.slice(1);
  }
};

module.exports = tail;



