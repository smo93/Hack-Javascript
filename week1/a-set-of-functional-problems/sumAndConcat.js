"use strict";

var sum = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Something is wrong with your types!");
    }

    return a + b;
};

var concat = function(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new TypeError("Something is wrong with your types!");
    }

    return a + b;
};


exports.sum = sum;
exports.concat = concat;
