"use strict";

var sumOfMinAndMax = function(arr) {
  if (arr.length === 0) {return 0;}

  arr.sort(function(a, b) {
    return a - b;
  });

  return arr[0] + arr[arr.length - 1];
};

exports.sumOfMinAndMax = sumOfMinAndMax;
