"use strict";

var countBy = function(countingFunction, arr) {
    var i = 0,
        result = {},
        key;

    for(i; i < arr.length; i++) {
        key = countingFunction(arr[i]);

        if(!result.hasOwnProperty(key)) {
            result[key] = 0;
        }

        result[key] += 1;
    }

    return result;
};

exports.countBy = countBy;
