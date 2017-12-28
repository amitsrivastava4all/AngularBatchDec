window.addEventListener("load",bindEvents);
function bindEvents(){
    //var salary = parseInt(document.getElementById("salary").value);
    //var salary = parseInt(document.querySelector("#salary").value);
    document.querySelector("#salary").addEventListener("change",compute);
    
}
function compute(){
    var salary = this.value;
    computeAndDisplay("hra",salary);
    computeAndDisplay("da",salary);
    computeAndDisplay("ta",salary);
    computeAndDisplay("pf",salary);
    computeAndDisplay("tax",salary);
    computeAndDisplay("gs",salary);
    computeAndDisplay("ns",salary);

    console.log("Salary is "+salary);
}

function computeAndDisplay(id,salary){
    document.querySelector("#"+id).innerHTML = salaryCalculator[id](salary);
}