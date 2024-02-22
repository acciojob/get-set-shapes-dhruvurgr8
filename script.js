class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._height * this._width;
    }
}

class Square extends Rectangle {
    constructor(side) {
       
        super(side, side);
        this.side = side; 
    }

    

    getPerimeter() {
        return this.side * 4;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
