"use strict";

var nthFibonacci = require("./nth-fibonacci").nthFibonacci;

exports.testNthFibonacciForNegative = function(test) {
  test.equal(undefined, nthFibonacci(-1));
  test.done();
};

exports.testNthFibonacciForOne = function(test) {
  test.equal(1, nthFibonacci(1));
  test.done();
};

exports.testNthFibonacciForTwo = function(test) {
  test.equal(1, nthFibonacci(2));
  test.done();
};

exports.testNthFibonacciForFive = function(test) {
  test.equal(5, nthFibonacci(5));
  test.done();
};
