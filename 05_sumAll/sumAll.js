const sumAll = function (num1, num2) {
  let min = 0;
  let max = 0;
  let sum = 0;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    sum = "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    sum = "ERROR";
  } else if (num1 < num2) {
    min = num1;
    max = num2;
  } else if (num1 > num2) {
    min = num2;
    max = num1;
  }
  //take two numbers as input.
  if (sum !== "ERROR") {
    for (let i = min; i <= max; i++) {
      sum = sum + i;
      //console.log(sum);
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
