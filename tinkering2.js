const assertArraysEqual = function(source, itemsToRemove) {
  if (without(source, itemsToRemove)) {
    console.log(`🕺🕺🕺 Assertion Passed: ${source} === ${itemsToRemove}`);
  } else if (!eqArrays(source, itemsToRemove)) {
    console.log(`🤦🤦🤦 Assertion Failed: ${source} !== ${itemsToRemove}`);
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

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


/*Steps:
// 1. Trying to create a loop that will iterate between both arrays 
// until it finds a match
// 2. Once match found, remove match and start over again until no match found*/