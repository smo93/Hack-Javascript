"use strict";

var sumOfDivisors = function(n) {
  var
    i,
    result = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {result += i;}
  }

  return result;
};

exports.sumOfDivisors = sumOfDivisors;
