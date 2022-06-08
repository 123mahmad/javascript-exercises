const removeFromArray = function(array, ...args) {
  for (let i=0; i<args.length; i++) {
    for (let j=0; j<array.length; j++) {
      //arrayString = array[j].toString(); ====> I was going for a method where if an argument constitutes a part of array element, that array element would still be removed
      //argString = args[i].toString();
      if (array[j]===args[i]) {
        array.splice(j,1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;