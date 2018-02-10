const calcObject = {
    add(x,y){
        return x + y;
    }
}
module.exports.calc = calcObject;

function print(){
    console.log(" I am a Print function");
}
module.exports.pr = print;
const PI = 3.14;
module.exports.PI = PI;