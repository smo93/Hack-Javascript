"use strict";

require('./arrayPrototype');

exports.testArrayFirst = function(test) {
    test.equal(1, [1, 2, 3].first());
    test.throws(function() {[].first();});
    test.done();
};

exports.testArrayRange = function(test) {
    test.deepEqual([1, 2, 3], [].range(1, 3));
    test.done();
};

exports.testArraySum = function(test) {
    test.equal(6, [1, 2, 3].sum());
    test.done();
};

exports.testArrayAverage = function(test) {
    test.equal(2, [1, 2, 3].average());
    test.done();
};


