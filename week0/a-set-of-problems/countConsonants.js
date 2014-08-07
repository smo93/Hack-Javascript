"use strict";

var consonants = 'bcdfghjklmnpqrstvwxz';

var countConsonants = function(string) {
  var
    count = 0,
    i;

  for (i = 0; i < string.length; i++) {
    if (consonants.search(string[i]) != -1) {
      count++;
    }
  }

  return count;
};

exports.countConsonants = countConsonants;
