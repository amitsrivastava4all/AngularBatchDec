var buttonArray ;
window.addEventListener("load",()=>
{
     buttonArray = document.getElementsByTagName("button");
    /*for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",isZeroOrX);
    }*/
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
});
var isXorZeroFlag = false;
function isZeroOrX(){
    var buttonText = this.innerHTML;
    if(!buttonText){
    this.innerHTML = isXorZeroFlag?"X":"0";
    isXorZeroFlag = !isXorZeroFlag;
    document.querySelector("#gameover").innerHTML =isGameOver()?"Game Over":"";
    }
}

function isSameRow(one,two,three){
    if(isRowBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
}

function isRowBlank(one,two,three){
return isButtonBlank(one) && isButtonBlank(two) && isButtonBlank(three);
}
function isButtonBlank(button){
return button.innerHTML.trim().length==0?true:false;
}

function isGameOver(){
    if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])){
        return true;
    }
    return false;
}