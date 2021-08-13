function Shape (color){
    this.color = color
 
    Shape.prototype.duplicate = function(){
        console.log('duplicating');
    }


}

    function Circle(radius,color){
        //super constructor
        Shape.call(this , color);
        this.radius = radius;
    }

Circle.prototype = Object.create(Shape.prototype);

// when we reset the prototyp we should reset the constructor also
Circle.prototype.constructor = Circle;   


        Circle.prototype.draw = function(){
            console.log("drawing")
        }

const s = new Shape();
const c = new Circle(1 , 'red');