
function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}


//shape constructor
function Shape(){

}
//duplicate method on prototype 
Shape.prototype.duplicate = function(){
    console.log("duplicating")
}

function Circle(){

}

extend(Circle,Shape);

Circle.prototype.duplicate = function(){
    
    //this will give duplicate method in the shape object 

    Shape.prototype.duplicate.call(this);

    console.log("duplicate circle")

}

function Square(){
    
    }
    extend(Square,Shape);


    Square.prototype.duplicate = function(){
        console.log("square dupli");
}

//polymorphism

const shapes = [
    new Circle(),
     new Square()
    ];

for (let shape of shapes)
    shape.duplicate();

 