"use strict";

var containsAll = require('./containsAll').containsAll;

exports.testContainsAll = function(test) {
    test.equal(true, containsAll([1, 2, 3], [5, 1, 3, 2, 7]));
    test.equal(false, containsAll([1, 2, 3], [5, 1, 2, 7]));
    test.done();
};
