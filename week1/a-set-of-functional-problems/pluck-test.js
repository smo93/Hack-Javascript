"use strict";

var pluck = require('./pluck').pluck;

exports.testPluck = function(test) {
    test.deepEqual([1, 2],
        pluck('num', [ {'num': 1}, {'n': 8}, {'num': 2} ]));
    test.done();
};
