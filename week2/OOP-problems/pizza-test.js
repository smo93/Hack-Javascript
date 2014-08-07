"use strict";

var Pizza = require('./pizza').Pizza,
    PizzaOrder = require('./pizza').PizzaOrder;

exports.testPizza = function(test) {
    var testPizza = new Pizza('asd', 10, 10000);
    test.equal('asd', testPizza.name);
    test.equal(10, testPizza.cost);
    test.equal(10000, testPizza.timeToMake);
    test.done();
};

exports.testPizzaOrder = function(test) {
    var testOrder1 = new PizzaOrder(new Pizza('asd', 10, 10000)),
        testOrder2 = new PizzaOrder(new Pizza('123', 20, 20000));

    test.equal(2, testOrder1.getId());
    test.equal(3, testOrder2.getId());

    test.done();
};

var Order = new PizzaOrder(new Pizza('asd', 10, 1)),
    Id = -1;

Order.ready(function(p, o) {
    exports.callbackTest = function(test) {
        test.ok(true);
        test.done();
    };
});
Order.start();
