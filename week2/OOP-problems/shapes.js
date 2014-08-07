function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error('Cannot call area of Shape. Use subclasses!');
};

function Rectangle(width, height) {
    Shape.call(this, 'rectangle');

    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

function Triangle(base, height) {
    Shape.call(this, 'triangle');

    this.base = base;
    this.height = height;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return (this.base * this.height) / 2;
};

function Circle(radius) {
    Shape.call(this, 'circle');

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
