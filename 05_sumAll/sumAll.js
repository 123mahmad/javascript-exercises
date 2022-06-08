const sumAll = function(firstInt,secondInt) {
  if (typeof firstInt != `number`  ||
      typeof secondInt != `number` ||
      firstInt < 0 ||
      secondInt < 0 ) {
    return `ERROR`;
    }

  if (firstInt<=secondInt) {
    lowerInt = firstInt;
    upperInt = secondInt;
  } else {
    lowerInt = secondInt;
    upperInt = firstInt;
  }

  let sum = 0;
  for (let i=lowerInt; i<=upperInt; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;