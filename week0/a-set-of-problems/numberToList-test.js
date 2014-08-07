"use strict";

var numberToList = require('./numberToList').numberToList;

exports.testNumberToListWithDigit = function(test) {
  test.equal("1", numberToList(1).toString());
  test.done();
};

exports.testNumberToListWithnumber = function(test) {
  test.equal("1,2,3", numberToList(123).toString());
  test.done();
};
