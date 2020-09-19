const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
    for (let key in object){
      if (object[key] === value){
        return key
      } else 
      {
        return undefined
      }
    } 
    //console.log(`genres are ${genres[1]} for ${movieNames[1]}, ${genres[2]} for ${movieNames[2]} and ${genres[3]} for ${movieNames[3]}`)
    //console.log(movieNames)
    //console.log(count)
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");// =>drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
