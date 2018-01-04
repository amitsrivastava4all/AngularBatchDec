window.addEventListener("load",()=>{
    document.querySelector("#output").innerHTML = 0;
    document.querySelector("#price").value = 0;
document.querySelector("#add").addEventListener("click",addItem);
document.querySelector("#deleteBt").addEventListener("click",deleteItem);
document.querySelector("#price").addEventListener("change",updatePrice);
document.querySelector("#save").addEventListener("click",saveItem);
document.querySelector("#load").addEventListener("click",loadItem);
});
const loadItem = ()=>{
    if(localStorage){
       if(localStorage.mydata){
          var tempList = JSON.parse(localStorage.mydata);
          
          tempList.forEach(itemObject=>{
             let item = new Item(itemObject.id, itemObject.name, itemObject.desc, itemObject.price, itemObject.color,itemObject.url,itemObject.date); 
            itemOperations.add(item);
          });  
          printItemTable();
        }
        else{
            alert("No Data Exist in Storage...");
        }
    }
    else{
        alert("Ur Browser is Outdated....");
    } 
}

const saveItem=()=>{
    var json = JSON.stringify(itemOperations.itemList);
    if(localStorage){
        localStorage.mydata = json;
        alert("Data Saved...");
    }
    else{
        alert("Ur Browser is Outdated....");
    }
}

const updatePrice = ()=>{
    document.querySelector("#output").innerHTML = `<b>${document.querySelector("#price").value}</b>`;
}

function deleteItem(){
    itemOperations.deleteItem();
    printItemTable();
    updateCount();
}

function addItem(){
    var id = document.querySelector("#itemid").value;
    var name = document.querySelector("#name").value;
    var desc = document.querySelector("#desc").value;
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    var color = document.querySelector("#color").value;
    var date = document.querySelector("#date").value;
    var itemObject = new Item(id, name,desc,price,color,url,date);
    itemOperations.add(itemObject);
    printItem(itemObject);
    updateCount();

}
function printItemTable(){
    var tbody =document.querySelector("#itemtable");
    tbody.innerHTML = "";
    itemOperations.itemList.forEach(printItem);
}
function printItem(itemObject){
    var itemTable = document.querySelector("#itemtable");
    var tr = itemTable.insertRow();
   // tr.insertCell(0).innerHTML = itemObject.id;
   // tr.insertCell(1).innerHTML = itemObject.name;
   let index = 0;
   for(let key in itemObject){
    if(key=="markForDelete"){
        
        continue;
    }
    if(key=="url"){
        tr.insertCell(index).innerHTML = `<img class='url' src='${itemObject[key]}'/>`;
        index++;
        continue;  
    }
    if(key=='color'){
        tr.insertCell(index).innerHTML =`<div style='border-radius:50%;width: 100px;height:100px;background-color:${itemObject[key]}'></div>`;
        index++;
        continue;
    }   
    tr.insertCell(index).innerHTML = itemObject[key];
       index++;
   }
  var operationTd =  tr.insertCell(index);
  var id = itemObject.id;
  operationTd.appendChild(createIcon(id,"images/delete.png",toggleMarkUnMark));
  operationTd.appendChild(createIcon(id,"images/edit.png",edit));

}
function edit(){
    console.log("edit is called...");
}
function toggleMarkUnMark(event){
    var img = event.srcElement;
    console.log("get the source element ",img);
    var id = img.getAttribute("item-id");
    console.log("Delete is Called....",id);
    //console.log("this is ",this);
    console.log("Parent is ",this.parentNode.parentNode);
    var tr = img.parentNode.parentNode;
    tr.classList.toggle("red");
    itemOperations.toggleMarking(id);
    updateCount();
   
}
const updateCount = ()=>{
    document.querySelector("#total").innerHTML = itemOperations.itemList.length;
    document.querySelector("#markrecord").innerHTML = itemOperations.countMark();
    document.querySelector("#unmark").innerHTML= itemOperations.itemList.length- itemOperations.countMark();
}
function createIcon(id, path,fn){
    var img = document.createElement("img");
    
    img.src = path;
    img.className = "icon";
    img.setAttribute("item-id", id);
    // img.id = id;
    img.addEventListener("click",fn);
    return img;
}



