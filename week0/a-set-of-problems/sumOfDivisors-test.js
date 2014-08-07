"use strict";

var sumOfDivisors = require('./sumOfDivisors').sumOfDivisors;

exports.testSumOfDivisorsForOne = function(test) {
  test.equal(1, sumOfDivisors(1));
  test.done();
};

exports.testSumOfDivisorsForTen = function(test) {
  test.equal(18, sumOfDivisors(10));
  test.done();
};
