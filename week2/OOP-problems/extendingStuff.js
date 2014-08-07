"use strict";

String.prototype.capitalize = function() {
    return this.toUpperCase();
};

String.prototype.dasharize = function() {
    return this.replace(/_/g, '-');
};

String.prototype.times = function(amount) {
    var resStr = [], i;

    for(i = 0; i < amount; i++) {
        resStr.push(this);
    }

    return resStr.join(' ');
};

String.prototype.blank = function() {
    return this.replace(/ /g, '') === '';
};


