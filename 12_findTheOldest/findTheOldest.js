const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();
  return oldest = people.reduce((oldestYet,next) => {
    if (oldestYet.yearOfDeath == undefined) {oldestYet.yearOfDeath = currentYear};
    if (next.yearOfDeath == undefined) {next.yearOfDeath = currentYear};
    if ((oldestYet.yearOfDeath - oldestYet.yearOfBirth) >=
        (next.yearOfDeath - next.yearOfBirth)) {return oldestYet};
    return next;
  }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
