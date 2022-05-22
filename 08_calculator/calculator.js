const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...args]) {
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const multiply = function ([...args]) {
  let total = args[0];
  for (var i = 1; i < args.length; i++) {
    total = total * args[i];
  }
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
