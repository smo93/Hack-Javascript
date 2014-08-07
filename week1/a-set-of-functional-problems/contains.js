"use strict";

var contains = function(elem, arr) {
    if (arr.length === 0) {
        return false;
    }

    if (arr[0] === elem) {
        return true;
    }

    return contains(elem, arr.slice(1));
};

exports.contains = contains;
