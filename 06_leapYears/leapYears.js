const leapYears = function (year) {
  //if a year is divisible by 4 and by 400 it's a leap year.
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
