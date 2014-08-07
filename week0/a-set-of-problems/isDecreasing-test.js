"use strict";

var isDecreasing = require('./isDecreasing').isDecreasing;

exports.testIsDecreasingTrue = function(test) {
    test.equal(true, isDecreasing([4, 3, 2, 1]));
    test.done();
};

exports.testIsDecreasingFalse = function(test) {
    test.equal(false, isDecreasing([1, 2, 3, 4]));
    test.done();
};
