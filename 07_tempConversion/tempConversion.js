'use strict';

const ftoc = function(inputValue) {
  let returnValue = (inputValue - 32) * 5 / 9;
  return (parseInt(returnValue, 10) === returnValue) ?  returnValue : parseFloat(returnValue.toFixed(1));
};

const ctof = function(inputValue) {
  let returnValue = (inputValue * 9 / 5) + 32;
  return (parseInt(returnValue, 10) === returnValue) ?  returnValue : parseFloat(returnValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
