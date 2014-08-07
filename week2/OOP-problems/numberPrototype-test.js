"use strict";

require('./numberPrototype');

exports.testNumberTimes = function(test) {
    var testVar = 0;
    (3).times(function() {testVar += 1;});
    test.equal(3, testVar);
    test.done();
};
