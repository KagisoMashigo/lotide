const mergeArrays = (array1, array2) => {
  array1.sort();
  array2.sort();
  const sorted = array1.concat(array2);
  return sorted.sort()
}

module.exports = mergeArrays;
