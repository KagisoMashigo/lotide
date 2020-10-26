const args = process.argv.slice(2);

const reverseString = (str) => { // arrow fcts alwasy still need to be defined
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) { // when reversing something and starting from the last thing, the syntax here dictates that the first i will be that last element
    newString += str[i];
  }
  return newString;
};

const loopThroughElements = (array) => {
  let reversedStrings = "";
  for (let i = 0; i < array.length; i++) { // line 5 is this line reversed
    if (i !== array.length - 1) {
      reversedStrings += reverseString(array[i]) + "\n";
    } else {
      reversedStrings += reverseString(array[i]);
    }
  }
  return reversedStrings;
};

console.log(loopThroughElements(args));
