const palindromes = function (a) {
  let input = a.toLowerCase();
  input = input.replace(/[^a-zA-Z]/g, "");
  if (input === input.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
