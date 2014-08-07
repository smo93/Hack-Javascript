
"use strict";

var zip = function() {
    var keys = Object.keys(arguments),
        args = [];

    for(var k in arguments) {
        args.push(arguments[k]);
    }

    return args[0].map(function(_, i) {
        return args.map(function(arr) {
            console.log(arr[i]);
            return arr[i];
        });
    });
};

exports.zip = zip;
