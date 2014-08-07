"use strict";

Array.prototype.first = function() {
    if(this.length === 0) {
        throw new Error('The array is empty!');
    } else {
        return this[0];
    }
};

Array.prototype.range = function(from, to) {
    var i, newArray = [];

    for(i = from; i <= to; i++) {
        newArray.push(i);
    }

    return newArray;
};

Array.prototype.sum = function() {
    return this.reduce(function(prev, current) {return prev + current;});
};

Array.prototype.average = function() {
    return this.sum() / this.length;
};
