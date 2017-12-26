alert("LOADED>>.");
window.addEventListener("load",bindEvents);
function bindEvents(){
document.getElementById("greetButton").addEventListener("click",sayHello);
}
function sayHello() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var fullName = firstName + " " + lastName;
    document.getElementById("result").innerHTML = fullName;
}