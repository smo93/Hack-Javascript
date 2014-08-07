"use strict";

var Pair = require('./pair').Pair;

exports.testPairEqual = function(test) {
    test.equal(true, new Pair(1, 2).equals(new Pair(1, 2)));
    test.done();
};

exports.testPairToString = function(test) {
    test.equal('(1, 2)', new Pair(1, 2).toString());
    test.done();
};

exports.testPairToList = function(test) {
    test.deepEqual([1, 2], new Pair(1, 2).toList());
    test.done();
};

exports.testPairCombine = function(test) {
    test.equal(3, new Pair(1, 2).combine(function(x, y) {return x + y;}));
    test.done();
};
