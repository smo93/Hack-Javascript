"use strict";

var sum = require('./sumAndConcat').sum,
    concat = require('./sumAndConcat').concat;

exports.testSum = function(test) {
    test.equal(10, sum(3, 7));
    test.done();
};

exports.testSumWithWrongType = function(test) {
    test.throws(function() {
        sum('a', 1);
    });
    test.done();
};

exports.testConcat = function(test) {
    test.equal('asddsa', concat('asd', 'dsa'));
    test.done();
};

exports.testConcatWithWrongType = function(test) {
    test.throws(function() {
        concat('asd', 1);
    });
    test.done();
};
