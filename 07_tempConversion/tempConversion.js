const ftoc = function(degreeF) {
  let degreeC = (degreeF-32)*(5/9);
  return Math.round(degreeC*10)/10;
};

const ctof = function(degreeC) {
  let degreeF = (9/5)*degreeC + 32;
  return Math.round(degreeF*10)/10;
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
