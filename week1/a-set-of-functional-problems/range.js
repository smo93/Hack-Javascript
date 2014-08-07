"use strict";

var range = function(from, to) {
    if(from > to) {
        return [];
    }

    return [from].concat(range(from + 1, to));
};

exports.range = range;
