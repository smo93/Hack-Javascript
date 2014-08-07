"use strict";

var groupBy = function(groupingFunction, arr) {
    var i = 0,
        result = {},
        key;

    for(i; i < arr.length; i++) {
        key = groupingFunction(arr[i]);
        if(!result.hasOwnProperty(key)) {
            result[key] = [];
        }

        result[key].push(arr[i]);
    }

    return result;
};

exports.groupBy = groupBy;
