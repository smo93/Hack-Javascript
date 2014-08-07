"use strict";

var isPrime = require('./isPrime').isPrime;

exports.testIsPrimeWithPrime = function(test) {
  test.equal(true, isPrime(7));
  test.done();
};

exports.testIsPrimeWithComposite = function(test) {
  test.equal(false, isPrime(10));
  test.done();
};
