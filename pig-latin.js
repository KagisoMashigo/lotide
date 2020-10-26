const args = process.argv.slice(2);

const pigLatinConverter = (str) => {
  const newString = str.slice(1) + str[0] + "ay";
  // console.log(newString)
  return newString;
}

const loopThroughElements = (array) => {
  let reversedStrings = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      reversedStrings += pigLatinConverter(array[i]) + " ";
    } else {
      reversedStrings += pigLatinConverter(array[i]);
    }
  }
  return reversedStrings;
};

console.log(loopThroughElements(args));
