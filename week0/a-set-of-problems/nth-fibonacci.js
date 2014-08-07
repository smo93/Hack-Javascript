"use strict";

var nthFibonacci = function(n) {
  if(n === 1 || n === 2) {
    return 1;
  }

  if(n < 1) {
    return undefined;
  }

  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

exports.nthFibonacci = nthFibonacci;
