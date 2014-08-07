"use strict";

function Point(x, y) {
    if(!(this instanceof Point)) {
        return new Point(x, y);
    }

    this.getX = function() {
        return x;
    };

    this.getY = function() {
        return y;
    };

    this.xInc = function() {
        x += 1;
    };

    this.xDec = function() {
        x -= 1;
    };

    this.yInc = function() {
        y += 1;
    };

    this.yDec = function() {
        y -= 1;
    };
}

Point.prototype.equals = function(point) {
    return this.getX() === point.getX() && this.getY() === point.getY();
};

Point.prototype.toString = function() {
    return 'Point @ ' + this.getX() + ', ' + this.getY();
};

exports.Point = Point;
