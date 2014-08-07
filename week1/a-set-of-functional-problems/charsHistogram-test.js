"use strict";

var charHistogram = require('./charsHistogram').charHistogram;

exports.testCharsHistogram = function(test) {
    test.deepEqual({'a': 2, 'b': 1}, charHistogram('aab'));
    test.done();
};
