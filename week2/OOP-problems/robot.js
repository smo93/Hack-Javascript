"use strict";

var Point = require('./point').Point;
require('./numberPrototype');

function Robot(startPoint) {
    if(!(this instanceof Robot)) {
        return new Robot(startPoint);
    }

    this.getPosition = function() {
        return startPoint;
    };

    this.moveLeft = function(amount) {
        amount.times(function() {
            startPoint.xDec();
        });
    };

    this.moveRight = function(amount) {
        amount.times(function() {
            startPoint.xInc();
        });
    };

    this.moveUp = function(amount) {
        amount.times(function() {
            startPoint.yInc();
        });
    };

    this.moveDown = function(amount) {
        amount.times(function() {
            startPoint.yDec();
        });
    };
}

exports.Robot = Robot;
