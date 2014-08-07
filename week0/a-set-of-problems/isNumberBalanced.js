"use strict";

var isNumberBalanced = function(n) {
  if (n < 10) {return true;}

  var i,
    sum1 = 0,
    sum2 = 0;
  n = n.toString();

  for (i = 0; i < n.length / 2; i++) {
    sum1 += parseInt(n[i]);
    sum2 += parseInt(n[n.length - 1 - i]);
  }

  return sum1 === sum2;
};

exports.isNumberBalanced = isNumberBalanced;
