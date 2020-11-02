const middle = function(array) {
  let startIndex = 1;
  let endIndex = 0;
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      startIndex = Math.floor(array.length / 2);
      endIndex = Math.floor(array.length / 2) + 1; 
    } else {
      startIndex = array.length / 2 - 1;
      endIndex = array.length / 2 + 1;
    }
  }
  const result = array.slice(startIndex, endIndex);
  return result;
};

module.exports = middle;
