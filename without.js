const without = function(source, itemsToRemove){
  let newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++){ 
    for (let j = 0; j < newArray.length; j++){
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice([j], 1);
        j--;
       }
      } 
    } 
    return newArray;
}

module.exports = without;

