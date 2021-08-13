/*some time there are multiple object and we make our inheritance so messy , 
we dont want to make more than one level of inheritance. 
So we can use the objects to define the connection
if there is 3 object canEat , canSwim , canWalk , so if we inherit in man so its ok but when it inherit in fish if 
will cause error co fish cant walk*/


// this is mixin func it help us to work with constructor with ease 
function mixin(target, ...source){
    Object.assign(target, ...source);
}



const canEat = {
    eat : function(){
        this.hunger--;
        console.log("Eating")
    }
}

const canWalk = {
    walk : function(){
        console.log("Walking")
    }
}

const canSwim = {
    swim : function(){
        console.log("swiming")
    }
}


const baby = Object.assign({}, canEat,canWalk)
console.log(baby);

const goldfish = Object.assign({},canSwim)
console.log(goldfish);
 
//we can use constructor function also

function Person(){
}
    
    function mixin(target, ...source){
        Object.assign(target, ...source);
    }

 //if we are not using mixin func then we can write code with respective to constructor and prototype

/*    
    Object.assign(Person.prototype,canWalk,canSwim,canEat)
    const person = new Person();
    console.log(person);

}*/