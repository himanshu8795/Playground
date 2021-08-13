

function Circle(radius){
    this.radius = radius;
}

const x = new circle(100)




// ---------------------------------------------------------------




function circle(radius){
    let x = radius;
    console.log(x);
    
}

circle(100);    




//-------------------------------------------------------------------



function circle3(radius){
    let x = radius;
    function inner(){
        
    console.log(x);
}
return inner;
}
circle3(101)(); 