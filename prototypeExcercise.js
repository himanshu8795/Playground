function HtmlElement(){
    this.click = function (){
        console.log("clickd");
    }

}

 HtmlElement.prototype.focus = function(){
        console.log("focused");
 }

 function HtmlSelectElement(item = []){
     this.item = item;

     this.addItem = function(item){
         this.item.push(item);
     }  

     this.removeItem = function(item){
        this.item.splice(this.item.indexOf(item),1);
 }
}

HtmlSelectElement.prototype = new HtmlElement();