const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🕺🕺🕺 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callBack){
  for (let key in object){
    if (object[key] === callBack){
      return key;
    } 
  }
  return undefined;
} 

assertEqual(findKey(movies, x => movies[stars] === 2));

findKey(movies, x => x.stars === 2) // => "noma, supposed to return this but returning undefined"
