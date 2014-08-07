"use strict";

var sumOfDigits = function(n) {
  if(isNaN(n)) {return undefined;}

  var result = 0;

  if(n < 0) {n = -n;}
  while(n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return result;
};

exports.sumOfDigits = sumOfDigits;
