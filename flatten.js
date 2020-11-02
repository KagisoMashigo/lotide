const flatten = (array) => {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
    flatArray = [].concat(...array)
    }
  } return flatArray;
}

module.exports = flatten;
