"use strict";

var countBy = require('./countBy').countBy;

var charHistogram = function(str) {
    var chars = str.split('');

    chars.filter(function(c) {
        return ' !?,.'.split('').indexOf(c) !== -1;
    });

    return countBy(function(c) { return c; }, chars);
};

exports.charHistogram = charHistogram;
