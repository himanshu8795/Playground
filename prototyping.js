function Circle(radius){
    this.radius = radius;
}

 Circle.prototype.draw = function(){
    console.log("drawing")
}

    
const x1 = new Circle(100);
