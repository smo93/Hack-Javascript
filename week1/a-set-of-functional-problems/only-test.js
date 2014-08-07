"use strict";

var only = require('./only').only;

exports.testOnly = function(test) {
    test.equal(false, only('string', [1, 2, 3]));
    test.equal(true, only('number', [1, 2, 3]));

    test.done();
};
