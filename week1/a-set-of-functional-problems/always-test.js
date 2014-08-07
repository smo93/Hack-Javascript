"use strict";

var always = require('./always').always;

exports.testAlways = function(test) {
    test.deepEqual(5, always(5)());
    test.done();
};
