window.addEventListener("load",doAjax);
function doAjax(){
    var serverUrl = "http://localhost:4444/itemdetails";
    fetch(serverUrl).then(done).catch(fail);
}
function done(response){
    response.json().then(printData);
}

function printData(data){
    console.log("Data is ",data);
    var div = document.querySelector("#result");
    for(let i= 0 ; i<data.length; i++){
        var para = document.createElement("p");
        para.innerHTML = data[i].id +" "+data[i].name +" "+data[i].price;
        div.appendChild(para);
    }

}

function fail(error){
    console.log("Error is ",error);

}