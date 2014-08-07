"use strict";

var sumOfDigits = require('./sumOfDigits').sumOfDigits;

exports.testSumOfDigitsForFive = function(test) {
  test.equal(5, sumOfDigits(5));
  test.done();
};

exports.testSumOfDigitsForLargeNumber = function(test) {
  test.equal(45, sumOfDigits(123456789));
  test.done();
};

exports.testSumOfDigitsForNegative = function(test) {
  test.equal(45, sumOfDigits(-123456789));
  test.done();
};
