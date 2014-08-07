"use strict";

var sumOfMinAndMax = require('./sumOfMinAndMax').sumOfMinAndMax;

exports.testSumOfMinAndMaxForEmptyArray = function(test) {
  test.equal(0, sumOfMinAndMax([]));
  test.done();
};

exports.testSumOfMinAndMaxForArrayOfSameElements = function(test) {
  test.equal(2, sumOfMinAndMax([1, 1, 1]));
  test.done();
};

exports.testSumOfMinAndMaxForRandomArray = function(test) {
  test.equal(10, sumOfMinAndMax([3, 1, 6, 9]));
  test.done();
};
