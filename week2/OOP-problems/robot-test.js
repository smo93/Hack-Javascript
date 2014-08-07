"use strict";

var Robot = require('./robot').Robot,
    Point = require('./point').Point;

exports.testRobot = function(test) {
    test.equal('Point @ 0, 0', new Robot(new Point(0, 0)).getPosition().toString());
    test.done();
};

exports.testRobotMove = function(test) {
    var testRobot = new Robot(new Point(0, 0));

    testRobot.moveLeft(5);
    testRobot.moveDown(5);
    test.equal('Point @ -5, -5', testRobot.getPosition().toString());

    testRobot.moveRight(10);
    testRobot.moveUp(10);
    test.equal('Point @ 5, 5', testRobot.getPosition().toString());

    test.done();
};
