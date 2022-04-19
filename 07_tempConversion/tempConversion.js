const ftoc = function (tempf) {
  let output;
  output = Math.round((tempf - 32) * (5 / 9) * 10) / 10;
  return output;
  //convert farenheit input to celcius
  //round output to one decimal point
  //To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
};

const ctof = function (tempc) {
  let output;
  output = Math.round((tempc * (9 / 5) + 32) * 10) / 10;
  return output;
  //convert celcius input to farenheit
  //round output to one decimal point
  //To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
