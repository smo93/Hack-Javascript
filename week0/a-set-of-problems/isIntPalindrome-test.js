"use strict";

var isIntPalindrome = require('./isIntPalindrome').isIntPalindrome;

exports.testIsIntPalindromeWithPalindrome = function(test) {
  test.equal(true, isIntPalindrome(123321));
  test.done();
};

exports.testIsIntPalindromeWithOrdinaryNumber = function(test) {
  test.equal(false, isIntPalindrome(1231));
  test.done();
};
