"use strict";

var isIncreasing = function(seq) {
    for(var i = 1; i < seq.length; i++) {
        if(seq[i] < seq[i - 1]) {
            return false;
        }
    }

    return true;
};

exports.isIncreasing = isIncreasing;
