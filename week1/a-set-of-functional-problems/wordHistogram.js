"use strict";

var countBy = require('./countBy').countBy;

var wordHistogram = function(str) {
    var words = str.split(' ');

    return countBy(function(word) {
        return word;
    }, words);


};

exports.wordHistogram = wordHistogram;
