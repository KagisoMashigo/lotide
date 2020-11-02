const countLetters = function(string) {
  let counter = {};
  for (let char of string) {
    if (char !== " ") {
    if (counter[char]) { 
      counter[char] += 1; 
    } else {
      counter[char] = 1;
    }
   }
  } return counter;// it must then return the object
}

module.exports = countLetters;

