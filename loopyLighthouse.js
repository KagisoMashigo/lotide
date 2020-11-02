const loopyLighthouse = (range, multiples, words) => {
  for (let x = range[0]; x <= range[1]; x++) {
    let output = "";
    if (x % multiples[0] === 0) {
      output += words[0];
    } 
    if (x % multiples[1] === 0){
      output += words[1];
    }
    console.log(output === "" ? x : output);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
