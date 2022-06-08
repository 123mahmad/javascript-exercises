const reverseString = function(string) {
  let reversedString = "";
  let reversedCharacters = [];
  let characters = string.split("");
  let numCharacters = characters.length;
  for (let i=0; i<numCharacters; i++) {
    reversedCharacters[i] = characters[numCharacters-1-i];
  }
  reversedString = reversedCharacters.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;