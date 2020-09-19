/*Steps:
// 1. Trying to create a loop that will iterate between both arrays 
// until it finds a match
// 2. Once match found, remove match and start over again until no match found*/

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i in actual) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};


const without = function(source, itemsToRemove){
  let newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++){ 
    //console.log("source at [i]", source[i])
    for (let j = 0; j < newArray.length; j++){
      //console.log("Source [j]", source[j])
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice([j], 1);
        j--;
       // console.log("splice action", newArray.splice([j], 1));
       }
      } 
    } 
    return newArray;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]

//const words = ["hello", "world", "lighthouse"];
//onsole.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);


