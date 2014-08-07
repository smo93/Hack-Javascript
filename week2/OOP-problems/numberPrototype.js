"use strict";

require('./arrayPrototype');

Number.prototype.times = function(action) {
    [].range(1, this).map(action);
};
