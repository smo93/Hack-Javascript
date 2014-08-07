"use strict";

var countSubstrings = require('./countSubstrings').countSubstrings;

exports.testCountSubstringsWithNoSubstrings = function(test) {
  test.equal(0, countSubstrings('asdasd', 'bb'));
  test.done();
};

exports.testCountSubstringsWithSubstrings = function(test) {
  test.equal(2, countSubstrings('babababa', 'baba'));
  test.done();
};
