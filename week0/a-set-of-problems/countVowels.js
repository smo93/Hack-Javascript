"use strict";

var vowels = 'aeiouy';

var countVowels = function(string) {
  var
    count = 0,
    i;

  for (i = 0; i < string.length; i++) {
    if (vowels.search(string[i]) != -1) {
      count++;
    }
  }

  return count;
};

exports.countVowels = countVowels;
