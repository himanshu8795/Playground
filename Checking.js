function Firstdetail(){
    var firstName = "Himanshu";
    console.log(firstName);
        function Seconddetail(secondName){
            console.log(secondName);
        }
        return Seconddetail;
}
Firstdetail()("joshi");
