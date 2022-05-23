const findTheOldest = function (arr) {
  let people = Array.from(arr);
  let oldest = { name: "sample", yearOfBirth: 0, yearOfDeath: 1 };
  let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
      people[i].yearOfDeath = new Date().getFullYear();
    }
    let age = people[i].yearOfDeath - people[i].yearOfBirth;
    if (age > oldestAge) {
      oldest = people[i];
      oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
