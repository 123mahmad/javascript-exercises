const palindromes = function (str) {
  let lowerStr = str.toLowerCase();
  let alphaStrArray = lowerStr.match(/[a-z]/gi);
  let alphaStr = alphaStrArray.join(``);
  let alphaStrLength = alphaStr.length;
  let reversedStr = ``;
  for (let i = alphaStrLength; i > 0; i--) {
    reversedStr += alphaStr.charAt(i-1);
  }
  return reversedStr == alphaStr;
};

// Do not edit below this line
module.exports = palindromes;
