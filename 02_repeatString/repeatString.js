const repeatString = function (string, number) {
  let item = "";
  if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      item += string;
    }
    return item;
  }
};
// Do not edit below this line
module.exports = repeatString;
