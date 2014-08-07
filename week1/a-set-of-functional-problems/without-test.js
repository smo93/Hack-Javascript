"use strict";

var without = require('./without').without;

exports.testWithout = function(test) {
    test.deepEqual([1, 2, 3], without([4, 5, 6], [1, 2, 3, 4, 5, 6]));
    test.done();
};
