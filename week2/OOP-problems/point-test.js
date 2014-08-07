"use strict";

var Point = require('./point').Point;

exports.testPoint = function(test) {
    var testPoint = new Point(1, 2);
    test.equal(1, testPoint.getX());
    test.equal(2, testPoint.getY());

    testPoint.xInc();
    testPoint.yInc();

    test.equal(2, testPoint.getX());
    test.equal(3, testPoint.getY());

    testPoint.xDec();
    testPoint.yDec();

    test.equal(1, testPoint.getX());
    test.equal(2, testPoint.getY());

    test.done();
};

exports.testPointEquals = function(test) {
    test.equal(true, new Point(1, 2).equals(new Point(1, 2)));
    test.done();
};

exports.testPointToString = function(test) {
    test.equal('Point @ 1, 2', new Point(1, 2).toString());
    test.done();
};
