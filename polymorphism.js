class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius**2
    }

}

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
}


class Triangle{
    constructor(base, height){
        this.base = base;
        this.height = height;
    }
    area(){
        return (this.base * this.height) / 2;
    }
}

const shapes = [new Circle(10), new Rectangle(5,6), new Triangle(4,5) ];

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area())
}