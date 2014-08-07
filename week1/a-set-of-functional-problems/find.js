"use strict";

var find = function(predicate, arr) {
    var result = arr.filter(predicate);

    if(result.length === 0) { return undefined; }

    return result[0];
};

exports.find = find;
