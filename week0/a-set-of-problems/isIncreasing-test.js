"use strict";

var isIncreasing = require('./isIncreasing').isIncreasing;

exports.testIsIncreasingTrue = function(test) {
  test.equal(true, isIncreasing([1, 2, 3]));
  test.done();
};

exports.testIsIncreasingFalse = function(test) {
  test.equal(false, isIncreasing([4, 2, 1, 6]));
  test.done();
};
