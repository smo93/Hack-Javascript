"use strict";

var contains = require('./contains').contains;

var containsAll = function(elems, arr) {
    if (elems.length === 0) {
        return true;
    }

    if (contains(elems[0], arr)) {
        return containsAll(elems.slice(1), arr);
    } else {
        return false;
    }
};

exports.containsAll = containsAll;
