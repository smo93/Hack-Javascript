"use strict";

var primeFactorization = require('./primeFactorization').primeFactorization;

exports.testPrimeFactorization = function(test) {
    test.deepEqual([ [2, 1], [5, 1] ], primeFactorization(10));
    test.deepEqual([ [2, 2], [89, 1] ], primeFactorization(356));

    test.done();
};
