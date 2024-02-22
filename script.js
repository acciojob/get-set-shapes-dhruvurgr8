//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	set width(width){
		this.width = width;
	}
	set height(height){
		this.height = height;
	}
	get width(){
		return this.width
	}
	get height(){
		return this.height
	}
	getArea(){
		const res = (this.height*this.width);
		return res;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(height,width);
	}
	getPerimeter(){
		const res = this.side*4;
		return res;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
