"use strict";

function IDGenerator() {
    var lastId = 0;

    this.nextId = function() {
        lastId += 1;
        return lastId;
    };
}

var generator = new IDGenerator();

function Pizza(name, cost, timeToMake) {
    if(!(this instanceof Pizza)) {
        return new Pizza(name, cost, timeToMake);
    }

    this.name = name;
    this.cost = cost;
    this.timeToMake = timeToMake;
}

function PizzaOrder(pizza) {
    if(!(this instanceof PizzaOrder)) {
        return new PizzaOrder(pizza);
    }

    this.pizza = pizza;

    var ID = generator.nextId();

    this.getId = function() {
        return ID;
    };
}

PizzaOrder.prototype.ready = function(callback) {
    this.callback = callback;
};

PizzaOrder.prototype.start = function() {
    setTimeout(this.callback, this.pizza.timeToMake, this.pizza, this);
};

exports.Pizza = Pizza;
exports.PizzaOrder = PizzaOrder;
