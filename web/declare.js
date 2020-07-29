var a = 5; //globally
const t = 5; //cant be changed..

function f(){
    var a = 3; // for function
    if(true){
        let a = 88; // for block
    }
}