const repeatString = function(string,numRepetitions) {
  let stringSeries = "";
  for (let i=1; i<=numRepetitions; i++) {
    stringSeries += string;
  }
  if (numRepetitions<0) return `ERROR`;
  else return stringSeries;
};

// Do not edit below this line
module.exports = repeatString;