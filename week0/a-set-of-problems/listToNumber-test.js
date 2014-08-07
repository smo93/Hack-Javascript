"use strict";

var listToNumber = require('./listToNumber').listToNumber;

exports.testListToNumber = function(test) {
  test.equal(123, listToNumber([1, 2, 3]));
  test.done();
};
