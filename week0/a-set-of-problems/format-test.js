"use strict";

var format = require('./format').format;

exports.testFormat = function(test) {
    test.equal('asd 123 ASD !@#',
        format('{1} 123 ASD {2}', {'1': 'asd', '2': '!@#'}));
    test.done();
};
