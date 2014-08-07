"use strict";

var groupBy = require('./groupBy').groupBy;

exports.testGroupBy = function(test) {
    test.deepEqual({0 : [2, 4], 1 : [1, 3]}, groupBy(function(n) {return n % 2;},
        [1, 2, 3, 4]));
    test.done();
};
