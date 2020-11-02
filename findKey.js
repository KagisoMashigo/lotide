const findKey = function(object, callBack) {
  for (let key in object){
    if (callBack(object[key])) { //example of how to invoke a function wihtin a function
      return key;
    } 
  }
  return undefined;
}

module.exports = findKey;
