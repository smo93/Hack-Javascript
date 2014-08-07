"use strict";

var isPrime = require('./isPrime').isPrime;

var primeFactorization = function(n) {
    var p = 2,
        count,
        result = [];

    while(n !== 1) {
        if(isPrime(p)) {
            count = 0;

            while(n % p === 0) {
                count += 1;
                n = Math.floor(n / p);
            }

            if(count !== 0) {
                result.push([p, count]);
            }
        }

        p += 1;
    }

    return result;
};

exports.primeFactorization = primeFactorization;
