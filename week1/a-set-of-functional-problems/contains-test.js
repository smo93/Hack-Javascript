"use strict";

var contains = require('./contains').contains;

exports.testContains = function(test) {
    test.equal(true, contains(2, [1, 2, 3]));
    test.equal(false, contains(9, [1, 2, 3]));
    test.done();
};

