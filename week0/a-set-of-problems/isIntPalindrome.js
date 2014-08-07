"use strict";

var isIntPalindrome = function(n) {
  var i;
  n = n.toString();
  
  for (i = 0; i < n.length; i++) {
    if (n[i] != n[n.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

exports.isIntPalindrome = isIntPalindrome;
