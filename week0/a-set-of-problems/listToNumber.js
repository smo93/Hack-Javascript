"use strict";

var listToNumber = function(arr) {
  var result = 0;

  while (arr.length > 0) {
    result = result * 10 + arr.shift();
  }

  return result;
};

exports.listToNumber = listToNumber;
