const takeUntil = function(array, callback) {
  const results = [];
  for (element of array) {
   if (callback(element)) {
     results.push(element);
   } else {
     return results;
  }
 }
}

module.exports = takeUntil;
