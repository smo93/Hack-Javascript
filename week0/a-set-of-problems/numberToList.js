"use strict";

var numberToList = function(n) {
  var result = [];

  while(n > 0) {
    result.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  return result;
};

exports.numberToList = numberToList;
