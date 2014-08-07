"use strict";

var countVowels = require('./countVowels').countVowels;

exports.testCountVowelsWithNoVowels = function(test) {
  test.equal(0, countVowels('bcd'));
  test.done();
};

exports.testCountVowelsWithVowels = function(test) {
  test.equal(2, countVowels('abcde'));
  test.done();
};
