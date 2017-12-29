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
}
