const reverseString = function (input) {
  let reversed = [];
  const arrayStart = input.split("");
  console.log(arrayStart);
  for (let i = 0; i < arrayStart.length; i++) {
    let temp = arrayStart[i];
    reversed.unshift(temp);
  }
  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
