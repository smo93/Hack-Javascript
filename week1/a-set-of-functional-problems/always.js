"use strict";

var always = function(n) {
    return function() {return n;};
};

exports.always = always;
