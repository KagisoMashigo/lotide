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
    if (callBack(object[key])) {
      return key;
    } 
  }
  return undefined;
} 

assertEqual(findKey(movies, x => x.stars === 2), "noma");
//assertEqual(findKey(movies, "noma"));


findKey(movies, x => x.stars === 2) // => "noma", supposed to return this but returning undefined"
