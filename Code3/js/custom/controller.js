window.addEventListener("load",()=>{
document.querySelector("#add").addEventListener("click",addItem);
});

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

function printItem(itemObject){
    var itemTable = document.querySelector("#itemtable");
    var tr = itemTable.insertRow();
   // tr.insertCell(0).innerHTML = itemObject.id;
   // tr.insertCell(1).innerHTML = itemObject.name;
   let index = 0;
   for(let key in itemObject){
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
   
}
const updateCount = ()=>{
    document.querySelector("#total").innerHTML = itemOperations.itemList.length;
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



