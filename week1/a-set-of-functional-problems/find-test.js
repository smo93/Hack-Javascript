"use strict";

var find = require('./find').find;

exports.testFind = function(test) {
    test.equal(3, find(function(n) {return n % 3 === 0;}, [1, 2, 3]));
    test.equal(undefined, find(function(n) {return n % 3 === 0;}, [1, 2]));
    test.done();
};
