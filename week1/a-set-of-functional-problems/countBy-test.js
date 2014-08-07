"use strict";

var countBy = require('./countBy').countBy;

exports.testCountBy = function(test) {
    test.deepEqual({0 : 2, 1 : 1}, countBy(function(n) {return n % 2;},
        [2, 3, 4]));
        test.done();
};
