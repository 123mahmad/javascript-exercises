const fibonacci = function(nth) {
  if (nth<0) {return `OOPS`};
  let sequence = [1, 1];
  for (let i = 2; i < nth; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence[sequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
