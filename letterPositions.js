const letterPositions = function(sentence) {
    const results = {};
    const lowerCase = sentence.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      if (lowerCase[i] !== " ") {
        if (results[lowerCase[i]]) {
          results[lowerCase[i]].push(i);
        } else {
          results[lowerCase[i]] = [i];
        }
      }
    }
    return results;
  };

module.exports = letterPositions;
