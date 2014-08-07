"use strict";

var wordHistogram = require('./wordHistogram').wordHistogram;

exports.testWordHistogram = function(test) {
    test.deepEqual({'asd' : 3}, wordHistogram('asd asd asd'));
    test.done();
};
