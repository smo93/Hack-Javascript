"use strict";

var countSubstrings = function(haystack, needle) {
  var
    count = 0,
    pos;

  while (haystack !== '') {
    pos = haystack.search(needle);

    if (pos === -1) {
      return count;
    } else {
      count++;
      haystack = haystack.slice(pos + needle.length);
    }
  }

  return count;
};

exports.countSubstrings = countSubstrings;
