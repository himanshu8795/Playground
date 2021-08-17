class Human{
    constructor(height,age){
        this.height = height,
        this.age = age
    }  
    output1(){
        console.log("my height is" + this.height)
    }
}

class Girl extends Human{
    constructor(height, name){
        super(height)
        this.name = name
    }
    output2(){
        console.log(this.output1 + ", & my name is : ", + this.name)
    }
}

myDetail = new Girl("5feet", 'shriya')
console.log(myDetail)