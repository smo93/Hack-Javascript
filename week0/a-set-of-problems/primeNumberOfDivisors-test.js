"use strict";

var primeNumberOfDivisors = require('./primeNumberOfDivisors').primeNumberOfDivisors;

exports.testPrimeNumberOfDivisorsWithFive = function(test) {
  test.equal(true, primeNumberOfDivisors(5));
  test.done();
};

exports.testPrimeNumberOfDivisorsWithSix = function(test) {
  test.equal(false, primeNumberOfDivisors(6));
  test.done();
};
