"use strict";

var isPrime = function(n) {
  var i;

  if (n <= 1) {return false;}

  for (i = 2; i < n; i++) {
    if (n % i === 0) {return false;}
  }

  return true;
};

exports.isPrime = isPrime;
