"use strict";

var pluck = function(property, arr) {
    return arr.filter(function(elem) { return elem.hasOwnProperty(property); }).
        map(function(elem) { return elem[property]; });
};

exports.pluck = pluck;
