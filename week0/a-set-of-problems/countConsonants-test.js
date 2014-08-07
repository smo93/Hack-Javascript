"use strict";

var countConsonants = require('./countConsonants').countConsonants;

exports.testCountConsonantsWithConsonants = function(test) {
  test.equal(3, countConsonants('abcde'));
  test.done();
};

exports.testCountConsonantsWithNoConsonants = function(test) {
  test.equal(0, countConsonants('aeo'));
  test.done();
};
