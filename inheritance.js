function Circle(radius){

//instance members

    this.radius = radius;

    this.move = function (){
        console.log("moving");
    }
}

//prototype members

Circle.prototype.draw = function (){
    console.log("drawing");
}

const x = new Circle(1);

// return instance object 
console.log(Object.keys(x));

//return instance+prototype members

for (let key in x)
console.log(key);