const assertEqual = require('./assertEqual');

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(object, callBack) {
  for (let key in object){
    if (callBack(object[key])) { //example of how to invoke a function wihtin a function
      return key;
    } 
  }
  return undefined;
} 

assertEqual(findKey(movies, x => x.stars === 2), "noma");
assertEqual(findKey(movies, x => x.stars === 3), "noma");
assertEqual(findKey(movies, x => x.stars === 4), "noma");

