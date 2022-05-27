const ftoc = function(fahTemp) {
  let celConv = 0;
  celConv = ((fahTemp - 32) * (5/9));
  return Math.round(celConv * 10) / 10;

};

const ctof = function(celTemp) {
  let fahConv = 0;
  fahConv = ((celTemp * (9/5)) + 32);
  return Math.round(fahConv * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
