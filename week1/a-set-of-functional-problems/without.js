"use strict";

var without = function(exclude, arr) {
    var result;

    result = arr.filter(function(elem) {
        return exclude.indexOf(elem) === -1;
    });

    return result;
};

exports.without = without;
