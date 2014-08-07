"use strict";

var only = function(type, arr) {
    return arr.every(function(n) {return typeof n === type;});
};

exports.only = only;
