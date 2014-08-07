"use strict";

var isNumberBalanced = require('./isNumberBalanced').isNumberBalanced;

exports.testIsNumberBalancedWithBalanced = function(test) {
  test.equal(true, isNumberBalanced(1238033));
  test.done();
};

exports.testIsNumberBalancedWithUnbalanced = function(test) {
  test.equal(false, isNumberBalanced(28471));
  test.done();
};

exports.testIsNumberBalancedWithDigit = function(test) {
  test.equal(true, isNumberBalanced(1));
  test.done();
};
