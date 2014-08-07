"use strict";

require('./extendingStuff');

exports.testStringCapitalize = function(test) {
    test.equal('ASD', 'asd'.capitalize());
    test.done();
};

exports.testStringDasharize = function(test) {
    test.equal('-asd-123-', '_asd_123_'.dasharize());
    test.done();
};

exports.testStringTimes = function(test) {
    test.equal('asd asd asd', 'asd'.times(3));
    test.done();
};

exports.testStringBlank = function(test) {
    test.equal(true, '   '.blank());
    test.equal(false, 'asdasd'.blank());
    test.done();
};

